import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import { extractDrivers } from '@/lib/analytics/drivers';
import { ExplainabilityInteractive } from '@/components/explainability/ExplainabilityInteractive';
import { Badge } from '@/components/ui/badge';

export default async function ExplainabilityPage() {
  const businessId = await getActiveBusinessId();
  if (!businessId) return <div className="p-8 text-white">No active business.</div>;
  
  const data = await getDashboardData(businessId);
  const drivers = extractDrivers(data.features, data.business?.target_monthly_revenue || 0);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-geist font-semibold text-white tracking-tight">Explainability & Risk Evidence</h1>
          <p className="text-on-surface-variant mt-2 font-sans text-lg">Why is the model saying this?</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-on-surface-variant font-medium mb-1">Model {data.risk.model_version} &middot; As of {data.risk.as_of.split('T')[0]}</p>
          <Badge variant="safe">Data Confidence: {data.dataQuality.overall_confidence}/100</Badge>
        </div>
      </div>
      
      <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-200 text-sm mb-6 flex items-center gap-3">
        <span className="font-bold text-amber-500">IMPORTANT</span>
        <span>Associated with model output — not proof of absolute causation.</span>
      </div>

      <ExplainabilityInteractive drivers={drivers} risk={data.risk} />
    </div>
  );
}
