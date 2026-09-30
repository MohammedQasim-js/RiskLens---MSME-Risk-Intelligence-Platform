import { describe, it, expect } from 'vitest';
import { calculateFinancialHealth } from '../health';

describe('Financial Health Index', () => {
  it('calculates health score dynamically', () => {
    const features = [
      { business_id: '1', as_of: '2023', feature_name: 'cash_buffer_days', value: 90, confidence: 1, provenance: {} },
      { business_id: '1', as_of: '2023', feature_name: 'debt_service_coverage', value: 2.0, confidence: 1, provenance: {} },
      { business_id: '1', as_of: '2023', feature_name: 'cashflow_volatility', value: 0, confidence: 1, provenance: {} },
      { business_id: '1', as_of: '2023', feature_name: 'revenue_trend', value: 0.20, confidence: 1, provenance: {} },
      { business_id: '1', as_of: '2023', feature_name: 'income_diversity', value: 1.0, confidence: 1, provenance: {} },
      { business_id: '1', as_of: '2023', feature_name: 'plan_attainment', value: 1.5, confidence: 1, provenance: {} }
    ];

    const health = calculateFinancialHealth(features);
    
    // Everything at max means score = 100
    expect(health.score).toBe(100);
    expect(health.components.buffer_score).toBe(1.0);
    expect(health.components.dscr_score).toBe(1.0);
  });
});
