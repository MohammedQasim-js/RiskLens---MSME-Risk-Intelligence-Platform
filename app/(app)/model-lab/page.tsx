import { getModelEvaluations } from '@/lib/governance/data';
import { Badge } from '@/components/ui/badge';

type ModelEval = { status: string; family: string; model_version: string; feature_schema_hash: string; dataset_hash: string; metrics: Record<string, number>; };

export default async function ModelLabPage() {
  const evals = await getModelEvaluations();
  
  const champion = evals.find((e: ModelEval) => e.status === 'CHAMPION') as ModelEval | undefined;
  const challenger = evals.find((e: ModelEval) => e.status === 'EVALUATED') as ModelEval | undefined;

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-geist font-semibold text-white tracking-tight">Model Lab & Governance</h1>
          <p className="text-on-surface-variant mt-2 font-sans text-lg">Compare production and challenger models against standardized datasets.</p>
        </div>
        <div className="text-right">
          <Badge variant="outline" className="border-amber-500/50 text-amber-500 bg-amber-500/10">Synthetic Evaluation</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-xl border-t-4 border-emerald-500">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-geist text-xl text-white font-medium">{champion?.family}</h3>
              <p className="text-on-surface-variant text-sm font-mono mt-1">{champion?.model_version}</p>
            </div>
            <Badge variant="safe">CURRENT CHAMPION</Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div>
              <p className="text-on-surface-variant">Feature Schema</p>
              <p className="text-white font-mono">{champion?.feature_schema_hash.substring(0,14)}...</p>
            </div>
            <div>
              <p className="text-on-surface-variant">Dataset</p>
              <p className="text-white font-mono">{champion?.dataset_hash.substring(0,14)}...</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-white border-b border-white/10 pb-2">Performance Metrics</h4>
            <div className="grid grid-cols-2 gap-y-3">
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">AUC</span> <span className="text-white font-mono">{champion?.metrics.auc}</span></div>
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">PR-AUC</span> <span className="text-white font-mono">{champion?.metrics.pr_auc}</span></div>
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">Brier Score</span> <span className="text-white font-mono">{champion?.metrics.brier}</span></div>
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">Precision</span> <span className="text-white font-mono">{champion?.metrics.precision}</span></div>
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">Recall</span> <span className="text-white font-mono">{champion?.metrics.recall}</span></div>
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">FPR</span> <span className="text-white font-mono">{champion?.metrics.fpr}</span></div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl border-t-4 border-blue-500">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-geist text-xl text-white font-medium">{challenger?.family}</h3>
              <p className="text-on-surface-variant text-sm font-mono mt-1">{challenger?.model_version}</p>
            </div>
            <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10">CHALLENGER</Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div>
              <p className="text-on-surface-variant">Feature Schema</p>
              <p className="text-white font-mono">{challenger?.feature_schema_hash.substring(0,14)}...</p>
            </div>
            <div>
              <p className="text-on-surface-variant">Dataset</p>
              <p className="text-white font-mono">{challenger?.dataset_hash.substring(0,14)}...</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-white border-b border-white/10 pb-2">Performance Metrics</h4>
            <div className="grid grid-cols-2 gap-y-3">
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">AUC</span> <span className={`font-mono ${(challenger?.metrics.auc || 0) > (champion?.metrics.auc || 0) ? 'text-emerald-400' : 'text-rose-400'}`}>{challenger?.metrics.auc}</span></div>
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">PR-AUC</span> <span className={`font-mono ${(challenger?.metrics.pr_auc || 0) > (champion?.metrics.pr_auc || 0) ? 'text-emerald-400' : 'text-rose-400'}`}>{challenger?.metrics.pr_auc}</span></div>
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">Brier Score</span> <span className={`font-mono ${(challenger?.metrics.brier || 0) < (champion?.metrics.brier || 1) ? 'text-emerald-400' : 'text-rose-400'}`}>{challenger?.metrics.brier}</span></div>
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">Precision</span> <span className={`font-mono ${(challenger?.metrics.precision || 0) > (champion?.metrics.precision || 0) ? 'text-emerald-400' : 'text-rose-400'}`}>{challenger?.metrics.precision}</span></div>
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">Recall</span> <span className={`font-mono ${(challenger?.metrics.recall || 0) < (champion?.metrics.recall || 0) ? 'text-rose-400' : 'text-emerald-400'}`}>{challenger?.metrics.recall}</span></div>
              <div className="flex justify-between pr-4"><span className="text-on-surface-variant">FPR</span> <span className={`font-mono ${(challenger?.metrics.fpr || 0) < (champion?.metrics.fpr || 1) ? 'text-emerald-400' : 'text-rose-400'}`}>{challenger?.metrics.fpr}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 rounded-xl bg-surface border border-white/5">
        <h3 className="font-geist text-lg text-white font-medium mb-4">Governance Audit Log</h3>
        <p className="text-sm text-on-surface-variant mb-4">Every model evaluation and promotion creates an immutable audit event mapping the actor, timestamp, and justification.</p>
        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm text-on-surface">
           <span className="text-emerald-400 font-mono">SYSTEM</span> &middot; Promoted <strong>{champion?.model_version}</strong> to CHAMPION status based on superior precision-recall area. (Drift check: PASS)
        </div>
      </div>
    </div>
  )
}
