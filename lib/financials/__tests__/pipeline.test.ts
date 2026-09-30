import { describe, it, expect } from 'vitest';
import { IngestionPipeline } from '../pipeline';

describe('IngestionPipeline', () => {
  const businessId = 'test-bus-id';

  it('normalizes credit and debit correctly based on amount', () => {
    const pipeline = new IngestionPipeline(businessId);
    const raw = [
      { date: '2023-01-01', amount: 500, description: 'Sale', source: 'bank', source_record_id: '1' },
      { date: '2023-01-02', amount: -200, description: 'Supplier', source: 'bank', source_record_id: '2' }
    ];
    
    const processed = pipeline.processBatch(raw);
    
    expect(processed).toHaveLength(2);
    expect(processed[0].direction).toBe('CREDIT');
    expect(processed[0].amount).toBe(500); // positive
    
    expect(processed[1].direction).toBe('DEBIT');
    expect(processed[1].amount).toBe(200); // normalized to positive
  });

  it('removes duplicate transactions based on source and source_record_id', () => {
    const pipeline = new IngestionPipeline(businessId);
    const raw = [
      { date: '2023-01-01', amount: 500, description: 'Sale', source: 'bank', source_record_id: '1' },
      { date: '2023-01-01', amount: 500, description: 'Sale Duplicate', source: 'bank', source_record_id: '1' }
    ];
    
    const processed = pipeline.processBatch(raw);
    
    expect(processed).toHaveLength(1);
    expect(pipeline.errors).toHaveLength(1);
    expect(pipeline.errors[0].reason).toBe('DUPLICATE_RECORD');
  });

  it('rejects malformed rows (missing required fields)', () => {
    const pipeline = new IngestionPipeline(businessId);
    const raw = [
      { amount: 500, description: 'Missing date and source', source_record_id: '1' }
    ];
    
    const processed = pipeline.processBatch(raw);
    
    expect(processed).toHaveLength(0);
    expect(pipeline.errors).toHaveLength(1);
    expect(pipeline.errors[0].reason).toBe('SCHEMA_VALIDATION_FAILED');
  });

  it('rejects rows with invalid/missing dates', () => {
    const pipeline = new IngestionPipeline(businessId);
    const raw = [
      { date: 'not-a-date', amount: 500, description: 'Invalid date', source: 'bank', source_record_id: '1' }
    ];
    
    const processed = pipeline.processBatch(raw);
    
    expect(processed).toHaveLength(0);
    expect(pipeline.errors).toHaveLength(1);
    expect(pipeline.errors[0].reason).toBe('INVALID_DATE');
  });

  it('categorizes known descriptions correctly', () => {
    const pipeline = new IngestionPipeline(businessId);
    const raw = [
      { date: '2023-01-01', amount: 500, description: 'Invoice 123 from Customer', source: 'bank', source_record_id: '1' },
      { date: '2023-01-02', amount: -200, description: 'Vendor payment', source: 'bank', source_record_id: '2' },
      { date: '2023-01-03', amount: -5000, description: 'Payroll Jan', source: 'bank', source_record_id: '3' }
    ];
    
    const processed = pipeline.processBatch(raw);
    
    expect(processed.find(p => p.source_record_id === '1')?.purpose_category).toBe('SALES');
    expect(processed.find(p => p.source_record_id === '2')?.purpose_category).toBe('SUPPLIER');
    expect(processed.find(p => p.source_record_id === '3')?.purpose_category).toBe('PAYROLL');
  });
});
