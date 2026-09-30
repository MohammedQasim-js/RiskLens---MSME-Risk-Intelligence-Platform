import { FeatureSnapshot } from './features';

export interface HealthComponents {
  buffer_score: number;
  dscr_score: number;
  stability_score: number;
  revenue_trend_score: number;
  diversification_score: number;
  plan_attainment_score: number;
}

export interface FinancialHealthResult {
  score: number; // 0-100
  components: HealthComponents;
}

export function calculateFinancialHealth(features: FeatureSnapshot[]): FinancialHealthResult {
  const getFeature = (name: string) => features.find(f => f.feature_name === name)?.value || 0;

  // 1. Buffer Score (normalize 0-90 days to 0-1)
  const bufferDays = getFeature('cash_buffer_days');
  const buffer_score = Math.min(Math.max(bufferDays / 90, 0), 1.0);

  // 2. DSCR Score (normalize 0-2.0 to 0-1)
  const dscr = getFeature('debt_service_coverage');
  const dscr_score = Math.min(Math.max((dscr - 1.0) / 1.0, 0), 1.0); // >2.0 is 1.0, <1.0 is 0

  // 3. Stability (volatility: lower is better, normalize 0-2.0 to 1-0)
  const volatility = getFeature('cashflow_volatility');
  const stability_score = Math.min(Math.max(1.0 - (volatility / 2.0), 0), 1.0);

  // 4. Revenue Trend (normalize -20% to +20% as 0 to 1)
  const trend = getFeature('revenue_trend');
  const revenue_trend_score = Math.min(Math.max((trend + 0.20) / 0.40, 0), 1.0);

  // 5. Diversification (income_diversity 0-1 directly)
  const div = getFeature('income_diversity');
  const diversification_score = Math.min(Math.max(div, 0), 1.0);

  // 6. Plan Attainment (normalize 0.5-1.5 to 0-1)
  const plan = getFeature('plan_attainment');
  const plan_attainment_score = Math.min(Math.max((plan - 0.5) / 1.0, 0), 1.0);

  // Health = 0.30 buffer + 0.20 DSCR + 0.15 stability + 0.15 trend + 0.10 div + 0.10 plan
  const score = (
    0.30 * buffer_score +
    0.20 * dscr_score +
    0.15 * stability_score +
    0.15 * revenue_trend_score +
    0.10 * diversification_score +
    0.10 * plan_attainment_score
  ) * 100;

  return {
    score: Math.round(score * 100) / 100,
    components: {
      buffer_score,
      dscr_score,
      stability_score,
      revenue_trend_score,
      diversification_score,
      plan_attainment_score
    }
  };
}
