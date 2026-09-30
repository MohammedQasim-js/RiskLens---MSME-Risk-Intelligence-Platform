import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import { runScenario } from '@/lib/analytics/scenarios';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';

export default async function ReportPage() {
  const businessId = await getActiveBusinessId();
  if (!businessId) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-on-surface-variant mx-auto mb-4" />
        <h2 className="text-xl font-geist text-white">No Active Business</h2>
        <p className="text-on-surface-variant">Please complete onboarding or select a business to generate a report.</p>
      </div>
    );
  }

  const data = await getDashboardData(businessId);
  
  // Baseline setup
  const targetRevenue = data.business?.target_monthly_revenue * 12 || 1000000;
  const projectBudget = data.business?.project_budget || 100000;
  const liquidCash = 150000;
  
  const stressParams = {
    revenueShock: -0.20,
    receivableDelay: 15,
    costInflation: 0.10,
    projectOverrun: 0.0,
    customerLoss: 0.0
  };

  const stressResult = runScenario(
    businessId, data.transactions, stressParams, liquidCash, targetRevenue,
    projectBudget, 50000, 365, 15000 * 12, 120000, 500000, 45
  );

  const baselineMinCash = Math.min(...data.forecast.map(f => f.projected_cash));

  // Server Action for Audit
  async function logReportGeneration() {
    'use server';
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase.from('audit_events').insert({
        actor_id: user.id,
        action: 'REPORT_GENERATED',
        entity_type: 'business',
        entity_id: businessId,
        metadata: { format: 'pdf', model_version: data.risk.model_version }
      });
    }
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12 animate-in fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-geist font-semibold text-white tracking-tight">MSME Risk Intelligence Report</h1>
          <p className="text-on-surface-variant mt-2 font-sans">Business: {data.business?.legal_name || 'Unknown'}</p>
          <p className="text-on-surface-variant text-sm font-mono mt-1">Generated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        </div>
        <form action={logReportGeneration}>
          <Button type="submit" variant="outline" className="gap-2 bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </form>
      </div>

      <div className="glass-panel p-8 rounded-xl bg-surface border border-white/10 space-y-12 shadow-2xl relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] font-bold text-white/[0.02] -rotate-45 pointer-events-none whitespace-nowrap z-0">
          DEMO DATA
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-white/10 pb-8">
          <div>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">PD</p>
            <p className="text-3xl font-mono text-white mt-1">{(data.risk.pd * 100).toFixed(1)}%</p>
          </div>
          <div>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Risk Band</p>
            <p className="text-3xl font-mono text-white mt-1 capitalize">{data.risk.risk_band.toLowerCase()}</p>
          </div>
          <div>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Financial Health</p>
            <p className="text-3xl font-mono text-white mt-1">{data.health.score}</p>
          </div>
          <div>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Data Confidence</p>
            <p className="text-3xl font-mono text-emerald-400 mt-1">{data.dataQuality.overall_confidence}%</p>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <h3 className="text-lg font-geist text-white font-medium flex items-center gap-2"><FileText className="w-5 h-5 text-primary"/> Executive Summary</h3>
          <p className="text-on-surface text-sm leading-relaxed">
            {data.business?.legal_name} demonstrates a {data.risk.risk_band.toLowerCase()} risk profile with a probability of default of {(data.risk.pd * 100).toFixed(1)}%.
            The business&apos;s financial health score is {data.health.score}/100, supported by a data confidence level of {data.dataQuality.overall_confidence}%.
            Currently, the entity maintains a baseline minimum cash projection of ₹{baselineMinCash.toLocaleString()} over the next 90 days.
          </p>
        </div>

        <div className="relative z-10 space-y-4">
          <h3 className="text-lg font-geist text-white font-medium flex items-center gap-2"><AlertCircle className="w-5 h-5 text-amber-500"/> Key Risk Drivers</h3>
          <div className="space-y-3">
            {data.risk.top_drivers.slice(0,5).map((d: { name: string; impact: string }, i: number) => (
              <div key={i} className="flex justify-between items-center p-3 rounded bg-white/5 border border-white/5">
                <span className="text-on-surface text-sm capitalize">{d.name.replace(/_/g, ' ')}</span>
                <Badge variant={d.impact === 'NEGATIVE' ? 'critical' : 'safe'}>{d.impact}</Badge>
              </div>
            ))}
            {data.risk.top_drivers.length === 0 && <p className="text-on-surface-variant text-sm">No critical drivers identified.</p>}
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-geist text-white font-medium flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Plan vs Actual</h3>
            <div className="p-4 rounded bg-white/5 border border-white/5 space-y-3">
              <div className="flex justify-between">
                <span className="text-on-surface-variant text-sm">Target Revenue</span>
                <span className="text-white font-mono">₹{data.business?.target_monthly_revenue?.toLocaleString() || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant text-sm">Actual Est. Revenue</span>
                <span className="text-white font-mono">₹{data.features.find((f: { feature_name: string; value: number }) => f.feature_name === 'avg_monthly_inflow')?.value.toLocaleString() || 0}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-geist text-white font-medium flex items-center gap-2"><AlertCircle className="w-5 h-5 text-rose-500"/> Stress Scenario</h3>
            <div className="p-4 rounded bg-rose-500/10 border border-rose-500/20 space-y-3">
              <p className="text-xs text-rose-200 mb-2">Scenario: Rev -20%, Delay +15d, Cost +10%</p>
              <div className="flex justify-between">
                <span className="text-on-surface-variant text-sm">Baseline PD</span>
                <span className="text-white font-mono">{(data.risk.pd * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant text-sm">Stressed PD</span>
                <span className="text-rose-400 font-mono">{(stressResult.scenarioRisk.pd * 100).toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10 pt-8 space-y-6">
          <div className="grid grid-cols-2 text-sm">
            <div>
              <p className="text-on-surface-variant">Model Version</p>
              <p className="text-white font-mono">{data.risk.model_version}</p>
            </div>
            <div>
              <p className="text-on-surface-variant">Evaluation Date</p>
              <p className="text-white font-mono">{new Date(data.risk.as_of).toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="p-4 rounded bg-surface border border-white/5 text-xs text-on-surface-variant">
            <strong className="text-white block mb-1">LIMITATIONS</strong>
            <p>This report relies on synthetic demonstration data. Results are for decision-support only. Production deployment requires rigorous backtesting and validation against actual borrower history.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
