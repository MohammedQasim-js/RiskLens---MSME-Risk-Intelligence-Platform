import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import { Badge } from '@/components/ui/badge';

export default async function ForecastPage() {
  const businessId = await getActiveBusinessId();
  if (!businessId) return <div className="p-8 text-white">No active business.</div>;
  const data = await getDashboardData(businessId);
  
  const next30 = data.forecast[29];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-geist font-semibold text-white tracking-tight">Forecast</h1>
          <p className="text-on-surface-variant mt-2 font-sans">Deterministic future liquidity projections and uncertainty bands.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-xl border-l-4 border-l-blue-500">
          <p className="text-sm text-on-surface-variant font-medium">30-Day Projected Cash</p>
          <h2 className="text-3xl font-mono text-white mt-2">₹{next30?.projected_cash.toLocaleString(undefined, {maximumFractionDigits: 0})}</h2>
        </div>
        <div className="glass-panel p-6 rounded-xl border-l-4 border-l-amber-500">
          <p className="text-sm text-on-surface-variant font-medium">Variance Risk</p>
          <h2 className="text-3xl font-mono text-white mt-2">±₹{((next30?.uncertainty_band.upper - next30?.projected_cash) || 0).toLocaleString(undefined, {maximumFractionDigits: 0})}</h2>
        </div>
        <div className="glass-panel p-6 rounded-xl border-l-4 border-l-rose-500">
          <p className="text-sm text-on-surface-variant font-medium">Scheduled Debt</p>
          <h2 className="text-3xl font-mono text-rose-400 mt-2">₹{next30?.scheduled_debt.toLocaleString()}</h2>
        </div>
      </div>

      <div className="glass-panel p-6 rounded-xl min-h-[500px] flex flex-col">
        <h3 className="font-geist text-lg text-white font-medium border-b border-white/10 pb-4 mb-4">90-Day Trajectory</h3>
        <div className="flex-1 border border-dashed border-white/10 rounded-lg bg-white/5 flex items-center justify-center">
          <div className="text-center">
            <p className="text-on-surface-variant text-sm">Forecast Uncertainty Banding (Recharts)</p>
            <p className="text-xs text-on-surface-variant/50 mt-2">Based on {data.transactions.length} historical records</p>
          </div>
        </div>
      </div>
      
      <div className="glass-panel p-6 rounded-xl">
        <h3 className="font-geist text-lg text-white font-medium border-b border-white/10 pb-4 mb-4">Projected Milestones</h3>
        <div className="space-y-3">
          {data.forecast.filter((f, i) => i === 29 || i === 59 || i === 89).map((f, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-white font-medium">Day {(i+1)*30}</span>
              <span className="text-on-surface-variant font-mono">Cash: ₹{f.projected_cash.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
              <Badge variant={f.projected_cash < 0 ? 'critical' : 'safe'}>{f.projected_cash < 0 ? 'LIQUIDITY CRUNCH' : 'STABLE'}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
