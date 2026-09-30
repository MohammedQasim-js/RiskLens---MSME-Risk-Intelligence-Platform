import { CashFlowTrendChart } from "./CashFlowTrendChart";

import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import Link from 'next/link';

export default async function CashFlowPage() {
  const businessId = await getActiveBusinessId();
  if (!businessId) {
    return (
      <div className="p-8 text-white flex flex-col items-center justify-center min-h-[50vh]">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">business_center</span>
        <h2 className="text-2xl font-semibold mb-2">No active business found</h2>
        <p className="text-on-surface-variant mb-6">Please complete the onboarding process to view your risk cockpit.</p>
        <Link href="/onboarding" className="px-6 py-2.5 rounded-xl bg-primary text-black font-semibold hover:bg-primary/90 transition-all">
          Go to Onboarding
        </Link>
      </div>
    );
  }

  const data = await getDashboardData(businessId);

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
      {/*  Header Section with Quick Stats Ribbon  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">Liquidity Diagnostics</span>
<span className="w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-caps text-label-caps text-on-surface-variant font-medium">Aarav Packaging · Mumbai Hub</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">Cash Flow Intelligence</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          See how money is moving through your business — not just how much you have.
        </p>
</div>
{/*  Quick stats pill strip  */}
<div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface-container-lowest/80 rounded-xl shadow-md">
<div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface-container-low/90">
<span className="w-2 h-2 rounded-full bg-semantic-success shadow-[0_0_8px_#10B981]"></span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Data coverage:</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-success">96%</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface-container-low/90">
<span className="material-symbols-outlined text-[15px] text-tertiary">history</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Tx:</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface">Today, 14:15 IST</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface-container-low/90">
<span className="material-symbols-outlined text-[15px] text-secondary">account_balance</span>
<span className="font-body-sm text-body-sm text-on-surface">3 Accounts</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-tertiary-container/20 text-tertiary font-label-caps text-label-caps">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
          Real-time Sync
        </div>
</div>
</div>
{/*  TOP KPIS ROW: 6 Metric Cards  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
{/*  KPI 1  */}
<div className="p-4 rounded-xl bg-surface-container-low/70 shadow-md flex flex-col justify-between hover:bg-surface-container transition-all group">
<div className="flex items-center justify-between text-outline text-[12px]">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">Avg Monthly Inflow</span>
<span className="material-symbols-outlined text-[16px] text-semantic-success group-hover:scale-110 transition-transform">south_west</span>
</div>
<div className="my-2 flex flex-col">
<span className="font-label-metric-lg text-label-metric-lg text-on-surface font-semibold tracking-tight">₹13.45L</span>
<span className="font-body-sm text-body-sm text-outline">Operating run-rate</span>
</div>
<div className="flex items-center gap-1.5 text-semantic-success font-label-caps text-label-caps">
<span className="px-1.5 py-0.5 rounded bg-semantic-success/15 font-label-metric-md text-label-metric-md text-[11px]">+8.2%</span>
<span className="text-on-surface-variant text-[11px]">vs last Qtr</span>
</div>
</div>
{/*  KPI 2  */}
<div className="p-4 rounded-xl bg-surface-container-low/70 shadow-md flex flex-col justify-between hover:bg-surface-container transition-all group">
<div className="flex items-center justify-between text-outline text-[12px]">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">Avg Monthly Outflow</span>
<span className="material-symbols-outlined text-[16px] text-tertiary group-hover:scale-110 transition-transform">north_east</span>
</div>
<div className="my-2 flex flex-col">
<span className="font-label-metric-lg text-label-metric-lg text-on-surface font-semibold tracking-tight">₹10.92L</span>
<span className="font-body-sm text-body-sm text-outline">Direct &amp; SG&amp;A disbursements</span>
</div>
<div className="flex items-center gap-1.5 text-secondary font-label-caps text-label-caps">
<span className="px-1.5 py-0.5 rounded bg-secondary-container/30 font-label-metric-md text-label-metric-md text-[11px]">+3.1%</span>
<span className="text-on-surface-variant text-[11px]">vs last Qtr</span>
</div>
</div>
{/*  KPI 3  */}
<div className="p-4 rounded-xl bg-surface-container-low/70 shadow-md flex flex-col justify-between hover:bg-surface-container transition-all group relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-semantic-success/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between text-outline text-[12px]">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-semantic-success">Net Cash Flow</span>
<span className="material-symbols-outlined text-[16px] text-semantic-success">trending_up</span>
</div>
<div className="my-2 flex flex-col">
<span className="font-label-metric-lg text-label-metric-lg text-semantic-success font-semibold tracking-tight">+₹2.53L</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Retained surplus buffer</span>
</div>
<div className="flex items-center gap-1 text-semantic-success font-body-sm text-body-sm text-[11px]">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
          Profitable operating run-rate
        </div>
</div>
{/*  KPI 4  */}
<div className="p-4 rounded-xl bg-surface-container-low/70 shadow-md flex flex-col justify-between hover:bg-surface-container transition-all group">
<div className="flex items-center justify-between text-outline text-[12px]">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">Cash-Flow Volatility</span>
<span className="material-symbols-outlined text-[16px] text-tertiary">analytics</span>
</div>
<div className="my-2 flex flex-col">
<span className="font-label-metric-lg text-label-metric-lg text-tertiary font-semibold tracking-tight">11.4%</span>
<span className="font-body-sm text-body-sm text-outline">Coefficient of variation</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-caps text-label-caps text-[11px]">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-tertiary">Low-to-mod</span>
<span>variance index</span>
</div>
</div>
{/*  KPI 5  */}
<div className="p-4 rounded-xl bg-surface-container-low/70 shadow-md flex flex-col justify-between hover:bg-surface-container transition-all group">
<div className="flex items-center justify-between text-outline text-[12px]">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">Minimum Balance</span>
<span className="material-symbols-outlined text-[16px] text-semantic-warning">warning</span>
</div>
<div className="my-2 flex flex-col">
<span className="font-label-metric-lg text-label-metric-lg text-on-surface font-semibold tracking-tight">₹4.15L</span>
<span className="font-body-sm text-body-sm text-outline">Lowest trough dip</span>
</div>
<div className="text-semantic-warning font-label-caps text-label-caps text-[11px] flex items-center gap-1">
<span>Recorded 14th Aug post-payroll</span>
</div>
</div>
{/*  KPI 6  */}
<div className="p-4 rounded-xl bg-surface-container-low/70 shadow-md flex flex-col justify-between hover:bg-surface-container transition-all group relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-accent-electric/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between text-outline text-[12px]">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-accent-electric">Cash Buffer Days</span>
<span className="material-symbols-outlined text-[16px] text-accent-electric">shield_with_heart</span>
</div>
<div className="my-2 flex flex-col">
<span className="font-label-metric-lg text-label-metric-lg text-on-surface font-semibold tracking-tight">24 Days</span>
<span className="font-body-sm text-body-sm text-outline">Burn runway at 0 inflow</span>
</div>
<div className="flex items-center gap-1 text-semantic-success font-label-caps text-label-caps text-[11px]">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
          Safe liquidity window (&gt;15d)
        </div>
</div>
</div>
{/*  MAIN VISUALIZATION: Cash Flow Trend & Operating Flow Rhythm  */}
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-xl flex flex-col gap-4 relative overflow-hidden">
{/*  Ambient aura  */}
<div className="absolute top-0 right-1/4 w-96 h-48 bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-1/3 w-80 h-36 bg-tertiary-container/10 blur-3xl pointer-events-none"></div>
{/*  Chart Header & Interactive Controls  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 z-10">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[22px]">ssid_chart</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Cash Flow Trend &amp; Rhythm</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Cross-account aggregate daily inflows, outflows, and net liquid capital position
          </p>
</div>
</div>
<CashFlowTrendChart />
{/*  Flow rhythm insight footer  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded-xl bg-surface-container-low/80">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-semantic-success text-[20px]">check_circle</span>
<div className="flex items-center gap-2">
<span className="font-body-md text-body-md font-medium text-on-surface">Flow rhythm:</span>
<span className="font-body-md text-body-md text-on-surface-variant">Positive net inflow on <strong className="text-semantic-success font-label-metric-md text-label-metric-md">22 out of 30</strong> recorded operating days.</span>
</div>
</div>
<div className="flex items-center gap-2 text-outline text-[12px]">
<span className="font-label-caps text-label-caps uppercase">Collection Cycle:</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">33.2 Days</span>
<span className="text-semantic-success font-label-caps text-label-caps">(-4.5d vs industry)</span>
</div>
</div>
</div>
{/*  SPLIT SECTION: Expense Decomposition & Business Operational Visual  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
{/*  Expense Decomposition (8 cols)  */}
<div className="lg:col-span-8 p-6 rounded-xl bg-surface-container-lowest shadow-xl flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">Outflow Audit</span>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Where Your Money Goes</h3>
</div>
<div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-surface-container font-label-caps text-label-caps text-on-surface-variant">
<span>Total Monthly Burn:</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">₹10.92L</span>
</div>
</div>
{/*  Interactive Multi-segment Progress Bar  */}
<div className="w-full flex flex-col gap-2">
<div className="w-full h-3 rounded-full bg-surface-container-high flex overflow-hidden p-0.5">
<div className="h-full bg-indigo-500 rounded-l-full" style={{ width: '35.2%' }} title="Payroll: 35.2%"></div>
<div className="h-full bg-cyan-400" style={{ width: '31.1%' }} title="Suppliers: 31.1%"></div>
<div className="h-full bg-amber-400" style={{ width: '11.0%' }} title="Rent: 11.0%"></div>
<div className="h-full bg-purple-400" style={{ width: '8.7%' }} title="Debt Service: 8.7%"></div>
<div className="h-full bg-emerald-400" style={{ width: '6.2%' }} title="Utilities: 6.2%"></div>
<div className="h-full bg-blue-400" style={{ width: '4.8%' }} title="Project: 4.8%"></div>
<div className="h-full bg-rose-400 rounded-r-full" style={{ width: '3.0%' }} title="SG&amp;A: 3.0%"></div>
</div>
<div className="flex items-center justify-between text-outline text-[11px] font-label-caps">
<span>Primary Weight: Payroll (35.2%)</span>
<span>Secondary: Raw Material (31.1%)</span>
<span>Fixed Overhead: 22.7%</span>
</div>
</div>
{/*  Categorized Data Table / List  */}
<div className="flex flex-col gap-1 mt-1 overflow-x-auto">
{/*  Category Row 1  */}
<div className="grid grid-cols-12 items-center p-2 rounded-lg hover:bg-surface-container/60 transition-colors">
<div className="col-span-5 flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-medium text-on-surface">Payroll &amp; Wages</span>
<span className="font-body-sm text-body-sm text-outline">28 employees, auto-reconciled via ICICI Epfo</span>
</div>
</div>
<div className="col-span-3 text-right">
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">₹3,85,000</span>
</div>
<div className="col-span-2 text-right">
<span className="font-label-metric-md text-label-metric-md text-tertiary">35.2%</span>
</div>
<div className="col-span-2 text-right">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps text-[11px]">Stable</span>
</div>
</div>
{/*  Category Row 2  */}
<div className="grid grid-cols-12 items-center p-2 rounded-lg hover:bg-surface-container/60 transition-colors">
<div className="col-span-5 flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-medium text-on-surface">Suppliers &amp; Raw Material</span>
<span className="font-body-sm text-body-sm text-outline">Corrugated board &amp; polymer resin vendors</span>
</div>
</div>
<div className="col-span-3 text-right">
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">₹3,40,000</span>
</div>
<div className="col-span-2 text-right">
<span className="font-label-metric-md text-label-metric-md text-tertiary">31.1%</span>
</div>
<div className="col-span-2 text-right">
<span className="px-2 py-0.5 rounded bg-semantic-warning/15 text-semantic-warning font-label-caps text-label-caps text-[11px]">Variable</span>
</div>
</div>
{/*  Category Row 3  */}
<div className="grid grid-cols-12 items-center p-2 rounded-lg hover:bg-surface-container/60 transition-colors">
<div className="col-span-5 flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-medium text-on-surface">Rent &amp; Facilities</span>
<span className="font-body-sm text-body-sm text-outline">Andheri MIDC industrial shed unit 4</span>
</div>
</div>
<div className="col-span-3 text-right">
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">₹1,20,000</span>
</div>
<div className="col-span-2 text-right">
<span className="font-label-metric-md text-label-metric-md text-tertiary">11.0%</span>
</div>
<div className="col-span-2 text-right">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps text-[11px]">Fixed</span>
</div>
</div>
{/*  Category Row 4  */}
<div className="grid grid-cols-12 items-center p-2 rounded-lg hover:bg-surface-container/60 transition-colors">
<div className="col-span-5 flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-medium text-on-surface">Debt Service (EMI &amp; Interest)</span>
<span className="font-body-sm text-body-sm text-outline">Machinery term loan &amp; working capital line</span>
</div>
</div>
<div className="col-span-3 text-right">
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">₹95,000</span>
</div>
<div className="col-span-2 text-right">
<span className="font-label-metric-md text-label-metric-md text-tertiary">8.7%</span>
</div>
<div className="col-span-2 text-right">
<span className="px-2 py-0.5 rounded bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps text-[11px]">Auto-debit</span>
</div>
</div>
{/*  Category Row 5  */}
<div className="grid grid-cols-12 items-center p-2 rounded-lg hover:bg-surface-container/60 transition-colors">
<div className="col-span-5 flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-medium text-on-surface">Utilities &amp; Logistics</span>
<span className="font-body-sm text-body-sm text-outline">Freight forwarders &amp; industrial power tariff</span>
</div>
</div>
<div className="col-span-3 text-right">
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">₹68,000</span>
</div>
<div className="col-span-2 text-right">
<span className="font-label-metric-md text-label-metric-md text-tertiary">6.2%</span>
</div>
<div className="col-span-2 text-right">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps text-[11px]">Flexible</span>
</div>
</div>
{/*  Category Row 6  */}
<div className="grid grid-cols-12 items-center p-2 rounded-lg hover:bg-surface-container/60 transition-colors">
<div className="col-span-5 flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-medium text-on-surface">Project &amp; Capex Spend</span>
<span className="font-body-sm text-body-sm text-outline">Tooling automation phase 1 retrofit</span>
</div>
</div>
<div className="col-span-3 text-right">
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">₹52,000</span>
</div>
<div className="col-span-2 text-right">
<span className="font-label-metric-md text-label-metric-md text-tertiary">4.8%</span>
</div>
<div className="col-span-2 text-right">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps text-[11px]">Milestone</span>
</div>
</div>
{/*  Category Row 7  */}
<div className="grid grid-cols-12 items-center p-2 rounded-lg hover:bg-surface-container/60 transition-colors">
<div className="col-span-5 flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-medium text-on-surface">Other SG&amp;A / Statutory</span>
<span className="font-body-sm text-body-sm text-outline">ERP licenses, commercial insurance &amp; fees</span>
</div>
</div>
<div className="col-span-3 text-right">
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">₹32,000</span>
</div>
<div className="col-span-2 text-right">
<span className="font-label-metric-md text-label-metric-md text-tertiary">3.0%</span>
</div>
<div className="col-span-2 text-right">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps text-[11px]">Overhead</span>
</div>
</div>
</div>
</div>
{/*  Facility & Real-time Operations Context (4 cols)  */}
<div className="lg:col-span-4 flex flex-col gap-5">
{/*  Visual Industrial Warehouse / Factory Floor Glass Context Card  */}
<div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-xl flex flex-col">
<div className="relative h-44 w-full">
<img />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-semantic-success animate-ping"></span>
<span className="font-label-caps text-label-caps text-on-surface">Facility Live · Andheri Unit</span>
</div>
</div>
<div className="p-4 flex flex-col gap-2 -mt-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Operational Anchor</span>
<span className="font-label-metric-md text-label-metric-md text-tertiary text-[13px]">94.2% Capacity</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              High cash flow velocity is backed by active assembly line throughput with direct dispatch cycle time averaging under 48 hours.
            </p>
<div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">account_balance</span>
<span className="font-body-sm text-body-sm text-on-surface">HDFC Operating CC</span>
</div>
<span className="font-label-metric-md text-label-metric-md text-semantic-success">₹18.4L Limit</span>
</div>
</div>
</div>
{/*  Working Capital Cycle Mini-Visual Card  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-xl flex flex-col justify-between flex-1">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Working Capital Gap</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-caps text-label-caps">Optimal</span>
</div>
<div className="my-2 flex items-baseline justify-between">
<div>
<span className="font-display-lg text-[32px] leading-tight text-on-surface font-semibold">18</span>
<span className="font-body-md text-body-md text-on-surface-variant ml-1">Days</span>
</div>
<div className="text-right">
<span className="font-label-metric-md text-label-metric-md text-semantic-success font-semibold">-5.2 Days</span>
<p className="font-body-sm text-body-sm text-outline text-[11px]">improved vs Q1</p>
</div>
</div>
{/*  Mini step indicators  */}
<div className="grid grid-cols-3 gap-2 pt-2 border-t border-border-glass">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">DSO</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface">33.2d</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">DIO</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface">26.8d</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">DPO</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface">42.0d</span>
</div>
</div>
</div>
</div>
</div>
{/*  THIRD SECTION: Financial Signals (Behavioral diagnostic telemetry cards)  */}
<div className="flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">Behavioral Diagnostic Telemetry</span>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Financial Signals &amp; Underwriting Risk Radar</h3>
</div>
<div className="flex items-center gap-2 text-outline font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary">model_training</span>
<span>MRIP Autonomous Pattern Detection</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
{/*  Signal 1: Revenue Trend  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:bg-surface-container-low transition-all">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Revenue Trend</span>
<span className="w-2.5 h-2.5 rounded-full bg-semantic-success shadow-[0_0_8px_#10B981]"></span>
</div>
<div className="my-4 flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-semantic-success font-semibold">Strong Upward Cadence</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">3-month CAGR +4.2%, healthy sales momentum</span>
</div>
<div className="pt-2 border-t border-border-glass flex items-center justify-between text-[11px] font-label-caps text-outline">
<span>Repeat Order Rate:</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">82%</span>
</div>
</div>
{/*  Signal 2: Recurring Obligation Ratio  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:bg-surface-container-low transition-all">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Recurring Obligations</span>
<span className="w-2.5 h-2.5 rounded-full bg-semantic-warning animate-pulse shadow-[0_0_8px_#F59E0B]"></span>
</div>
<div className="my-4 flex flex-col gap-1">
<div className="flex items-baseline gap-1.5">
<span className="font-label-metric-lg text-label-metric-lg text-semantic-warning font-semibold">38.4%</span>
<span className="font-body-sm text-body-sm text-outline">of Inflow</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Manageable overhead burden; monitor supplier credit terms</span>
</div>
<div className="pt-2 border-t border-border-glass flex items-center justify-between text-[11px] font-label-caps text-outline">
<span>Critical Threshold:</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">&lt; 45%</span>
</div>
</div>
{/*  Signal 3: Debt-Service Coverage (DSCR)  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:bg-surface-container-low transition-all">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">DSCR Telemetry</span>
<span className="w-2.5 h-2.5 rounded-full bg-semantic-success shadow-[0_0_8px_#10B981]"></span>
</div>
<div className="my-4 flex flex-col gap-1">
<div className="flex items-baseline gap-1.5">
<span className="font-label-metric-lg text-label-metric-lg text-semantic-success font-semibold">1.82x</span>
<span className="font-body-sm text-body-sm text-semantic-success font-medium">Coverage</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Interest coverage healthy; resilient buffer against RBI repo hikes</span>
</div>
<div className="pt-2 border-t border-border-glass flex items-center justify-between text-[11px] font-label-caps text-outline">
<span>Covenant Minimum:</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">1.25x</span>
</div>
</div>
{/*  Signal 4: Income Diversity  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:bg-surface-container-low transition-all">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Income Diversity</span>
<span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_#d0bcff]"></span>
</div>
<div className="my-4 flex flex-col gap-1">
<div className="flex items-baseline gap-1.5">
<span className="font-label-metric-lg text-label-metric-lg text-secondary font-semibold">68</span>
<span className="font-body-sm text-body-sm text-outline">/ 100</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">6 distinct revenue streams across 14 active repeat B2B accounts</span>
</div>
<div className="pt-2 border-t border-border-glass flex items-center justify-between text-[11px] font-label-caps text-outline">
<span>Primary Sector:</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold">FMCG &amp; Auto</span>
</div>
</div>
{/*  Signal 5: Customer Concentration (Risk Warning)  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between hover:bg-surface-container-low transition-all relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-semantic-critical/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-semantic-critical uppercase tracking-wider">Concentration Alert</span>
<span className="material-symbols-outlined text-[18px] text-semantic-critical">priority_high</span>
</div>
<div className="my-4 flex flex-col gap-1">
<div className="flex items-baseline gap-1.5">
<span className="font-label-metric-lg text-label-metric-lg text-semantic-critical font-semibold">62.5%</span>
<span className="font-body-sm text-body-sm text-outline">Top 3 Clients</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">High single-exposure to tier-1 automotive supplier OEM</span>
</div>
<div className="pt-2 border-t border-border-glass flex items-center justify-between text-[11px] font-label-caps text-semantic-critical">
<span>Underwriter Note:</span>
<span className="font-label-metric-md text-label-metric-md font-semibold">Requires Debtor Insurance</span>
</div>
</div>
</div>
</div>
{/*  Verified Telemetry Footer Ribbon  */}
<div className="p-4 rounded-xl bg-surface-container-lowest/90 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-2">
<div className="flex flex-wrap items-center gap-4 text-outline text-[12px]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-semantic-success">verified</span>
<span className="font-body-sm text-body-sm text-on-surface">Data coverage: <strong className="text-semantic-success font-label-metric-md text-label-metric-md">96%</strong></span>
</div>
<span className="text-outline-variant hidden md:inline">|</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bank Statement Analyzer <strong className="font-label-caps text-label-caps text-primary">v4.2</strong></span>
<span className="text-outline-variant hidden md:inline">|</span>
<span className="font-body-sm text-body-sm text-outline">All figures verified against monthly GST R-1 &amp; 3B regulatory filings</span>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-sm text-body-sm transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">file_download</span>
          Export Cash Flow Audit
        </button>
<Link href="/stress-lab" className="px-4 py-1.5 rounded-lg bg-primary-container hover:brightness-110 text-on-primary-container font-body-sm text-body-sm font-semibold transition-all shadow-[0_0_16px_rgba(99,102,241,0.25)] flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">tune</span>
          Run Stress Scenario
        </Link>
</div>
</div>

    </div>
  );
}
