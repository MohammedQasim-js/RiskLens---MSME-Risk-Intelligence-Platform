'use server'

import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import { runScenario, StressParams } from '@/lib/analytics/scenarios';

export async function calculateScenarioAction(params: StressParams) {
  const businessId = await getActiveBusinessId();
  if (!businessId) throw new Error("No active business");
  
  const data = await getDashboardData(businessId);
  
  const result = runScenario(
    businessId,
    data.transactions,
    params,
    150000,
    data.business?.target_monthly_revenue * 12 || 1000000,
    data.business?.project_budget || 100000,
    50000,
    365,
    15000 * 12,
    120000, 500000, 45
  );

  return {
    baseline: {
      pd: data.risk.pd,
      risk_band: data.risk.risk_band,
      min_cash: Math.min(...data.forecast.map(f => f.projected_cash)),
      buffer_days: data.features.find(f => f.feature_name === 'cash_buffer_days')?.value || 0,
      dscr: data.features.find(f => f.feature_name === 'debt_service_coverage')?.value || 0
    },
    scenario: {
      pd: result.scenarioRisk.pd,
      risk_band: result.scenarioRisk.risk_band,
      min_cash: result.scenarioMinCash,
      buffer_days: result.scenarioFeatures.find(f => f.feature_name === 'cash_buffer_days')?.value || 0,
      dscr: result.scenarioFeatures.find(f => f.feature_name === 'debt_service_coverage')?.value || 0
    }
  };
}
