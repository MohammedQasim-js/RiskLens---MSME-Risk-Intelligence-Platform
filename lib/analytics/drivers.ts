import { FeatureSnapshot } from './features';

export interface DriverEvidence {
  metric: string;
  value: string;
}

export interface RiskDriver {
  feature: string;
  value: number;
  direction: 'POSITIVE' | 'NEGATIVE';
  magnitude: 'HIGH' | 'MEDIUM' | 'LOW';
  reason_code: string;
  evidence: DriverEvidence[];
}

export function extractDrivers(features: FeatureSnapshot[], _targetRevenue: number): RiskDriver[] {
  const drivers: RiskDriver[] = [];
  
  const getFeature = (name: string) => features.find(f => f.feature_name === name)?.value || 0;

  const receivable_days = getFeature('receivable_days');
  if (receivable_days > 45) {
    drivers.push({
      feature: 'receivable_days',
      value: receivable_days,
      direction: 'NEGATIVE',
      magnitude: receivable_days > 60 ? 'HIGH' : 'MEDIUM',
      reason_code: 'Collections are taking longer than expected.',
      evidence: [
        { metric: 'Weighted collection days', value: `${receivable_days} days` },
        { metric: 'Expected', value: '30 days' }
      ]
    });
  }

  const cash_buffer = getFeature('cash_buffer_days');
  if (cash_buffer < 30) {
    drivers.push({
      feature: 'cash_buffer_days',
      value: cash_buffer,
      direction: 'NEGATIVE',
      magnitude: cash_buffer < 15 ? 'HIGH' : 'MEDIUM',
      reason_code: 'Cash buffer is below the configured resilience threshold.',
      evidence: [
        { metric: 'Current Buffer', value: `${cash_buffer.toFixed(1)} days` },
        { metric: 'Threshold', value: '30 days' }
      ]
    });
  }

  const hhi = getFeature('customer_concentration_hhi');
  if (hhi > 2500) {
    drivers.push({
      feature: 'customer_concentration_hhi',
      value: hhi,
      direction: 'NEGATIVE',
      magnitude: 'HIGH',
      reason_code: 'A large share of inflows depends on a small number of customers.',
      evidence: [
        { metric: 'HHI Score', value: Math.round(hhi).toString() },
        { metric: 'Concentration Risk', value: 'High' }
      ]
    });
  }

  const dscr = getFeature('debt_service_coverage');
  if (dscr < 1.25) {
    drivers.push({
      feature: 'debt_service_coverage',
      value: dscr,
      direction: 'NEGATIVE',
      magnitude: dscr < 1.0 ? 'HIGH' : 'MEDIUM',
      reason_code: 'Scheduled debt service is consuming a high share of operating cash.',
      evidence: [
        { metric: 'DSCR Ratio', value: dscr.toFixed(2) },
        { metric: 'Minimum Recommended', value: '1.25' }
      ]
    });
  }
  
  const planAttainment = getFeature('plan_attainment');
  if (planAttainment < 0.9) {
    drivers.push({
      feature: 'plan_attainment',
      value: planAttainment,
      direction: 'NEGATIVE',
      magnitude: planAttainment < 0.7 ? 'HIGH' : 'MEDIUM',
      reason_code: 'Observed revenue is below the stated target.',
      evidence: [
        { metric: 'Attainment', value: `${(planAttainment * 100).toFixed(1)}%` },
        { metric: 'Target Deficit', value: `-${((1 - planAttainment) * 100).toFixed(1)}%` }
      ]
    });
  }

  return drivers;
}
