import { describe, it, expect } from 'vitest';
import { runScenario } from '../scenarios';
import { ProcessedTransaction } from '../../financials/types';

describe('Stress Lab Scenario Engine', () => {
  const baseTransactions: ProcessedTransaction[] = [
    { business_id: 'b1', timestamp: '2023-01-01', amount: 500, currency: 'INR', direction: 'CREDIT', purpose_category: 'SALES', recurring_flag: false, source: 'sys', source_record_id: '1', metadata: {} },
    { business_id: 'b1', timestamp: '2023-01-02', amount: 200, currency: 'INR', direction: 'DEBIT', purpose_category: 'SUPPLIER', recurring_flag: false, source: 'sys', source_record_id: '2', metadata: {} }
  ];

  it('proves the baseline is completely immutable', () => {
    const originalClone = JSON.parse(JSON.stringify(baseTransactions));
    
    runScenario(
      'b1', baseTransactions,
      { revenueShock: -0.5, receivableDelay: 0, costInflation: 0.5, projectOverrun: 0, customerLoss: 0 },
      100000, 1000, 1000, 1000, 365, 0, 0, 0, 0
    );

    expect(baseTransactions).toEqual(originalClone);
  });

  it('ensures increasing cost inflation decreases minimum cash (or does not increase it)', () => {
    const baseline = runScenario(
      'b1', baseTransactions,
      { revenueShock: 0, receivableDelay: 0, costInflation: 0, projectOverrun: 0, customerLoss: 0 },
      100000, 1000, 1000, 1000, 365, 0, 0, 0, 0
    );

    const shocked = runScenario(
      'b1', baseTransactions,
      { revenueShock: 0, receivableDelay: 0, costInflation: 0.50, projectOverrun: 0, customerLoss: 0 },
      100000, 1000, 1000, 1000, 365, 0, 0, 0, 0
    );

    expect(shocked.scenarioMinCash).toBeLessThanOrEqual(baseline.scenarioMinCash);
  });

  it('ensures increasing receivable delay strictly worsens collection metrics', () => {
    const baseline = runScenario(
      'b1', baseTransactions,
      { revenueShock: 0, receivableDelay: 0, costInflation: 0, projectOverrun: 0, customerLoss: 0 },
      100000, 1000, 1000, 1000, 365, 0, 0, 0, 45
    );

    const shocked = runScenario(
      'b1', baseTransactions,
      { revenueShock: 0, receivableDelay: 30, costInflation: 0, projectOverrun: 0, customerLoss: 0 },
      100000, 1000, 1000, 1000, 365, 0, 0, 0, 45
    );

    const baseDays = baseline.scenarioFeatures.find(f => f.feature_name === 'receivable_days')?.value || 0;
    const shockedDays = shocked.scenarioFeatures.find(f => f.feature_name === 'receivable_days')?.value || 0;

    expect(shockedDays).toBeGreaterThan(baseDays);
  });

  it('guarantees identical inputs yield perfectly reproducible scenario results', () => {
    const params = { revenueShock: -0.2, receivableDelay: 15, costInflation: 0.1, projectOverrun: 0, customerLoss: 0 };
    
    const run1 = runScenario('b1', baseTransactions, params, 100000, 1000, 1000, 1000, 365, 0, 0, 0, 45);
    const run2 = runScenario('b1', baseTransactions, params, 100000, 1000, 1000, 1000, 365, 0, 0, 0, 45);

    expect(run1).toEqual(run2);
  });
});
