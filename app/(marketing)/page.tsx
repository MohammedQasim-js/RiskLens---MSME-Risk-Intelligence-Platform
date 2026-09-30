'use client';

import Link from 'next/link';

export default function MarketingPage() {
  return (
    <>
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[580px] bg-gradient-to-b from-primary-container/15 via-accent-electric/8 to-transparent blur-[140px] pointer-events-none -z-10"></div>
<div className="fixed top-[650px] right-[-10%] w-[680px] h-[680px] bg-secondary-container/10 blur-[160px] pointer-events-none -z-10"></div>
<div className="fixed top-[1500px] left-[-10%] w-[700px] h-[700px] bg-tertiary-container/10 blur-[180px] pointer-events-none -z-10"></div>

<header className="sticky top-0 z-50 w-full border-b border-border-glass bg-surface-base/80 backdrop-blur-2xl transition-all">
<div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">

<a className="flex items-center gap-3 group focus:outline-none" href="/overview">
<div className="w-10 h-10 rounded-xl bg-surface-overlay border border-border-glass-strong flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(99,102,241,0.25)] group-hover:border-primary/50 transition-all">
<svg className="w-full h-full" fill="none" viewBox="0 0 32 32">
<defs>
<linearGradient id="nav-rl-grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#8B5CF6"></stop>
<stop offset="50%" stopColor="#6366F1"></stop>
<stop offset="100%" stopColor="#06B6D4"></stop>
</linearGradient>
</defs>
<circle cx="16" cy="16" r="12" stroke="url(#nav-rl-grad)" strokeDasharray="45 15" strokeLinecap="round" strokeWidth="2.5"></circle>
<path d="M16 8L22 16L16 24L10 16Z" fill="#38BDF8"></path>
<circle cx="16" cy="16" fill="#FFFFFF" r="2.8"></circle>
</svg>
</div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-xl font-bold tracking-tight text-white">Risk<span className="text-primary">Lens</span></span>
<span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border border-primary/30 bg-primary/10 text-primary">MRIP v2.4</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-on-surface-variant">
<a className="hover:text-white transition-colors" href="#overview">Product</a>
<a className="hover:text-white transition-colors" href="#risk-models">Risk Models</a>
<a className="hover:text-white transition-colors" href="#architecture">Evidence Engine</a>
<a className="hover:text-white transition-colors" href="#features">Intelligence Suites</a>
<a className="hover:text-white transition-colors" href="#pipeline">Pipeline Topology</a>
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="#pricing">
<span>Security &amp; RBI AA</span>
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-medium text-on-surface hover:text-white hover:bg-surface-container-high transition-all" href="/login">
          Sign In
        </a>
<a className="hidden md:inline-flex px-4 py-2 rounded-lg bg-surface-container-high/90 hover:bg-surface-bright text-on-surface border border-border-glass text-sm font-medium transition-all shadow-sm" href="#demo">
          Book Institutional Demo
        </a>
<a className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 text-white text-sm font-semibold shadow-[0_0_20px_rgba(128,131,255,0.4)] transition-all flex items-center gap-2" href="/overview">
<span>Analyze Business</span>
<span className="material-symbols-outlined text-[17px]">arrow_forward</span>
</a>
</div>
</div>
</header>

<section className="w-full pt-16 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-high/80 border border-border-glass shadow-lg mb-8 backdrop-blur-md">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-semantic-success animate-pulse shadow-[0_0_8px_#10B981]"></span>
<span className="text-xs uppercase font-semibold tracking-wider text-on-surface-variant font-label-caps">NEXT-GEN MSME CREDIT &amp; RISK INTELLIGENCE · RBI AA INTEGRATED</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] mb-6">
        Understand Your Business Risk <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-accent-electric">Before It Becomes a Problem.</span>
</h1>

<p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed font-body-lg mb-10">
        MRIP converts complex cash-flow telemetry, dynamic business plans, and alternative GST signals into transparent, explainable risk intelligence calibrated for MSMEs.
      </p>

<div className="flex flex-wrap items-center justify-center gap-4 mb-12">
<a className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-container via-secondary-container to-secondary text-white font-semibold text-base shadow-[0_0_32px_rgba(99,102,241,0.45)] hover:shadow-[0_0_40px_rgba(99,102,241,0.65)] hover:scale-[1.01] transition-all flex items-center gap-2" href="/overview">
<span>Analyze My Business</span>
<span className="material-symbols-outlined text-xl">arrow_forward</span>
</a>
<a className="px-7 py-4 rounded-xl bg-surface-container-high/90 hover:bg-surface-bright text-white border border-border-glass font-medium text-base shadow-lg transition-all flex items-center gap-2.5" href="#demo">
<span className="material-symbols-outlined text-accent-electric text-2xl">play_circle</span>
<span>View Live Interactive Demo</span>
</a>
</div>

<div className="w-full max-w-4xl py-3 px-6 rounded-2xl bg-surface-container-lowest/80 border border-border-glass backdrop-blur-md shadow-inner flex flex-wrap items-center justify-between text-xs md:text-sm text-on-surface-variant font-label-metric-md gap-4 mb-16">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-accent-electric text-lg">verified_user</span>
<span className="text-on-surface font-semibold">₹4,800+ Cr</span>
<span>MSME Volume Analyzed</span>
</div>
<span className="text-border-glass-strong hidden md:inline">|</span>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-semantic-success text-lg">bolt</span>
<span className="text-on-surface font-semibold">42ms</span>
<span>Risk Inference</span>
</div>
<span className="text-border-glass-strong hidden md:inline">|</span>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">visibility</span>
<span className="text-on-surface font-semibold">0%</span>
<span>Black-box Predictions</span>
</div>
<span className="text-border-glass-strong hidden md:inline">|</span>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-lg">account_balance</span>
<span>RBI AA Protocol Integrated</span>
</div>
</div>

<div className="w-full max-w-6xl bg-surface-raised/95 border border-border-glass-strong rounded-2xl p-6 lg:p-8 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] relative backdrop-blur-2xl text-left">

<div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-glass mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">analytics</span>
</div>
<div>
<div className="flex items-center gap-3 flex-wrap">
<span className="font-headline-sm text-lg lg:text-xl font-bold text-white">Apex Precision Tools Pvt Ltd</span>
<span className="px-2.5 py-0.5 rounded-full bg-semantic-success/20 text-semantic-success border border-semantic-success/30 font-label-caps text-[11px] font-semibold uppercase tracking-wider">GSTN Live</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-xs text-on-surface-variant font-label-metric-md">UDYAM-MH-02-0049219</span>
</div>
<p className="text-xs text-on-surface-variant mt-0.5 font-body-sm">Precision Auto Ancillary Cluster · Pune Industrial Zone II · Incorporated 2017</p>
</div>
</div>
<div className="flex items-center gap-3 bg-surface-container-low px-4 py-2 rounded-xl border border-border-glass">
<span className="flex h-2.5 w-2.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-semantic-success opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-semantic-success"></span>
</span>
<div className="text-xs font-label-metric-md">
<span className="text-on-surface-variant">Real-time Inference:</span>
<strong className="text-white ml-1 font-semibold">STABLE</strong>
</div>
<span className="text-outline-variant">·</span>
<span className="text-[11px] text-on-surface-variant">42ms latency</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

<div className="bg-surface-container-high/70 border border-border-glass rounded-xl p-4 flex flex-col justify-between">
<div className="flex items-center justify-between mb-2">
<span className="text-xs uppercase font-label-caps text-on-surface-variant tracking-wider font-medium">Predictive Risk</span>
<span className="px-2 py-0.5 rounded bg-semantic-warning/15 text-semantic-warning border border-semantic-warning/30 text-[10px] font-semibold font-label-caps uppercase">Moderate Risk</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-label-metric-lg text-3xl font-bold text-white">8.2%</span>
<span className="text-xs text-on-surface-variant font-label-metric-md">PD (1-Yr Default)</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-semantic-success font-medium">
<span className="material-symbols-outlined text-sm">trending_down</span>
<span>↓ 1.4% MoM (De-risking trajectory)</span>
</div>
</div>

<div className="bg-surface-container-high/70 border border-border-glass rounded-xl p-4 flex flex-col justify-between">
<div className="flex items-center justify-between mb-2">
<span className="text-xs uppercase font-label-caps text-on-surface-variant tracking-wider font-medium">Financial Health</span>
<span className="px-2 py-0.5 rounded bg-semantic-success/15 text-semantic-success border border-semantic-success/30 text-[10px] font-semibold font-label-caps uppercase">Tier A- Stable</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-label-metric-lg text-3xl font-bold text-white">74</span>
<span className="text-xs text-on-surface-variant font-label-metric-md">/ 100 Score</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-sm text-accent-electric">check_circle</span>
<span>Operating Margins: 18.4%</span>
</div>
</div>

<div className="bg-surface-container-high/70 border border-border-glass rounded-xl p-4 flex flex-col justify-between">
<div className="flex items-center justify-between mb-2">
<span className="text-xs uppercase font-label-caps text-on-surface-variant tracking-wider font-medium">Data Confidence</span>
<span className="px-2 py-0.5 rounded bg-accent-electric/15 text-accent-electric border border-accent-electric/30 text-[10px] font-semibold font-label-caps uppercase">96% Coverage</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-label-metric-lg text-3xl font-bold text-white">86</span>
<span className="text-xs text-on-surface-variant font-label-metric-md">/ 100 Depth</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-sm text-tertiary">hub</span>
<span>AA + GSTN + TReDS Verified</span>
</div>
</div>

<div className="bg-surface-container-high/70 border border-border-glass rounded-xl p-4 flex flex-col justify-between">
<div className="flex items-center justify-between mb-2">
<span className="text-xs uppercase font-label-caps text-on-surface-variant tracking-wider font-medium">Survival Runway</span>
<span className="px-2 py-0.5 rounded bg-surface-bright text-on-surface text-[10px] font-semibold font-label-caps uppercase">Dynamic</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-label-metric-lg text-3xl font-bold text-white">24</span>
<span className="text-xs text-on-surface-variant font-label-metric-md">Days Buffer</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-sm text-semantic-warning">hourglass_top</span>
<span>Min cohort threshold: 18 days</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 bg-surface-container-lowest/80 border border-border-glass rounded-xl p-5 flex flex-col justify-between">
<div className="flex flex-wrap items-center justify-between gap-3 mb-4">
<div>
<h4 className="font-headline-sm text-base font-semibold text-white">Operating Cash-Flow Trajectory (90D Horizon)</h4>
<p className="text-xs text-on-surface-variant">Realized Inflows vs Expected Outflows with Monte Carlo confidence intervals</p>
</div>
<div className="flex items-center gap-4 text-xs font-label-metric-md">
<span className="inline-flex items-center gap-1.5 text-accent-electric">
<span className="w-3 h-0.5 bg-accent-electric rounded"></span> Inflows
                </span>
<span className="inline-flex items-center gap-1.5 text-primary">
<span className="w-3 h-0.5 bg-primary rounded"></span> Net Delta
                </span>
<span className="inline-flex items-center gap-1.5 text-on-surface-variant">
<span className="w-2.5 h-2.5 rounded-sm bg-accent-electric/20 border border-accent-electric/40"></span> 95% Band
                </span>
</div>
</div>

<div className="w-full h-56 relative mb-4">
<svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 200">
<defs>
<linearGradient id="chartGradInflow" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#38BDF8" stopOpacity="0.32"></stop>
<stop offset="100%" stopColor="#38BDF8" stopOpacity="0.01"></stop>
</linearGradient>
<linearGradient id="chartGradDelta" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#8083ff" stopOpacity="0.28"></stop>
<stop offset="100%" stopColor="#8083ff" stopOpacity="0.0"></stop>
</linearGradient>
<linearGradient id="bandGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#38BDF8" stopOpacity="0.12"></stop>
<stop offset="100%" stopColor="#38BDF8" stopOpacity="0.03"></stop>
</linearGradient>
</defs>

<line stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" x1="0" x2="680" y1="40" y2="40"></line>
<line stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" x1="0" x2="680" y1="90" y2="90"></line>
<line stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" x1="0" x2="680" y1="140" y2="140"></line>
<line stroke="rgba(255,255,255,0.08)" x1="0" x2="680" y1="180" y2="180"></line>

<path d="M0,135 C90,110 160,50 250,65 C340,80 410,20 500,45 C570,60 620,15 680,25 L680,85 C620,80 570,110 500,95 C410,80 340,120 250,110 C160,100 90,160 0,165 Z" fill="url(#bandGrad)"></path>

<path d="M0,150 C90,135 160,70 250,85 C340,100 410,35 500,55 C570,75 620,28 680,40 L680,180 L0,180 Z" fill="url(#chartGradInflow)"></path>
<path d="M0,162 C90,155 170,125 260,132 C350,140 430,95 510,102 C580,110 630,75 680,82 L680,180 L0,180 Z" fill="url(#chartGradDelta)"></path>

<path d="M0,150 C90,135 160,70 250,85 C340,100 410,35 500,55 C570,75 620,28 680,40" stroke="#38BDF8" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0,162 C90,155 170,125 260,132 C350,140 430,95 510,102 C580,110 630,75 680,82" stroke="#8083ff" strokeDasharray="4 4" strokeLinecap="round" strokeWidth="2"></path>

<circle cx="500" cy="55" fill="#38BDF8" r="5"></circle>
<circle cx="500" cy="55" r="11" stroke="#38BDF8" strokeOpacity="0.4" strokeWidth="1.5"></circle>
<line stroke="#38BDF8" strokeDasharray="2 2" strokeOpacity="0.4" strokeWidth="1" x1="500" x2="500" y1="55" y2="180"></line>
</svg>
</div>

<div className="grid grid-cols-3 gap-3 p-3 bg-surface-container/60 border border-border-glass rounded-lg">
<div className="border-r border-border-glass pr-2">
<span className="text-[11px] font-label-caps uppercase text-on-surface-variant font-medium">30D Projected Buffer</span>
<p className="font-label-metric-md text-base font-bold text-white mt-0.5">₹1.85 Lakhs</p>
<span className="text-[11px] font-body-sm text-semantic-success font-medium flex items-center gap-0.5 mt-0.5">
<span className="material-symbols-outlined text-[13px]">arrow_upward</span> +14% vs Base
                </span>
</div>
<div className="border-r border-border-glass pr-2">
<span className="text-[11px] font-label-caps uppercase text-on-surface-variant font-medium">60D Stress Buffer</span>
<p className="font-label-metric-md text-base font-bold text-white mt-0.5">₹1.21 Lakhs</p>
<span className="text-[11px] font-body-sm text-on-surface-variant mt-0.5 block">Normal operational decay</span>
</div>
<div>
<span className="text-[11px] font-label-caps uppercase text-on-surface-variant font-medium">90D Critical Baseline</span>
<p className="font-label-metric-md text-base font-bold text-semantic-warning mt-0.5">₹0.88 Lakhs</p>
<span className="text-[11px] font-body-sm text-semantic-warning font-medium flex items-center gap-0.5 mt-0.5">
<span className="material-symbols-outlined text-[13px]">notification_important</span> Action Window
                </span>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-high/60 border border-border-glass rounded-xl p-5 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<h4 className="font-headline-sm text-base font-semibold text-white">Top Explainable Risk Drivers</h4>
<span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-accent-electric/15 text-accent-electric border border-accent-electric/30">SHAP / LIME</span>
</div>
<p className="text-xs text-on-surface-variant mb-4 font-body-sm">
                Deterministic factor attribution calibrated against Maharashtra precision manufacturing peer groups.
              </p>

<div className="space-y-3">

<div className="p-3 rounded-lg bg-surface-container-lowest/80 border border-border-glass flex items-start justify-between">
<div className="flex items-start gap-3">
<span className="w-6 h-6 rounded bg-semantic-critical/15 text-semantic-critical flex items-center justify-center font-bold text-xs font-label-metric-md">#1</span>
<div>
<p className="text-sm font-semibold text-white leading-tight">Receivable Cycle Extension</p>
<span className="text-xs text-on-surface-variant">DSO extended from 48 to 67 days (OEM delay)</span>
</div>
</div>
<span className="font-label-metric-md text-xs font-bold text-semantic-critical bg-semantic-critical/10 px-2 py-0.5 rounded border border-semantic-critical/20">+2.8% PD</span>
</div>

<div className="p-3 rounded-lg bg-surface-container-lowest/80 border border-border-glass flex items-start justify-between">
<div className="flex items-start gap-3">
<span className="w-6 h-6 rounded bg-semantic-warning/15 text-semantic-warning flex items-center justify-center font-bold text-xs font-label-metric-md">#2</span>
<div>
<p className="text-sm font-semibold text-white leading-tight">Customer Concentration</p>
<span className="text-xs text-on-surface-variant">Top 2 buyers account for 61% ARR turnover</span>
</div>
</div>
<span className="font-label-metric-md text-xs font-bold text-semantic-warning bg-semantic-warning/10 px-2 py-0.5 rounded border border-semantic-warning/20">+1.9% PD</span>
</div>

<div className="p-3 rounded-lg bg-surface-container-lowest/80 border border-border-glass flex items-start justify-between">
<div className="flex items-start gap-3">
<span className="w-6 h-6 rounded bg-semantic-success/15 text-semantic-success flex items-center justify-center font-bold text-xs font-label-metric-md">#3</span>
<div>
<p className="text-sm font-semibold text-white leading-tight">Debt-Service Capability</p>
<span className="text-xs text-on-surface-variant">DSCR maintained at 1.84x cash coverage</span>
</div>
</div>
<span className="font-label-metric-md text-xs font-bold text-semantic-success bg-semantic-success/10 px-2 py-0.5 rounded border border-semantic-success/20">-2.5% PD</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-border-glass mt-4 flex items-center justify-between">
<span className="text-xs text-on-surface-variant font-label-metric-md">Audit Integrity: Hash #8f31..c4b</span>
<button className="px-4 py-2 rounded-lg bg-surface-bright hover:bg-surface-variant text-white text-xs font-medium transition-colors flex items-center gap-1.5 shadow-sm">
<span>Download Factor Breakdown</span>
<span className="material-symbols-outlined text-sm">download</span>
</button>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-between text-xs text-on-surface-variant font-body-sm pt-4 mt-5 border-t border-border-glass">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-semantic-success">check_circle</span>
<span>Zero Data Stored on Cloud · Encrypted Local Decryption via RBI Account Aggregator protocol</span>
</div>
<span>Inference calculated in 42ms via RiskLens MRIP Neural Engine v2.4</span>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface-container-lowest/40 border-y border-border-glass relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-label-caps">System Architecture</span>
<h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4">How MRIP Generates Sovereign Clarity</h2>
<p className="text-base md:text-lg text-on-surface-variant font-body-md">
          Three structured operational stages transform raw bank telemetry and commercial GST signals into forward-looking decision intelligence.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="bg-surface-raised border border-border-glass rounded-2xl p-8 relative flex flex-col justify-between hover:border-accent-electric/40 transition-all shadow-xl group">
<div className="mb-6">
<div className="flex items-center justify-between mb-6">
<span className="font-label-metric-lg text-4xl font-bold text-accent-electric">01</span>
<div className="w-12 h-12 rounded-xl bg-accent-electric/15 text-accent-electric flex items-center justify-center border border-accent-electric/30 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">sync_alt</span>
</div>
</div>
<h3 className="text-xl font-bold text-white mb-3">Connect Your Data</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
              Securely stream GSTN returns, multi-bank statement Account Aggregator (AA) feeds, and Tally/Zoho ERP ledgers via encrypted zero-retention micro-pipelines.
            </p>
</div>
<div className="flex flex-wrap gap-2 pt-4 border-t border-border-glass">
<span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs text-on-surface-variant font-label-caps font-medium border border-border-glass">RBI Account Aggregator</span>
<span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs text-on-surface-variant font-label-caps font-medium border border-border-glass">GST E-Way Bill</span>
<span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs text-on-surface-variant font-label-caps font-medium border border-border-glass">Tally / Zoho ERP</span>
</div>
</div>

<div className="bg-surface-raised border border-border-glass rounded-2xl p-8 relative flex flex-col justify-between hover:border-primary/40 transition-all shadow-xl group">
<div className="mb-6">
<div className="flex items-center justify-between mb-6">
<span className="font-label-metric-lg text-4xl font-bold text-primary">02</span>
<div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">neurology</span>
</div>
</div>
<h3 className="text-xl font-bold text-white mb-3">Understand Your Risk</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
              Process transactional cadence across non-linear multi-variate models. Inspect transparent SHAP attribution maps showing exact underlying drivers behind default probability.
            </p>
</div>
<div className="flex flex-wrap gap-2 pt-4 border-t border-border-glass">
<span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs text-on-surface-variant font-label-caps font-medium border border-border-glass">Deterministic SHAP</span>
<span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs text-on-surface-variant font-label-caps font-medium border border-border-glass">0% Black-Box</span>
<span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs text-on-surface-variant font-label-caps font-medium border border-border-glass">Peer Calibration</span>
</div>
</div>

<div className="bg-surface-raised border border-border-glass rounded-2xl p-8 relative flex flex-col justify-between hover:border-tertiary/40 transition-all shadow-xl group">
<div className="mb-6">
<div className="flex items-center justify-between mb-6">
<span className="font-label-metric-lg text-4xl font-bold text-tertiary">03</span>
<div className="w-12 h-12 rounded-xl bg-tertiary-container/20 text-tertiary flex items-center justify-center border border-tertiary/30 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">tune</span>
</div>
</div>
<h3 className="text-xl font-bold text-white mb-3">Stress-Test Your Future</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
              Execute on-demand macroeconomic and supplier shocks: simulate 45-day key customer payment delays, raw material inflation spikes, or working capital crunches.
            </p>
</div>
<div className="flex flex-wrap gap-2 pt-4 border-t border-border-glass">
<span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs text-on-surface-variant font-label-caps font-medium border border-border-glass">Monte Carlo Runs</span>
<span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs text-on-surface-variant font-label-caps font-medium border border-border-glass">Liquidity Burn Rate</span>
<span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs text-on-surface-variant font-label-caps font-medium border border-border-glass">Action Playbooks</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 relative" id="features">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-wrap items-end justify-between gap-6 mb-14">
<div>
<span className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-accent-electric/10 text-accent-electric border border-accent-electric/20 font-label-caps">Fintech Core Engine</span>
<h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Built for Institutional MSME Underwriting</h2>
</div>
<p className="text-base text-on-surface-variant max-w-lg leading-relaxed">
          Robust, audit-ready capabilities calibrated specifically for Indian manufacturing clusters, supply chains, and B2B wholesale enterprises.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-surface-raised border border-border-glass hover:border-accent-electric/40 rounded-2xl p-7 transition-all shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-accent-electric/15 text-accent-electric flex items-center justify-center mb-5 border border-accent-electric/30">
<span className="material-symbols-outlined text-2xl">waves</span>
</div>
<h3 className="text-lg font-bold text-white mb-2">Cash-Flow Intelligence</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            Continuous surveillance of intra-day velocity trends, working-capital drag, counterparty payment delinquency patterns, and real-time EBITDA burn.
          </p>
<div className="flex items-center gap-1.5 text-xs text-accent-electric font-semibold font-label-caps uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span>Intra-Day Liquidity Tracking</span>
</div>
</div>

<div className="bg-surface-raised border border-border-glass hover:border-primary/40 rounded-2xl p-7 transition-all shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center mb-5 border border-primary/30">
<span className="material-symbols-outlined text-2xl">visibility</span>
</div>
<h3 className="text-lg font-bold text-white mb-2">Explainable Risk</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            Audit-ready evidence factors for every score. Underwriters and promoters inspect deterministic SHAP attributions behind every probability assessment.
          </p>
<div className="flex items-center gap-1.5 text-xs text-primary font-semibold font-label-caps uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">balance</span>
<span>Zero Black-Box Math</span>
</div>
</div>

<div className="bg-surface-raised border border-border-glass hover:border-tertiary/40 rounded-2xl p-7 transition-all shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-tertiary-container/20 text-tertiary flex items-center justify-center mb-5 border border-tertiary/30">
<span className="material-symbols-outlined text-2xl">stacked_line_chart</span>
</div>
<h3 className="text-lg font-bold text-white mb-2">90-Day Forecasting</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            Dynamic horizons modeling 30, 60, and 90-day cash buffer ranges to pre-emptively identify working capital gaps before payroll or supplier cycles.
          </p>
<div className="flex items-center gap-1.5 text-xs text-tertiary font-semibold font-label-caps uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">insights</span>
<span>Monte Carlo Confidence Bands</span>
</div>
</div>

<div className="bg-surface-raised border border-border-glass hover:border-secondary/40 rounded-2xl p-7 transition-all shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center mb-5 border border-secondary/30">
<span className="material-symbols-outlined text-2xl">model_training</span>
</div>
<h3 className="text-lg font-bold text-white mb-2">Stress Testing Sandbox</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            Simulate realistic crisis events: delayed top-client remittances, raw material price surges, transport logistics bottlenecks, and interest hike shocks.
          </p>
<div className="flex items-center gap-1.5 text-xs text-secondary font-semibold font-label-caps uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">instant_mix</span>
<span>Instant Parameter Simulation</span>
</div>
</div>

<div className="bg-surface-raised border border-border-glass hover:border-semantic-success/40 rounded-2xl p-7 transition-all shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-semantic-success/20 text-semantic-success flex items-center justify-center mb-5 border border-semantic-success/30">
<span className="material-symbols-outlined text-2xl">shield_with_heart</span>
</div>
<h3 className="text-lg font-bold text-white mb-2">Fairness Analysis</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            Continuous algorithmic bias auditing across diverse MSME industry sectors, enterprise tenure stages, and Tier-2/Tier-3 geography cohorts.
          </p>
<div className="flex items-center gap-1.5 text-xs text-semantic-success font-semibold font-label-caps uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">verified_user</span>
<span>De-biased Underwriting Base</span>
</div>
</div>

<div className="bg-surface-raised border border-border-glass hover:border-semantic-warning/40 rounded-2xl p-7 transition-all shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-semantic-warning/20 text-semantic-warning flex items-center justify-center mb-5 border border-semantic-warning/30">
<span className="material-symbols-outlined text-2xl">troubleshoot</span>
</div>
<h3 className="text-lg font-bold text-white mb-2">Model Drift Surveillance</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            Autonomous statistical drift detection monitoring macroeconomic systemic shifts and calibrating scoring models with actual settlement histories.
          </p>
<div className="flex items-center gap-1.5 text-xs text-semantic-warning font-semibold font-label-caps uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">sync_saved_locally</span>
<span>Automated Weekly Retraining</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface-container-lowest/60 border-t border-border-glass relative" id="pipeline">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-accent-electric/10 text-accent-electric border border-accent-electric/20 font-label-caps">Pipeline Topology</span>
<h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4">From Financial Data to Risk Intelligence</h2>
<p className="text-base text-on-surface-variant font-body-md">
          The end-to-end transformation path powering enterprise credit underwriting, monitoring, and proactive solvency.
        </p>
</div>

<div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-2 bg-surface-raised/80 border border-border-glass rounded-2xl p-6 lg:p-8 shadow-2xl backdrop-blur-xl">

<div className="w-full lg:w-[13.5%] bg-surface-container-high/80 border border-border-glass rounded-xl p-4 text-center flex flex-col items-center">
<div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center text-accent-electric mb-2 shadow-inner">
<span className="material-symbols-outlined text-xl">receipt_long</span>
</div>
<span className="text-sm font-bold text-white mb-1">Business Plan</span>
<span className="text-[11px] text-on-surface-variant leading-tight">Projections &amp; capex outlay</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant/40 rotate-90 lg:rotate-0 text-xl font-bold">arrow_forward</span>

<div className="w-full lg:w-[13.5%] bg-surface-container-high/80 border border-border-glass rounded-xl p-4 text-center flex flex-col items-center">
<div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center text-primary mb-2 shadow-inner">
<span className="material-symbols-outlined text-xl">account_balance</span>
</div>
<span className="text-sm font-bold text-white mb-1">Cash Flow</span>
<span className="text-[11px] text-on-surface-variant leading-tight">AA multi-bank &amp; GST 3B/1</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant/40 rotate-90 lg:rotate-0 text-xl font-bold">arrow_forward</span>

<div className="w-full lg:w-[13.5%] bg-surface-container-high/80 border border-border-glass rounded-xl p-4 text-center flex flex-col items-center">
<div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center text-tertiary mb-2 shadow-inner">
<span className="material-symbols-outlined text-xl">scatter_plot</span>
</div>
<span className="text-sm font-bold text-white mb-1">140+ Features</span>
<span className="text-[11px] text-on-surface-variant leading-tight">Behavioral cadence signals</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant/40 rotate-90 lg:rotate-0 text-xl font-bold">arrow_forward</span>

<div className="w-full lg:w-[14.5%] bg-gradient-to-b from-primary-container/25 to-surface-container-high border border-primary/40 rounded-xl p-4 text-center flex flex-col items-center shadow-[0_0_20px_rgba(99,102,241,0.2)]">
<div className="w-10 h-10 rounded-lg bg-primary-container/30 flex items-center justify-center text-primary mb-2 shadow-sm">
<span className="material-symbols-outlined text-xl">neurology</span>
</div>
<span className="text-sm font-bold text-white mb-1">MRIP Engine</span>
<span className="text-[11px] text-on-surface-variant leading-tight">Multi-cohort classifier</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant/40 rotate-90 lg:rotate-0 text-xl font-bold">arrow_forward</span>

<div className="w-full lg:w-[13.5%] bg-surface-container-high/80 border border-border-glass rounded-xl p-4 text-center flex flex-col items-center">
<div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center text-accent-electric mb-2 shadow-inner">
<span className="material-symbols-outlined text-xl">balance</span>
</div>
<span className="text-sm font-bold text-white mb-1">SHAP Matrix</span>
<span className="text-[11px] text-on-surface-variant leading-tight">Deterministic risk drivers</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant/40 rotate-90 lg:rotate-0 text-xl font-bold">arrow_forward</span>

<div className="w-full lg:w-[13.5%] bg-surface-container-high/80 border border-border-glass rounded-xl p-4 text-center flex flex-col items-center">
<div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center text-secondary mb-2 shadow-inner">
<span className="material-symbols-outlined text-xl">auto_graph</span>
</div>
<span className="text-sm font-bold text-white mb-1">90D Projections</span>
<span className="text-[11px] text-on-surface-variant leading-tight">Liquidity runway &amp; stress</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant/40 rotate-90 lg:rotate-0 text-xl font-bold">arrow_forward</span>

<div className="w-full lg:w-[13.5%] bg-surface-container-high/80 border border-semantic-success/40 rounded-xl p-4 text-center flex flex-col items-center">
<div className="w-10 h-10 rounded-lg bg-semantic-success/20 flex items-center justify-center text-semantic-success mb-2 shadow-inner">
<span className="material-symbols-outlined text-xl">task_alt</span>
</div>
<span className="text-sm font-bold text-white mb-1">Action Deck</span>
<span className="text-[11px] text-on-surface-variant leading-tight">Underwriting decisioning</span>
</div>
</div>
</div>
</section>

<section className="w-full py-16 border-t border-border-glass bg-surface-base">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="p-6 rounded-2xl bg-surface-raised border border-border-glass">
<div className="font-label-metric-lg text-4xl lg:text-5xl font-extrabold text-white mb-2">1,200+</div>
<p className="text-base font-semibold text-primary mb-1">Indian MSMEs &amp; NBFCs</p>
<span className="text-xs text-on-surface-variant">Active monthly borrowers and institutional underwriters</span>
</div>
<div className="p-6 rounded-2xl bg-surface-raised border border-border-glass">
<div className="font-label-metric-lg text-4xl lg:text-5xl font-extrabold text-white mb-2">₹4,800+ Cr</div>
<p className="text-base font-semibold text-accent-electric mb-1">Underwritten Volume</p>
<span className="text-xs text-on-surface-variant">Cumulative credit monitored across manufacturing &amp; supply corridors</span>
</div>
<div className="p-6 rounded-2xl bg-surface-raised border border-border-glass">
<div className="font-label-metric-lg text-4xl lg:text-5xl font-extrabold text-white mb-2">99.4%</div>
<p className="text-base font-semibold text-semantic-success mb-1">Explainability Compliance</p>
<span className="text-xs text-on-surface-variant">Zero algorithmic rejections without transparent SHAP attribution</span>
</div>
</div>
</div>
</section>

<section className="w-full py-20 relative" id="audit">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="relative w-full rounded-3xl bg-gradient-to-br from-surface-raised via-surface-container to-surface-container-high border border-border-glass-strong p-8 md:p-14 lg:p-16 shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden">

<div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary-container/25 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute -left-20 -top-20 w-80 h-80 bg-accent-electric/20 blur-[110px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-electric/15 text-accent-electric font-label-caps text-xs font-semibold uppercase tracking-wider mb-6 border border-accent-electric/30">
<span>Instant Baseline · Zero Commitment</span>
</div>
<h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Empower Your Business With Institutional Risk Intelligence.
          </h2>
<p className="text-base md:text-lg text-on-surface-variant mb-8 leading-relaxed">
            Join 1,200+ Indian MSMEs, NBFCs, and commercial underwriters who rely on RiskLens MRIP for explainable credit foresight and liquidity security.
          </p>

<form className="flex flex-col sm:flex-row gap-3 max-w-xl mb-6" onSubmit={(e) => e.preventDefault()}>
<input className="flex-1 px-5 py-4 rounded-xl bg-surface-container-lowest border border-border-glass-strong text-white placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary shadow-inner font-body-md text-sm" placeholder="Enter your enterprise or work email" required type="email" />
<button className="px-7 py-4 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 text-white font-semibold text-sm transition-all shadow-[0_0_24px_rgba(99,102,241,0.45)] whitespace-nowrap flex items-center justify-center gap-2" type="submit">
<span>Start Free Audit</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</form>

<div className="flex flex-wrap items-center gap-6 text-xs text-on-surface-variant font-label-metric-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-semantic-success text-base">verified</span>
<span>256-Bit Bank-Grade Encryption</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-semantic-success text-base">verified</span>
<span>RBI AA Ecosystem Compliant</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-semantic-success text-base">verified</span>
<span>ISO 27001 Certified SOC 2 Ready</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full border-t border-border-glass bg-surface-container-lowest/90 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

<div className="col-span-2">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-surface-overlay border border-border-glass flex items-center justify-center p-1">
<svg className="w-full h-full" fill="none" viewBox="0 0 32 32">
<circle cx="16" cy="16" r="12" stroke="#6366F1" strokeDasharray="45 15" strokeLinecap="round" strokeWidth="2.5"></circle>
<path d="M16 8L22 16L16 24L10 16Z" fill="#38BDF8"></path>
</svg>
</div>
<span className="text-lg font-bold text-white">Risk<span className="text-primary">Lens</span> MRIP</span>
</div>
<p className="text-xs text-on-surface-variant max-w-sm mb-4 leading-relaxed font-body-sm">
            Autonomous MSME risk telemetry and sovereign credit-intelligence platform. Calibrated for India’s industrial manufacturing, supply networks, and emerging commercial enterprises.
          </p>
<div className="text-xs text-on-surface-variant font-label-metric-md">
            © 2025 RiskLens Technologies India Pvt. Ltd. All rights reserved.
          </div>
</div>

<div>
<h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-label-caps">Product</h5>
<ul className="space-y-2.5 text-xs text-on-surface-variant">
<li><a className="hover:text-white transition-colors" href="/overview">Risk Telemetry Engine</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">Cash-Flow Wave Sandbox</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">SHAP Attribution Matrix</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">Monte Carlo Stress Engine</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">Cohort Benchmarks</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-label-caps">Solutions</h5>
<ul className="space-y-2.5 text-xs text-on-surface-variant">
<li><a className="hover:text-white transition-colors" href="/overview">For Auto-Ancillary MSMEs</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">For NBFC Underwriters</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">Commercial Bank Syndicates</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">TReDS Invoice Discounting</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">Supply Chain Finance</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-label-caps">Regulatory &amp; Trust</h5>
<ul className="space-y-2.5 text-xs text-on-surface-variant">
<li><a className="hover:text-white transition-colors" href="/overview">RBI AA Framework</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">Zero Data-Retention Policy</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">Security Whitepaper</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">Algorithmic Fairness Audit</a></li>
<li><a className="hover:text-white transition-colors" href="/overview">System Status &amp; SLA</a></li>
</ul>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container-low border border-border-glass text-center">
<p className="text-[11px] text-on-surface-variant/75 leading-relaxed font-body-sm">
          Regulatory Disclaimer: RiskLens MRIP is an analytical decision-support and predictive risk-underwriting intelligence platform. It does not operate as an automated lending authority, NBFC, or deposit-taking entity. Credit evaluations remain at the sole discretion of regulated lending institutions. Built with sovereign encryption in India for Indian Enterprise.
        </p>
</div>
</div>
</footer>

    </>
  );
}
