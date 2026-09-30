-- Core Schema for RiskLens MRIP

create extension if not exists "uuid-ossp";

-- Drop previous tables if they exist to apply this schema cleanly
drop table if exists public.audit_events cascade;
drop table if exists public.consents cascade;
drop table if exists public.business_members cascade;
drop table if exists public.businesses cascade;
drop table if exists public.organization_users cascade;
drop table if exists public.organizations cascade;

-- Table: Businesses (The MSMEs)
create table public.businesses (
    business_id uuid primary key default uuid_generate_v4(),
    legal_name text not null,
    industry text not null,
    state text not null,
    city text not null,
    msme_class text not null,
    age_months integer not null,
    business_model text not null,
    target_monthly_revenue numeric(15, 2) not null,
    project_budget numeric(15, 2) not null,
    project_start date not null,
    project_end date not null,
    expected_collection_days integer not null,
    planned_monthly_expenses numeric(15, 2) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: Business Members (Access control)
create table public.business_members (
    id uuid primary key default uuid_generate_v4(),
    business_id uuid references public.businesses(business_id) on delete cascade not null,
    user_id uuid references auth.users(id) on delete cascade not null,
    role text check (role in ('owner', 'analyst', 'governance', 'administrator')) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique(business_id, user_id)
);

-- Table: Consents
create table public.consents (
    consent_id uuid primary key default uuid_generate_v4(),
    business_id uuid references public.businesses(business_id) on delete cascade not null,
    source text not null,
    purpose text not null,
    granted_at timestamp with time zone not null,
    expires_at timestamp with time zone,
    status text not null check (status in ('active', 'revoked', 'expired')),
    metadata jsonb,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: Audit Events (Append-only)
create table public.audit_events (
    event_id uuid primary key default uuid_generate_v4(),
    actor_id uuid references auth.users(id) on delete set null,
    action text not null,
    entity_type text not null,
    entity_id uuid not null,
    request_id text,
    correlation_id text,
    model_version text,
    timestamp timestamp with time zone default timezone('utc'::text, now()) not null,
    metadata jsonb
);

-- Row Level Security (RLS)

alter table public.businesses enable row level security;
alter table public.business_members enable row level security;
alter table public.consents enable row level security;
alter table public.audit_events enable row level security;

-- Businesses Policies
create policy "Users can view businesses they are members of"
    on public.businesses for select
    using (
        exists (
            select 1 from public.business_members bm
            where bm.business_id = businesses.business_id
            and bm.user_id = auth.uid()
        )
    );

create policy "Users can insert businesses"
    on public.businesses for insert
    with check (auth.uid() is not null);

create policy "Owners can update businesses"
    on public.businesses for update
    using (
        exists (
            select 1 from public.business_members bm
            where bm.business_id = businesses.business_id
            and bm.user_id = auth.uid()
            and bm.role = 'owner'
        )
    );

-- Business Members Policies
create policy "Users can view members of their businesses"
    on public.business_members for select
    using (
        exists (
            select 1 from public.business_members bm
            where bm.business_id = business_members.business_id
            and bm.user_id = auth.uid()
        )
    );

create policy "Users can insert initial ownership"
    on public.business_members for insert
    with check (auth.uid() = user_id and role = 'owner');

-- Consents Policies
create policy "Users can view consents for their businesses"
    on public.consents for select
    using (
        exists (
            select 1 from public.business_members bm
            where bm.business_id = consents.business_id
            and bm.user_id = auth.uid()
        )
    );

create policy "Owners can manage consents"
    on public.consents for all
    using (
        exists (
            select 1 from public.business_members bm
            where bm.business_id = consents.business_id
            and bm.user_id = auth.uid()
            and bm.role = 'owner'
        )
    );

-- Audit Events Policies (Append Only)
create policy "Users can view audit events for their businesses"
    on public.audit_events for select
    using (
        entity_type = 'business' and exists (
            select 1 from public.business_members bm
            where bm.business_id = audit_events.entity_id
            and bm.user_id = auth.uid()
        )
    );

create policy "System can insert audit events"
    on public.audit_events for insert
    with check (auth.uid() is not null);
