'use client';
import { useState } from 'react';
import { ExplainabilityChart } from './ExplainabilityChart';

export function ExplainabilityClient() {
  const [selectedDriver, setSelectedDriver] = useState(1);

  return (
    <>
{/* Section 1: Deterministic Horizontal Contribution Visualization (SHAP Waterfall Spectrum) */}
<div className="p-space-lg rounded-xl bg-surface-container/70 shadow-lg flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-space-xs">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Model Feature Drivers &amp; Marginal PD Attribution</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bidirectional attribution shows each feature's divergence from the MSME industry baseline of 6.2% PD.</p>
</div>
{/* Legend */}
<div className="flex items-center gap-4 text-body-sm">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-semantic-critical"></span>
<span className="text-on-surface-variant font-label-caps text-label-caps">Risk-Increasing (+)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-semantic-success"></span>
<span className="text-on-surface-variant font-label-caps text-label-caps">Risk-Mitigating Buffers (-)</span>
</div>
</div>
</div>
{/* Attribution Chart Bars */}
<div className="flex flex-col gap-4 pt-space-xs">
{/* Item 1: DSO (Top active driver) */}
<div onClick={() => setSelectedDriver(1)} className={`p-space-sm rounded-xl transition-all cursor-pointer ${selectedDriver === 1 ? 'bg-surface-container-high/80 shadow-md ring-1 ring-primary/30' : 'bg-surface-container-low/70 hover:bg-surface-container-high/50'}`}>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
<div className="flex items-center gap-2.5">
<span className="px-2 py-0.5 rounded bg-semantic-critical/20 text-semantic-critical font-label-caps text-label-caps">Rank #1</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">Receivable Days (DSO Latency)</span>
<span className="text-outline text-body-sm font-label-metric-md">47.2 Days vs 32.0 Target</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-metric-md text-label-metric-md text-semantic-critical font-bold">+3.1% PD Impact (+++)</span>
{selectedDriver === 1 && (
<span className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container font-label-caps text-label-caps shadow-sm flex items-center gap-1">
<span>Selected Driver</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
)}
</div>
</div>
{/* Bidirectional Bar Container */}
<div className="grid grid-cols-2 gap-1 items-center h-4 rounded-md bg-surface-base/80 p-0.5">
<div className="flex justify-end pr-1">
<span className="text-[10px] text-outline-variant font-label-metric-md mr-auto">Buffer</span>
</div>
<div className="flex items-center">
<div className="h-2.5 rounded-r-sm bg-gradient-to-r from-semantic-warning to-semantic-critical w-[78%]"></div>
<span className="ml-2 text-[10px] text-semantic-critical font-label-metric-md">+3.10%</span>
</div>
</div>
</div>
{/* Item 2: Cash Buffer Runway */}
<div onClick={() => setSelectedDriver(2)} className={`p-space-sm rounded-xl transition-all cursor-pointer ${selectedDriver === 2 ? 'bg-surface-container-high/80 shadow-md ring-1 ring-primary/30' : 'bg-surface-container-low/70 hover:bg-surface-container-high/50'}`}>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
<div className="flex items-center gap-2.5">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps">Rank #2</span>
<span className="font-body-md text-body-md font-medium text-on-surface">Cash Buffer Runway (24 Days)</span>
<span className="text-outline text-body-sm font-label-metric-md">Threshold 30d Baseline</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-metric-md text-label-metric-md text-semantic-warning font-semibold">+1.8% PD Impact (++)</span>
{selectedDriver === 2 && (
<span className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container font-label-caps text-label-caps shadow-sm flex items-center gap-1">
<span>Selected Driver</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
)}
</div>
</div>
<div className="grid grid-cols-2 gap-1 items-center h-4 rounded-md bg-surface-base/80 p-0.5">
<div></div>
<div className="flex items-center">
<div className="h-2.5 rounded-r-sm bg-semantic-warning w-[45%]"></div>
<span className="ml-2 text-[10px] text-semantic-warning font-label-metric-md">+1.80%</span>
</div>
</div>
</div>
{/* Item 3: Customer Concentration */}
<div onClick={() => setSelectedDriver(3)} className={`p-space-sm rounded-xl transition-all cursor-pointer ${selectedDriver === 3 ? 'bg-surface-container-high/80 shadow-md ring-1 ring-primary/30' : 'bg-surface-container-low/70 hover:bg-surface-container-high/50'}`}>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
<div className="flex items-center gap-2.5">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps">Rank #3</span>
<span className="font-body-md text-body-md font-medium text-on-surface">Customer Concentration (Top 2 = 62.5%)</span>
<span className="text-outline text-body-sm font-label-metric-md">Automotive Ancillary Bias</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-metric-md text-label-metric-md text-semantic-warning font-semibold">+1.4% PD Impact (+)</span>
{selectedDriver === 3 && (
<span className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container font-label-caps text-label-caps shadow-sm flex items-center gap-1">
<span>Selected Driver</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
)}
</div>
</div>
<div className="grid grid-cols-2 gap-1 items-center h-4 rounded-md bg-surface-base/80 p-0.5">
<div></div>
<div className="flex items-center">
<div className="h-2.5 rounded-r-sm bg-semantic-warning/90 w-[35%]"></div>
<span className="ml-2 text-[10px] text-semantic-warning font-label-metric-md">+1.40%</span>
</div>
</div>
</div>
{/* Item 4: DSCR (Mitigant / Green) */}
<div onClick={() => setSelectedDriver(4)} className={`p-space-sm rounded-xl transition-all cursor-pointer ${selectedDriver === 4 ? 'bg-surface-container-high/80 shadow-md ring-1 ring-primary/30' : 'bg-surface-container-low/70 hover:bg-surface-container-high/50'}`}>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
<div className="flex items-center gap-2.5">
<span className="px-2 py-0.5 rounded bg-semantic-success/20 text-semantic-success font-label-caps text-label-caps">Mitigant #1</span>
<span className="font-body-md text-body-md font-medium text-on-surface">Debt-Service Coverage Ratio (1.82x)</span>
<span className="text-outline text-body-sm font-label-metric-md">Healthy Service Cushion (&gt;1.35x)</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-metric-md text-label-metric-md text-semantic-success font-semibold">-2.1% PD Impact (--)</span>
{selectedDriver === 4 && (
<span className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container font-label-caps text-label-caps shadow-sm flex items-center gap-1">
<span>Selected Driver</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
)}
</div>
</div>
<div className="grid grid-cols-2 gap-1 items-center h-4 rounded-md bg-surface-base/80 p-0.5">
<div className="flex items-center justify-end">
<span className="mr-2 text-[10px] text-semantic-success font-label-metric-md">-2.10%</span>
<div className="h-2.5 rounded-l-sm bg-semantic-success w-[52%]"></div>
</div>
<div></div>
</div>
</div>
{/* Item 5: Plan Attainment Drag */}
<div onClick={() => setSelectedDriver(5)} className={`p-space-sm rounded-xl transition-all cursor-pointer ${selectedDriver === 5 ? 'bg-surface-container-high/80 shadow-md ring-1 ring-primary/30' : 'bg-surface-container-low/70 hover:bg-surface-container-high/50'}`}>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
<div className="flex items-center gap-2.5">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps">Rank #4</span>
<span className="font-body-md text-body-md font-medium text-on-surface">Operating Plan Attainment (89.2%)</span>
<span className="text-outline text-body-sm font-label-metric-md">Mild Q2 Revenue Under-run</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-metric-md text-label-metric-md text-semantic-warning font-semibold">+0.6% PD Impact (+)</span>
{selectedDriver === 5 && (
<span className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container font-label-caps text-label-caps shadow-sm flex items-center gap-1">
<span>Selected Driver</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
)}
</div>
</div>
<div className="grid grid-cols-2 gap-1 items-center h-4 rounded-md bg-surface-base/80 p-0.5">
<div></div>
<div className="flex items-center">
<div className="h-2.5 rounded-r-sm bg-semantic-warning/70 w-[15%]"></div>
<span className="ml-2 text-[10px] text-semantic-warning font-label-metric-md">+0.60%</span>
</div>
</div>
</div>
{/* Item 6: GST e-Way Bill Regularity */}
<div onClick={() => setSelectedDriver(6)} className={`p-space-sm rounded-xl transition-all cursor-pointer ${selectedDriver === 6 ? 'bg-surface-container-high/80 shadow-md ring-1 ring-primary/30' : 'bg-surface-container-low/70 hover:bg-surface-container-high/50'}`}>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
<div className="flex items-center gap-2.5">
<span className="px-2 py-0.5 rounded bg-semantic-success/20 text-semantic-success font-label-caps text-label-caps">Mitigant #2</span>
<span className="font-body-md text-body-md font-medium text-on-surface">GST e-Way Bill Filing Regularity (98.4%)</span>
<span className="text-outline text-body-sm font-label-metric-md">Consistently On-Time Filings</span>
</div>
<div className="flex items-center gap-3">
<span className="font-label-metric-md text-label-metric-md text-semantic-success font-semibold">-1.2% PD Impact (-)</span>
{selectedDriver === 6 && (
<span className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container font-label-caps text-label-caps shadow-sm flex items-center gap-1">
<span>Selected Driver</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
)}
</div>
</div>
<div className="grid grid-cols-2 gap-1 items-center h-4 rounded-md bg-surface-base/80 p-0.5">
<div className="flex items-center justify-end">
<span className="mr-2 text-[10px] text-semantic-success font-label-metric-md">-1.20%</span>
<div className="h-2.5 rounded-l-sm bg-semantic-success/80 w-[30%]"></div>
</div>
<div></div>
</div>
</div>
</div>
</div>
{/* Section 2: Two-Column Integrated Deep Dive & Telemetry Evidence Drawer */}
{selectedDriver === 1 ? (
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/* Left Column: Selected Driver Deep Dive (7 cols) */}
<div className="lg:col-span-7 flex flex-col gap-4">
{/* Header Card with Core KPIs */}
<div className="p-space-lg rounded-xl bg-surface-container-low/90 shadow-lg flex flex-col gap-4">
<div className="flex items-start justify-between">
<div>
<span className="font-label-caps text-label-caps text-semantic-critical uppercase tracking-wider">Driver Focus #01</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Receivable Delay &amp; Cash Conversion Elongation</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Deterministic evaluation across Aarav Packaging GSTR-1 and HDFC banking receipts.</p>
</div>
<div className="p-2.5 rounded-xl bg-surface-container-high text-accent-electric">
<span className="material-symbols-outlined text-[24px]">receipt_long</span>
</div>
</div>
{/* 4 Metric Bento Grid */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container/70 flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Weighted DSO</span>
<span className="font-label-metric-lg text-label-metric-lg text-semantic-critical font-bold">47 Days</span>
<span className="font-body-sm text-body-sm text-semantic-warning">+15d over target</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container/70 flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Trapped Receivables</span>
<span className="font-label-metric-lg text-label-metric-lg text-on-surface font-bold">-3.80L</span>
<span className="font-body-sm text-body-sm text-outline">Total Book: -10.7L</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container/70 flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Delinquent Share</span>
<span className="font-label-metric-lg text-label-metric-lg text-semantic-critical font-bold">42.0%</span>
<span className="font-body-sm text-body-sm text-outline">Bajaj Tier-2 Cluster</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container/70 flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Aging Drift</span>
<span className="font-label-metric-lg text-label-metric-lg text-semantic-warning font-bold">+4.2d</span>
<span className="font-body-sm text-body-sm text-outline">MoM elongation</span>
</div>
</div>
{/* Contextual Visual: Plant Logistics & Physical Verification (Image Placeholder 1) */}
<div className="relative overflow-hidden rounded-xl bg-surface-container h-44 shadow-inner">
<img className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-80 transition-opacity duration-300" alt="High tech corrugated carton manufacturing factory floor with precision packaging machines, organized pallet racking, and digital IoT sensor tags glowing with ambient indigo and teal indicators in Mumbai, cinematic institutional lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7s-QH93zhwnYMpYsya6qlv8WCAqwIB9CQFaDNtddwa_sg63gEflb_8tu5WeHJN983tucJJP-VSNvhPhmQNYyS9NfRMzZW-WKMLI-0hR3Lc-tiy_nsfIKr-A7NIfmBhjyQXkcXVwWCNRDxpvI3GS66r9qCTl3eGzfsCkKKQPSW2YzPyFbPRSNI23-ab0dArqc6jMcDG6wLLHYp6wQ46w1C5m7xOqfqeva_RyuJ2sxS_4XvZMzpcqXEA" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/40 to-transparent p-space-md flex flex-col justify-end">
<div className="flex items-center justify-between">
<div>
<span className="font-label-caps text-label-caps text-tertiary">Field IoT &amp; E-Way Match</span>
<p className="font-body-sm text-body-sm text-on-surface">Mumbai Plant 1 Physical Dispatch confirms 98.4% completed output match vs billings.</p>
</div>
<span className="px-2 py-1 rounded bg-surface-base/80 text-semantic-success font-label-caps text-label-caps">Telemetry Synced</span>
</div>
</div>
</div>
</div>
{/* Actionable Guidance Card: "What could improve this signal?" */}
<div className="p-space-lg rounded-xl bg-surface-container-high/90 shadow-md flex flex-col gap-4">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[22px]">lightbulb</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Remediation Pathways: What could improve this signal?</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Model simulations project PD variance based on tangible balance sheet or operational adjustments:
        </p>
<div className="flex flex-col gap-4">
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-2 hover:bg-surface-container transition-colors">
<span className="w-7 h-7 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-label-metric-md text-[13px] shrink-0 font-bold">1</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md font-medium text-on-surface">Accelerate invoice discounting on TReDS Platform</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-success font-semibold">-1.4% PD Potential</span>
</div>
<p className="font-body-sm text-body-sm text-outline pt-0.5">Factor -2.4L in verified Tier-1 OEM invoices to immediately drop DSO from 47d to 33d.</p>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-2 hover:bg-surface-container transition-colors">
<span className="w-7 h-7 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-label-metric-md text-[13px] shrink-0 font-bold">2</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md font-medium text-on-surface">Retain Q3 Operating Surplus Buffer</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-success font-semibold">-0.9% PD Potential</span>
</div>
<p className="font-body-sm text-body-sm text-outline pt-0.5">Maintain -1.20L unencumbered cash sweep reserve in primary HDFC current facility.</p>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-2 hover:bg-surface-container transition-colors">
<span className="w-7 h-7 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-label-metric-md text-[13px] shrink-0 font-bold">3</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md font-medium text-on-surface">Diversify client inflows away from single OEM cluster</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-success font-semibold">-0.7% PD Potential</span>
</div>
<p className="font-body-sm text-body-sm text-outline pt-0.5">Expand non-automotive FMCG carton order book share above 40% threshold.</p>
</div>
</div>
</div>
{/* Mandatory Explainability Disclaimer */}
<div className="p-space-sm rounded-lg bg-surface-base/90 flex items-start gap-2 text-outline">
<span className="material-symbols-outlined text-[16px] text-outline mt-0.5 shrink-0">info</span>
<span className="font-body-sm text-body-sm text-[11px] leading-relaxed">
<strong>Mandatory Regulatory XAI Protocol:</strong> Associated with model output - not proof of causation. Statistical feature importance calculated via TreeSHAP under verifiable ledger constraints. Past collection velocity does not guarantee forward payment liquidation.
          </span>
</div>
</div>
</div>
{/* Right Column: Evidence Drawer (Ledger & Bank Feed Aggregation) (5 cols) */}
<div className="lg:col-span-5 flex flex-col gap-4">
<div className="p-space-lg rounded-xl bg-surface-container/95 shadow-2xl flex flex-col gap-4">
{/* Drawer Header with State Badge */}
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-semantic-critical shadow-[0_0_8px_#F43F5E]"></span>
<span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider font-semibold">Evidence Ledger Terminal</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-caps text-label-caps">Live Consensus Feed</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Aggregated Financial Evidence</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Driver #01: DSO &amp; Overdue Receivables Trace</p>
</div>
{/* Overdue Summary Metric Slate */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-4">
<div className="flex justify-between items-baseline">
<span className="font-body-sm text-body-sm text-outline">Overdue Trapped Invoices</span>
<span className="font-label-metric-lg text-label-metric-lg text-semantic-critical font-bold">-3,80,000</span>
</div>
<div className="flex justify-between items-center text-body-sm">
<span className="text-outline">Portfolio Share:</span>
<span className="font-label-metric-md text-on-surface">35.5% of total billed ledger</span>
</div>
<div className="flex justify-between items-center text-body-sm">
<span className="text-outline">Transaction Volume:</span>
<span className="font-label-metric-md text-on-surface">14 unpaid invoices across 3 buyers</span>
</div>
{/* Mini Progress Track */}
<div className="w-full bg-surface-base h-2 rounded-full overflow-hidden flex">
<div className="bg-semantic-critical h-full" style={{ width: "35.5%" }}></div>
<div className="bg-semantic-warning h-full" style={{ width: "22.0%" }}></div>
<div className="bg-semantic-success h-full" style={{ width: "42.5%" }}></div>
</div>
<div className="flex justify-between text-[10px] text-outline font-label-caps">
<span>Overdue (35.5%)</span>
<span>Grace Period (22%)</span>
<span>Current (42.5%)</span>
</div>
</div>
{/* Trend Sparkline: 6-Month Velocity Drift */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-4">
<div className="flex justify-between items-center">
<span className="font-label-caps text-label-caps text-outline uppercase">6-Month DSO Latency Drift</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-warning">34d - 47d (+38.2%)</span>
</div>
{/* Inline Visual SVG Sparkline Chart */}
<ExplainabilityChart />
</div>
{/* Plan Assumption Latency Breach Warning */}
<div className="p-space-sm rounded-lg bg-surface-container-high/60 space-y-1">
<div className="flex items-center gap-2 text-semantic-warning">
<span className="material-symbols-outlined text-[18px]">warning</span>
<span className="font-body-md text-body-md font-medium text-on-surface">Relevant Plan Assumption Breach</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant pl-6">
            Aarav Packaging FY26 operating plan committed to a <strong>32-day DSO ceiling</strong>. The current 47-day realization represents a <strong>+46.8% latency breach</strong>, directly causing the +3.1% PD risk score amplification.
          </p>
</div>
{/* Verified AA Evidence Cryptographic Tokens */}
<div className="flex flex-col gap-4 pt-space-xs">
<span className="font-label-caps text-label-caps text-outline uppercase">Cryptographic Audit Tokens</span>
<div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-semantic-success text-[18px]">lock</span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm font-medium text-on-surface">GSTR-1 Token #GST-8849</span>
<span className="font-label-caps text-label-caps text-outline">State GSTN Gateway Digest</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-semantic-success font-label-caps text-label-caps">Verified</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[18px]">account_balance</span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm font-medium text-on-surface">HDFC Current A/C #9012</span>
<span className="font-label-caps text-label-caps text-outline">Auto-Sweep Consensus Node</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-semantic-success font-label-caps text-label-caps">Verified</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">token</span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm font-medium text-on-surface">TReDS Factor Token #TR-4410</span>
<span className="font-label-caps text-label-caps text-outline">RXIL Exchange Clearing Hash</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-semantic-success font-label-caps text-label-caps">Verified</span>
</div>
</div>
{/* Terminal Verification Image Placeholder (Image Placeholder 2) */}
<div className="relative overflow-hidden rounded-xl bg-surface-container h-32">
<img className="w-full h-full object-cover opacity-50 mix-blend-luminosity" alt="Financial data analyst examining real time ledger consensus and encryption keys on futuristic dual monitor interface, dark terminal aesthetics with soft purple and blue ambient glowing numbers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOvrisAdQigumEGnpD9R6nSS5QyEHc52ippCqM7PMXiwhUyOdpujvvMburNoMOfBmJlJN8BndFNYZxE87vjL6SV29SaJTyqPw8VjW_xbGiXt-eSB7hS5-hpFmF1dM1TZJ7f64Zou_XDv4DzC557V1HsqnMEHlW2ukXI2hyCqy8fwh7l0xQzIQPWH5WdmZZ_9G1b8DYTh02Bcr8o8wtysTjiiBUi_mPb0hXpMu9quVhPULaeHuK3VFiuA" />
<div className="absolute inset-0 bg-gradient-to-r from-surface-base via-transparent to-surface-base/80 p-space-sm flex items-end">
<span className="font-body-sm text-body-sm text-outline-variant text-[11px]">Audit signature key validated by Reserve Bank of India Account Aggregator framework.</span>
</div>
</div>
{/* Export Evidence Dossier Button */}
<button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-body-md text-body-md font-medium hover:brightness-110 shadow-lg flex items-center justify-center gap-2 transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
<span>Export Verifiable XAI Audit Dossier</span>
</button>
</div>
</div>
</div>
) : (
<div className="p-space-lg rounded-xl bg-surface-container-low/50 text-center text-outline-variant py-24 flex flex-col items-center justify-center border border-white/5 shadow-inner">
<span className="material-symbols-outlined text-[48px] mb-4 opacity-40">troubleshoot</span>
<h3 className="font-headline-sm text-on-surface mb-2">Driver Deep-Dive</h3>
<p className="max-w-md font-body-sm">Select a specific risk driver from the attribution spectrum above to examine its cryptographic telemetry and detailed remediation evidence.</p>
</div>
)}
    </>
  );
}
