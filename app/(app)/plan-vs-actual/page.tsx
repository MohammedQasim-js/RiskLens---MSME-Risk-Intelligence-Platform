
import { getActiveBusinessId } from '@/lib/data/active-business';
import Link from 'next/link';
import { RevenuePerformanceChart } from './RevenuePerformanceChart';
import { PlanVsActualActions, InspectAgingButton, LedgerFooterActions, DatePeriodSelector } from './PlanVsActualActions';

export default async function PlanVsActualPage() {
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

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
      <div className="px-8 py-6 flex flex-col gap-6 max-w-[1560px] mx-auto w-full">
{/*  Top Action Bar & Telemetry Header  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-tertiary">Reconciliation Telemetry</span>
<span className="text-outline text-xs">/</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Aarav Packaging Pvt Ltd</span>
<span className="text-outline text-xs">/</span>
<span className="font-label-caps text-label-caps text-outline">Operating Period FY26-27</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">Plan vs Actual</h1>
<p className="font-body-md text-body-md text-on-surface-variant">See whether your business is executing against the baseline plan you set with verifiable ledger proofs.</p>
</div>
{/*  Action Utilities  */}
<div className="flex items-center flex-wrap gap-2">
{/*  Date Selector  */}
<DatePeriodSelector />
{/*  Live Sync Pill  */}
<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high/60 backdrop-blur-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-semantic-success opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-semantic-success"></span>
</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-success text-[12px]">GST + AA Synced</span>
<span className="font-body-sm text-body-sm text-outline text-[11px]">(08:42 IST)</span>
</div>
{/*  Export Variance PDF  */}
<PlanVsActualActions />
</div>
</div>
{/*  Hero Comparison Banner: Attainment Overview  */}
<div className="relative overflow-hidden rounded-xl bg-surface-container-low/70 backdrop-blur-xl p-6 shadow-xl">
{/*  Glow ambient backdrop  */}
<div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-20 left-10 w-72 h-72 bg-tertiary/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-6">
{/*  Top Status Tier  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div className="flex items-center gap-3">
<span className="p-2 rounded-lg bg-semantic-warning/10 text-semantic-warning">
<span className="material-symbols-outlined text-[20px]">balance</span>
</span>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-medium">Monthly Variance Horizon</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Validated using GSTR-1, Bank Statement Feeds, and E-Way reconciliation</span>
</div>
</div>
{/*  Contextual Gap Badge  */}
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-semantic-warning/15 text-semantic-warning">
<span className="w-2 h-2 rounded-full bg-semantic-warning animate-pulse"></span>
<span className="font-label-caps text-label-caps uppercase tracking-wider">Moderate Underperformance (-₹1.3L)</span>
</div>
</div>
{/*  Large KPI Trio Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Target Revenue  */}
<div className="flex flex-col p-4 rounded-xl bg-surface-container-high/50 shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-outline">Target Revenue</span>
<span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">Plan Model v2</span>
</div>
<div className="flex items-baseline gap-2 mt-2">
<span className="font-display-lg text-display-lg font-semibold text-primary font-label-metric-lg">₹12.0L</span>
<span className="font-body-sm text-body-sm text-outline">planned</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Fixed institutional underwriting benchmark set for Sep 2026.</p>
</div>
{/*  Actual Revenue  */}
<div className="flex flex-col p-4 rounded-xl bg-surface-container-high/50 shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-tertiary">Actual Realized Revenue</span>
<span className="flex items-center gap-1 font-label-caps text-label-caps px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary">
<span className="material-symbols-outlined text-[13px]">verified</span> 100% Verified
              </span>
</div>
<div className="flex items-baseline gap-2 mt-2">
<span className="font-display-lg text-display-lg font-semibold text-on-surface font-label-metric-lg">₹10.7L</span>
<span className="font-body-sm text-body-sm text-semantic-warning font-label-metric-md">-11.0%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Derived from ₹9.4L e-invoicing credits + ₹1.3L recorded AA cash inflows.</p>
</div>
{/*  Plan Attainment  */}
<div className="flex flex-col p-4 rounded-xl bg-surface-container-high/50 shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-outline">Plan Attainment</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-warning">Net Gap -₹1.3L</span>
</div>
<div className="flex items-baseline gap-2 mt-2">
<span className="font-display-lg text-display-lg font-semibold text-semantic-warning font-label-metric-lg">89.2%</span>
<span className="font-body-sm text-body-sm text-outline">of objective</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Trailing 3-month rolling average variance has expanded from -5.0% to -10.8%.</p>
</div>
</div>
{/*  Segmented Attainment Linear Visualizer  */}
<div className="flex flex-col gap-2 p-4 rounded-xl bg-surface-container-high/30">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface font-medium flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-sm bg-tertiary"></span> Attained Realization Progress
            </span>
<div className="flex items-center gap-4">
<span className="text-outline">Realized: <strong className="text-on-surface font-label-metric-md">₹10.70L</strong></span>
<span className="text-outline">Delta Shortfall: <strong className="text-semantic-warning font-label-metric-md">₹1.30L</strong></span>
<span className="text-outline">Cap Ceiling: <strong className="text-primary font-label-metric-md">₹12.00L</strong></span>
</div>
</div>
{/*  Progress Track  */}
<div className="relative w-full h-3 rounded-full bg-surface-container-highest overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-tertiary-container via-tertiary to-primary-container rounded-full" style={{ width: '89.16%' }}></div>
<div className="absolute top-0 bottom-0 w-0.5 bg-semantic-warning" style={{ left: '89.16%' }}></div>
</div>
<div className="flex items-center justify-between font-label-caps text-label-caps text-outline pt-1">
<span>₹0.0L Baseline</span>
<span>Q3 Break-even Threshold (₹8.5L)</span>
<span className="text-primary">100% Plan (₹12.0L)</span>
</div>
</div>
</div>
</div>
{/*  Diagnostic Signal Detected Banner  */}
<div className="rounded-xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-4 shadow-lg relative overflow-hidden">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
<div className="flex items-start gap-3.5">
<div className="p-2.5 rounded-xl bg-semantic-warning/15 text-semantic-warning flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[24px]">radar</span>
</div>
<div className="flex flex-col gap-1 max-w-3xl">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-semibold text-semantic-warning">Signal detected: Plan Disconnect</span>
<span className="px-2 py-0.5 rounded-full bg-semantic-warning/20 text-semantic-warning font-label-caps text-label-caps">Risk Trigger #RT-402</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Revenue is slightly below target while customer collections are taking longer than expected (<strong className="text-semantic-warning font-label-metric-md">+15 days DSO</strong>). This divergence accelerates working-capital compression and draws down cash buffer by <strong className="text-on-surface font-label-metric-md">6 days</strong>.
            </p>
</div>
</div>
<div className="flex items-center flex-wrap gap-2 pl-11 lg:pl-0">
<Link className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-primary-container text-on-primary font-body-md text-body-md font-semibold hover:brightness-110 shadow-lg transition-all duration-200" href="/stress-lab">
<span>Test this in Stress Lab</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
<InspectAgingButton />
</div>
</div>
</div>
{/*  Section 1: Revenue Performance - Trailing 6 Months Bar Chart  */}
<div className="flex flex-col gap-4 rounded-xl bg-surface-container-low/70 backdrop-blur-xl p-6 shadow-xl">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Revenue Performance</h2>
<span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-surface-container-high text-outline uppercase tracking-wider">Historical Variance</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Monthly Target versus Verified Realized Revenues (Apr 2026 – Sep 2026)</p>
</div>
<div className="flex items-center gap-4">
</div>
</div>
<RevenuePerformanceChart />
{/*  Variance Insight Bar Footer  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-body-sm font-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">info</span>
<span>Cumulative Q2 realization stands at <strong className="text-on-surface font-label-metric-md">₹33.0L / ₹35.5L (92.9%)</strong>, driven lower by deferred packaging orders from Pune Auto Cluster.</span>
</div>
<span className="text-tertiary hover:underline font-label-caps text-label-caps uppercase tracking-wider flex items-center gap-1 cursor-default">
          Detailed Monthly Run-Rate <span className="material-symbols-outlined text-[14px]">chevron_right</span>
</span>
</div>
</div>
{/*  Section 2 & 3: Two-Column Deep Dive (Project Budget & Collection Performance)  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/*  Left Card: Project Budget & Capital Burn Progression  */}
<div className="flex flex-col gap-4 rounded-xl bg-surface-container-low/70 backdrop-blur-xl p-6 shadow-xl justify-between">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="p-2 rounded-lg bg-primary-container/20 text-primary">
<span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
</span>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Project Budget Burn</h3>
<span className="font-body-sm text-body-sm text-outline">Machinery Expansion &amp; Automation Capex</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-caps text-label-caps">FY26 Phase 1</span>
</div>
{/*  KPI Metric Strip  */}
<div className="grid grid-cols-3 gap-2 p-2 rounded-xl bg-surface-container-lowest/50">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase">Planned</span>
<span className="font-label-metric-lg text-label-metric-lg font-semibold text-on-surface mt-1">₹25.0L</span>
<span className="font-body-sm text-body-sm text-outline text-[11px]">Approved Limit</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase">Actual Spent</span>
<span className="font-label-metric-lg text-label-metric-lg font-semibold text-tertiary mt-1">₹21.3L</span>
<span className="font-body-sm text-body-sm text-outline text-[11px]">Disbursed to Date</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase">Adherence</span>
<span className="font-label-metric-lg text-label-metric-lg font-semibold text-semantic-success mt-1">85.2%</span>
<span className="font-body-sm text-body-sm text-semantic-success text-[11px]">Under Control</span>
</div>
</div>
{/*  Color-Coded Milestone Burn Stages  */}
<div className="flex flex-col gap-2">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Milestone Breakdown</span>
{/*  Milestone 1  */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface">Raw Material Procurement (Corrugated Flute Lines)</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-success">₹11.0L / ₹12.0L (92%)</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-semantic-success rounded-full" style={{ width: '92%' }}></div>
</div>
</div>
{/*  Milestone 2  */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface">Tooling Automation Phase 1 (Die-Cutter Retrofit)</span>
<span className="font-label-metric-md text-label-metric-md text-tertiary">₹7.0L / ₹9.0L (78%)</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-tertiary rounded-full" style={{ width: '78%' }}></div>
</div>
</div>
{/*  Milestone 3  */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface">Plant Logistics Fleet &amp; Sorting Conveyors</span>
<span className="font-label-metric-md text-label-metric-md text-primary">₹3.3L / ₹4.0L (86%)</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{ width: '86%' }}></div>
</div>
</div>
</div>
</div>
{/*  Summary Note  */}
<div className="p-2 rounded-xl bg-surface-container-high/40 flex items-center justify-between text-body-sm font-body-sm mt-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-semantic-success">check_circle</span>
<span className="text-on-surface-variant">Capex release paced conservative; <strong className="text-on-surface font-label-metric-md">₹3.7L</strong> remaining reserve buffer.</span>
</div>
<span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-semantic-success/10 text-semantic-success">Buffer Safe</span>
</div>
</div>
{/*  Right Card: Collection Performance & DSO Drift  */}
<div className="flex flex-col gap-4 rounded-xl bg-surface-container-low/70 backdrop-blur-xl p-6 shadow-xl justify-between">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="p-2 rounded-lg bg-semantic-critical/20 text-semantic-critical">
<span className="material-symbols-outlined text-[20px]">timelapse</span>
</span>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Collection Performance &amp; DSO Drift</h3>
<span className="font-body-sm text-body-sm text-outline">Days Sales Outstanding Telemetry</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-semantic-critical/15 text-semantic-critical font-label-caps text-label-caps">High Drag</span>
</div>
{/*  Collection Timing Metrics  */}
<div className="grid grid-cols-3 gap-2 p-2 rounded-xl bg-surface-container-lowest/50">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase">Target DSO</span>
<span className="font-label-metric-lg text-label-metric-lg font-semibold text-on-surface mt-1">32 <span className="text-xs font-normal">days</span></span>
<span className="font-body-sm text-body-sm text-outline text-[11px]">Underwritten Baseline</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase">Actual DSO</span>
<span className="font-label-metric-lg text-label-metric-lg font-semibold text-semantic-critical mt-1">47 <span className="text-xs font-normal">days</span></span>
<span className="font-body-sm text-body-sm text-semantic-critical text-[11px]">LTM High</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase">Collection Gap</span>
<span className="font-label-metric-lg text-label-metric-lg font-semibold text-semantic-warning mt-1">+15 <span className="text-xs font-normal">days</span></span>
<span className="font-body-sm text-body-sm text-semantic-warning text-[11px]">Severe Capital Drag</span>
</div>
</div>
{/*  Aging Cohort Distribution  */}
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Aging Cohort Exposure (Total ₹10.7L Book)</span>
<span className="font-label-metric-md text-label-metric-md text-outline text-[11px]">34 Active Debtor Accounts</span>
</div>
{/*  Visual Cohort Multi-Bar  */}
<div className="w-full h-3 rounded-full bg-surface-container-highest overflow-hidden flex">
<div className="h-full bg-semantic-success" style={{ width: '63.5%' }} title="0-30 Days: ₹6.8L"></div>
<div className="h-full bg-semantic-warning" style={{ width: '22.5%' }} title="31-45 Days: ₹2.4L"></div>
<div className="h-full bg-semantic-critical" style={{ width: '14.0%' }} title="46-60 Days: ₹1.5L"></div>
</div>
{/*  Aging Legend & Breakdown  */}
<div className="grid grid-cols-3 gap-2 pt-1">
<div className="flex flex-col p-2 rounded-lg bg-surface-container-high/40">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-semantic-success"></span>
<span className="font-body-sm text-body-sm font-medium text-on-surface">0–30 Days</span>
</div>
<span className="font-label-metric-md text-label-metric-md font-semibold text-on-surface mt-1">₹6.8L</span>
<span className="font-body-sm text-body-sm text-semantic-success text-[11px]">Healthy Normal (63.5%)</span>
</div>
<div className="flex flex-col p-2 rounded-lg bg-surface-container-high/40">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-semantic-warning"></span>
<span className="font-body-sm text-body-sm font-medium text-on-surface">31–45 Days</span>
</div>
<span className="font-label-metric-md text-label-metric-md font-semibold text-semantic-warning mt-1">₹2.4L</span>
<span className="font-body-sm text-body-sm text-outline text-[11px]">Follow-up Sent (22.5%)</span>
</div>
<div className="flex flex-col p-2 rounded-lg bg-surface-container-high/40">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-semantic-critical"></span>
<span className="font-body-sm text-body-sm font-medium text-on-surface">46–60 Days</span>
</div>
<span className="font-label-metric-md text-label-metric-md font-semibold text-semantic-critical mt-1">₹1.5L</span>
<span className="font-body-sm text-body-sm text-semantic-critical text-[11px]">Overdue Risk (14.0%)</span>
</div>
</div>
</div>
</div>
{/*  Industry Benchmark Callout  */}
<div className="p-2 rounded-xl bg-surface-container-high/40 flex items-center justify-between text-body-sm font-body-sm mt-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary">analytics</span>
<span className="text-on-surface-variant">Packaging sector median collection benchmark: <strong className="text-on-surface font-label-metric-md">36 days</strong>.</span>
</div>
<span className="font-label-metric-md text-label-metric-md text-semantic-critical text-[11px] font-semibold">+11d vs Peer Group</span>
</div>
</div>
</div>
{/*  Section 4: Operational Ledger Reality & Discrepancy Evidence Table  */}
<div className="flex flex-col gap-4 rounded-xl bg-surface-container-low/70 backdrop-blur-xl p-6 shadow-xl mb-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Ledger Proofs &amp; Variance Attribution</h3>
<span className="px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-label-caps text-label-caps">Dual-Channel Verified</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Reconciling commercial plan line-items with institutional bank feeds and GST filings.</p>
</div>
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm text-outline">Sort by:</span>
<select className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm focus:outline-none cursor-pointer">
<option>Largest Negative Variance</option>
<option>Highest Target Amount</option>
<option>Fulfillment Status</option>
</select>
</div>
</div>
{/*  Ledger Table  */}
<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-outline font-label-caps text-label-caps uppercase tracking-wider border-b border-white/5">
<th className="py-3 px-4">Line Item / Contract Stream</th>
<th className="py-3 px-4">Ledger Source</th>
<th className="py-3 px-4 text-right">Target Baseline</th>
<th className="py-3 px-4 text-right">Actual Realized</th>
<th className="py-3 px-4 text-right">Delta / Variance</th>
<th className="py-3 px-4 text-center">Attainment</th>
<th className="py-3 px-4 text-center">Audit Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 font-body-sm text-body-sm">
{/*  Row 1: Heavy Negative Variance  */}
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3.5 px-4 font-medium text-on-surface flex flex-col">
<span>Automotive Heavy Fluting Line</span>
<span className="font-body-sm text-[11px] text-outline">Tier-1 OEM Supplier Contract #410</span>
</td>
<td className="py-3.5 px-4 text-on-surface-variant">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-label-metric-md">GSTR-1 + ICICI AA</span>
</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-primary">₹5.20L</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-on-surface font-semibold">₹4.10L</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-semantic-critical font-medium">-₹1.10L (-21%)</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-semantic-critical/15 text-semantic-critical font-label-caps text-label-caps font-semibold">78.8%</span>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1 text-semantic-warning font-label-caps text-label-caps">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-warning"></span> Delayed Delivery
                </span>
</td>
</tr>
{/*  Row 2: Near Par Realization  */}
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3.5 px-4 font-medium text-on-surface flex flex-col">
<span>E-Commerce Micro-Flute Boxes</span>
<span className="font-body-sm text-[11px] text-outline">Rapid Delivery 3PL Consortium</span>
</td>
<td className="py-3.5 px-4 text-on-surface-variant">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-label-metric-md">E-Way Bills + HDFC AA</span>
</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-primary">₹3.80L</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-on-surface font-semibold">₹3.75L</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-on-surface-variant font-medium">-₹0.05L (-1.3%)</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps font-semibold">98.7%</span>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1 text-semantic-success font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Reconciled
                </span>
</td>
</tr>
{/*  Row 3: Slight Surplus Realization  */}
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3.5 px-4 font-medium text-on-surface flex flex-col">
<span>Pharma Cold-Chain Corrugated Liners</span>
<span className="font-body-sm text-[11px] text-outline">Specialty Moisture-Proof Spec</span>
</td>
<td className="py-3.5 px-4 text-on-surface-variant">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-label-metric-md">GSTR-3B + SBI Sweep</span>
</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-primary">₹2.00L</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-on-surface font-semibold">₹2.15L</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-semantic-success font-medium">+₹0.15L (+7.5%)</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps font-semibold">107.5%</span>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1 text-semantic-success font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Overperformed
                </span>
</td>
</tr>
{/*  Row 4: Minor Shortfall  */}
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3.5 px-4 font-medium text-on-surface flex flex-col">
<span>Retail FMCG Die-Cut Trays</span>
<span className="font-body-sm text-[11px] text-outline">Consumer Goods Packager Master Agreement</span>
</td>
<td className="py-3.5 px-4 text-on-surface-variant">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-label-metric-md">GSTR-1 + Bank Flow</span>
</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-primary">₹1.00L</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-on-surface font-semibold">₹0.70L</td>
<td className="py-3.5 px-4 text-right font-label-metric-md text-semantic-warning font-medium">-₹0.30L (-30%)</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-semantic-warning/15 text-semantic-warning font-label-caps text-label-caps font-semibold">70.0%</span>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1 text-semantic-warning font-label-caps text-label-caps">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-warning"></span> Payment Transit
                </span>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Action Footer for Ledger  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 border-t border-white/5">
<div className="flex items-center gap-2 text-body-sm font-body-sm text-outline">
<span className="material-symbols-outlined text-[16px] text-semantic-success">security</span>
<span>Ledger discrepancies backed by cryptographic AA telemetry consent token <span className="font-label-metric-md text-on-surface-variant">#AA-8841-AARAV</span>.</span>
</div>
<LedgerFooterActions />
</div>
</div>

      </div>
    </div>
  );
}
