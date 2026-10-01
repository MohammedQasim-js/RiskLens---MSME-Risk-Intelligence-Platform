
import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import { ExplainabilityClient } from './ExplainabilityClient';

export default async function ExplainabilityPage() {
  const businessId = await getActiveBusinessId();
  if (!businessId) return <div className="p-8 text-white">No active business.</div>;
  
  const data = await getDashboardData(businessId);

  return (
    <>
      <div className="flex flex-col w-full px-margin py-space-lg gap-4">
{/* Header & Context Banner */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-caps text-label-caps uppercase tracking-wider">Explainability Studio</span>
<span className="text-outline text-body-sm">/</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Root-Cause Lineage</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-semibold">Why is the model saying this?</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
        Every major risk signal is connected to measurable business evidence, grounded in deterministic TreeSHAP attribution and audited Account Aggregator telemetry.
      </p>
</div>
{/* Sovereign Model Verification Chipset */}
<div className="flex flex-wrap items-center gap-2 bg-surface-container-low/60 p-space-sm rounded-xl border-none">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container/90">
<span className="material-symbols-outlined text-accent-electric text-[18px]">neurology</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Engine Architecture</span>
<span className="font-label-metric-md text-label-metric-md text-on-surface text-[12px]">GBM v0.3 (Multi-Vector)</span>
</div>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container/90">
<span className="material-symbols-outlined text-semantic-warning text-[18px]">troubleshoot</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Predictor Target</span>
<span className="font-label-metric-md text-label-metric-md text-semantic-warning text-[12px]">PD 8.2% - Moderate</span>
</div>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container/90">
<span className="material-symbols-outlined text-semantic-success text-[18px]">verified</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">AA Consensus</span>
<span className="font-label-metric-md text-label-metric-md text-tertiary text-[12px]">#MRIP-XAI-8812</span>
</div>
</div>
</div>
</div>
{/* Telemetry Calibration Bar */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-space-md rounded-xl bg-surface-container-lowest/80 shadow-md">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">calendar_clock</span>
</div>
<div>
<div className="font-label-caps text-label-caps text-outline">Calibrated On</div>
<div className="font-label-metric-md text-label-metric-md text-on-surface">Sep 30, 2026 - Daily Close</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
<div>
<div className="font-label-caps text-label-caps text-outline">Audit Coverage</div>
<div className="font-label-metric-md text-label-metric-md text-on-surface">96.4% Ledger + GST Recon</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-semantic-success">
<span className="material-symbols-outlined text-[20px]">database</span>
</div>
<div>
<div className="font-label-caps text-label-caps text-outline">Data Confidence Base</div>
<div className="font-label-metric-md text-label-metric-md text-semantic-success">86/100 (Tier-1 Verifiable)</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">hub</span>
</div>
<div>
<div className="font-label-caps text-label-caps text-outline">XAI Method</div>
<div className="font-label-metric-md text-label-metric-md text-on-surface">Exact TreeSHAP Additive</div>
</div>
</div>
</div>
<ExplainabilityClient />
      </div>
    </>
  );
}
