import { getFairnessEvaluations } from '@/lib/governance/data';
import { Badge } from '@/components/ui/badge';

type FairnessEval = { group_attribute: string; group_value: string; sample_size: number; is_reference: boolean; metrics: { selection_rate: number; tpr: number; fpr: number; }; };

export default async function FairnessPage() {
  const modelVersion = 'lr-v1.0';
  const evals = await getFairnessEvaluations(modelVersion);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-geist font-semibold text-white tracking-tight">Fairness & Bias Governance</h1>
          <p className="text-on-surface-variant mt-2 font-sans text-lg">Evaluate algorithmic disparate impact across configured protected segments.</p>
        </div>
        <div className="text-right">
          <Badge variant="outline" className="border-amber-500/50 text-amber-500 bg-amber-500/10">Synthetic Evaluation</Badge>
        </div>
      </div>

      <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-200 text-sm mb-6 flex items-center gap-3">
        <span className="font-bold text-blue-400">FAIRNESS PRINCIPLE</span>
        <span>Alternative data can create proxy bias even when protected attributes are not directly included in training. Protected attributes are evaluation-only unless explicitly governed otherwise.</span>
      </div>

      <div className="glass-panel p-6 rounded-xl">
         <h3 className="font-geist text-lg text-white font-medium border-b border-white/10 pb-4 mb-6">Model: {modelVersion}</h3>
         
         <div className="overflow-x-auto">
           <table className="w-full text-sm text-left">
             <thead className="text-xs text-on-surface-variant uppercase bg-white/5 border-b border-white/10">
               <tr>
                 <th className="px-6 py-3">Attribute</th>
                 <th className="px-6 py-3">Group</th>
                 <th className="px-6 py-3 text-right">Sample Size</th>
                 <th className="px-6 py-3 text-right">Selection Rate</th>
                 <th className="px-6 py-3 text-right">TPR</th>
                 <th className="px-6 py-3 text-right">FPR</th>
                 <th className="px-6 py-3">Status</th>
               </tr>
             </thead>
             <tbody className="text-white">
               {evals.map((e: FairnessEval, i: number) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                   <td className="px-6 py-4 font-medium capitalize">{e.group_attribute.replace('_', ' ')}</td>
                   <td className="px-6 py-4 flex items-center gap-2">
                     {e.group_value}
                     {e.is_reference && <Badge variant="outline" className="text-[10px]">REF</Badge>}
                   </td>
                   <td className="px-6 py-4 text-right font-mono">{e.sample_size.toLocaleString()}</td>
                   
                   {e.sample_size < 1000 ? (
                     <td colSpan={3} className="px-6 py-4 text-center">
                       <span className="text-amber-500 font-medium text-xs tracking-wider">INSUFFICIENT SAMPLE</span>
                     </td>
                   ) : (
                     <>
                       <td className="px-6 py-4 text-right font-mono">{(e.metrics.selection_rate * 100).toFixed(1)}%</td>
                       <td className="px-6 py-4 text-right font-mono">{(e.metrics.tpr * 100).toFixed(1)}%</td>
                       <td className="px-6 py-4 text-right font-mono">{(e.metrics.fpr * 100).toFixed(1)}%</td>
                     </>
                   )}
                   
                   <td className="px-6 py-4">
                     {e.sample_size < 1000 ? (
                        <Badge variant="moderate">N/A</Badge>
                     ) : (
                        <Badge variant={Math.abs(e.metrics.selection_rate - 0.8) > 0.4 ? 'critical' : 'safe'}>
                          {Math.abs(e.metrics.selection_rate - 0.8) > 0.4 ? 'REVIEW' : 'PASS'}
                        </Badge>
                     )}
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
      </div>
    </div>
  )
}
