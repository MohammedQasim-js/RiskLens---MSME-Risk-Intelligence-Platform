import { submitOnboarding } from "./actions";

export default function OnboardingPage() {
  return (
    <>
      



<form action={submitOnboarding}  className="flex-1 w-full max-w-[1720px] mx-auto px-6 lg:px-10 py-8 flex flex-col gap-8">

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-white/[0.06]">
<div className="flex flex-col gap-2 max-w-3xl">
<div className="flex items-center gap-2 text-xs font-label-caps text-accent-electric uppercase tracking-widest font-semibold">
<span className="px-2 py-0.5 rounded bg-accent-electric/10 border border-accent-electric/20">Phase 01 Telemetry</span>
<span>Entity Onboarding &amp; Execution Plan</span>
</div>
<h1 className="font-headline-lg text-3xl xl:text-4xl font-semibold tracking-tight text-white">
          Tell us about your business
        </h1>
<p className="font-body-lg text-base text-on-surface-variant">
          We’ll combine your operating plan with financial activity to calibrate your institutional risk profile and compute your dynamic MRIP score.
        </p>
</div>

<div className="flex items-center gap-4 p-3 px-5 rounded-2xl bg-surface-raised/80 border border-white/[0.08] backdrop-blur-md shadow-lg shrink-0">
<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-semantic-success" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="92, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-label-metric-md text-xs font-bold text-white">92%</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="text-xs font-semibold text-white">Baseline Readiness Score</span>
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
</div>
<span className="text-[11px] text-on-surface-variant">Sufficient parameters to compute initial risk index</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">

<section className="lg:col-span-4 bg-surface-container-low/70 border border-white/[0.07] rounded-3xl p-6 lg:p-7 backdrop-blur-xl shadow-xl flex flex-col gap-6 relative overflow-hidden">
<div className="absolute -top-24 -left-24 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl">domain</span>
</div>
<div>
<h2 className="font-headline-sm text-lg font-semibold text-white">Business Profile</h2>
<p className="text-xs text-on-surface-variant">Entity verification &amp; master data</p>
</div>
</div>
<span className="font-label-caps text-[10px] uppercase font-semibold text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">Entity Master</span>
</div>

<div className="flex flex-col gap-5">

<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant flex items-center justify-between">
<span>Registered Business Name</span>
<span className="text-semantic-success flex items-center gap-1 text-[11px] font-medium lowercase">
<span className="material-symbols-outlined text-xs">verified</span> mca matched
              </span>
</label>
<div className="relative">
<input name="legal_name" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all pr-10" />
<span className="material-symbols-outlined absolute right-3.5 top-3.5 text-semantic-success pointer-events-none text-base">verified</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">Industry Vertical</label>
<div className="relative">
<select name="industry" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none appearance-none transition-all cursor-pointer">
<option value="">Select Industry</option>
<option value="Precision Manufacturing & Packaging">Precision Manufacturing & Packaging</option>
<option value="Textiles">Textiles</option>
<option value="Chemicals">Industrial Chemicals & Polymers</option>
<option value="Logistics">Logistics, Warehousing & Fleet Transport</option>
<option value="IT Services">IT & Software Services</option>
<option value="Retail">Retail & E-commerce</option>
<option value="Agriculture">Agriculture & Food Processing</option>
<option value="Construction">Construction & Real Estate</option>
<option value="Healthcare">Healthcare & Pharmaceuticals</option>
</select>
<span className="material-symbols-outlined absolute right-3.5 top-3.5 text-on-surface-variant pointer-events-none text-lg">expand_more</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3.5">
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">Operating City</label>
<input name="city" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all" />
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">State Jurisdiction</label>
<div className="relative">
<select name="state" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none appearance-none transition-all cursor-pointer">
<option value="">Select State</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Delhi">Delhi</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="West Bengal">West Bengal</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant pointer-events-none text-base">expand_more</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">MSME Classification (Turnover Tier)</label>
<div className="relative">
<select name="msme_class" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none appearance-none transition-all cursor-pointer">
  <option value="micro">Micro (&lt;₹1 Cr)</option>
  <option value="small">Small (₹1–10 Cr)</option>
  <option value="medium">Medium (₹10–50 Cr)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant pointer-events-none text-base">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">Business Vintage &amp; Age</label>
<input name="age_months" type="number" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all" placeholder="Months active" />
</div>

<div className="flex flex-col gap-2">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">Commercial Model</label>
<input name="business_model" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all" placeholder="e.g. B2B Wholesale" />
</div>
</div>
</section>

<section className="lg:col-span-4 bg-surface-container-low/70 border border-white/[0.07] rounded-3xl p-6 lg:p-7 backdrop-blur-xl shadow-xl flex flex-col gap-6 relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-60 h-60 bg-accent-electric/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-accent-electric/10 border border-accent-electric/20 flex items-center justify-center text-accent-electric">
<span className="material-symbols-outlined text-xl">analytics</span>
</div>
<div>
<h2 className="font-headline-sm text-lg font-semibold text-white">Operating Plan &amp; Benchmarks</h2>
<p className="text-xs text-on-surface-variant">Target liquidity &amp; operational commitments</p>
</div>
</div>
<span className="font-label-caps text-[10px] uppercase font-semibold text-accent-electric px-2.5 py-1 rounded-md bg-accent-electric/10 border border-accent-electric/20">FY26-27</span>
</div>

<div className="flex flex-col gap-5">

<div className="grid grid-cols-2 gap-3.5">
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">Target Monthly Rev</label>
<div className="relative">
<span className="absolute left-3.5 top-3 font-label-metric-md text-sm text-accent-electric font-semibold">₹</span>
<input name="target_monthly_revenue" type="number" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 pl-8 rounded-xl outline-none transition-all" />
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">Annual WC Budget</label>
<div className="relative">
<span className="absolute left-3.5 top-3 font-label-metric-md text-sm text-accent-electric font-semibold">₹</span>
<input name="project_budget" type="number" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 pl-8 rounded-xl outline-none transition-all" />
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3.5">
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">Cycle Start Date</label>
<div className="relative">
<input name="project_start" type="date" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all [color-scheme:dark]" />
<span className="material-symbols-outlined absolute right-3.5 top-3.5 text-on-surface-variant pointer-events-none text-base">calendar_today</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">Cycle End Date</label>
<div className="relative">
<input name="project_end" type="date" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all [color-scheme:dark]" />
<span className="material-symbols-outlined absolute right-3.5 top-3.5 text-on-surface-variant pointer-events-none text-base">event</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3.5">
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant flex items-center justify-between">
<span>Expected DSO</span>
<span className="text-semantic-warning text-[10px] font-semibold">Cycle Drift</span>
</label>
<div className="relative">
<input name="expected_collection_days" type="number" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all" />
<span className="material-symbols-outlined absolute right-3.5 top-3.5 text-on-surface-variant pointer-events-none text-base">timelapse</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant">Planned Monthly OPEX</label>
<div className="relative">
<span className="absolute left-3.5 top-3 font-label-metric-md text-sm text-primary font-semibold">₹</span>
<input name="planned_monthly_expenses" type="number" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 pl-8 rounded-xl outline-none transition-all" />
</div>
</div>
</div>

<div className="p-5 rounded-2xl bg-surface-container-lowest border border-white/[0.08] shadow-inner flex flex-col gap-3 mt-1">
<div className="flex items-center justify-between">
<span className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant font-medium">Projected Operating Margin</span>
<span className="font-label-metric-md text-sm font-semibold text-semantic-success flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span> +35.0% OP Margin
              </span>
</div>

<div className="w-full h-3 rounded-full bg-surface-container-highest overflow-hidden flex p-0.5">
<div className="h-full rounded-l-full bg-accent-electric" style={{ width: '65%' }}></div>
<div className="h-full rounded-r-full bg-semantic-success" style={{ width: '35%' }}></div>
</div>
<div className="flex justify-between text-xs font-body-sm text-on-surface-variant pt-0.5">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-accent-electric"></span>
                OPEX Ratio: <strong className="text-white">65% (₹7.8L)</strong>
</span>
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-semantic-success"></span>
                Net Buffer: <strong className="text-semantic-success">₹4.2L / mo</strong>
</span>
</div>
</div>

<div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-container-high/40 border border-white/[0.05] text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">info</span>
<span>These projections serve as baseline telemetry controls to flag unexpected operational stress before credit lines freeze.</span>
</div>
</div>
</section>

<section className="lg:col-span-4 bg-surface-container-low/70 border border-white/[0.07] rounded-3xl p-6 lg:p-7 backdrop-blur-xl shadow-xl flex flex-col gap-5 relative overflow-hidden">
<div className="absolute -top-20 -right-20 w-52 h-52 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-xl">radar</span>
</div>
<div>
<h2 className="font-headline-sm text-lg font-semibold text-white">Diagnostic Vectors</h2>
<p className="text-xs text-on-surface-variant">7-axis institutional telemetry engine</p>
</div>
</div>
<span className="font-label-caps text-[10px] uppercase font-semibold text-accent-electric px-2.5 py-1 rounded-md bg-surface-container-lowest border border-white/[0.08]">v4.2 Engine</span>
</div>

<div className="flex flex-col gap-2.5">

<div className="p-3 rounded-xl bg-surface-container-lowest/80 border border-white/[0.05] hover:border-primary/40 hover:bg-surface-container-high/60 transition-all flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-label-metric-md text-xs font-semibold shrink-0">
                01
              </div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Cash-Flow Behavior</span>
<span className="text-[11px] text-on-surface-variant truncate">Inflow velocity, cadence &amp; weekend dips</span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-semantic-success shadow-[0_0_8px_rgba(16,185,129,0.5)] shrink-0"></span>
</div>

<div className="p-3 rounded-xl bg-surface-container-lowest/80 border border-white/[0.05] hover:border-accent-electric/40 hover:bg-surface-container-high/60 transition-all flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-accent-electric/10 text-accent-electric flex items-center justify-center font-label-metric-md text-xs font-semibold shrink-0">
                02
              </div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Revenue Consistency</span>
<span className="text-[11px] text-on-surface-variant truncate">Volatility coefficient &amp; cyclical variance</span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-semantic-success shadow-[0_0_8px_rgba(16,185,129,0.5)] shrink-0"></span>
</div>

<div className="p-3 rounded-xl bg-surface-container-lowest/80 border border-white/[0.05] hover:border-semantic-warning/40 hover:bg-surface-container-high/60 transition-all flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-semantic-warning/10 text-semantic-warning flex items-center justify-center font-label-metric-md text-xs font-semibold shrink-0">
                03
              </div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Collection Delays</span>
<span className="text-[11px] text-on-surface-variant truncate">Aging debtor spread &amp; real-time DSO drift</span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-semantic-warning shadow-[0_0_8px_rgba(245,158,11,0.5)] shrink-0"></span>
</div>

<div className="p-3 rounded-xl bg-surface-container-lowest/80 border border-white/[0.05] hover:border-primary/40 hover:bg-surface-container-high/60 transition-all flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-label-metric-md text-xs font-semibold shrink-0">
                04
              </div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Liquidity Buffer</span>
<span className="text-[11px] text-on-surface-variant truncate">Days of cash runway under stress scenarios</span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-semantic-success shadow-[0_0_8px_rgba(16,185,129,0.5)] shrink-0"></span>
</div>

<div className="p-3 rounded-xl bg-surface-container-lowest/80 border border-white/[0.05] hover:border-secondary/40 hover:bg-surface-container-high/60 transition-all flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center font-label-metric-md text-xs font-semibold shrink-0">
                05
              </div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Debt-Service Pressure</span>
<span className="text-[11px] text-on-surface-variant truncate">DSCR sensitivity &amp; fixed commitment ratio</span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-semantic-success shadow-[0_0_8px_rgba(16,185,129,0.5)] shrink-0"></span>
</div>

<div className="p-3 rounded-xl bg-surface-container-lowest/80 border border-white/[0.05] hover:border-accent-electric/40 hover:bg-surface-container-high/60 transition-all flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-accent-electric/10 text-accent-electric flex items-center justify-center font-label-metric-md text-xs font-semibold shrink-0">
                06
              </div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Customer Exposure</span>
<span className="text-[11px] text-on-surface-variant truncate">Top 3 client revenue dependence index</span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-semantic-warning shadow-[0_0_8px_rgba(245,158,11,0.5)] shrink-0"></span>
</div>

<div className="p-3.5 rounded-xl bg-gradient-to-r from-surface-container-lowest via-surface-container-low to-surface-container-lowest border border-semantic-success/30 hover:border-semantic-success/60 transition-all flex items-center justify-between gap-3 shadow-md">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-semantic-success/20 text-semantic-success flex items-center justify-center font-label-metric-md text-xs font-bold shrink-0">
                07
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-white">Plan Attainment Index</span>
<span className="text-[9px] font-label-caps uppercase px-1.5 py-0.2 rounded bg-semantic-success/20 text-semantic-success font-semibold">Active</span>
</div>
<span className="text-[11px] text-on-surface-variant truncate">Continuous budget vs actual execution telemetry</span>
</div>
</div>
<span className="material-symbols-outlined text-semantic-success text-base animate-pulse shrink-0">radar</span>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-highest/30 border border-white/[0.04] flex items-center justify-between text-[11px] font-label-caps text-on-surface-variant">
<span>Engine Model: MRIP Neural Bayesian</span>
<span className="text-accent-electric font-label-metric-md font-semibold">7/7 Synced</span>
</div>
</section>
</div>

<div className="w-full bg-surface-container-low/80 border border-white/[0.08] rounded-2xl p-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 backdrop-blur-xl shadow-2xl mt-2 mb-8">

<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-raised flex items-center justify-center text-semantic-success border border-white/10 shrink-0">
<span className="material-symbols-outlined text-lg">shield</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Institutional Data Sovereignty</span>
<span className="text-[11px] text-on-surface-variant">Audit Trail kept sovereign on RBI AA Protocol · Zero raw data stored on public cloud</span>
</div>
</div>

<div className="flex items-center gap-3 w-full md:w-auto justify-end">
<button className="px-5 py-2.5 rounded-xl bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface-variant hover:text-white font-body-md text-sm border border-white/[0.07] transition-all">
          Save Draft &amp; Exit
        </button>
<button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary via-[#6366f1] to-secondary-container text-white font-medium font-body-md text-sm shadow-[0_0_24px_rgba(99,102,241,0.4)] hover:shadow-[0_0_32px_rgba(99,102,241,0.65)] hover:brightness-110 flex items-center justify-center gap-2 transition-all group">
<span className="material-symbols-outlined text-base text-white/80">lock</span>
<span>Create Business Profile &amp; Proceed to Bank Sync</span>
<span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</form>

    </>
  );
}
