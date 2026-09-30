import { describe, it, expect } from 'vitest';
import { calculateDataQuality } from '../quality';
import { ProcessedTransaction } from '../types';

describe('DataQuality Engine', () => {
  it('calculates coverage and confidence correctly', () => {
    const now = new Date();
    // Two distinct days
    const transactions: ProcessedTransaction[] = [
      {
        business_id: 'b1',
        timestamp: now.toISOString(),
        amount: 100,
        currency: 'INR',
        direction: 'CREDIT',
        purpose_category: 'SALES',
        recurring_flag: false,
        source: 'bank',
        source_record_id: '1',
        metadata: {}
      },
      {
        business_id: 'b1',
        timestamp: new Date(now.getTime() - 86400000).toISOString(), // -1 day
        amount: 200,
        currency: 'INR',
        direction: 'DEBIT',
        purpose_category: 'SUPPLIER',
        recurring_flag: false,
        source: 'bank',
        source_record_id: '2',
        metadata: {}
      }
    ];

    // Expected days = 2, Observed = 2 -> Coverage 1.0
    // Freshness -> Latest is today -> difference is 0 days -> Freshness 1.0
    // Categorization Quality -> 2/2 categorized -> 1.0
    // Source Reliability -> 1.0
    // Duplicate rate -> 0
    // Anomaly rate -> 0

    const metrics = calculateDataQuality(
      transactions,
      2, // expected days
      1.0, // source reliability
      2, // total raw rows
      0 // duplicate candidates
    );

    expect(metrics.coverage).toBe(1.0);
    expect(metrics.freshness).toBe(1.0);
    expect(metrics.categorization_quality).toBe(1.0);
    expect(metrics.duplicate_rate).toBe(0);
    
    // 0.35(1) + 0.25(1) + 0.20(1) + 0.20(1) = 1.0 -> 100
    expect(metrics.overall_confidence).toBe(100);
  });
});
