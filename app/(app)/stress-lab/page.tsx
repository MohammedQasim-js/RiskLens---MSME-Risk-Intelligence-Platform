import { calculateScenarioAction } from './actions';
import { StressLabInteractive } from '@/components/stress-lab/StressLabInteractive';

export default async function StressLabPage() {
  let initialResult = null;
  try {
    initialResult = await calculateScenarioAction({
      revenueShock: -0.20,
      receivableDelay: 15,
      costInflation: 0.10,
      projectOverrun: 0.0,
      customerLoss: 0.0
    });
  } catch (_e) {
    return <div className="p-8 text-white">No active business found.</div>;
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-geist font-semibold text-white tracking-tight">Stress Lab</h1>
          <p className="text-on-surface-variant mt-2 font-sans text-lg">Deterministic scenario engine validating extreme operational assumptions.</p>
        </div>
      </div>
      
      {initialResult && <StressLabInteractive initialResult={initialResult} />}
    </div>
  )
}
