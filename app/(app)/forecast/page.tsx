import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import Link from 'next/link';
import { ForecastExportButton, HorizonControls } from './ForecastActions';
import { ForecastChart } from './ForecastChart';


export default async function ForecastPage() {
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
      {/*  Top Utility Context Bar  */}
<div className="px-8 py-2 bg-surface-container-lowest/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-2 text-outline">
<div className="flex items-center gap-2 font-label-caps text-label-caps tracking-widest uppercase">
<span className="text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">query_stats</span>
        Predictive Horizon Engine
      </span>
<span className="text-surface-variant">/</span>
<span className="text-on-surface">Aarav Packaging Pvt Ltd</span>
<span className="text-surface-variant">/</span>
<span className="text-outline">Monte Carlo Inflow Simulation (v4.2)</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 font-label-metric-md text-body-sm text-outline">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
        Ledger Base: <span className="text-on-surface">Verified AA Sync</span>
</div>
<div className="h-3 w-px bg-surface-variant"></div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[14px] text-accent-electric">security</span>
        RBI / AA Compliant Enclave
      </div>
</div>
</div>
{/*  Header Section with Predictive Scope & Horizon Pills  */}
<section className="px-8 pt-6 pb-4 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
<div className="flex flex-col max-w-2xl">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-caps text-label-caps tracking-wider uppercase">
          Dynamic Liquidity Forecasting
        </span>
<span className="text-outline text-body-sm font-label-metric-md">Run #8492-B</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
        90-Day Cash Outlook
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
        Understand whether your current operating pattern can sustain the next three months under stochastic revenue and payables variance.
      </p>
</div>
{/*  Horizon Controls & Certainty Badge  */}
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<HorizonControls />
<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high/60 backdrop-blur-sm">
<span className="material-symbols-outlined text-tertiary text-[18px]">tune</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Confidence Interval</span>
<span className="font-label-metric-md text-body-sm text-on-surface font-semibold">95% (p10 — p90)</span>
</div>
</div>
</div>
</section>
{/*  Top Metrics Quartet  */}
<section className="px-8 py-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
{/*  Metric 1: Expected Minimum Cash  */}
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-xl p-4 shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container/70 transition-all">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-tertiary/10 rounded-full blur-2xl group-hover:bg-tertiary/20 transition-all pointer-events-none"></div>
<div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">Expected Minimum Cash</span>
<span className="material-symbols-outlined text-[18px] text-tertiary">trending_down</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg font-headline-lg text-on-surface tracking-tight">₹88K</span>
<span className="font-label-caps text-label-caps px-1.5 py-0.5 rounded bg-semantic-warning/15 text-semantic-warning">Sensitivity Peak</span>
</div>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-body-sm text-on-surface-variant font-label-metric-md">
<span>Projected Trough:</span>
<span className="text-on-surface font-semibold">Dec 14, 2026</span>
</div>
</div>
{/*  Metric 2: Lowest Balance vs Covenant  */}
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-xl p-4 shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container/70 transition-all">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-semantic-warning/10 rounded-full blur-2xl group-hover:bg-semantic-warning/20 transition-all pointer-events-none"></div>
<div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">Lowest Projected Balance</span>
<span className="material-symbols-outlined text-[18px] text-semantic-warning">warning</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg font-headline-lg text-on-surface tracking-tight">₹88K</span>
<span className="font-label-metric-md text-body-sm text-semantic-success">+₹23K safe</span>
</div>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-body-sm text-on-surface-variant font-label-metric-md">
<span>Covenant Trigger:</span>
<span className="text-error font-medium">₹65K Min. Buffer</span>
</div>
</div>
{/*  Metric 3: Buffer Runway  */}
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-xl p-4 shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container/70 transition-all">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-semantic-success/10 rounded-full blur-2xl group-hover:bg-semantic-success/20 transition-all pointer-events-none"></div>
<div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">Operating Buffer Days</span>
<span className="material-symbols-outlined text-[18px] text-semantic-success">hourglass_top</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg font-headline-lg text-on-surface tracking-tight">24 Days</span>
<span className="font-label-caps text-label-caps px-1.5 py-0.5 rounded bg-semantic-success/15 text-semantic-success">Comfortable</span>
</div>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-body-sm text-on-surface-variant font-label-metric-md">
<span>Target: 30d</span>
<span className="text-semantic-critical">Alert band: &lt;15d</span>
</div>
</div>
{/*  Metric 4: Expected Inflows & Outflows  */}
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-xl p-4 shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container/70 transition-all">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all pointer-events-none"></div>
<div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">90D Net Trajectory</span>
<span className="material-symbols-outlined text-[18px] text-primary">swap_horiz</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg font-headline-lg text-on-surface tracking-tight">+₹0.8L</span>
<span className="font-label-caps text-label-caps px-1.5 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-semibold">Net Positive</span>
</div>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-body-sm text-on-surface-variant font-label-metric-md">
<span>In: <strong className="text-semantic-success">₹13.6L</strong></span>
<span>Out: <strong className="text-outline">₹12.8L</strong></span>
</div>
</div>
</section>
{/*  Timeline Milestone Ribbon  */}
<section className="px-8 py-4">
<div className="bg-surface-container-low/70 backdrop-blur-md rounded-xl p-4 shadow-md">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary">event_upcoming</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Predictive Horizon Milestones</span>
</div>
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">3-Stage Rolling Review</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
{/*  Stage 1: 30 Days  */}
<div className="p-4 rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high/70 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-caps text-label-caps uppercase font-semibold">
                Stage 1 · 30 Days (Oct 2026)
              </span>
<span className="flex items-center gap-1 font-label-metric-md text-[11px] text-semantic-success">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span> High Certainty
              </span>
</div>
<div className="mt-4">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Min. Balance Projected</span>
<div className="font-headline-md text-headline-md text-on-surface font-semibold font-label-metric-md mt-0.5">₹1.85L</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Healthy operational liquidity cushion. Key Tier-1 OEM invoices (Bajaj Auto Ancillary) clearing predictably with minimal collection drag.
            </p>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-[11px] font-label-metric-md text-outline">
<span>Forecast Error Corridor:</span>
<span className="text-on-surface">±₹12,000</span>
</div>
</div>
{/*  Stage 2: 60 Days  */}
<div className="p-4 rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high/70 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary font-label-caps text-label-caps uppercase font-semibold">
                Stage 2 · 60 Days (Nov 2026)
              </span>
<span className="flex items-center gap-1 font-label-metric-md text-[11px] text-semantic-warning">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-warning"></span> Moderate Certainty
              </span>
</div>
<div className="mt-4">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Min. Balance Projected</span>
<div className="font-headline-md text-headline-md text-on-surface font-semibold font-label-metric-md mt-0.5">₹1.21L</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Working capital compression begins as kraft paperboard inventory restock cycles coincide with Diwali seasonal delivery runs.
            </p>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-[11px] font-label-metric-md text-outline">
<span>Forecast Error Corridor:</span>
<span className="text-on-surface">±₹28,000</span>
</div>
</div>
{/*  Stage 3: 90 Days  */}
<div className="p-4 rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high/70 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-error-container/30 text-error font-label-caps text-label-caps uppercase font-semibold">
                Stage 3 · 90 Days (Dec 2026)
              </span>
<span className="flex items-center gap-1 font-label-metric-md text-[11px] text-semantic-critical">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-critical animate-pulse"></span> Sensitivity Zone
              </span>
</div>
<div className="mt-4">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Projected Trough Balance</span>
<div className="font-headline-md text-headline-md text-semantic-warning font-semibold font-label-metric-md mt-0.5">₹0.88L (₹88K)</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Machinery tooling installment (₹2.4L) due mid-month. Cash remains above covenant threshold (₹65K), but requires zero customer payment defaults.
            </p>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-[11px] font-label-metric-md text-outline">
<span>Forecast Error Corridor:</span>
<span className="text-on-surface">±₹54,000</span>
</div>
</div>
</div>
</div>
</section>
{/*  Main Cash-Balance Stochastic Forecast Visualization  */}
<section className="px-8 py-2">
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-xl p-6 shadow-xl relative overflow-hidden">
{/*  Section Topbar with Chart Info and Legend  */}
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6">
<div>
<div className="flex items-center gap-2">
<span className="font-headline-md text-headline-md text-on-surface font-semibold">Projected Cash Balance Trajectory</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps">Daily Resolution</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Historical settled ledger plotted alongside Monte Carlo median and p10–p90 dispersion fan.
          </p>
</div>
{/*  Analytical Legend  */}
<div className="flex flex-wrap items-center gap-4 font-label-caps text-label-caps text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="w-4 h-0.5 bg-tertiary inline-block"></span>
<span>Historical Settled</span>
</div>
<div className="flex items-center gap-2">
<span className="w-4 h-0.5 bg-secondary-fixed shadow-[0_0_6px_#c0c1ff] inline-block"></span>
<span>Median Forecast (p50)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3.5 h-2.5 rounded-sm bg-primary/20 inline-block"></span>
<span>90% Confidence Corridor</span>
</div>
<div className="flex items-center gap-2">
<span className="w-4 h-0.5 border-b border-dashed border-error inline-block"></span>
<span>Liquidity Covenant (₹65K)</span>
</div>
</div>
</div>
{/*  Interactive Recharts Chart Canvas  */}
<ForecastChart />
{/*  Quick Interactive Chart Bar Footer  */}
<div className="mt-4 pt-2 flex flex-wrap items-center justify-between gap-2 text-body-sm text-outline font-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">info</span>
<span>Simulation incorporates rolling GSTN filing regularity, seasonal scrap recoveries, and vendor credit extensions.</span>
</div>
<div className="flex items-center gap-4 font-label-metric-md">
<span>Simulation Iterations: <strong className="text-on-surface">10,000 paths</strong></span>
<span>Convergence: <strong className="text-semantic-success">99.8%</strong></span>
</div>
</div>
</div>
</section>
{/*  Forecast Signals & Health Matrix  */}
<section className="px-8 py-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">health_and_safety</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Institutional Forecast Health Signals</h2>
</div>
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Multi-vector assessment</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
{/*  Signal 1: Liquidity Runway  */}
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-xl p-4 shadow-md flex flex-col justify-between hover:bg-surface-container/70 transition-all">
<div>
<div className="flex items-center justify-between">
<span className="font-headline-sm text-body-md font-semibold text-on-surface">Liquidity Cushion</span>
<span className="px-2 py-0.5 rounded-full bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
              Healthy
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
            Current 24-day operational runway exceeds the regional packaging cluster baseline safety floor of 18 days. Immediate cash buffers remain intact.
          </p>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-[11px] font-label-metric-md text-outline">
<span>Runway: 24 Days</span>
<span className="text-semantic-success">Comfort Band</span>
</div>
</div>
{/*  Signal 2: Receivables Realization  */}
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-xl p-4 shadow-md flex flex-col justify-between hover:bg-surface-container/70 transition-all">
<div>
<div className="flex items-center justify-between">
<span className="font-headline-sm text-body-md font-semibold text-on-surface">Receivables Velocity</span>
<span className="px-2 py-0.5 rounded-full bg-semantic-warning/15 text-semantic-warning font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-warning animate-pulse"></span>
              Watch
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
            Top 2 non-automotive debtors are trending 12 days past customary credit terms. Exposure of ₹4.8L outstanding balance under active underwriting monitor.
          </p>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-[11px] font-label-metric-md text-outline">
<span>Overdue: ₹4.8L</span>
<span className="text-semantic-warning">DSO +12 Days</span>
</div>
</div>
{/*  Signal 3: Debt Service Coverage  */}
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-xl p-4 shadow-md flex flex-col justify-between hover:bg-surface-container/70 transition-all">
<div>
<div className="flex items-center justify-between">
<span className="font-headline-sm text-body-md font-semibold text-on-surface">Debt Service &amp; EMI</span>
<span className="px-2 py-0.5 rounded-full bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
              Stable
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
            Term loan EMI (₹62K/mo) and CC interest obligations covered at 1.82x projected operating cash flow. Scheduled auto-debits show negligible failure probability.
          </p>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-[11px] font-label-metric-md text-outline">
<span>Projected DSCR: 1.82x</span>
<span className="text-semantic-success">Auto-Debit Safe</span>
</div>
</div>
{/*  Signal 4: Project Spend & Capex Outlay  */}
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-xl p-4 shadow-md flex flex-col justify-between hover:bg-surface-container/70 transition-all">
<div>
<div className="flex items-center justify-between">
<span className="font-headline-sm text-body-md font-semibold text-on-surface">Capex &amp; Outlays</span>
<span className="px-2 py-0.5 rounded-full bg-error-container/20 text-error font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-critical"></span>
              Moderate Pressure
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
            Scheduled corrugated die-cutter installment of ₹2.4L due Dec 14 triggers cash trough down to ₹88K. Temporary working capital facility pre-approved if needed.
          </p>
</div>
<div className="mt-4 pt-1 flex items-center justify-between text-[11px] font-label-metric-md text-outline">
<span>Capex Outlay: ₹2.4L</span>
<span className="text-semantic-warning">Dec 14 Due</span>
</div>
</div>
</div>
</section>
{/*  Model Provenance, Evidence Feeds & Export Drawer Bar  */}
<section className="px-8 pt-1 pb-10">
<div className="bg-surface-container-low/90 backdrop-blur-md rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
<div className="flex flex-wrap items-center gap-4 text-body-sm text-on-surface-variant font-label-metric-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">memory</span>
<span className="text-on-surface">Bayesian Monte Carlo Engine v4.2</span>
</div>
<div className="h-3 w-px bg-surface-variant hidden sm:block"></div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
<span>GST E-Way Bill Velocity Verified</span>
</div>
<div className="h-3 w-px bg-surface-variant hidden sm:block"></div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-accent-electric"></span>
<span>Account Aggregator Ledger Feeds Live</span>
</div>
</div>
<div className="flex items-center gap-2 w-full md:w-auto justify-end">
<ForecastExportButton />
<Link href="/stress-lab" className="px-4 py-2 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary transition-all font-body-sm font-semibold flex items-center gap-1.5 shadow-md cursor-pointer">
<span className="material-symbols-outlined text-[16px]">science</span>
          Stress In Stress Lab
        </Link>
</div>
</div>
</section>

    </div>
  );
}
