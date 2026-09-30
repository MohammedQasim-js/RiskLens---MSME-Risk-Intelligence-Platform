import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';

export default async function PlanVsActualPage() {
  const businessId = await getActiveBusinessId();
  if (!businessId) return <div className="p-8 text-white">No active business.</div>;
  const data = await getDashboardData(businessId);

  const planAttainment = data.features.find(f => f.feature_name === 'plan_attainment')?.value || 0;
  const budgetAdherence = data.features.find(f => f.feature_name === 'budget_adherence')?.value || 0;
  
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in">
      <div>
        <h1 className="text-3xl font-geist font-semibold text-white tracking-tight">Plan vs Actual</h1>
        <p className="text-on-surface-variant mt-2 font-sans">Business performance against targets and budget constraints.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
          <div>
            <p className="text-sm text-on-surface-variant font-medium">Plan Attainment (Revenue)</p>
            <h2 className="text-4xl font-mono text-white mt-2">{(planAttainment * 100).toFixed(1)}%</h2>
          </div>
          <div className="mt-6">
            <div className="w-full bg-surface-overlay rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${Math.min(planAttainment * 100, 100)}%` }}></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-on-surface-variant">
              <span>Actual: ₹{((data.business?.target_monthly_revenue || 0) * 12 * planAttainment).toLocaleString(undefined, {maximumFractionDigits:0})}</span>
              <span>Target: ₹{((data.business?.target_monthly_revenue || 0) * 12).toLocaleString(undefined, {maximumFractionDigits:0})}</span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
          <div>
            <p className="text-sm text-on-surface-variant font-medium">Budget Adherence (Project)</p>
            <h2 className="text-4xl font-mono text-white mt-2">{(budgetAdherence * 100).toFixed(1)}%</h2>
          </div>
          <div className="mt-6">
            <div className="w-full bg-surface-overlay rounded-full h-2">
              <div className={`h-2 rounded-full ${budgetAdherence > 1 ? 'bg-rose-500' : 'bg-blue-500'}`} style={{ width: `${Math.min(budgetAdherence * 100, 100)}%` }}></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-on-surface-variant">
              <span>Spend: ₹{((data.business?.project_budget || 0) * budgetAdherence).toLocaleString(undefined, {maximumFractionDigits:0})}</span>
              <span>Budget: ₹{(data.business?.project_budget || 0).toLocaleString(undefined, {maximumFractionDigits:0})}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-panel p-8 rounded-xl bg-gradient-to-br from-surface to-surface-overlay border border-white/5">
        <h3 className="font-geist text-xl text-white font-medium mb-4">Strategic Insights</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-on-surface">Revenue plan attainment is at <strong className="text-white">{(planAttainment * 100).toFixed(1)}%</strong>. {planAttainment < 0.8 ? "The business is severely underperforming against its stated targets, signaling high execution risk." : "The business is on track to meet or exceed its stated revenue goals."}</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-on-surface">Budget adherence is at <strong className="text-white">{(budgetAdherence * 100).toFixed(1)}%</strong>. {budgetAdherence > 1.0 ? "Project spend has exceeded the allocated budget, indicating poor cost control." : "Spend is well within budget limits."}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
