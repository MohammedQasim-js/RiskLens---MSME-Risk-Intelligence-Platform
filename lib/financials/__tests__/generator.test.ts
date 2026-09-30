import { describe, it, expect } from 'vitest';
import { generateSyntheticData } from '../generator';

describe('Synthetic Data Generator', () => {
  it('produces deterministic output for the same seed', () => {
    const run1 = generateSyntheticData('42', 'Stable retailer', 30);
    const run2 = generateSyntheticData('42', 'Stable retailer', 30);
    
    expect(run1).toEqual(run2);
  });

  it('produces different output for different seeds', () => {
    const run1 = generateSyntheticData('42', 'Stable retailer', 30);
    const run2 = generateSyntheticData('43', 'Stable retailer', 30);
    
    expect(run1).not.toEqual(run2);
  });

  it('generates expected number of days', () => {
    const run = generateSyntheticData('42', 'Stable retailer', 30);
    expect(run.length).toBeGreaterThan(30); // because there are multiple txns per day
    
    const uniqueDates = new Set(run.map(r => r.date));
    expect(uniqueDates.size).toBe(30);
  });
});
