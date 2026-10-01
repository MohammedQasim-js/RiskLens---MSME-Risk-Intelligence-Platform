import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import Link from 'next/link';
import { StressLabChart } from './StressLabChart';
import { RunScenarioButton, ExportStressDossierButton } from './StressLabInteractions';


export default async function StressLabPage() {
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
      {/*  Top Command Ribbon & Scenario Meta  */}
<div className="px-8 py-6 flex flex-col xl:flex-row xl:items-center justify-between gap-4 border-b border-border-glass bg-surface-container-lowest/60 backdrop-blur-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-caps text-label-caps text-accent-electric tracking-widest uppercase">Risk Sensitivity Sandbox</span>
<span className="text-outline text-xs">/</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Aarav Packaging Pvt Ltd</span>
<span className="text-outline text-xs">/</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-label-caps font-label-caps border border-secondary-container/40 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-tertiary">alt_route</span>
          Counterfactual Engine v3.8
        </span>
</div>
<div className="flex items-baseline gap-4 mt-1">
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-semibold">Stress Lab</h1>
<p className="font-body-md text-body-md text-outline">What happens to your business if operational and market conditions change?</p>
</div>
</div>
{/*  Actions & Presets Ribbon  */}
<div className="flex items-center gap-2 flex-wrap">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-tertiary text-[18px] pointer-events-none">tune</span>
<select className="pl-9 pr-10 py-2 rounded-xl bg-surface-container-low text-on-surface text-body-sm font-medium border border-border-glass focus:border-accent-electric/50 focus:outline-none focus:ring-1 focus:ring-accent-electric cursor-pointer appearance-none shadow-sm transition-all hover:bg-surface-container" id="scenarioPreset">
<option>Preset: Severe Supply Chain &amp; Payment Shock</option>
<option>Preset: Mild Delayed Receivables (+10d)</option>
<option>Preset: Raw Material Price Spike (Kraft Paper +25%)</option>
<option>Preset: Tier-1 Client Churn &amp; Order Freeze</option>
<option>Preset: RBI Base Rate +150 bps Tightening</option>
</select>
<span className="material-symbols-outlined absolute right-3 text-outline text-[18px] pointer-events-none">unfold_more</span>
</div>
<button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high text-on-surface text-body-sm font-medium border border-border-glass transition-all hover:border-border-glass-strong shadow-sm" id="resetBtn">
<span className="material-symbols-outlined text-[16px] text-outline">restart_alt</span>
<span>Reset Baseline</span>
</button>
{/* Export Stress Dossier Interactive Button */}
<ExportStressDossierButton />
</div>
</div>
{/*  Main 2-Column Institutional Workbench  */}
<div className="p-8 grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
{/*  LEFT COLUMN: Shock Parameters & Stress Sliders (5 cols)  */}
<div className="xl:col-span-5 flex flex-col gap-6">
<div className="rounded-xl bg-glass-fill border border-border-glass backdrop-blur-xl p-6 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.45)] relative overflow-hidden">
{/*  Subtle corner glow  */}
<div className="absolute -top-16 -left-16 w-44 h-44 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
<div className="flex items-center justify-between pb-4 border-b border-border-glass">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[20px]">sliders</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">Shock Parameters &amp; Sliders</h2>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-outline text-label-caps font-label-caps uppercase tracking-wider">
            Deterministic Mode
          </span>
</div>
<div className="mt-6 flex flex-col gap-10">
{/*  Parameter 1: Revenue Shock  */}
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="font-body-md text-body-md font-medium text-on-surface flex items-center gap-1.5">
<span>Revenue Contraction</span>
<span className="material-symbols-outlined text-[15px] text-outline cursor-help" title="Immediate contraction in monthly billed volume across tier-2 converters">info</span>
</label>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-semantic-critical/15 text-semantic-critical font-label-metric-md text-label-metric-md border border-semantic-critical/30" id="valRevenueShock">-20%</span>
</div>
</div>
<input className="w-full accent-semantic-critical bg-surface-container-highest h-1.5 rounded-lg appearance-none cursor-pointer" id="sliderRevenue" max="40" min="10" step="5" type="range" value="20" />
<div className="flex items-center justify-between text-label-caps font-label-caps text-outline px-0.5">
<span>-10%</span>
<span className="text-semantic-critical font-label-metric-md text-[11px] bg-surface-container-low px-2 py-0.5 rounded border border-border-glass">Loss of ~₹2.14L/mo top-line</span>
<span>-40%</span>
</div>
</div>
{/*  Parameter 2: Receivable Delay  */}
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="font-body-md text-body-md font-medium text-on-surface flex items-center gap-1.5">
<span>Receivable Collections Delay</span>
<span className="material-symbols-outlined text-[15px] text-outline cursor-help" title="Slippage in buyer payment cycles beyond stated GST credit terms">info</span>
</label>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-semantic-warning/15 text-semantic-warning font-label-metric-md text-label-metric-md border border-semantic-warning/30" id="valDelay">+15 Days</span>
</div>
</div>
<input className="w-full accent-semantic-warning bg-surface-container-highest h-1.5 rounded-lg appearance-none cursor-pointer" id="sliderDelay" max="45" min="7" step="1" type="range" value="15" />
<div className="flex items-center justify-between text-label-caps font-label-caps text-outline px-0.5">
<span>+7d (DSO 54d)</span>
<span className="text-semantic-warning font-label-metric-md text-[11px] bg-surface-container-low px-2 py-0.5 rounded border border-border-glass">₹4.8L receivables trapped · DSO → 62d</span>
<span>+45d (DSO 92d)</span>
</div>
</div>
{/*  Parameter 3: Cost Inflation  */}
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="font-body-md text-body-md font-medium text-on-surface flex items-center gap-1.5">
<span>Input Cost Inflation (Kraft Paper)</span>
<span className="material-symbols-outlined text-[15px] text-outline cursor-help" title="Corrugated roll &amp; raw virgin craft starch market price surge">info</span>
</label>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-metric-md text-label-metric-md border border-tertiary-container/50" id="valInflation">+10%</span>
</div>
</div>
<input className="w-full accent-tertiary bg-surface-container-highest h-1.5 rounded-lg appearance-none cursor-pointer" id="sliderInflation" max="25" min="5" step="1" type="range" value="10" />
<div className="flex items-center justify-between text-label-caps font-label-caps text-outline px-0.5">
<span>+5%</span>
<span className="text-tertiary font-label-metric-md text-[11px] bg-surface-container-low px-2 py-0.5 rounded border border-border-glass">+₹78K/mo OPEX expansion</span>
<span>+25%</span>
</div>
</div>
{/*  Parameter 4: Project Overrun (Die-Cutter capex)  */}
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="font-body-md text-body-md font-medium text-on-surface flex items-center gap-1.5">
<span>Capex Overrun (Rotary Die-Cutter)</span>
<span className="material-symbols-outlined text-[15px] text-outline cursor-help" title="Unbudgeted installation delays and spares procurement">info</span>
</label>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-secondary/20 text-secondary font-label-metric-md text-label-metric-md border border-secondary/30" id="valCapex">+15%</span>
</div>
</div>
<input className="w-full accent-secondary bg-surface-container-highest h-1.5 rounded-lg appearance-none cursor-pointer" id="sliderCapex" max="50" min="0" step="5" type="range" value="15" />
<div className="flex items-center justify-between text-label-caps font-label-caps text-outline px-0.5">
<span>0% (On Schedule)</span>
<span className="text-secondary font-label-metric-md text-[11px] bg-surface-container-low px-2 py-0.5 rounded border border-border-glass">Phase-1 outlay drag: +₹1.20L</span>
<span>+50% Overrun</span>
</div>
</div>
{/*  Parameter 5: Customer Loss / Churn  */}
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="font-body-md text-body-md font-medium text-on-surface flex items-center gap-1.5">
<span>Anchor Customer Default / Suspension</span>
<span className="material-symbols-outlined text-[15px] text-outline cursor-help" title="Abrupt contract pause or liquidation from top anchor buyers">info</span>
</label>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-semantic-critical/20 text-semantic-critical font-label-metric-md text-label-metric-md border border-semantic-critical/40" id="valChurn">25% Volume</span>
</div>
</div>
<input className="w-full accent-semantic-critical bg-surface-container-highest h-1.5 rounded-lg appearance-none cursor-pointer" id="sliderChurn" max="100" min="0" step="5" type="range" value="25" />
<div className="flex items-center justify-between text-label-caps font-label-caps text-outline px-0.5">
<span>0% Stable</span>
<span className="text-semantic-critical font-label-metric-md text-[11px] bg-surface-container-low px-2 py-0.5 rounded border border-border-glass">Top Auto OEM contract suspended</span>
<span>100% Complete</span>
</div>
</div>
</div>
{/*  Action Bar in Controller  */}
<div className="mt-10 pt-4 border-t border-border-glass flex flex-col gap-2">
<div className="flex items-center gap-2">
<RunScenarioButton />
<button className="p-3 rounded-xl bg-surface-container-high/80 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface border border-border-glass transition-colors" id="quickResetBtn" title="Revert to baseline state">
<span className="material-symbols-outlined text-[20px]">rotate_left</span>
</button>
</div>
<div className="flex items-start gap-2 mt-1 px-1">
<span className="material-symbols-outlined text-[15px] text-tertiary mt-0.5">verified</span>
<p className="font-body-sm text-[11px] text-outline leading-tight">
              Simulates deterministic liquidity impact across a 90-day horizon using verified RBI AA banking telemetry, GSTN e-waybill cycles, and active vendor schedules.
            </p>
</div>
</div>
</div>
{/*  Historical Precedent Badge  */}
<div className="rounded-xl bg-surface-container-low/60 border border-border-glass p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-tertiary-container/20 border border-tertiary-container/30 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary text-[20px]">history_toggle_off</span>
</div>
<div className="flex flex-col">
<span className="font-body-md text-body-md font-medium text-on-surface">Historical Stress Precedent: Q3 FY24</span>
<span className="font-body-sm text-body-sm text-outline">Entity weathered +18d receivables shock with ₹90K 8 trough via emergency supplier trade credit deferral.</span>
</div>
</div>
</div>
{/*  RIGHT COLUMN: Dynamic Results & Comparative Analysis (7 cols)  */}
<div className="xl:col-span-7 flex flex-col gap-6">
{/*  1. Comparative Matrix Ribbon (Baseline vs Scenario vs Delta)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
{/*  Metric 1: Probability of Default  */}
<div className="p-4 rounded-xl bg-glass-fill border border-border-glass backdrop-blur-md flex flex-col justify-between transition-all hover:border-border-glass-strong">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Prob. of Default (PD)</span>
<span className="px-1.5 py-0.5 rounded bg-semantic-critical/20 text-semantic-critical text-[10px] font-label-caps font-bold">CRITICAL</span>
</div>
<div className="mt-4 flex flex-col">
<div className="flex items-baseline justify-between">
<span className="font-body-sm text-[11px] text-outline">Baseline: 8.2%</span>
<span className="font-headline-lg text-headline-lg font-semibold text-semantic-critical tracking-tight">14.7%</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-border-glass mt-1">
<span className="font-label-caps text-[10px] text-outline">Scenario Shift</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-critical flex items-center">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span> +6.5 pts
              </span>
</div>
</div>
</div>
{/*  Metric 2: Risk Band Rating  */}
<div className="p-4 rounded-xl bg-glass-fill border border-border-glass backdrop-blur-md flex flex-col justify-between transition-all hover:border-border-glass-strong">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Internal Risk Band</span>
<span className="material-symbols-outlined text-semantic-warning text-[16px]">warning</span>
</div>
<div className="mt-4 flex flex-col">
<div className="flex items-baseline justify-between">
<span className="font-body-sm text-[11px] text-outline">Base: Moderate</span>
<span className="font-headline-lg text-headline-lg font-semibold text-semantic-critical tracking-tight">High Risk</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-border-glass mt-1">
<span className="font-label-caps text-[10px] text-outline">Grade Migration</span>
<span className="font-label-caps text-label-caps text-semantic-critical font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-critical animate-ping"></span> Downgrade 2 Tiers
              </span>
</div>
</div>
</div>
{/*  Metric 3: Minimum Cash Trough  */}
<div className="p-4 rounded-xl bg-glass-fill border border-border-glass backdrop-blur-md flex flex-col justify-between transition-all hover:border-border-glass-strong">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Min. Cash Trough</span>
<span className="material-symbols-outlined text-semantic-critical text-[16px]">trending_down</span>
</div>
<div className="mt-4 flex flex-col">
<div className="flex items-baseline justify-between">
<span className="font-body-sm text-[11px] text-outline">Base: ₹1.85L</span>
<span className="font-headline-lg text-headline-lg font-semibold text-semantic-critical tracking-tight">₹42K</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-border-glass mt-1">
<span className="font-label-caps text-[10px] text-outline">Floor Breach</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-critical flex items-center">
<span className="material-symbols-outlined text-[14px]">arrow_downward</span> -₹1.43L
              </span>
</div>
</div>
</div>
{/*  Metric 4: Cash Buffer Days  */}
<div className="p-4 rounded-xl bg-glass-fill border border-border-glass backdrop-blur-md flex flex-col justify-between transition-all hover:border-border-glass-strong">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Liquidity Runway</span>
<span className="px-1.5 py-0.5 rounded bg-semantic-warning/20 text-semantic-warning text-[10px] font-label-caps font-bold">&lt;15d ALERT</span>
</div>
<div className="mt-4 flex flex-col">
<div className="flex items-baseline justify-between">
<span className="font-body-sm text-[11px] text-outline">Base: 24 Days</span>
<span className="font-headline-lg text-headline-lg font-semibold text-semantic-warning tracking-tight">6 Days</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-border-glass mt-1">
<span className="font-label-caps text-[10px] text-outline">Runway Burn</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-critical flex items-center">
<span className="material-symbols-outlined text-[14px]">arrow_downward</span> -18 Days
              </span>
</div>
</div>
</div>
</div>
{/*  2. Dual-Curve Chart Container  */}
<div className="rounded-xl bg-glass-fill border border-border-glass backdrop-blur-xl p-6 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.45)] flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-border-glass">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-accent-electric text-[20px]">area_chart</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Cash Trajectory Under Stress (90-Day Simulation)</h3>
</div>
<p className="font-body-sm text-body-sm text-outline">Direct comparison against deterministic baseline cash projections</p>
</div>
<div className="flex items-center gap-4 flex-wrap text-label-caps font-label-caps">
<div className="flex items-center gap-1.5">
<span className="w-3 h-1 rounded bg-tertiary shadow-[0_0_8px_#4cd7f6]"></span>
<span className="text-on-surface-variant">Baseline Plan</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-1 rounded bg-semantic-critical shadow-[0_0_8px_#F43F5E]"></span>
<span className="text-semantic-critical">Stress Scenario</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-0.5 border-b border-dashed border-semantic-warning"></span>
<span className="text-semantic-warning">Covenant Threshold (₹65K)</span>
</div>
</div>
</div>
{/*  Interactive Recharts Chart Canvas  */}
<div className="pt-4 pb-2 relative">
  <StressLabChart />
</div>
<div className="flex items-center justify-between pt-1 text-outline text-body-sm">
<span className="flex items-center gap-1 text-xs">
<span className="material-symbols-outlined text-[15px] text-semantic-warning">warning</span>
            Covenant breach occurs on Day 64 unless trade credit line is activated.
          </span>
<span className="font-label-metric-md text-[11px] text-outline">Monte Carlo Confidence: 94.2%</span>
</div>
</div>
{/*  3. Analytical Synthesis & Underwriter Recommendations  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
{/*  Deterministic Diagnostics Callout (7 cols)  */}
<div className="md:col-span-7 rounded-xl bg-glass-fill border border-border-glass p-4 backdrop-blur-md flex flex-col justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">psychology</span>
<h4 className="font-headline-sm text-[16px] text-on-surface font-semibold">What Changed? — Deterministic Diagnostics</h4>
</div>
<p className="font-body-md text-body-md text-on-surface leading-snug">
              Revenue pressure (<span className="text-semantic-critical font-medium">-20%</span>) combined with delayed collections (<span className="text-semantic-warning font-medium">+15d</span>) materially shrinks the operating buffer below the statutory payroll ceiling.
            </p>
</div>
{/*  Granular Driver Pills  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
<div className="p-2 rounded-lg bg-surface-container-low border border-border-glass flex flex-col">
<span className="font-label-caps text-[10px] text-outline uppercase">Liquidity Runway</span>
<span className="font-label-metric-md text-body-sm text-semantic-critical font-medium">Buffer ↓ 18 days</span>
<span className="text-[10px] text-outline-variant">Collapses from 24d to 6d runway</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low border border-border-glass flex flex-col">
<span className="font-label-caps text-[10px] text-outline uppercase">Default Probability</span>
<span className="font-label-metric-md text-body-sm text-semantic-critical font-medium">PD ↑ 6.5 pts</span>
<span className="text-[10px] text-outline-variant">Elevates from 8.2% to 14.7%</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low border border-border-glass flex flex-col">
<span className="font-label-caps text-[10px] text-outline uppercase">Liquidity Floor</span>
<span className="font-label-metric-md text-body-sm text-semantic-critical font-medium">Trough ↓ ₹1.43L</span>
<span className="text-[10px] text-outline-variant">Touches ₹42K on Dec 12</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low border border-border-glass flex flex-col">
<span className="font-label-caps text-[10px] text-outline uppercase">Working Capital Gap</span>
<span className="font-label-metric-md text-body-sm text-semantic-warning font-medium">Expands +21.4 Days</span>
<span className="text-[10px] text-outline-variant">Divergence in supplier cycles</span>
</div>
</div>
</div>
{/*  Underwriter Mitigant Action Card (5 cols)  */}
<div className="md:col-span-5 rounded-xl bg-gradient-to-br from-secondary-container/20 to-surface-container-high/80 border border-secondary/30 p-4 backdrop-blur-md flex flex-col justify-between gap-4 shadow-lg">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">Underwriter Mitigant</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-normal">
<strong className="text-on-surface font-semibold">Recommended Countermeasure:</strong> Secure a <strong>₹8.0L</strong> temporary invoice discounting line against verified TReDS e-invoices to prevent cash trough from breaching the ₹65K covenant threshold.
            </p>
</div>
<div className="flex flex-col gap-2">
<button className="w-full py-2.5 px-4 rounded-xl bg-primary text-on-primary font-body-md text-body-md font-semibold flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.98] transition-all shadow-[0_0_16px_rgba(192,193,255,0.25)]">
<span>Model Working Capital Line</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<div className="flex items-center justify-between text-[11px] text-outline px-1">
<span>Eligible TReDS limit: ₹12.5L</span>
<span className="text-semantic-success flex items-center gap-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span> Pre-approved
              </span>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Interactive Client-side Script for Micro-Interactions  */}
{/*  Script block removed for React conversion  */}

    </div>
  );
}
