import { describe, it, expect } from 'vitest';
import { LogisticRegressionModel, GradientBoostingModel } from '../models';

describe('Risk Models', () => {
  const asOf = new Date('2023-01-01');

  it('Logistic Regression assigns risk bands correctly', () => {
    const model = new LogisticRegressionModel();
    const result = model.predict('b1', [], { score: 90, components: {} as unknown as import('../health').HealthComponents }, 85, asOf);
    
    expect(result.pd).toBeLessThan(0.15); // 1 - 0.9 = 0.1
    expect(result.risk_band).toBe('LOW');
  });

  it('Gradient Boosting assigns risk bands correctly', () => {
    const model = new GradientBoostingModel();
    const result = model.predict('b1', [], { score: 50, components: {} as unknown as import('../health').HealthComponents }, 85, asOf);
    
    expect(result.pd).toBeGreaterThan(0.50); // 1 - 0.5 = 0.5 * 1.1 = 0.55
    expect(result.risk_band).toBe('HIGH');
  });
});
