-- Analytics Engine Schema

create table public.feature_snapshots (
    id uuid primary key default uuid_generate_v4(),
    business_id uuid references public.businesses(business_id) on delete cascade not null,
    as_of timestamp with time zone not null,
    feature_name text not null,
    value numeric not null,
    confidence numeric,
    provenance jsonb default '{}'::jsonb,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique(business_id, as_of, feature_name)
);

create index idx_feature_snapshots_business on public.feature_snapshots(business_id, as_of);

create table public.risk_snapshots (
    id uuid primary key default uuid_generate_v4(),
    business_id uuid references public.businesses(business_id) on delete cascade not null,
    as_of timestamp with time zone not null,
    model_version text not null,
    pd numeric(6, 4) not null,
    risk_band text not null check (risk_band in ('LOW', 'MODERATE', 'HIGH', 'VERY_HIGH')),
    financial_health numeric(5, 2) not null,
    data_confidence numeric(5, 2) not null,
    risk_trend text check (risk_trend in ('IMPROVING', 'STABLE', 'DETERIORATING')),
    top_drivers jsonb not null default '[]'::jsonb,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index idx_risk_snapshots_business on public.risk_snapshots(business_id, as_of);

alter table public.feature_snapshots enable row level security;
alter table public.risk_snapshots enable row level security;

create policy "Users can view feature_snapshots of their businesses" on public.feature_snapshots for select
    using (exists (select 1 from public.business_members bm where bm.business_id = feature_snapshots.business_id and bm.user_id = auth.uid()));
create policy "System can insert feature_snapshots" on public.feature_snapshots for insert with check (auth.uid() is not null);

create policy "Users can view risk_snapshots of their businesses" on public.risk_snapshots for select
    using (exists (select 1 from public.business_members bm where bm.business_id = risk_snapshots.business_id and bm.user_id = auth.uid()));
create policy "System can insert risk_snapshots" on public.risk_snapshots for insert with check (auth.uid() is not null);
