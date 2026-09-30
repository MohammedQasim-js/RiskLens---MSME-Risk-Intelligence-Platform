import { RawTransactionSchema, ProcessedTransaction, RawTransaction, TransactionCategory } from './types';

export class IngestionPipeline {
  private businessId: string;
  public errors: { raw: unknown; reason: string; details?: unknown }[] = [];
  public validRecords: ProcessedTransaction[] = [];
  
  constructor(businessId: string) {
    this.businessId = businessId;
  }

  validate(raw: unknown): RawTransaction | null {
    const result = RawTransactionSchema.safeParse(raw);
    if (!result.success) {
      this.errors.push({ raw, reason: 'SCHEMA_VALIDATION_FAILED', details: result.error.issues });
      return null;
    }
    
    if (isNaN(new Date(result.data.date).getTime())) {
      this.errors.push({ raw, reason: 'INVALID_DATE' });
      return null;
    }
    
    return result.data;
  }

  normalize(valid: RawTransaction): ProcessedTransaction | null {
    const amountVal = valid.amount;
    if (amountVal === 0) {
      this.errors.push({ raw: valid, reason: 'ZERO_AMOUNT' });
      return null;
    }
    
    const direction: 'CREDIT' | 'DEBIT' = amountVal > 0 ? 'CREDIT' : 'DEBIT';
    const absoluteAmount = Math.abs(amountVal);
    
    return {
      business_id: this.businessId,
      timestamp: new Date(valid.date).toISOString(),
      amount: absoluteAmount,
      currency: valid.currency || 'INR',
      direction,
      purpose_category: 'OTHER',
      recurring_flag: false,
      source: valid.source,
      source_record_id: valid.source_record_id,
      metadata: { original_description: valid.description }
    };
  }

  deduplicate(records: ProcessedTransaction[]): ProcessedTransaction[] {
    const seen = new Set<string>();
    const unique: ProcessedTransaction[] = [];
    
    for (const record of records) {
      const key = `${record.source}_${record.source_record_id}`;
      if (seen.has(key)) {
        this.errors.push({ raw: record, reason: 'DUPLICATE_RECORD' });
      } else {
        seen.add(key);
        unique.push(record);
      }
    }
    return unique;
  }

  categorize(record: ProcessedTransaction): ProcessedTransaction {
    const desc = (typeof record.metadata.original_description === 'string' ? record.metadata.original_description : '').toLowerCase();
    let category: TransactionCategory = 'OTHER';

    if (desc.includes('payroll') || desc.includes('salary')) category = 'PAYROLL';
    else if (desc.includes('rent')) category = 'RENT';
    else if (desc.includes('tax')) category = 'TAX';
    else if (desc.includes('utility') || desc.includes('electric') || desc.includes('water')) category = 'UTILITIES';
    else if (desc.includes('loan') || desc.includes('emi') || desc.includes('debt')) category = 'DEBT_SERVICE';
    else if (desc.includes('supplier') || desc.includes('vendor')) category = 'SUPPLIER';
    else if (desc.includes('sale') || desc.includes('revenue') || desc.includes('invoice') || desc.includes('customer')) category = 'SALES';
    else if (desc.includes('project')) category = 'PROJECT';
    else if (desc.includes('transfer')) category = 'TRANSFER';

    record.purpose_category = category;
    
    if (['RENT', 'PAYROLL', 'DEBT_SERVICE', 'UTILITIES'].includes(category)) {
      record.recurring_flag = true;
    }
    
    return record;
  }

  processBatch(rawBatch: unknown[]) {
    const validated = rawBatch.map(r => this.validate(r)).filter(r => r !== null) as RawTransaction[];
    const normalized = validated.map(v => this.normalize(v)).filter(r => r !== null) as ProcessedTransaction[];
    const deduped = this.deduplicate(normalized);
    this.validRecords = deduped.map(r => this.categorize(r));
    return this.validRecords;
  }
}
