import { ProcessedTransaction, DataQualityMetrics } from './types';
import { differenceInDays, max } from 'date-fns';

export function calculateDataQuality(
  transactions: ProcessedTransaction[], 
  expectedDays: number,
  configuredSourceReliability: number = 1.0,
  totalRawRows: number,
  duplicateCandidates: number
): DataQualityMetrics {
  
  if (!transactions || transactions.length === 0) {
    return {
      coverage: 0,
      freshness: 0,
      categorization_quality: 0,
      source_reliability: configuredSourceReliability,
      duplicate_rate: 0,
      anomaly_rate: 0,
      overall_confidence: 0
    };
  }

  // 1. Coverage: observed days / expected days
  const uniqueDays = new Set(transactions.map(t => t.timestamp.split('T')[0])).size;
  const coverage = Math.min(uniqueDays / expectedDays, 1.0);

  // 2. Freshness: time since latest valid transaction
  const latestDate = max(transactions.map(t => new Date(t.timestamp)));
  const daysSinceLatest = differenceInDays(new Date(), latestDate);
  // Assume optimal freshness is within 3 days, degrades to 0 at 30 days
  let freshness = 1.0 - (daysSinceLatest / 30);
  if (freshness < 0) freshness = 0;
  if (freshness > 1) freshness = 1.0;

  // 3. Categorization Quality: categorized / valid
  const categorized = transactions.filter(t => t.purpose_category !== 'OTHER').length;
  const categorization_quality = categorized / transactions.length;

  // 4. Duplicate Rate: duplicate candidates / raw rows
  const duplicate_rate = totalRawRows > 0 ? duplicateCandidates / totalRawRows : 0;

  // 5. Anomaly Rate (mock logic for demo: transactions > 10x median are anomalous)
  const amounts = transactions.map(t => t.amount).sort((a, b) => a - b);
  const median = amounts[Math.floor(amounts.length / 2)] || 1;
  const anomalies = transactions.filter(t => t.amount > median * 10).length;
  const anomaly_rate = anomalies / transactions.length;

  // 6. Overall Confidence Calculation
  /*
    DataConfidence = 0.35 * Coverage + 0.25 * Freshness + 0.20 * CategorizationQuality + 0.20 * SourceReliability
  */
  const overall_confidence = (
    (0.35 * coverage) +
    (0.25 * freshness) +
    (0.20 * categorization_quality) +
    (0.20 * configuredSourceReliability)
  ) * 100;

  return {
    coverage,
    freshness,
    categorization_quality,
    source_reliability: configuredSourceReliability,
    duplicate_rate,
    anomaly_rate,
    overall_confidence: Math.round(overall_confidence * 100) / 100 // round to 2 decimals
  };
}
