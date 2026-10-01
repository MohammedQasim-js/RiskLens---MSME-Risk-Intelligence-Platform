'use client';

import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip, ReferenceLine, CartesianGrid, YAxis } from 'recharts';

const chartData = [
  { day: 0, label: 'Day 0', balance: -2.10 },
  { day: 30, label: 'Day 30', balance: -1.85 },
  { day: 60, label: 'Day 60', balance: -1.21 },
  { day: 74, label: 'Dec 14 Trough', balance: -0.88, isTrough: true },
  { day: 90, label: 'Day 90', balance: -0.95 }
];


export function ReportClient() {
  const [isExporting, setIsExporting] = useState(false);
  const [showExportToast, setShowExportToast] = useState(false);
  
  const [shareState, setShareState] = useState<'idle' | 'sharing' | 'shared'>('idle');

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setShowExportToast(true);
      setTimeout(() => setShowExportToast(false), 5000);
    }, 1500);
  };

  const handleShareTrigger = () => {
    setShareState('sharing');
    setTimeout(() => {
      setShareState('shared');
      setTimeout(() => setShareState('idle'), 3000);
    }, 800);
  };

  return (
    <>
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
{/*  Top Floating Notification / Print Alert State (Hidden in PDF export)  */}
{showExportToast && (
  <div className="transition-all duration-300 fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl bg-surface-overlay shadow-xl border-l-4 border-l-accent-electric flex items-center gap-3 text-on-surface animate-in slide-in-from-bottom-8">
    <span className="material-symbols-outlined text-accent-electric text-lg">verified</span>
    <span className="font-body-sm text-body-sm">Document package (PDF + XBRL 2.1 taxonomy) generated successfully.</span>
    <button className="ml-2 text-outline hover:text-on-surface" onClick={() => setShowExportToast(false)}>
      <span className="material-symbols-outlined text-sm">close</span>
    </button>
  </div>
)}
{/*  DOSSIER FORMAL COVER HEADER  */}
<section className="relative rounded-2xl bg-surface-container-low p-6 sm:p-8 shadow-xl overflow-hidden">
{/*  Ambient Lighting Geometry  */}
<div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-1/2 -left-20 w-80 h-80 bg-accent-electric/5 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
<div className="flex flex-col gap-3">
{/*  Meta Micro Header  */}
<div className="flex flex-wrap items-center gap-2 sm:gap-3">
<span className="px-2.5 py-1 rounded bg-secondary-container/40 text-secondary font-label-caps text-label-caps tracking-widest uppercase">
              CONFIDENTIAL - SYNDICATE CLEARANCE
            </span>
<span className="text-outline text-xs">/</span>
<span className="font-label-caps text-label-caps text-tertiary tracking-wider uppercase flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
              INSTITUTIONAL CREDIT &amp; RESILIENCE DOSSIER
            </span>
<span className="text-outline text-xs hidden sm:inline">/</span>
<span className="font-label-metric-md text-body-sm text-on-surface-variant hidden sm:inline">REF: #RL-2026-09-UDYAM</span>
</div>
{/*  Entity Identity Title  */}
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
<h1 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">
              Aarav Packaging Private Limited
            </h1>
<span className="font-label-metric-md text-label-metric-md text-outline font-normal">
              UDYAM-MH-01-0029412
            </span>
</div>
{/*  Entity Jurisdictional Subline  */}
<div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-base text-accent-electric">factory</span>
              Jurisdiction: Mumbai, Maharashtra - Primary Manufacturing Unit
            </span>
<span className="text-outline">-</span>
<span className="flex items-center gap-1.5 text-tertiary">
<span className="material-symbols-outlined text-base">verified_user</span>
              Validated via RBI Account Aggregator
            </span>
<span className="text-outline">-</span>
<span className="font-label-metric-md text-body-sm text-outline">
              Dossier Timestamp: Sep 30, 2026 - 14:32 IST
            </span>
</div>
</div>
{/*  Action CTAs Bar  */}
<div className="flex flex-wrap items-center gap-3 pt-2 xl:pt-0">
<button className="group px-4 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-md text-body-md font-medium transition-all shadow-sm flex items-center gap-2" id="btn-share" onClick={handleShareTrigger} type="button" disabled={shareState !== 'idle'}>
  {shareState === 'idle' && (
    <>
      <span className="material-symbols-outlined text-lg text-tertiary group-hover:scale-110 transition-transform">share_reviews</span>
      <span>Share with Syndicate</span>
    </>
  )}
  {shareState === 'sharing' && (
    <>
      <span className="material-symbols-outlined text-lg animate-spin text-tertiary">refresh</span>
      <span>Generating Link...</span>
    </>
  )}
  {shareState === 'shared' && (
    <>
      <span className="material-symbols-outlined text-lg text-semantic-success">check</span>
      <span className="text-semantic-success">Syndicate Link Copied</span>
    </>
  )}
</button>
<button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-container via-inverse-primary to-secondary-container hover:brightness-110 text-on-primary font-body-md text-body-md font-semibold transition-all shadow-md flex items-center gap-2" id="btn-export" onClick={handleExportPDF} type="button" disabled={isExporting}>
  {isExporting ? (
    <>
      <span className="material-symbols-outlined text-lg animate-spin">refresh</span>
      <span>Compiling XBRL Dossier...</span>
    </>
  ) : (
    <>
      <span className="material-symbols-outlined text-lg">download</span>
      <span>Export Dossier (PDF / XBRL)</span>
    </>
  )}
</button>
</div>
</div>
</section>
{/*  SECTION: FOUR HERO INDICES RIBBON  */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{/*  HERO 1: Probability of Default (PD)  */}
<div className="rounded-xl bg-surface-container p-5 flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container-high transition-colors">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">Probability of Default (PD)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Annualized 12-Month Horizon</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-semantic-warning/15 text-semantic-warning font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-warning"></span>
            Moderate
          </span>
</div>
<div className="my-3 flex items-baseline gap-3">
<span className="font-label-metric-lg text-display-lg-mobile lg:text-display-lg text-on-surface font-bold tracking-tight">8.2%</span>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-semantic-success font-medium flex items-center">
<span className="material-symbols-outlined text-sm">trending_down</span> -1.4%
            </span>
<span className="font-label-caps text-label-caps text-outline">vs Sector Med. (9.6%)</span>
</div>
</div>
{/*  Inline SVG Indicator Bar  */}
<div className="flex flex-col gap-1.5">
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden flex">
<div className="bg-semantic-success h-full" style={{ width: '25%' }}></div>
<div className="bg-semantic-warning h-full relative" style={{ width: '35%' }}>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-on-surface shadow-[0_0_8px_#fff]"></div>
</div>
<div className="bg-semantic-critical/40 h-full" style={{ width: '40%' }}></div>
</div>
<div className="flex justify-between font-label-caps text-label-caps text-outline">
<span>Low &lt;5%</span>
<span className="text-on-surface font-medium">8.2% Actual</span>
<span>Critical &gt;12%</span>
</div>
</div>
</div>
{/*  HERO 2: Solvency & Operations (Financial Health)  */}
<div className="rounded-xl bg-surface-container p-5 flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container-high transition-colors">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">Financial Health Score</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Solvency &amp; Operational Health</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span>
            Stable
          </span>
</div>
<div className="my-3 flex items-baseline gap-2">
<span className="font-label-metric-lg text-display-lg-mobile lg:text-display-lg text-on-surface font-bold tracking-tight">74</span>
<span className="font-label-metric-md text-headline-sm text-outline font-normal">/ 100</span>
<span className="ml-auto font-label-caps text-label-caps text-tertiary px-2 py-1 rounded bg-tertiary-container/15">
            Top 25th %ile
          </span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-1">
<span>Peer Median: 62.0</span>
<span className="font-label-metric-md text-on-surface font-medium">Packaging Segment</span>
</div>
</div>
{/*  HERO 3: Data Confidence Index  */}
<div className="rounded-xl bg-surface-container p-5 flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container-high transition-colors">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">Data Confidence Score</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Reconciled Telemetry Integrity</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-accent-electric/15 text-accent-electric font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-accent-electric"></span>
            High-Quality
          </span>
</div>
<div className="my-3 flex items-baseline gap-2">
<span className="font-label-metric-lg text-display-lg-mobile lg:text-display-lg text-accent-electric font-bold tracking-tight">86</span>
<span className="font-label-metric-md text-headline-sm text-outline font-normal">/ 100</span>
<span className="ml-auto material-symbols-outlined text-accent-electric text-xl">verified</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-1">
<span className="truncate">GSTR-1 + AA Bank Feeds + e-Inv</span>
<span className="font-label-metric-md text-semantic-success font-medium">100% Match</span>
</div>
</div>
{/*  HERO 4: Liquidity Buffer  */}
<div className="rounded-xl bg-surface-container p-5 flex flex-col justify-between shadow-md relative overflow-hidden group hover:bg-surface-container-high transition-colors">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">Liquidity Runway Buffer</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Unencumbered Cash Reserves</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-semantic-warning/15 text-semantic-warning font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-warning animate-pulse"></span>
            Attention
          </span>
</div>
<div className="my-3 flex items-baseline gap-2">
<span className="font-label-metric-lg text-display-lg-mobile lg:text-display-lg text-semantic-warning font-bold tracking-tight">24</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-medium">Days</span>
<span className="ml-auto font-label-metric-md text-body-sm text-outline">
            Target: 30d
          </span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-1">
<span className="text-semantic-critical font-medium">Covenant Alert: &lt;15 Days</span>
<span className="font-label-metric-md text-on-surface font-medium">Margin: +9d</span>
</div>
</div>
</section>
{/*  MAIN TWO-COLUMN INSTITUTIONAL DOSSIER CONTENT  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  LEFT COLUMN (7 COLS): Executive Summary + Attribution + Cash Outlook  */}
<div className="lg:col-span-7 flex flex-col gap-8">
{/*  SECTION 1: EXECUTIVE SUMMARY  */}
<div className="rounded-2xl bg-surface-container p-6 sm:p-7 shadow-md flex flex-col gap-5">
<div className="flex items-center justify-between pb-3 bg-surface-container">
<div className="flex items-center gap-2.5">
<span className="w-2.5 h-2.5 rounded-sm bg-primary-container"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                Section 1: Executive Underwriting Summary
              </h2>
</div>
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Committee Note</span>
</div>
{/*  3 Institutional Paragraphs  */}
<div className="flex flex-col gap-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1.5">
<span className="font-headline-sm text-body-lg font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-semantic-success text-base">check_circle</span>
                Solvency Baseline &amp; Production Throughput
              </span>
<p>
                Aarav Packaging demonstrates stable core operating profitability, generating steady gross operating margins of <strong className="text-on-surface font-semibold">35.0%</strong> against a trailing normalized revenue run-rate of <strong className="text-on-surface font-semibold">-10.7 Lakhs/month</strong>. Fixed asset efficiency remains robust across its Mumbai corrugation plant, supported by active long-term purchase agreements with mid-tier FMCG distributors.
              </p>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1.5">
<span className="font-headline-sm text-body-lg font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-semantic-warning text-base">warning</span>
                Operational Friction: Receivable Compression
              </span>
<p>
                The primary vulnerability in the obligor-s liquidity profile is a <strong className="text-semantic-warning font-semibold">15-day collection elongation</strong> (current DSO stands at 47 days vs. historical baseline of 32 days). This elongation has temporarily immobilized <strong className="text-on-surface font-semibold">-3.8 Lakhs in trapped working capital</strong>, exerting avoidable draw pressure on cash reserves as seasonal inventory build approaches in Q3.
              </p>
</div>
<div className="p-4 rounded-xl bg-primary-container/10 flex flex-col gap-2">
<span className="font-headline-sm text-body-lg font-semibold text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-base">verified</span>
                Committee Recommendation: Conditional Approval &amp; TReDS Carve-Out
              </span>
<p className="text-on-surface">
                Credit Committee recommends <strong className="text-semantic-success font-semibold">conditional approval</strong> for working capital renewal, contingent on deploying an approved <strong className="text-on-surface font-semibold">-8.0 Lakh TReDS invoice factoring backstop</strong>. This mechanism will pre-emptively absorb the critical December 14 machinery capex installment (<strong className="text-accent-electric">-2.1L</strong>) without degrading covenant cash buffers below the -65K minimum threshold.
              </p>
</div>
</div>
</div>
{/*  SECTION 2: KEY RISK ATTRIBUTION DRIVERS (TREE-SHAP EXPLAINABILITY)  */}
<div className="rounded-2xl bg-surface-container p-6 sm:p-7 shadow-md flex flex-col gap-5">
<div className="flex items-center justify-between pb-3 bg-surface-container">
<div className="flex items-center gap-2.5">
<span className="w-2.5 h-2.5 rounded-sm bg-accent-electric"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                Section 2: Key Risk Attribution Drivers (Top 5 Factors)
              </h2>
</div>
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">TreeSHAP Deterministic</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant -mt-2">
            Decomposition of empirical model weights contributing to the baseline 8.2% Probability of Default.
          </p>
{/*  Ranked Factors Table  */}
<div className="flex flex-col gap-2.5">
{/*  Row 1  */}
<div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between gap-4">
<div className="flex items-center gap-3 min-w-0">
<span className="w-6 h-6 rounded-full bg-semantic-critical/20 text-semantic-critical font-label-metric-md text-xs flex items-center justify-center font-bold">1</span>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md text-on-surface font-medium truncate">Receivable Days Drift (+15d elongation)</span>
<span className="font-body-sm text-body-sm text-outline">DSO shifted from 32d to 47d across FMCG receivables</span>
</div>
</div>
<div className="flex items-center gap-4 flex-shrink-0 text-right">
<span className="px-2 py-1 rounded bg-semantic-critical/15 text-semantic-critical font-label-caps text-label-caps font-semibold">
                  High Priority Drag
                </span>
<span className="font-label-metric-md text-body-lg font-bold text-semantic-critical">+3.1% PD</span>
</div>
</div>
{/*  Row 2  */}
<div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between gap-4">
<div className="flex items-center gap-3 min-w-0">
<span className="w-6 h-6 rounded-full bg-semantic-success/20 text-semantic-success font-label-metric-md text-xs flex items-center justify-center font-bold">2</span>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md text-on-surface font-medium truncate">Debt-Service Coverage Ratio (1.82x DSCR)</span>
<span className="font-body-sm text-body-sm text-outline">Operating EBITDA provides 1.82x coverage on current bank debt</span>
</div>
</div>
<div className="flex items-center gap-4 flex-shrink-0 text-right">
<span className="px-2 py-1 rounded bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps font-semibold">
                  Mitigating Buffer
                </span>
<span className="font-label-metric-md text-body-lg font-bold text-semantic-success">-2.1% PD</span>
</div>
</div>
{/*  Row 3  */}
<div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between gap-4">
<div className="flex items-center gap-3 min-w-0">
<span className="w-6 h-6 rounded-full bg-semantic-warning/20 text-semantic-warning font-label-metric-md text-xs flex items-center justify-center font-bold">3</span>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md text-on-surface font-medium truncate">Operating Cash Buffer (24 Days Remaining)</span>
<span className="font-body-sm text-body-sm text-outline">6 days below benchmark underwriting target (30 days)</span>
</div>
</div>
<div className="flex items-center gap-4 flex-shrink-0 text-right">
<span className="px-2 py-1 rounded bg-semantic-warning/15 text-semantic-warning font-label-caps text-label-caps font-semibold">
                  Mild Drag
                </span>
<span className="font-label-metric-md text-body-lg font-bold text-semantic-warning">+1.8% PD</span>
</div>
</div>
{/*  Row 4  */}
<div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between gap-4">
<div className="flex items-center gap-3 min-w-0">
<span className="w-6 h-6 rounded-full bg-semantic-warning/20 text-semantic-warning font-label-metric-md text-xs flex items-center justify-center font-bold">4</span>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md text-on-surface font-medium truncate">Top 2 Customer Revenue Concentration (62.5%)</span>
<span className="font-body-sm text-body-sm text-outline">High counterparty dependency on Varun Agro &amp; Marico co-packers</span>
</div>
</div>
<div className="flex items-center gap-4 flex-shrink-0 text-right">
<span className="px-2 py-1 rounded bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps font-semibold">
                  Structural Exposure
                </span>
<span className="font-label-metric-md text-body-lg font-bold text-semantic-warning">+1.4% PD</span>
</div>
</div>
{/*  Row 5  */}
<div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between gap-4">
<div className="flex items-center gap-3 min-w-0">
<span className="w-6 h-6 rounded-full bg-surface-container-highest text-outline font-label-metric-md text-xs flex items-center justify-center font-bold">5</span>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md text-on-surface font-medium truncate">Operating Plan Attainment (89.2% of Target)</span>
<span className="font-body-sm text-body-sm text-outline">Slight trailing deviation from FY26 original budget forecast</span>
</div>
</div>
<div className="flex items-center gap-4 flex-shrink-0 text-right">
<span className="px-2 py-1 rounded bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps font-semibold">
                  Controlled Deviation
                </span>
<span className="font-label-metric-md text-body-lg font-bold text-on-surface">+0.6% PD</span>
</div>
</div>
</div>
</div>
{/*  SECTION 3: CASH HORIZON OUTLOOK (90-DAY OUTLOOK)  */}
<div className="rounded-2xl bg-surface-container p-6 sm:p-7 shadow-md flex flex-col gap-5">
<div className="flex items-center justify-between pb-3 bg-surface-container">
<div className="flex items-center gap-2.5">
<span className="w-2.5 h-2.5 rounded-sm bg-tertiary"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                Section 3: Cash Horizon Outlook (90-Day Trajectory)
              </h2>
</div>
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Dynamic Reconciled Model</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant -mt-2">
            Deterministic liquidity forecast incorporating scheduled supplier outflows, GST payments, and invoice realization timing.
          </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Milestone 1: 30 Days  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between gap-3 shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase">30 Days - Oct 2026</span>
<span className="px-2 py-0.5 rounded bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps font-medium">Certainty: High</span>
</div>
<div>
<span className="font-label-metric-lg text-headline-lg font-bold text-on-surface">-1.85 Lakhs</span>
<div className="font-body-sm text-body-sm text-outline mt-0.5">Confidence Corridor: --12K</div>
</div>
<div className="pt-2 text-body-sm text-on-surface-variant flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-semantic-success"></span>
<span>Normal payroll clearance</span>
</div>
</div>
{/*  Milestone 2: 60 Days  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between gap-3 shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase">60 Days - Nov 2026</span>
<span className="px-2 py-0.5 rounded bg-semantic-warning/15 text-semantic-warning font-label-caps text-label-caps font-medium">Certainty: Moderate</span>
</div>
<div>
<span className="font-label-metric-lg text-headline-lg font-bold text-on-surface">-1.21 Lakhs</span>
<div className="font-body-sm text-body-sm text-outline mt-0.5">Confidence Corridor: --28K</div>
</div>
<div className="pt-2 text-body-sm text-on-surface-variant flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-semantic-warning"></span>
<span>Raw material prepayments</span>
</div>
</div>
{/*  Milestone 3: 90 Days  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between gap-3 shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase">90 Days - Dec 2026</span>
<span className="px-2 py-0.5 rounded bg-semantic-critical/15 text-semantic-critical font-label-caps text-label-caps font-medium">Certainty: Sensitive</span>
</div>
<div>
<span className="font-label-metric-lg text-headline-lg font-bold text-semantic-warning">-0.88 Lakhs</span>
<div className="font-body-sm text-body-sm text-semantic-critical mt-0.5 font-medium">Trough: -88K on Dec 14</div>
</div>
<div className="pt-2 text-body-sm text-on-surface-variant flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-semantic-critical"></span>
<span>Machinery capex installment</span>
</div>
</div>
</div>
{/*  Synthetic Liquidity Projection Spark Chart Visual  */}
<div className="p-4 rounded-xl bg-surface-container-lowest mt-1 flex flex-col gap-2">
<div className="flex items-center justify-between text-body-sm">
<span className="font-label-caps text-label-caps text-outline uppercase">90-Day Unencumbered Balance Curve (- Lakhs)</span>
<span className="font-label-caps text-label-caps text-semantic-critical">Covenant Minimum: -0.65L</span>
</div>
<div className="h-24 w-full mt-2">
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
      <defs>
        <linearGradient id="liquidityFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity={0.0} />
        </linearGradient>
      </defs>
      <YAxis hide domain={[-2.5, 0]} />
        <Tooltip 
        contentStyle={{ backgroundColor: '#0F121A', borderColor: '#1F2433', color: '#F8FAFC', fontSize: '12px' }}
        itemStyle={{ color: '#38BDF8' }}
        formatter={(value) => [`${value}L`, 'Balance']}
      />
      <ReferenceLine y={-0.65} stroke="#F43F5E" strokeDasharray="4 4" strokeWidth={1} />
      <Area 
        type="monotone" 
        dataKey="balance" 
        stroke="#38BDF8" 
        strokeWidth={2.5} 
        fill="url(#liquidityFill)" 
        activeDot={{ r: 5, fill: '#F59E0B', stroke: '#0A0D14', strokeWidth: 2 }}
      />
    </AreaChart>
  </ResponsiveContainer>
</div>
<div className="flex items-center justify-between font-label-caps text-label-caps text-outline pt-1">
<span>Day 0 (-2.10L)</span>
<span>Day 30 (-1.85L)</span>
<span>Day 60 (-1.21L)</span>
<span className="text-semantic-warning font-semibold">Dec 14 Trough (-0.88L)</span>
<span>Day 90 (-0.95L)</span>
</div>
</div>
</div>
</div>
{/*  RIGHT COLUMN (5 COLS): Plan vs Actual + Stress Lab + Governance Audit  */}
<div className="lg:col-span-5 flex flex-col gap-8">
{/*  SECTION 4: PLAN VS REALITY EXECUTION  */}
<div className="rounded-2xl bg-surface-container p-6 sm:p-7 shadow-md flex flex-col gap-5">
<div className="flex items-center justify-between pb-3 bg-surface-container">
<div className="flex items-center gap-2.5">
<span className="w-2.5 h-2.5 rounded-sm bg-secondary"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                Section 4: Plan vs Reality Execution
              </h2>
</div>
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Variance Audit</span>
</div>
{/*  Revenue Execution Module  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface font-medium">Revenue Realization (Sep 2026)</span>
<span className="font-label-metric-md text-body-md text-semantic-warning font-semibold">89.2% Realized</span>
</div>
{/*  Double Metric Comparison  */}
<div className="grid grid-cols-2 gap-3 pt-1">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Target Budget</span>
<span className="font-label-metric-md text-body-lg text-on-surface font-semibold">-12.0 Lakhs</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Actual Realized</span>
<span className="font-label-metric-md text-body-lg text-on-surface font-semibold">-10.7 Lakhs</span>
</div>
</div>
{/*  Progress realization track  */}
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{ width: '89.2%' }}></div>
</div>
<span className="font-body-sm text-body-sm text-semantic-critical flex items-center gap-1">
<span className="material-symbols-outlined text-xs">south</span> Net Revenue Deficit: --1.3 Lakhs (-10.8%)
            </span>
</div>
{/*  Opex Budget Overspend Module  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface font-medium">Operating Expenditure (Opex)</span>
<span className="font-label-metric-md text-body-md text-semantic-critical font-semibold">+3.8% Overspend</span>
</div>
<div className="grid grid-cols-2 gap-3 pt-1">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Planned Budget</span>
<span className="font-label-metric-md text-body-lg text-on-surface font-semibold">-7.8 Lakhs</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Actual Outflow</span>
<span className="font-label-metric-md text-body-lg text-semantic-critical font-semibold">-8.1 Lakhs</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-outline">
              Primary variance driver: Spot price escalation (+6.4%) on semi-kraft fluting paper grades at Bhiwandi warehousing hub.
            </p>
</div>
</div>
{/*  SECTION 5: STRESS SCENARIO BENCHMARK  */}
<div className="rounded-2xl bg-surface-container p-6 sm:p-7 shadow-md flex flex-col gap-5 relative overflow-hidden">
{/*  Subtle warning banner  */}
<div className="flex items-center justify-between pb-3 bg-surface-container">
<div className="flex items-center gap-2.5">
<span className="w-2.5 h-2.5 rounded-sm bg-semantic-critical"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                Section 5: Stress Scenario Benchmark
              </h2>
</div>
<span className="px-2 py-0.5 rounded bg-semantic-critical/15 text-semantic-critical font-label-caps text-label-caps uppercase font-bold">
              Stress Lab Test
            </span>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low text-body-sm font-body-sm text-on-surface-variant flex flex-col gap-1">
<div className="font-semibold text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-semantic-critical text-base">emergency_home</span>
              Simulated Condition: Severe Supply Chain &amp; Delay Shock
            </div>
<span className="text-outline">Assumptions: -20% Revenue drop, +15d DSO customer freeze, +10% Raw paper input cost inflation.</span>
</div>
{/*  3 Before / After Impact Badges  */}
<div className="grid grid-cols-1 gap-3">
{/*  Metric 1: PD Shift  */}
<div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">Probability of Default</span>
<span className="font-label-caps text-label-caps text-semantic-critical uppercase font-bold">Critical Downgrade</span>
</div>
<div className="flex items-center gap-2 font-label-metric-md">
<span className="text-body-lg text-outline">8.2%</span>
<span className="material-symbols-outlined text-semantic-critical text-base">arrow_forward</span>
<span className="text-headline-sm font-bold text-semantic-critical">14.7%</span>
</div>
</div>
{/*  Metric 2: Min Liquidity Trough  */}
<div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">Projected Min Balance</span>
<span className="font-label-caps text-label-caps text-semantic-critical uppercase font-bold">Covenant Breach (Day 72)</span>
</div>
<div className="flex items-center gap-2 font-label-metric-md">
<span className="text-body-lg text-outline">-1.85L</span>
<span className="material-symbols-outlined text-semantic-critical text-base">arrow_forward</span>
<span className="text-headline-sm font-bold text-semantic-critical">-42K</span>
</div>
</div>
{/*  Metric 3: Buffer Days  */}
<div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">Liquidity Runway Buffer</span>
<span className="font-label-caps text-label-caps text-semantic-critical uppercase font-bold">TReDS Mandatory Trigger</span>
</div>
<div className="flex items-center gap-2 font-label-metric-md">
<span className="text-body-lg text-outline">24 Days</span>
<span className="material-symbols-outlined text-semantic-critical text-base">arrow_forward</span>
<span className="text-headline-sm font-bold text-semantic-critical">6 Days</span>
</div>
</div>
</div>
<div className="p-3 rounded-lg bg-semantic-critical/10 text-body-sm font-body-sm text-semantic-critical flex items-start gap-2">
<span className="material-symbols-outlined text-base flex-shrink-0 mt-0.5">report_problem</span>
<span>Breaches institutional -65,000 baseline liquidity covenant within 72 days without external credit support.</span>
</div>
</div>
{/*  SECTION 6: MODEL GOVERNANCE & AUDIT METADATA  */}
<div className="rounded-2xl bg-surface-container p-6 sm:p-7 shadow-md flex flex-col gap-4">
<div className="flex items-center justify-between pb-2 bg-surface-container">
<div className="flex items-center gap-2.5">
<span className="w-2.5 h-2.5 rounded-sm bg-tertiary"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                Section 6: Model Governance &amp; Audit
              </h2>
</div>
<span className="material-symbols-outlined text-semantic-success text-base">lock</span>
</div>
<div className="flex flex-col gap-2 font-body-sm text-body-sm">
<div className="flex justify-between py-1.5 border-b border-white/5">
<span className="text-outline">Inference Engine:</span>
<span className="font-label-metric-md text-on-surface font-medium">RiskLens MRIP Gradient Boosted Machine (GBM) v0.3</span>
</div>
<div className="flex justify-between py-1.5 border-b border-white/5">
<span className="text-outline">Explainability Framework:</span>
<span className="font-label-metric-md text-on-surface font-medium">Exact TreeSHAP Deterministic Kernel</span>
</div>
<div className="flex justify-between py-1.5 border-b border-white/5">
<span className="text-outline">Telemetry Checksum:</span>
<span className="font-label-metric-md text-accent-electric font-medium">#SHA256-MRIP-9921-AARAV</span>
</div>
<div className="flex justify-between py-1.5">
<span className="text-outline">Model Execution Stamp:</span>
<span className="font-label-metric-md text-on-surface-variant font-medium">Sep 30, 2026 - 14:32:08 UTC+05:30</span>
</div>
</div>
</div>
</div>
</div>
{/*  SECTION 7: INSTITUTIONAL DISCLAIMERS & REGULATORY LIMITATIONS  */}
<section className="rounded-2xl bg-surface-container-low p-6 sm:p-8 shadow-sm flex flex-col gap-4 text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-2 font-label-caps text-label-caps text-outline uppercase tracking-wider">
<span className="material-symbols-outlined text-base">policy</span>
        Section 7: Institutional Disclaimers &amp; Regulatory Limitations
      </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
<div className="flex flex-col gap-1.5">
<span className="text-on-surface font-medium">Synthetic Calibrated Profile</span>
<p className="text-outline leading-relaxed">
            This document reflects a synthetic demonstration profile calibrated against authentic Reserve Bank of India (RBI) Account Aggregator telemetry schema and GSTN filing models.
          </p>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-on-surface font-medium">Decision-Support Scope</span>
<p className="text-outline leading-relaxed">
            Model outputs provide predictive decision-support analytics and quantitative stress testing. They do not constitute an automated credit grant, loan sanction, or binding commitment.
          </p>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-on-surface font-medium">MRM Governance Directive</span>
<p className="text-outline leading-relaxed">
            Production underwriting syndicates require independent Model Risk Management (MRM) validation and human credit officer review pursuant to applicable RBI master directions.
          </p>
</div>
</div>
<div className="flex flex-wrap items-center justify-between pt-4 mt-2 border-t border-white/5 font-label-caps text-label-caps text-outline">
<span>RiskLens MRIP Engine - v3.8 High-Resilience Build</span>
<span className="font-label-metric-md">Document Authority: Underwriting Syndication Desk</span>
</div>
</section>
</div>


    </>
  );
}

// Force HMR
