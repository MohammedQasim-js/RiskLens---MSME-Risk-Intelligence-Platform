-- Model Governance Schema

create table public.model_evaluations (
    id uuid primary key default uuid_generate_v4(),
    model_version text not null unique,
    family text not null,
    feature_schema_hash text not null,
    dataset_hash text not null,
    label_definition text not null,
    train_window text not null,
    metrics jsonb not null default '{}'::jsonb,
    evaluation_date timestamp with time zone not null,
    status text not null check (status in ('DRAFT', 'EVALUATED', 'APPROVED', 'CHAMPION', 'REJECTED', 'RETIRED')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.fairness_evaluations (
    id uuid primary key default uuid_generate_v4(),
    model_version text references public.model_evaluations(model_version) on delete cascade not null,
    group_attribute text not null,
    group_value text not null,
    metrics jsonb not null default '{}'::jsonb,
    sample_size integer not null,
    is_reference boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique(model_version, group_attribute, group_value)
);

alter table public.model_evaluations enable row level security;
alter table public.fairness_evaluations enable row level security;

create policy "Authenticated users can view model_evaluations" on public.model_evaluations for select using (auth.uid() is not null);
create policy "System can insert model_evaluations" on public.model_evaluations for insert with check (auth.uid() is not null);
create policy "System can update model_evaluations" on public.model_evaluations for update using (auth.uid() is not null);

create policy "Authenticated users can view fairness_evaluations" on public.fairness_evaluations for select using (auth.uid() is not null);
create policy "System can insert fairness_evaluations" on public.fairness_evaluations for insert with check (auth.uid() is not null);
