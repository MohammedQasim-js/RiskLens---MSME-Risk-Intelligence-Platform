import { createClient } from '@/lib/supabase/server';
import { calculateFeatures } from '../analytics/features';
import { calculateFinancialHealth } from '../analytics/health';
import { LogisticRegressionModel } from '../analytics/models';
import { calculateDataQuality } from '../financials/quality';
import { generateForecast } from '../analytics/forecast';

export async function getDashboardData(businessId: string) {
  const supabase = await createClient();
  const { data: transactions } = await supabase.from('transactions').select('*').eq('business_id', businessId);
  const { data: business } = await supabase.from('businesses').select('*').eq('business_id', businessId).single();

  const txns = transactions || [];
  
  const expectedDays = 365;
  const dq = calculateDataQuality(txns, expectedDays, 1.0, txns.length, 0);
  
  const features = calculateFeatures(
    businessId, txns, new Date(), 
    150000, // liquid cash mock
    business?.target_monthly_revenue * 12 || 1000000, 
    business?.project_budget || 100000, 
    50000, // project spend mock
    expectedDays, 
    15000 * 12, // scheduled debt service mock
    120000, 500000, 45 // receivables mock
  );
  
  const health = calculateFinancialHealth(features);
  
  const model = new LogisticRegressionModel();
  const risk = model.predict(businessId, features, health, dq.overall_confidence, new Date());

  const forecast = generateForecast(txns, 150000, 90);

  return {
    business,
    transactions: txns,
    features,
    health,
    risk,
    dataQuality: dq,
    forecast
  };
}
