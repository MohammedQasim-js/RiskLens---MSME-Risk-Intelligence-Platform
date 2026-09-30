-- Seed script for RiskLens MRIP Demo

-- 1. Create a demo user in auth.users (Optional, since we usually do this via UI)
-- We will assume the user creates their own account via the UI, but we can seed the core entities.

-- 2. Seed a mock business
INSERT INTO public.businesses (
  business_id,
  legal_name,
  industry,
  state,
  city,
  msme_class,
  age_months,
  business_model,
  target_monthly_revenue,
  project_budget,
  project_start,
  project_end,
  expected_collection_days,
  planned_monthly_expenses
) VALUES (
  '11111111-1111-1111-1111-111111111111',
  'Aarav Packaging',
  'Manufacturing',
  'Maharashtra',
  'Mumbai',
  'small',
  48,
  'B2B Supplier',
  500000.00,
  1200000.00,
  '2026-01-01',
  '2026-12-31',
  45,
  350000.00
) ON CONFLICT DO NOTHING;

-- 3. Seed some recent transactions
INSERT INTO public.transactions (
  transaction_id,
  business_id,
  timestamp,
  amount,
  currency,
  direction,
  purpose_category,
  recurring_flag,
  source,
  source_record_id,
  quality_score
) VALUES
  ('22222222-2222-2222-2222-222222222221', '11111111-1111-1111-1111-111111111111', now() - interval '2 days', 150000, 'INR', 'CREDIT', 'SALES', false, 'BANK_HDFC', 'TXN-001', 98.5),
  ('22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', now() - interval '5 days', 85000, 'INR', 'DEBIT', 'SUPPLIER', true, 'BANK_HDFC', 'TXN-002', 99.0),
  ('22222222-2222-2222-2222-222222222223', '11111111-1111-1111-1111-111111111111', now() - interval '10 days', 200000, 'INR', 'CREDIT', 'SALES', false, 'BANK_HDFC', 'TXN-003', 95.0),
  ('22222222-2222-2222-2222-222222222224', '11111111-1111-1111-1111-111111111111', now() - interval '15 days', 120000, 'INR', 'DEBIT', 'PAYROLL', true, 'BANK_HDFC', 'TXN-004', 100.0)
ON CONFLICT DO NOTHING;

-- 4. Seed feature snapshots
INSERT INTO public.feature_snapshots (
  business_id,
  as_of,
  feature_name,
  value,
  confidence
) VALUES
  ('11111111-1111-1111-1111-111111111111', now(), 'avg_monthly_inflow', 450000.00, 95),
  ('11111111-1111-1111-1111-111111111111', now(), 'avg_monthly_outflow', 380000.00, 95),
  ('11111111-1111-1111-1111-111111111111', now(), 'net_cash_flow', 70000.00, 95),
  ('11111111-1111-1111-1111-111111111111', now(), 'cashflow_volatility', 0.15, 90),
  ('11111111-1111-1111-1111-111111111111', now(), 'receivable_days', 42.5, 88),
  ('11111111-1111-1111-1111-111111111111', now(), 'cash_buffer_days', 65, 92)
ON CONFLICT DO NOTHING;

-- 5. Seed Model Evaluations (Governance)
INSERT INTO public.model_evaluations (
  model_version,
  family,
  feature_schema_hash,
  dataset_hash,
  label_definition,
  train_window,
  metrics,
  evaluation_date,
  status
) VALUES 
(
  'lr-v1.0',
  'Logistic Regression',
  'sha256:8f43b...',
  'sha256:d911a...',
  'default_90d',
  '2023-01-01_to_2024-01-01',
  '{"auc": 0.81, "pr_auc": 0.76, "brier": 0.12, "precision": 0.72, "recall": 0.68, "fpr": 0.15, "fnr": 0.32}',
  now() - interval '10 days',
  'CHAMPION'
),
(
  'xgb-v2.1',
  'Gradient Boosting',
  'sha256:8f43b...',
  'sha256:d911a...',
  'default_90d',
  '2023-01-01_to_2024-01-01',
  '{"auc": 0.86, "pr_auc": 0.82, "brier": 0.09, "precision": 0.79, "recall": 0.75, "fpr": 0.11, "fnr": 0.25}',
  now() - interval '2 days',
  'EVALUATED'
) ON CONFLICT DO NOTHING;

-- 6. Seed Fairness Evaluations (Governance)
INSERT INTO public.fairness_evaluations (
  model_version,
  group_attribute,
  group_value,
  sample_size,
  is_reference,
  metrics
) VALUES
  ('lr-v1.0', 'geography', 'Tier 1 City', 15000, true, '{"selection_rate": 0.82, "tpr": 0.88, "fpr": 0.12}'),
  ('lr-v1.0', 'geography', 'Tier 2 City', 8500, false, '{"selection_rate": 0.79, "tpr": 0.85, "fpr": 0.14}'),
  ('lr-v1.0', 'geography', 'Rural', 450, false, '{"selection_rate": 0.45, "tpr": 0.60, "fpr": 0.25}')
ON CONFLICT DO NOTHING;
