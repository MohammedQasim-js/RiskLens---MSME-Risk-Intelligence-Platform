import { FeatureSnapshot } from './features';
import { FinancialHealthResult } from './health';

export interface RiskSnapshot {
  business_id: string;
  as_of: string;
  model_version: string;
  pd: number;
  risk_band: 'LOW' | 'MODERATE' | 'HIGH' | 'VERY_HIGH';
  financial_health: number;
  data_confidence: number;
  risk_trend: 'IMPROVING' | 'STABLE' | 'DETERIORATING';
  top_drivers: { name: string; impact: string }[];
}

export interface RiskModel {
  predict(
    businessId: string,
    features: FeatureSnapshot[],
    health: FinancialHealthResult,
    dataConfidence: number,
    asOf: Date
  ): RiskSnapshot;
  getModelVersion(): string;
  getMetadata(): Record<string, unknown>;
}

export class LogisticRegressionModel implements RiskModel {
  getModelVersion(): string {
    return 'lr-v1.0';
  }
  
  getMetadata(): Record<string, unknown> {
    return { family: 'Logistic Regression', features_used: ['buffer_score', 'dscr_score'] };
  }

  predict(
    businessId: string,
    features: FeatureSnapshot[],
    health: FinancialHealthResult,
    dataConfidence: number,
    asOf: Date
  ): RiskSnapshot {
    const pd = Math.max(0.01, Math.min(0.99, 1.0 - (health.score / 100)));
    
    let risk_band: 'LOW' | 'MODERATE' | 'HIGH' | 'VERY_HIGH' = 'MODERATE';
    if (pd < 0.15) risk_band = 'LOW';
    else if (pd < 0.40) risk_band = 'MODERATE';
    else if (pd < 0.70) risk_band = 'HIGH';
    else risk_band = 'VERY_HIGH';

    const getFeature = (name: string) => features.find(f => f.feature_name === name)?.value || 0;
    
    return {
      business_id: businessId,
      as_of: asOf.toISOString(),
      model_version: this.getModelVersion(),
      pd: Math.round(pd * 10000) / 10000,
      risk_band,
      financial_health: health.score,
      data_confidence: dataConfidence,
      risk_trend: 'STABLE',
      top_drivers: [
        { name: 'Debt Service Coverage', impact: getFeature('debt_service_coverage') < 1.2 ? 'NEGATIVE' : 'POSITIVE' },
        { name: 'Cash Buffer', impact: getFeature('cash_buffer_days') < 30 ? 'NEGATIVE' : 'POSITIVE' }
      ]
    };
  }
}

export class GradientBoostingModel implements RiskModel {
  getModelVersion(): string {
    return 'xgb-v1.0';
  }
  
  getMetadata(): Record<string, unknown> {
    return { family: 'Gradient Boosting', features_used: ['all'] };
  }

  predict(
    businessId: string,
    features: FeatureSnapshot[],
    health: FinancialHealthResult,
    dataConfidence: number,
    asOf: Date
  ): RiskSnapshot {
    const basePd = 1.0 - (health.score / 100);
    const pd = Math.max(0.01, Math.min(0.99, basePd * 1.1)); 
    
    let risk_band: 'LOW' | 'MODERATE' | 'HIGH' | 'VERY_HIGH' = 'MODERATE';
    if (pd < 0.10) risk_band = 'LOW';
    else if (pd < 0.35) risk_band = 'MODERATE';
    else if (pd < 0.60) risk_band = 'HIGH';
    else risk_band = 'VERY_HIGH';

    return {
      business_id: businessId,
      as_of: asOf.toISOString(),
      model_version: this.getModelVersion(),
      pd: Math.round(pd * 10000) / 10000,
      risk_band,
      financial_health: health.score,
      data_confidence: dataConfidence,
      risk_trend: 'DETERIORATING',
      top_drivers: []
    };
  }
}
