import { ProcessedTransaction } from '../financials/types';

export interface ForecastSnapshot {
  date: string;
  expected_inflow: number;
  expected_outflow: number;
  scheduled_debt: number;
  projected_cash: number;
  uncertainty_band: { upper: number; lower: number };
}

export function generateForecast(
  transactions: ProcessedTransaction[], 
  currentCash: number,
  days: number = 90
): ForecastSnapshot[] {
  if (transactions.length === 0) return [];

  const credits = transactions.filter(t => t.direction === 'CREDIT');
  const debits = transactions.filter(t => t.direction === 'DEBIT');

  // Estimate daily baseline avoiding massive recurring spikes
  const nonRecurringDebits = debits.filter(t => !['RENT', 'PAYROLL', 'DEBT_SERVICE'].includes(t.purpose_category));
  
  const dailyInflows = (credits.reduce((sum, t) => sum + t.amount, 0) / 365) || 5000;
  const dailyOutflows = (nonRecurringDebits.reduce((sum, t) => sum + t.amount, 0) / 365) || 2000;
  
  const stdDevInflow = dailyInflows * 0.2; // 20% variance mock
  
  const forecast: ForecastSnapshot[] = [];
  let runningCash = currentCash;
  
  for(let i=1; i<=days; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    
    // Check if it's 1st or 15th for recurring obligations (matching generator archetype logic)
    let debt = 0;
    if (d.getDate() === 15) debt = 15000;
    
    let rentPayroll = 0;
    if (d.getDate() === 1) rentPayroll = 70000;
    
    runningCash = runningCash + dailyInflows - dailyOutflows - debt - rentPayroll;
    
    forecast.push({
      date: d.toISOString(),
      expected_inflow: dailyInflows,
      expected_outflow: dailyOutflows + rentPayroll,
      scheduled_debt: debt,
      projected_cash: runningCash,
      uncertainty_band: {
        upper: runningCash + (stdDevInflow * i), // uncertainty grows linearly over time
        lower: runningCash - (stdDevInflow * i)
      }
    });
  }
  return forecast;
}
