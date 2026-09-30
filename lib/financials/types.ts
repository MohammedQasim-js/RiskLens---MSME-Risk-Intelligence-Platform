import { z } from 'zod';

export const TransactionCategoryEnum = z.enum([
  'SALES', 'SUPPLIER', 'PAYROLL', 'RENT', 'UTILITIES', 
  'TAX', 'DEBT_SERVICE', 'PROJECT', 'TRANSFER', 'OTHER'
]);

export type TransactionCategory = z.infer<typeof TransactionCategoryEnum>;

export const DirectionEnum = z.enum(['CREDIT', 'DEBIT']);
export type Direction = z.infer<typeof DirectionEnum>;

export const RawTransactionSchema = z.object({
  date: z.string(),
  amount: z.number(),
  currency: z.string().default('INR'),
  description: z.string(),
  source: z.string(),
  source_record_id: z.string()
});

export type RawTransaction = z.infer<typeof RawTransactionSchema>;

export interface ProcessedTransaction {
  transaction_id?: string;
  business_id: string;
  timestamp: string;
  amount: number;
  currency: string;
  direction: Direction;
  purpose_category: TransactionCategory;
  recurring_flag: boolean;
  source: string;
  source_record_id: string;
  metadata: Record<string, unknown>;
}

export interface DataQualityMetrics {
  coverage: number; // 0-1
  freshness: number; // 0-1
  categorization_quality: number; // 0-1
  source_reliability: number; // 0-1
  duplicate_rate: number; // 0-1
  anomaly_rate: number; // 0-1
  overall_confidence: number; // 0-100
}
