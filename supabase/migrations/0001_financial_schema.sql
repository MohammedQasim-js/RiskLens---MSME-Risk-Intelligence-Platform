-- Financial Foundation Schema

-- 1. Transactions
create table public.transactions (
    transaction_id uuid primary key default uuid_generate_v4(),
    business_id uuid references public.businesses(business_id) on delete cascade not null,
    timestamp timestamp with time zone not null,
    amount numeric(15, 2) not null,
    currency text not null default 'INR',
    direction text not null check (direction in ('CREDIT', 'DEBIT')),
    account_type text,
    merchant_category text,
    purpose_category text not null check (purpose_category in ('SALES', 'SUPPLIER', 'PAYROLL', 'RENT', 'UTILITIES', 'TAX', 'DEBT_SERVICE', 'PROJECT', 'TRANSFER', 'OTHER')),
    recurring_flag boolean default false,
    counterparty_hash text,
    source text not null,
    source_record_id text not null,
    consent_id uuid references public.consents(consent_id) on delete set null,
    quality_score numeric(5, 2),
    metadata jsonb default '{}'::jsonb,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique(source, source_record_id)
);

-- Indexes for performance
create index idx_transactions_business_time on public.transactions(business_id, timestamp);
create index idx_transactions_source_record on public.transactions(source, source_record_id);

-- 2. Invoices
create table public.invoices (
    invoice_id uuid primary key default uuid_generate_v4(),
    business_id uuid references public.businesses(business_id) on delete cascade not null,
    issue_date date not null,
    due_date date not null,
    paid_date date,
    amount numeric(15, 2) not null,
    counterparty_hash text,
    status text not null check (status in ('OPEN', 'PAID', 'OVERDUE', 'CANCELLED')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index idx_invoices_business_due on public.invoices(business_id, due_date);

-- 3. Obligations
create table public.obligations (
    obligation_id uuid primary key default uuid_generate_v4(),
    business_id uuid references public.businesses(business_id) on delete cascade not null,
    type text not null check (type in ('DEBT', 'TAX', 'LEASE', 'SUPPLIER')),
    due_date date not null,
    amount numeric(15, 2) not null,
    recurring_flag boolean default false,
    metadata jsonb default '{}'::jsonb,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index idx_obligations_business_due on public.obligations(business_id, due_date);

-- 4. Import Errors (Separate table for invalid records)
create table public.import_errors (
    error_id uuid primary key default uuid_generate_v4(),
    business_id uuid references public.businesses(business_id) on delete cascade not null,
    raw_data jsonb not null,
    error_reason text not null,
    source text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security
alter table public.transactions enable row level security;
alter table public.invoices enable row level security;
alter table public.obligations enable row level security;
alter table public.import_errors enable row level security;

-- Policies (Users can access data if they are a member of the business)
create policy "Users can view transactions of their businesses" on public.transactions for select
    using (exists (select 1 from public.business_members bm where bm.business_id = transactions.business_id and bm.user_id = auth.uid()));
create policy "System can insert transactions" on public.transactions for insert with check (auth.uid() is not null);

create policy "Users can view invoices of their businesses" on public.invoices for select
    using (exists (select 1 from public.business_members bm where bm.business_id = invoices.business_id and bm.user_id = auth.uid()));
create policy "System can insert invoices" on public.invoices for insert with check (auth.uid() is not null);

create policy "Users can view obligations of their businesses" on public.obligations for select
    using (exists (select 1 from public.business_members bm where bm.business_id = obligations.business_id and bm.user_id = auth.uid()));
create policy "System can insert obligations" on public.obligations for insert with check (auth.uid() is not null);

create policy "Users can view import errors of their businesses" on public.import_errors for select
    using (exists (select 1 from public.business_members bm where bm.business_id = import_errors.business_id and bm.user_id = auth.uid()));
create policy "System can insert import errors" on public.import_errors for insert with check (auth.uid() is not null);
