import { describe, it, expect } from 'vitest';
import { calculateFeatures } from '../features';
import { ProcessedTransaction } from '../../financials/types';

describe('Analytics Features Engine', () => {
  it('calculates net cash flow correctly', () => {
    const transactions: ProcessedTransaction[] = [
      { business_id: 'b1', timestamp: '2023-01-01', amount: 500, currency: 'INR', direction: 'CREDIT', purpose_category: 'SALES', recurring_flag: false, source: 'sys', source_record_id: '1', metadata: {} },
      { business_id: 'b1', timestamp: '2023-01-02', amount: 200, currency: 'INR', direction: 'DEBIT', purpose_category: 'SUPPLIER', recurring_flag: false, source: 'sys', source_record_id: '2', metadata: {} }
    ];

    const features = calculateFeatures('b1', transactions, new Date('2023-01-03'));
    
    const netCashFlow = features.find(f => f.feature_name === 'net_cash_flow')?.value;
    expect(netCashFlow).toBe(300); // 500 - 200
  });

  it('handles missing data gracefully', () => {
    const features = calculateFeatures('b1', [], new Date('2023-01-03'));
    expect(features.length).toBe(0);
  });
});
