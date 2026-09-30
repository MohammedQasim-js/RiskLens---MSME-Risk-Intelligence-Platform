import { calculateFeatures } from './features';
import { calculateFinancialHealth } from './health';
import { generateForecast } from './forecast';
import { LogisticRegressionModel } from './models';
import { ProcessedTransaction } from '../financials/types';

export interface StressParams {
  revenueShock: number; // e.g. -0.20
  receivableDelay: number; // e.g. 15
  costInflation: number; // e.g. 0.10
  projectOverrun: number; // e.g. 0.0
  customerLoss: number; // e.g. 0.0
}

export function runScenario(
  businessId: string,
  baseTransactions: ProcessedTransaction[],
  params: StressParams,
  liquidCash: number,
  targetRevenue: number,
  projectBudget: number,
  projectSpend: number,
  expectedDays: number,
  scheduledDebtService: number,
  overdueReceivables: number,
  totalReceivables: number,
  receivableDays: number
) {
  // 1. Clone scenario state & apply shocks
  const scenarioTxns = baseTransactions.map(t => {
    let newAmount = t.amount;
    
    if (t.direction === 'CREDIT' && t.purpose_category === 'SALES') {
      newAmount = t.amount * (1 + params.revenueShock);
      newAmount = newAmount * (1 - params.customerLoss);
    }
    
    if (t.direction === 'DEBIT' && !['DEBT_SERVICE', 'TAX'].includes(t.purpose_category)) {
      newAmount = t.amount * (1 + params.costInflation);
    }

    return { ...t, amount: newAmount };
  });

  const scenarioProjectSpend = projectSpend * (1 + params.projectOverrun);
  const scenarioReceivableDays = receivableDays + params.receivableDelay;

  // 2. Recompute features
  const scenarioFeatures = calculateFeatures(
    businessId, scenarioTxns, new Date(), liquidCash, targetRevenue, projectBudget, scenarioProjectSpend,
    expectedDays, scheduledDebtService, overdueReceivables, totalReceivables, scenarioReceivableDays
  );

  // 3. Recompute health & risk
  const scenarioHealth = calculateFinancialHealth(scenarioFeatures);
  const model = new LogisticRegressionModel();
  const scenarioRisk = model.predict(businessId, scenarioFeatures, scenarioHealth, 100, new Date());

  // 4. Recompute forecast
  const scenarioForecast = generateForecast(scenarioTxns, liquidCash, 90);
  const scenarioMinCash = Math.min(...scenarioForecast.map(f => f.projected_cash));

  return {
    scenarioFeatures,
    scenarioHealth,
    scenarioRisk,
    scenarioForecast,
    scenarioMinCash
  };
}
