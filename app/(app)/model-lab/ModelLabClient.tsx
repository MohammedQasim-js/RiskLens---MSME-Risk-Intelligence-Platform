'use client';

import React from 'react';

export function ModelLabClient() {
  return (
    <>
      <div className="flex flex-col w-full">
<div className="px-margin py-space-lg flex flex-col gap-6 max-w-[1600px] mx-auto w-full">
{/*  Top Institutional Breadcrumb & Header Ribbon  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Model Governance &amp; Risk Intelligence</span>
<span className="text-outline text-body-sm font-body-sm">/</span>
<span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">MRIP Core Validation Suite</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-semibold">Model Evaluation &amp; Algorithmic Governance</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Audit predictive reliability, benchmarking metrics, and demographic bias before deploying underwriter models.
        </p>
</div>
{/*  Action & Audit Provenance Badges  */}
<div className="flex items-center gap-2 flex-wrap">
<div className="px-4 py-1.5 rounded-lg bg-surface-container-high/70 shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-accent-electric">verified</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">RBI Circular MD-103 Audited</span>
</div>
<button className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-bright transition-colors font-body-sm text-body-sm flex items-center gap-2 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">download</span>
<span>Download Audit Dossier</span>
</button>
</div>
</div>
{/*  Persistent Tab Switcher  */}
<div className="p-1 rounded-xl bg-surface-container-lowest/80 shadow-md flex items-center gap-1 w-full max-w-md">
<button className="flex-1 py-2 px-4 rounded-lg font-body-sm text-body-sm transition-all duration-200 flex items-center justify-center gap-2 bg-surface-container text-on-surface font-medium shadow-sm" id="tab-btn-model-lab" onClick={() =&gt; {}} type="button">
<span className="material-symbols-outlined text-[16px] text-tertiary">tune</span>
<span>Model Lab</span>
</button>
<button className="flex-1 py-2 px-4 rounded-lg font-body-sm text-body-sm transition-all duration-200 flex items-center justify-center gap-2 text-on-surface-variant hover:text-on-surface" id="tab-btn-fairness" onClick={() =&gt; {}} type="button">
<span className="material-symbols-outlined text-[16px]">balance</span>
<span>Fairness &amp; Bias Analysis</span>
</button>
</div>
{/*  VIEW 1: MODEL LAB (DEFAULT ACTIVE)  */}
<div className="flex flex-col gap-10" id="view-model-lab">
{/*  Sub-Workspace Heading & Champion Strip  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">Benchmarking Enclave</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Model Lab View</h2>
<p className="font-body-sm text-body-sm text-outline">Compare model behavior before choosing which model to trust.</p>
</div>
{/*  Subtle Champion Tag (Institutional, not gamified)  */}
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-surface-container-high/80 shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(208,188,255,0.6)]"></span>
<span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-wider">Current Champion:</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface font-semibold text-[13px]">Gradient Boosting v0.3</span>
</div>
</div>
{/*  Top 3 Benchmark Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Card A: Baseline Logistic Regression  */}
<div className="rounded-xl p-space-lg bg-surface-container-low/70 shadow-md flex flex-col justify-between gap-4 relative overflow-hidden transition-all hover:bg-surface-container/70">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded text-[10px] font-label-caps uppercase tracking-wider bg-surface-container-high text-outline">Baseline</span>
<span className="font-label-caps text-label-caps text-outline">v1.1 Stable</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Logistic Regression</h3>
<p className="font-body-sm text-body-sm text-outline mt-0.5 truncate">L2-Penalized Generalized Linear Model</p>
</div>
<div className="grid grid-cols-3 gap-2 pt-space-xs">
<div className="flex flex-col p-2 rounded-lg bg-surface-container-lowest/60">
<span className="font-label-caps text-[10px] text-outline uppercase">ROC-AUC</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface text-[15px] mt-0.5">0.78</span>
</div>
<div className="flex flex-col p-2 rounded-lg bg-surface-container-lowest/60">
<span className="font-label-caps text-[10px] text-outline uppercase">PR-AUC</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface text-[15px] mt-0.5">0.51</span>
</div>
<div className="flex flex-col p-2 rounded-lg bg-surface-container-lowest/60">
<span className="font-label-caps text-[10px] text-outline uppercase">Brier</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface text-[15px] mt-0.5">0.142</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 pt-space-sm">
<div className="flex items-center justify-between font-label-caps text-label-caps text-outline">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">timer</span> 12ms latency</span>
<span>14 linear ratios</span>
</div>
<div className="w-full py-1.5 px-space-sm rounded bg-surface-container-highest text-center font-label-caps text-[11px] text-outline uppercase tracking-wider">
              Fallback / Baseline
            </div>
</div>
</div>
{/*  Card B: Current Champion Gradient Boosting  */}
<div className="rounded-xl p-space-lg bg-surface-container/90 shadow-xl flex flex-col justify-between gap-4 relative overflow-hidden transition-all">
<div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>
<div className="flex flex-col gap-2 relative z-10">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded text-[10px] font-label-caps uppercase tracking-wider bg-secondary-container/40 text-secondary font-semibold">Active Production</span>
<span className="font-label-caps text-label-caps text-accent-electric flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success animate-pulse"></span> Champion
              </span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
<span>Gradient Boosting</span>
<span className="font-label-caps text-[11px] text-secondary font-normal">v0.3</span>
</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">LightGBM Multi-Vector Ensemble</p>
</div>
<div className="grid grid-cols-3 gap-2 pt-space-xs">
<div className="flex flex-col p-2 rounded-lg bg-surface-container-lowest/80">
<span className="font-label-caps text-[10px] text-outline uppercase">ROC-AUC</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-success text-[15px] font-bold mt-0.5">0.84</span>
</div>
<div className="flex flex-col p-2 rounded-lg bg-surface-container-lowest/80">
<span className="font-label-caps text-[10px] text-outline uppercase">PR-AUC</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-success text-[15px] font-bold mt-0.5">0.63</span>
</div>
<div className="flex flex-col p-2 rounded-lg bg-surface-container-lowest/80">
<span className="font-label-caps text-[10px] text-outline uppercase">Brier</span>
<span className="font-label-metric-md text-label-metric-md text-tertiary text-[15px] font-bold mt-0.5">0.118</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 pt-space-sm relative z-10">
<div className="flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[13px] text-secondary">speed</span> 42ms latency</span>
<span>86 non-linear features</span>
</div>
<div className="w-full py-1.5 px-space-sm rounded bg-primary-container text-on-primary-container text-center font-label-caps text-[11px] font-semibold uppercase tracking-wider shadow-sm">
              Production Champion (Serving Live)
            </div>
</div>
</div>
{/*  Card C: Challenger Neural Tabular Net  */}
<div className="rounded-xl p-space-lg bg-surface-container-low/70 shadow-md flex flex-col justify-between gap-4 relative overflow-hidden transition-all hover:bg-surface-container/70">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded text-[10px] font-label-caps uppercase tracking-wider bg-surface-container-high text-accent-electric">Challenger</span>
<span className="font-label-caps text-label-caps text-outline">v0.1 Shadow</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Neural Tabular Net</h3>
<p className="font-body-sm text-body-sm text-outline mt-0.5 truncate">FT-Transformer with Self-Attention</p>
</div>
<div className="grid grid-cols-3 gap-2 pt-space-xs">
<div className="flex flex-col p-2 rounded-lg bg-surface-container-lowest/60">
<span className="font-label-caps text-[10px] text-outline uppercase">ROC-AUC</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface text-[15px] mt-0.5">0.83</span>
</div>
<div className="flex flex-col p-2 rounded-lg bg-surface-container-lowest/60">
<span className="font-label-caps text-[10px] text-outline uppercase">PR-AUC</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface text-[15px] mt-0.5">0.61</span>
</div>
<div className="flex flex-col p-2 rounded-lg bg-surface-container-lowest/60">
<span className="font-label-caps text-[10px] text-outline uppercase">Brier</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface text-[15px] mt-0.5">0.124</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 pt-space-sm">
<div className="flex items-center justify-between font-label-caps text-label-caps text-outline">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">hourglass_top</span> 110ms latency</span>
<span>140 embeddings</span>
</div>
<div className="w-full py-1.5 px-space-sm rounded bg-surface-container-highest text-center font-label-caps text-[11px] text-accent-electric uppercase tracking-wider">
              Experimental Challenger
            </div>
</div>
</div>
</div>
{/*  Institutional Visual: Dual Calibration / Discriminant Sparkline Deck  */}
<div className="rounded-xl p-space-lg bg-surface-container-low/60 shadow-lg flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Reliability &amp; Risk Discriminations Curve</h3>
<p className="font-body-sm text-body-sm text-outline">Empirical Default Probabilities against Expected Calibrated Bins (10 Quantiles)</p>
</div>
<div className="flex items-center gap-4 font-label-caps text-label-caps text-outline">
<span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-outline"></span> Baseline</span>
<span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-secondary"></span> Champion v0.3</span>
<span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-tertiary"></span> Challenger</span>
</div>
</div>
<div className="w-full h-36 flex items-end gap-1 px-2 pt-4 bg-surface-container-lowest/60 rounded-lg relative overflow-hidden">
{/*  Reference baseline 45-degree guideline  */}
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
<line stroke="rgba(255,255,255,0.08)" strokeDasharray="2,2" strokeWidth="0.8" x1="0" x2="100" y1="100" y2="0" />
{/*  Baseline Model Curve  */}
<path d="M 0,100 Q 20,88 40,70 T 80,30 T 100,5" fill="none" stroke="rgba(144, 143, 160, 0.4)" strokeWidth="1.5" />
{/*  Challenger Curve  */}
<path d="M 0,100 Q 25,82 50,55 T 85,18 T 100,0" fill="none" stroke="#4cd7f6" strokeWidth="1.8" />
{/*  Champion Curve (Tight to diagonal)  */}
<path d="M 0,100 Q 22,78 48,52 T 82,16 T 100,0" fill="none" stroke="#d0bcff" strokeWidth="2.2" />
</svg>
<div className="w-full flex justify-between font-label-metric-md text-[10px] text-outline absolute bottom-1 px-3">
<span>Decile 1 (0-2% PD)</span>
<span>Decile 5 (8% Cutoff)</span>
<span>Decile 10 (&gt;35% Critical PD)</span>
</div>
</div>
</div>
{/*  Comprehensive Model Diagnostic Comparison Matrix (Table)  */}
<div className="rounded-xl bg-surface-container-low/70 shadow-lg overflow-hidden flex flex-col">
<div className="p-space-md sm:p-space-lg flex items-center justify-between bg-surface-container/60">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Diagnostic Comparison Matrix</h3>
<p className="font-body-sm text-body-sm text-outline">Empirical hold-out evaluation on 18,450 historical MSME repayment cycles</p>
</div>
<span className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-caps text-label-caps">N = 18,450 Cohort</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-body-md border-collapse">
<thead>
<tr className="bg-surface-container-lowest/80 text-outline font-label-caps text-label-caps uppercase tracking-wider">
<th className="py-3 px-space-lg">Evaluation Metric</th>
<th className="py-3 px-4">Logistic Regression v1.1</th>
<th className="py-3 px-4 text-secondary">Gradient Boosting (Champion)</th>
<th className="py-3 px-4">Tabular Net (Challenger)</th>
<th className="py-3 px-space-lg text-right">Regulatory Benchmark Target</th>
</tr>
</thead>
<tbody className="divide-y-0">
{/*  Row 1: ROC-AUC  */}
<tr className="hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface flex items-center gap-2">
<span>ROC-AUC</span>
<span className="font-body-sm text-[11px] text-outline font-normal">(Area Under ROC)</span>
</td>
<td className="py-3.5 px-4 font-label-metric-md text-on-surface-variant">0.78</td>
<td className="py-3.5 px-4 font-label-metric-md text-secondary font-semibold">0.84</td>
<td className="py-3.5 px-4 font-label-metric-md text-on-surface">0.83</td>
<td className="py-3.5 px-space-lg text-right font-label-metric-md text-semantic-success">- 0.80 (Pass)</td>
</tr>
{/*  Row 2: PR-AUC  */}
<tr className="bg-surface-container-lowest/30 hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface flex items-center gap-2">
<span>PR-AUC</span>
<span className="font-body-sm text-[11px] text-outline font-normal">(Precision-Recall AUC)</span>
</td>
<td className="py-3.5 px-4 font-label-metric-md text-semantic-critical">0.51</td>
<td className="py-3.5 px-4 font-label-metric-md text-secondary font-semibold">0.63</td>
<td className="py-3.5 px-4 font-label-metric-md text-on-surface">0.61</td>
<td className="py-3.5 px-space-lg text-right font-label-metric-md text-semantic-success">- 0.60 (Pass)</td>
</tr>
{/*  Row 3: Brier Calibration Score  */}
<tr className="hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface flex items-center gap-2">
<span>Brier Calibration Score</span>
<span className="font-body-sm text-[11px] text-outline font-normal">(Lower is superior)</span>
</td>
<td className="py-3.5 px-4 font-label-metric-md text-outline">0.142</td>
<td className="py-3.5 px-4 font-label-metric-md text-secondary font-semibold">0.118</td>
<td className="py-3.5 px-4 font-label-metric-md text-on-surface">0.124</td>
<td className="py-3.5 px-space-lg text-right font-label-metric-md text-semantic-success">- 0.120 (Optimal)</td>
</tr>
{/*  Row 4: Precision  */}
<tr className="bg-surface-container-lowest/30 hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">Precision (@ 8% PD Cutoff)</td>
<td className="py-3.5 px-4 font-label-metric-md text-semantic-critical">72.4%</td>
<td className="py-3.5 px-4 font-label-metric-md text-secondary font-semibold">81.6%</td>
<td className="py-3.5 px-4 font-label-metric-md text-on-surface">79.1%</td>
<td className="py-3.5 px-space-lg text-right font-label-metric-md text-semantic-success">- 75.0%</td>
</tr>
{/*  Row 5: Recall  */}
<tr className="hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">Recall (@ 8% PD Cutoff)</td>
<td className="py-3.5 px-4 font-label-metric-md text-outline">68.1%</td>
<td className="py-3.5 px-4 font-label-metric-md text-secondary font-semibold">76.5%</td>
<td className="py-3.5 px-4 font-label-metric-md text-on-surface">77.2%</td>
<td className="py-3.5 px-space-lg text-right font-label-metric-md text-semantic-success">- 70.0%</td>
</tr>
{/*  Row 6: False Positive Rate (FPR)  */}
<tr className="bg-surface-container-lowest/30 hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">False Positive Rate (FPR)</td>
<td className="py-3.5 px-4 font-label-metric-md text-semantic-critical">14.2%</td>
<td className="py-3.5 px-4 font-label-metric-md text-secondary font-semibold">8.4%</td>
<td className="py-3.5 px-4 font-label-metric-md text-on-surface">9.1%</td>
<td className="py-3.5 px-space-lg text-right font-label-metric-md text-semantic-success">- 10.0%</td>
</tr>
{/*  Row 7: False Negative Rate (FNR)  */}
<tr className="hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">False Negative Rate (FNR)</td>
<td className="py-3.5 px-4 font-label-metric-md text-semantic-critical">31.9%</td>
<td className="py-3.5 px-4 font-label-metric-md text-secondary font-semibold">23.5%</td>
<td className="py-3.5 px-4 font-label-metric-md text-on-surface">22.8%</td>
<td className="py-3.5 px-space-lg text-right font-label-metric-md text-semantic-success">- 25.0%</td>
</tr>
{/*  Row 8: Population Stability Index (PSI)  */}
<tr className="bg-surface-container-lowest/30 hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">Population Stability Index (PSI)</td>
<td className="py-3.5 px-4 font-label-metric-md text-on-surface-variant">0.08 <span className="text-[11px] text-outline">(Stable)</span></td>
<td className="py-3.5 px-4 font-label-metric-md text-semantic-success font-semibold">0.04 <span className="text-[11px] text-semantic-success">(Highly Stable)</span></td>
<td className="py-3.5 px-4 font-label-metric-md text-on-surface">0.09 <span className="text-[11px] text-outline">(Stable)</span></td>
<td className="py-3.5 px-space-lg text-right font-label-metric-md text-semantic-success">&lt; 0.10</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  VIEW 2: FAIRNESS TAB (INTEGRATED SUB-WORKSPACE)  */}
<div className="hidden flex-col gap-10" id="view-fairness">
{/*  Sub-Workspace Heading & Governance Notice  */}
<div className="flex flex-col gap-2 pt-2">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">Demographic Disparity &amp; Impact Auditing</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Fairness &amp; Bias Analysis</h2>
</div>
{/*  Strict Institutional Governance Note  */}
<div className="p-space-md rounded-xl bg-surface-container-high/60 shadow-sm flex items-start gap-2">
<span className="material-symbols-outlined text-[20px] text-tertiary mt-0.5">policy</span>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider font-semibold">Regulatory Protocol Compliance</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Protected attributes are evaluation-only unless explicitly governed for another purpose. Regulated under RBI Fair Lending Principles and Algorithmic Audit standards.
            </p>
</div>
</div>
</div>
{/*  Dimensional Evaluator Filter / Summary Bar  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
<div className="p-space-md rounded-xl bg-surface-container-low/80 shadow-sm flex flex-col gap-1">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">Dimension 1: Geography</span>
<span className="font-body-md text-body-md text-on-surface font-medium">Urban / Hubs / Clusters</span>
<span className="font-label-metric-md text-[11px] text-tertiary">3 Monitored Strata</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low/80 shadow-sm flex flex-col gap-1">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">Dimension 2: Vintage</span>
<span className="font-body-md text-body-md text-on-surface font-medium">Seed to Mature (&gt;5y)</span>
<span className="font-label-metric-md text-[11px] text-semantic-success">Zero Drift Detected</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low/80 shadow-sm flex flex-col gap-1">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">Dimension 3: Industry Vertical</span>
<span className="font-body-md text-body-md text-on-surface font-medium">Packaging, Auto, Textile</span>
<span className="font-label-metric-md text-[11px] text-tertiary">4 Audited Sectors</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low/80 shadow-sm flex flex-col gap-1">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">Dimension 4: MSME Size</span>
<span className="font-body-md text-body-md text-on-surface font-medium">Micro, Small, Medium</span>
<span className="font-label-metric-md text-[11px] text-semantic-warning">1 Metric Gap Flagged</span>
</div>
</div>
{/*  Professional Fairness Subgroup Matrix  */}
<div className="rounded-xl bg-surface-container-low/70 shadow-lg overflow-hidden flex flex-col">
<div className="p-space-md sm:p-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-surface-container/60">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Subgroup Disparity Assessment</h3>
<p className="font-body-sm text-body-sm text-outline">Evaluated under Champion LightGBM v0.3 at 8.0% Probability of Default threshold</p>
</div>
<div className="flex items-center gap-1 font-label-caps text-label-caps text-outline">
<span className="w-2 h-2 rounded-full bg-semantic-warning"></span>
<span>Threshold for Divergence: - &gt; 3.0%</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-body-md border-collapse">
<thead>
<tr className="bg-surface-container-lowest/80 text-outline font-label-caps text-label-caps uppercase tracking-wider">
<th className="py-3 px-space-lg">Subgroup Dimension</th>
<th className="py-3 px-space-sm text-right">Selection (%)</th>
<th className="py-3 px-space-sm text-right">TPR</th>
<th className="py-3 px-space-sm text-right">FPR</th>
<th className="py-3 px-space-sm text-right">FNR</th>
<th className="py-3 px-space-sm text-right">Precision</th>
<th className="py-3 px-space-sm text-right">ECE</th>
<th className="py-3 px-space-sm text-right">Sample (n)</th>
<th className="py-3 px-space-lg text-right">Governance Verdict</th>
</tr>
</thead>
<tbody className="divide-y-0">
{/*  Row: Small MSME  */}
<tr className="hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">
<div className="flex flex-col">
<span>Small Enterprises (-1-10 Cr)</span>
<span className="font-body-sm text-[11px] text-outline">MSME Classification</span>
</div>
</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">41.2%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">78.4%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">8.2%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">21.6%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">82.0%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">0.021</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">1,420</td>
<td className="py-3.5 px-space-lg text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-semantic-success font-label-caps text-label-caps">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
                    Within observed range
                  </span>
</td>
</tr>
{/*  Row: Micro MSME (Warning Gap)  */}
<tr className="bg-surface-container-lowest/30 hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">
<div className="flex flex-col">
<span>Micro Enterprises (&lt;-1 Cr)</span>
<span className="font-body-sm text-[11px] text-outline">MSME Classification</span>
</div>
</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">29.8%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">71.0%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-semantic-warning font-semibold">11.6%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">29.0%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">74.5%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">0.048</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">640</td>
<td className="py-3.5 px-space-lg text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-semantic-warning/10 text-semantic-warning font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[13px]">warning</span>
                    Metric gap detected (FPR - +3.4%)
                  </span>
</td>
</tr>
{/*  Row: Auto Ancillaries  */}
<tr className="hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">
<div className="flex flex-col">
<span>Auto Ancillaries</span>
<span className="font-body-sm text-[11px] text-outline">Industry Vertical</span>
</div>
</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">44.5%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">80.2%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">7.9%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">19.8%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">83.4%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">0.019</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">980</td>
<td className="py-3.5 px-space-lg text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-semantic-success font-label-caps text-label-caps">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
                    Within observed range
                  </span>
</td>
</tr>
{/*  Row: Packaging & Paper  */}
<tr className="bg-surface-container-lowest/30 hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">
<div className="flex flex-col">
<span>Packaging &amp; Paper</span>
<span className="font-body-sm text-[11px] text-outline">Industry Vertical (Subject Profile)</span>
</div>
</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">42.8%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">79.1%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">8.1%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">20.9%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">82.6%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">0.020</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">1,150</td>
<td className="py-3.5 px-space-lg text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-semantic-success font-label-caps text-label-caps">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
                    Within observed range
                  </span>
</td>
</tr>
{/*  Row: Tier-3 Emerging Clusters (Insufficient Sample)  */}
<tr className="hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">
<div className="flex flex-col">
<span>Tier-3 Emerging Clusters</span>
<span className="font-body-sm text-[11px] text-outline">Geography</span>
</div>
</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">--</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">--</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">--</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">--</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">--</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">--</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-semantic-critical font-semibold">42</td>
<td className="py-3.5 px-space-lg text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-highest text-outline font-label-caps text-[10px] tracking-wider uppercase">
<span className="material-symbols-outlined text-[12px]">info</span>
                    INSUFFICIENT SAMPLE
                  </span>
</td>
</tr>
{/*  Row: Business Vintage Seed (<2 Years)  */}
<tr className="bg-surface-container-lowest/30 hover:bg-surface-container/40 transition-colors">
<td className="py-3.5 px-space-lg font-medium text-on-surface">
<div className="flex flex-col">
<span>Seed Stage (&lt;2 Years)</span>
<span className="font-body-sm text-[11px] text-outline">Business Vintage</span>
</div>
</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">33.1%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">73.6%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">9.9%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">26.4%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">77.3%</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-on-surface">0.038</td>
<td className="py-3.5 px-space-sm text-right font-label-metric-md text-outline">512</td>
<td className="py-3.5 px-space-lg text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-semantic-success font-label-caps text-label-caps">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
                    Within observed range
                  </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Protocol Attestation Box  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest/80 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold">Independent Model Validation Attestation</span>
<span className="font-body-sm text-body-sm text-outline">Signed by MRIP Algorithmic Governance Council - Cryptographic Hash: 8b0c4a...ef91</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-1.5 rounded bg-surface-container text-on-surface font-body-sm text-body-sm hover:bg-surface-bright transition-colors" type="button">
            View Calibration Ledger
          </button>
<button className="px-4 py-1.5 rounded bg-primary-container text-on-primary-container font-body-sm text-body-sm font-medium hover:opacity-90 transition-opacity" type="button">
            Re-run Bias Disparity Audit
          </button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
