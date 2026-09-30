import { CashFlowChart } from "./CashFlowChart";
import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { OverviewClientInteractions } from './OverviewClientInteractions';

export default async function OverviewPage() {
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
    <div className="animate-in fade-in duration-500">
      <OverviewClientInteractions />
      <div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden px-8 py-6 flex flex-col gap-10">
<div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-80 left-10 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

<section className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 rounded-xl bg-surface-container-lowest/80 backdrop-blur-xl shadow-lg">
<div className="flex flex-wrap items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-container via-surface-container-high to-surface-container flex items-center justify-center text-on-surface shadow-md">
<span className="material-symbols-outlined text-[26px] text-tertiary">domain</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-md text-headline-md text-on-surface">{data.business?.legal_name}</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-tertiary font-label-caps text-label-caps">UDYAM-MH-01-0029412</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps">{data.business?.city} · {data.business?.industry}</span>
</div>
<p className="font-body-sm text-body-sm text-outline flex items-center gap-2 mt-0.5">
<span className="inline-block w-2 h-2 rounded-full bg-semantic-success animate-pulse"></span>
            Last updated Sep 30, 2026, 14:32 IST · Real-time ledger telemetry via RBI Account Aggregator (AA) Protocol
          </p>
</div>
</div>
<div className="flex items-center gap-2 self-start lg:self-auto">
<button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-tertiary">sync</span>
<span>Refresh Feeds</span>
</button>
<button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-surface font-body-sm text-body-sm shadow-md hover:brightness-110 transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Underwriting Dossier</span>
</button>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low/70 backdrop-blur-xl p-4 flex flex-col justify-between shadow-md group hover:bg-surface-container-high/60 transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Predictive Default Risk</span>
<span className="font-headline-sm text-headline-sm text-on-surface-variant">Probability of Default</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-semantic-warning/15 text-semantic-warning font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-warning animate-ping"></span>
            {data.risk.risk_band}
          </span>
</div>
<div className="my-4 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-on-surface tracking-tight">{(data.risk.pd * 100).toFixed(1)}%</span>
<span className="font-label-metric-md text-label-metric-md text-outline">PD (12M)</span>
</div>
<div className="pt-2 bg-surface-container-lowest/40 rounded-lg p-1 flex flex-col gap-1">
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-semantic-success flex items-center gap-1 font-label-metric-md text-label-metric-md">
<span className="material-symbols-outlined text-[16px]">trending_down</span>
              ↓ 1.4% MoM
            </span>
<span className="text-outline text-[12px]">Improvement</span>
</div>
<span className="font-body-sm text-body-sm text-outline-variant text-[11px]">Sector Benchmark: 9.6% PD (Packaging Mfg)</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-low/70 backdrop-blur-xl p-4 flex flex-col justify-between shadow-md group hover:bg-surface-container-high/60 transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Composite Health Index</span>
<span className="font-headline-sm text-headline-sm text-on-surface-variant">Solvency &amp; Operations</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
            Stable
          </span>
</div>
<div className="my-4 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-on-surface tracking-tight">{data.health.score}</span>
<span className="font-label-metric-lg text-label-metric-lg text-outline">/ 100</span>
</div>
<div className="pt-2 bg-surface-container-lowest/40 rounded-lg p-1 flex flex-col gap-1">
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-semantic-success h-full rounded-full" style={{ width: "74%", }}></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] pt-1">Liquidity strength top quartile across MSME tier-2</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-low/70 backdrop-blur-xl p-4 flex flex-col justify-between shadow-md group hover:bg-surface-container-high/60 transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Evidence Reliability</span>
<span className="font-headline-sm text-headline-sm text-on-surface-variant">Data Confidence</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-caps text-label-caps flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span>
            High Quality
          </span>
</div>
<div className="my-4 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-tertiary tracking-tight">86</span>
<span className="font-label-metric-lg text-label-metric-lg text-outline">/ 100</span>
</div>
<div className="pt-2 bg-surface-container-lowest/40 rounded-lg p-1 flex flex-col gap-1">
<div className="flex items-center justify-between text-[11px] text-outline font-label-metric-md text-label-metric-md">
<span>Coverage</span>
<span className="text-on-surface">96% transaction ledger</span>
</div>
<span className="font-body-sm text-body-sm text-outline-variant text-[11px]">GSTN + 3 Banking Streams verified with zero gaps</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-low/70 backdrop-blur-xl p-4 flex flex-col justify-between shadow-md group hover:bg-surface-container-high/60 transition-all">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Burn Runway</span>
<span className="font-headline-sm text-headline-sm text-on-surface-variant">Cash Buffer Horizon</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-caps text-label-caps">
            Target: 30 days
          </span>
</div>
<div className="my-4 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-on-surface tracking-tight">24</span>
<span className="font-headline-md text-headline-md text-outline">days</span>
</div>
<div className="pt-2 bg-surface-container-lowest/40 rounded-lg p-1 flex flex-col gap-1">
<div className="flex items-center justify-between text-[12px] font-label-metric-md text-label-metric-md">
<span className="text-semantic-success">₹14.2L</span>
<span className="text-outline">Liquid Working Reserve</span>
</div>
<span className="font-body-sm text-body-sm text-outline-variant text-[11px]">Status: Adequate (6-day cushion before safety alert)</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full">

<div className="lg:col-span-8 rounded-xl bg-surface-container-low/80 backdrop-blur-xl p-4 flex flex-col justify-between shadow-xl">
<CashFlowChart />
</div>

<div className="lg:col-span-4 rounded-xl bg-surface-container-low/80 backdrop-blur-xl p-4 flex flex-col justify-between shadow-xl">
<div>
<div className="flex items-center justify-between pb-2">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">90-Day Cash Outlook</span>
<span className="font-body-sm text-body-sm text-outline">Predictive horizon based on order pipeline</span>
</div>
<span className="material-symbols-outlined text-tertiary text-[20px]">auto_graph</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-1 pb-4">
            Monte Carlo simulated trajectory factoring client payment cycle variations &amp; committed GST outflows.
          </p>

<div className="flex flex-col gap-2">

<div className="p-2 rounded-xl bg-surface-container/60 hover:bg-surface-container-high/60 transition-all flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-tertiary">30 Days · Oct 2026</span>
<span className="px-2 py-0.5 rounded-full bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps">High Certainty</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-label-metric-lg text-label-metric-lg text-on-surface">₹1.85L</span>
<span className="font-label-metric-md text-label-metric-md text-outline text-[12px]">±₹12K variance</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-tertiary h-full rounded-full" style={{ width: "88%", }}></div>
</div>
<span className="font-body-sm text-body-sm text-outline text-[11px]">Robust collection visibility from Tier-1 clients</span>
</div>

<div className="p-2 rounded-xl bg-surface-container/60 hover:bg-surface-container-high/60 transition-all flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-primary">60 Days · Nov 2026</span>
<span className="px-2 py-0.5 rounded-full bg-semantic-warning/15 text-semantic-warning font-label-caps text-label-caps">Moderate Certainty</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-label-metric-lg text-label-metric-lg text-on-surface">₹1.21L</span>
<span className="font-label-metric-md text-label-metric-md text-outline text-[12px]">±₹28K variance</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-primary h-full rounded-full" style={{ width: "62%", }}></div>
</div>
<span className="font-body-sm text-body-sm text-outline text-[11px]">Working capital cycle peak; paperboard inventory refill</span>
</div>

<div className="p-2 rounded-xl bg-surface-container/60 hover:bg-surface-container-high/60 transition-all flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-secondary">90 Days · Dec 2026</span>
<span className="px-2 py-0.5 rounded-full bg-semantic-critical/15 text-semantic-critical font-label-caps text-label-caps">Sensitivity Zone</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-label-metric-lg text-label-metric-lg text-semantic-warning">₹0.88L</span>
<span className="font-label-metric-md text-label-metric-md text-outline text-[12px]">±₹54K variance</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-semantic-warning h-full rounded-full" style={{ width: "44%", }}></div>
</div>
<span className="font-body-sm text-body-sm text-outline text-[11px]">Scheduled die-cutter machinery Capex payout (₹2.4L)</span>
</div>
</div>
</div>
<div className="pt-2 mt-2 flex items-center justify-between bg-surface-container-lowest/60 p-2 rounded-xl">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Stress Alert Threshold</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface">Min Floor: ₹0.65L</span>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-tertiary font-body-sm text-body-sm transition-colors" type="button">
            Run Stress Test →
          </button>
</div>
</div>
</section>

<section className="w-full flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">What is Driving Risk?</span>
<span className="px-2.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-caps text-label-caps">XGBoost Attribution Engine</span>
</div>
<p className="font-body-md text-body-md text-outline">Deterministic feature importance ranked by impact on the 8.2% Probability of Default.</p>
</div>
<div className="flex items-center gap-2 text-[12px] font-label-metric-md text-label-metric-md text-outline">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-semantic-warning"></span> + Risk Pressure</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-semantic-success"></span> - Mitigating Buffer</span>
</div>
</div>

<div className="grid grid-cols-1 gap-2">

<div className="p-4 rounded-xl bg-surface-container-low/70 backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-surface-container-high/60 transition-all shadow-md">
<div className="flex items-start gap-4 flex-1">
<span className="w-8 h-8 rounded-lg bg-semantic-warning/15 text-semantic-warning font-label-metric-md text-label-metric-md flex items-center justify-center shrink-0">
              #1
            </span>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">Receivable Delay &amp; DSO Expansion</span>
<span className="px-2 py-0.5 rounded bg-semantic-warning/20 text-semantic-warning font-label-caps text-label-caps">+ Risk Pressure</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-caps text-label-caps">High Impact (+3.1% PD)</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Collections are taking longer than expected. Average DSO increased from 42 to 57 days over the trailing 60-day window. Overdue receivables from 2 major clients exceed ₹4.8L.
              </p>
</div>
</div>
<button className="evidence-trigger px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-tertiary font-body-sm text-body-sm transition-all shrink-0 flex items-center gap-1" data-driver="Receivables ledger: DSO jump +15 days" type="button">
<span>View Evidence</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>

<div className="p-4 rounded-xl bg-surface-container-low/70 backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-surface-container-high/60 transition-all shadow-md">
<div className="flex items-start gap-4 flex-1">
<span className="w-8 h-8 rounded-lg bg-semantic-success/15 text-semantic-success font-label-metric-md text-label-metric-md flex items-center justify-center shrink-0">
              #2
            </span>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">Liquid Cash Buffer Days</span>
<span className="px-2 py-0.5 rounded bg-semantic-success/20 text-semantic-success font-label-caps text-label-caps">- Mitigating Factor</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-caps text-label-caps">Medium Impact (-2.4% PD)</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Liquid cash balance covers 24 days of operational burn (payroll + supplier payables), well above the 15-day critical distress threshold for regional packaging converters.
              </p>
</div>
</div>
<button className="evidence-trigger px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-tertiary font-body-sm text-body-sm transition-all shrink-0 flex items-center gap-1" data-driver="Current liquid reserves: ₹14.2L across 3 bank ledgers" type="button">
<span>View Evidence</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>

<div className="p-4 rounded-xl bg-surface-container-low/70 backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-surface-container-high/60 transition-all shadow-md">
<div className="flex items-start gap-4 flex-1">
<span className="w-8 h-8 rounded-lg bg-semantic-warning/15 text-semantic-warning font-label-metric-md text-label-metric-md flex items-center justify-center shrink-0">
              #3
            </span>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">Customer Concentration Density</span>
<span className="px-2 py-0.5 rounded bg-semantic-warning/20 text-semantic-warning font-label-caps text-label-caps">+ Risk Pressure</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-caps text-label-caps">Medium Impact (+1.8% PD)</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Top 2 automotive packaging clients account for 58.4% of total billed receivables, elevating counterparty risk should either counterparty initiate payment renegotiations.
              </p>
</div>
</div>
<button className="evidence-trigger px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-tertiary font-body-sm text-body-sm transition-all shrink-0 flex items-center gap-1" data-driver="Client concentration audit: Client A (34%) + Client B (24.4%)" type="button">
<span>View Evidence</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>

<div className="p-4 rounded-xl bg-surface-container-low/70 backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-surface-container-high/60 transition-all shadow-md">
<div className="flex items-start gap-4 flex-1">
<span className="w-8 h-8 rounded-lg bg-semantic-success/15 text-semantic-success font-label-metric-md text-label-metric-md flex items-center justify-center shrink-0">
              #4
            </span>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">Debt-Service Coverage Ratio (DSCR)</span>
<span className="px-2 py-0.5 rounded bg-semantic-success/20 text-semantic-success font-label-caps text-label-caps">- Mitigating Factor</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-caps text-label-caps">High Impact (-2.1% PD)</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                DSCR stands healthy at 1.82x vs covenant floor of 1.25x; term loan obligations and interest on working capital limits are comfortably serviced with zero historical bounces.
              </p>
</div>
</div>
<button className="evidence-trigger px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-tertiary font-body-sm text-body-sm transition-all shrink-0 flex items-center gap-1" data-driver="Debt service telemetry: 1.82x DSCR vs 1.25x minimum covenant" type="button">
<span>View Evidence</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>

<div className="p-4 rounded-xl bg-surface-container-low/70 backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-surface-container-high/60 transition-all shadow-md">
<div className="flex items-start gap-4 flex-1">
<span className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary font-label-metric-md text-label-metric-md flex items-center justify-center shrink-0">
              #5
            </span>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">Operating Plan Attainment Delta</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-caps text-label-caps">+ Slight Pressure</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-caps text-label-caps">Low Impact (+0.6% PD)</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Current month revenue achieved 89% of targeted operating plan (₹10.7L vs ₹12.0L plan) due to a 4-day dispatch delay on high-grade corrugated shipments.
              </p>
</div>
</div>
<button className="evidence-trigger px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-tertiary font-body-sm text-body-sm transition-all shrink-0 flex items-center gap-1" data-driver="Monthly plan shortfall: -₹1.3L dispatch variance" type="button">
<span>View Evidence</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full">

<div className="lg:col-span-8 rounded-xl bg-surface-container-low/80 backdrop-blur-xl p-4 flex flex-col justify-between shadow-xl">
<div className="flex items-center justify-between pb-2">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Plan vs Reality · MTD Ledger Reconciliation</span>
<span className="font-body-sm text-body-sm text-outline">Budget commitments compared against live GST and banking aggregates</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-semantic-warning/15 text-semantic-warning font-label-caps text-label-caps">
            -₹1.3L Revenue Variance
          </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">

<div className="p-4 rounded-xl bg-surface-container/60 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline">Target Revenue</span>
<span className="font-label-metric-md text-label-metric-md text-outline">₹12.0L</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-headline-md text-headline-md text-on-surface">₹10.7L</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-warning">89% Attainment</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-tertiary to-primary h-full rounded-full" style={{ width: "89%", }}></div>
</div>
<span className="font-body-sm text-body-sm text-outline text-[11px]">₹1.3L dispatched in transit; invoice expected to clear Oct 04</span>
</div>

<div className="p-4 rounded-xl bg-surface-container/60 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline">Operating Expense Variance</span>
<span className="font-label-metric-md text-label-metric-md text-outline">Target ₹7.8L</span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-headline-md text-headline-md text-on-surface">₹8.1L</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-critical">+3.8% overspend</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-semantic-critical h-full rounded-full" style={{ width: "103.8%", }}></div>
</div>
<span className="font-body-sm text-body-sm text-outline text-[11px]">Primary driver: Kraft paper price hike (+4.2% spot rate increase)</span>
</div>
</div>

<div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-surface-container-lowest/40 p-2 rounded-xl">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">tune</span>
<span className="font-body-sm text-body-sm text-on-surface">Simulate inventory and receivables recovery in the Stress Lab</span>
</div>
<a className="px-4 py-2 rounded-xl bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:brightness-110 transition-all text-center" data-path="plan-vs-actual" href="#">
            Detailed Variance Ledger →
          </a>
</div>
</div>

<div className="lg:col-span-4 rounded-xl bg-surface-container-low/80 backdrop-blur-xl p-4 flex flex-col justify-between shadow-xl">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Underwriter Action Deck</span>
<span className="w-2.5 h-2.5 rounded-full bg-semantic-success shadow-sm"></span>
</div>
<p className="font-body-sm text-body-sm text-outline">Current facility review status and immediate risk covenants.</p>
<div className="mt-2 p-2 rounded-xl bg-surface-container/60 flex flex-col gap-2">
<div className="flex items-center justify-between text-[12px] font-label-metric-md text-label-metric-md">
<span className="text-outline">Active Facility:</span>
<span className="text-on-surface">Cash Credit (CC) · ₹45.0L</span>
</div>
<div className="flex items-center justify-between text-[12px] font-label-metric-md text-label-metric-md">
<span className="text-outline">Utilization:</span>
<span className="text-on-surface">68.4% (₹30.8L drawn)</span>
</div>
<div className="flex items-center justify-between text-[12px] font-label-metric-md text-label-metric-md">
<span className="text-outline">Next Covenant Review:</span>
<span className="text-tertiary">Nov 15, 2026 (46 days)</span>
</div>
</div>

<div className="mt-2 p-2 rounded-xl bg-gradient-to-br from-surface-container to-surface-container-high flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-tertiary uppercase">Predictive Recommendation</span>
<p className="font-body-sm text-body-sm text-on-surface">
              Recommend extending an invoice discounting line of <strong>₹8.0L</strong> against Tier-1 receivables to compress DSO back below 45 days.
            </p>
</div>
</div>
<div className="pt-4">
<a className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-tertiary text-on-primary font-body-sm text-body-sm font-semibold shadow-lg hover:brightness-110 transition-all" data-path="stress-lab" href="#">
<span>Explore Detailed Analysis &amp; Scenario Planner</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</section>
</div>

<div className="fixed inset-0 z-50 bg-surface-base/80 backdrop-blur-md hidden flex items-center justify-end transition-opacity duration-300" id="evidence-drawer">
<div className="w-full max-w-xl h-full bg-surface-container-low shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[24px]">verified</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Evidence Verification Drawer</span>
</div>
<button className="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-all" id="close-evidence" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<div className="p-2 rounded-xl bg-surface-container-lowest">
<span className="font-label-caps text-label-caps text-outline uppercase">Active Risk Signal</span>
<p className="font-headline-sm text-headline-sm text-on-surface mt-1" id="evidence-title">Telemetry Signal</p>
</div>
<div className="flex flex-col gap-2">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Underlying Cryptographic Audit Trail</span>
<div className="p-4 rounded-xl bg-surface-container flex flex-col gap-2 font-label-metric-md text-label-metric-md text-[12px]">
<div className="flex justify-between"><span className="text-outline">Source API:</span><span className="text-on-surface">RBI Account Aggregator (Setu / Onemoney)</span></div>
<div className="flex justify-between"><span className="text-outline">Consent Handle:</span><span className="text-tertiary">aa-cns-aarav-994208</span></div>
<div className="flex justify-between"><span className="text-outline">Ledger Hash:</span><span className="text-outline-variant font-mono">0x7f9a...883c</span></div>
<div className="flex justify-between"><span className="text-outline">Timestamp:</span><span className="text-on-surface">2026-09-30T09:02:14Z</span></div>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Deterministic Observations</span>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant list-disc pl-4">
<li>Invoices aged 45-60 days increased by ₹3,40,000 across Automotive OEM client tiers.</li>
<li>No cheque bounces or NACH mandate failures detected across the 180-day telemetry audit.</li>
<li>Operational burn rate stabilized at ₹8.1L/month against historical average of ₹8.4L/month.</li>
</ul>
</div>
</div>
<div className="pt-4 flex items-center justify-end gap-2">
<button className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm transition-all" id="close-evidence-btn" type="button">
          Close Drawer
        </button>
<a className="px-4 py-2 rounded-xl bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:brightness-110 transition-all flex items-center gap-1" data-path="explainability" href="#">
<span>Open Full Explainability Engine</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
</div>

</div>
    </div>
  )
}
