import { createClient } from '@/lib/supabase/server';

export async function getModelEvaluations() {
  const supabase = await createClient();
  const { data: evals } = await supabase.from('model_evaluations').select('*').order('evaluation_date', { ascending: false });

  if (!evals || evals.length === 0) {
    return [
      {
        model_version: 'lr-v1.0',
        family: 'Logistic Regression',
        feature_schema_hash: 'sha256:7a3b91bc',
        dataset_hash: 'sha256:9c1f233a',
        label_definition: 'Default within 90 days',
        train_window: '2020-01-01 to 2023-01-01',
        metrics: {
          auc: 0.76,
          pr_auc: 0.42,
          brier: 0.11,
          precision: 0.38,
          recall: 0.65,
          fpr: 0.15,
          fnr: 0.35,
          psi: 0.04
        },
        evaluation_date: new Date('2026-09-01').toISOString(),
        status: 'CHAMPION'
      },
      {
        model_version: 'xgb-v1.0',
        family: 'Gradient Boosting',
        feature_schema_hash: 'sha256:7a3b91bc',
        dataset_hash: 'sha256:9c1f233a',
        label_definition: 'Default within 90 days',
        train_window: '2020-01-01 to 2023-01-01',
        metrics: {
          auc: 0.81,
          pr_auc: 0.49,
          brier: 0.08,
          precision: 0.45,
          recall: 0.61,
          fpr: 0.12,
          fnr: 0.39,
          psi: 0.06
        },
        evaluation_date: new Date('2026-09-15').toISOString(),
        status: 'EVALUATED'
      }
    ];
  }

  return evals;
}

export async function getFairnessEvaluations(modelVersion: string) {
  const supabase = await createClient();
  const { data: evals } = await supabase.from('fairness_evaluations').select('*').eq('model_version', modelVersion);
  
  if (!evals || evals.length === 0) {
    return [
      {
        group_attribute: 'business_age',
        group_value: '> 5 Years',
        is_reference: true,
        sample_size: 45000,
        metrics: { selection_rate: 0.82, tpr: 0.71, fpr: 0.12, fnr: 0.29, precision: 0.41, calibration_error: 0.02 }
      },
      {
        group_attribute: 'business_age',
        group_value: '< 1 Year',
        is_reference: false,
        sample_size: 12000,
        metrics: { selection_rate: 0.45, tpr: 0.52, fpr: 0.18, fnr: 0.48, precision: 0.28, calibration_error: 0.08 }
      },
      {
        group_attribute: 'geography',
        group_value: 'Tier 1 City',
        is_reference: true,
        sample_size: 85000,
        metrics: { selection_rate: 0.78, tpr: 0.68, fpr: 0.14, fnr: 0.32, precision: 0.39, calibration_error: 0.03 }
      },
      {
        group_attribute: 'geography',
        group_value: 'Rural',
        is_reference: false,
        sample_size: 450, 
        metrics: {}
      }
    ];
  }
  return evals;
}
