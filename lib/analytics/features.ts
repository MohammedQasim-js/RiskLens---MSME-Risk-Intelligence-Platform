import { ProcessedTransaction } from '../financials/types';

export interface FeatureSnapshot {
  business_id: string;
  as_of: string;
  feature_name: string;
  value: number;
  confidence: number;
  provenance: Record<string, unknown>;
}

export function calculateFeatures(
  businessId: string,
  transactions: ProcessedTransaction[],
  asOf: Date,
  liquidCash: number = 0,
  targetRevenue: number = 1,
  projectBudget: number = 1,
  projectSpend: number = 0,
  expectedDays: number = 365,
  scheduledDebtService: number = 0,
  overdueReceivables: number = 0,
  totalReceivables: number = 0,
  receivableDays: number = 0
): FeatureSnapshot[] {
  const asOfStr = asOf.toISOString();
  const snapshots: FeatureSnapshot[] = [];
  
  const pushFeature = (name: string, value: number, provenance: Record<string, unknown> = {}) => {
    snapshots.push({
      business_id: businessId,
      as_of: asOfStr,
      feature_name: name,
      value: Number.isFinite(value) ? value : 0,
      confidence: 1.0,
      provenance
    });
  };

  if (!transactions.length) {
    return snapshots;
  }

  const credits = transactions.filter(t => t.direction === 'CREDIT');
  const debits = transactions.filter(t => t.direction === 'DEBIT');

  const totalInflow = credits.reduce((sum, t) => sum + t.amount, 0);
  const totalOutflow = debits.reduce((sum, t) => sum + t.amount, 0);
  
  pushFeature('avg_monthly_inflow', totalInflow / 12);
  pushFeature('avg_monthly_outflow', totalOutflow / 12);
  pushFeature('net_cash_flow', totalInflow - totalOutflow);

  const weeklyNet = new Array(52).fill(0);
  transactions.forEach((t, i) => {
    const week = i % 52; 
    weeklyNet[week] += (t.direction === 'CREDIT' ? t.amount : -t.amount);
  });
  const meanWeeklyNet = weeklyNet.reduce((a, b) => a + b, 0) / 52;
  const variance = weeklyNet.reduce((sum, val) => sum + Math.pow(val - meanWeeklyNet, 2), 0) / 52;
  const stdDev = Math.sqrt(variance);
  const cashflowVolatility = meanWeeklyNet !== 0 ? stdDev / Math.abs(meanWeeklyNet) : 0;
  
  pushFeature('cashflow_volatility', cashflowVolatility);

  const essentialOutflow = debits
    .filter(t => ['RENT', 'PAYROLL', 'UTILITIES', 'DEBT_SERVICE'].includes(t.purpose_category))
    .reduce((sum, t) => sum + t.amount, 0);
  
  const avgDailyEssentialOutflow = expectedDays > 0 ? essentialOutflow / expectedDays : 0;
  const cashBufferDays = avgDailyEssentialOutflow > 0 ? liquidCash / avgDailyEssentialOutflow : 0;
  pushFeature('cash_buffer_days', cashBufferDays);

  const operatingCashFlow = (totalInflow - totalOutflow) + scheduledDebtService; 
  const dscr = scheduledDebtService > 0 ? operatingCashFlow / scheduledDebtService : 999;
  pushFeature('debt_service_coverage', dscr);

  const receivableDelayRate = totalReceivables > 0 ? overdueReceivables / totalReceivables : 0;
  pushFeature('receivable_delay_rate', receivableDelayRate);
  pushFeature('receivable_days', receivableDays);

  const customerInflows = new Map<string, number>();
  credits.forEach(c => {
    const cust = c.source_record_id.split('_')[2] || 'unknown';
    customerInflows.set(cust, (customerInflows.get(cust) || 0) + c.amount);
  });
  
  let hhi = 0;
  let top1 = 0;
  if (totalInflow > 0) {
    for (const val of customerInflows.values()) {
      const share = val / totalInflow;
      hhi += (share * share);
      if (val > top1) top1 = val;
    }
  }
  pushFeature('customer_concentration_hhi', hhi * 10000);
  pushFeature('income_diversity', totalInflow > 0 ? 1 - (top1 / totalInflow) : 0);

  pushFeature('plan_attainment', targetRevenue > 0 ? totalInflow / targetRevenue : 0);
  pushFeature('budget_adherence', projectBudget > 0 ? projectSpend / projectBudget : 0);
  pushFeature('recurring_obligation_ratio', totalInflow > 0 ? essentialOutflow / totalInflow : 0);

  const uniqueDays = new Set(transactions.map(t => t.timestamp.split('T')[0])).size;
  pushFeature('data_coverage', expectedDays > 0 ? uniqueDays / expectedDays : 0);
  
  // Calculate true revenue trend dynamically (comparing first half vs second half)
  const firstHalfInflow = credits.slice(0, Math.floor(credits.length/2)).reduce((sum, t) => sum + t.amount, 0);
  const secondHalfInflow = credits.slice(Math.floor(credits.length/2)).reduce((sum, t) => sum + t.amount, 0);
  const revenueTrend = firstHalfInflow > 0 ? (secondHalfInflow - firstHalfInflow) / firstHalfInflow : 0;
  pushFeature('revenue_trend', revenueTrend);

  return snapshots;
}
