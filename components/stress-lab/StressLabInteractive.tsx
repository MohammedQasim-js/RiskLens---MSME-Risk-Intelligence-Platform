'use client'
import { useState, useTransition } from 'react';
import { calculateScenarioAction } from '@/app/(app)/stress-lab/actions';
import { StressParams } from '@/lib/analytics/scenarios';
import { Badge } from '@/components/ui/badge';

export function StressLabInteractive({ initialResult }: { initialResult: { baseline: { pd: number, risk_band: string, min_cash: number, buffer_days: number, dscr: number }, scenario: { pd: number, risk_band: string, min_cash: number, buffer_days: number, dscr: number } } }) {
  const [params, setParams] = useState<StressParams>({
    revenueShock: -0.20,
    receivableDelay: 15,
    costInflation: 0.10,
    projectOverrun: 0.0,
    customerLoss: 0.0
  });

  const [result, setResult] = useState(initialResult);
  const [isPending, startTransition] = useTransition();

  const handleRun = () => {
    startTransition(async () => {
      const res = await calculateScenarioAction(params);
      setResult(res);
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 relative">
      <div className="w-full lg:w-1/3 glass-panel p-6 rounded-xl space-y-6 bg-surface h-fit">
        <h3 className="font-geist text-lg text-white font-medium border-b border-white/10 pb-4">Scenario Controls</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-on-surface-variant flex justify-between">
              <span>Revenue Shock</span>
              <span className="text-white font-mono">{(params.revenueShock * 100).toFixed(0)}%</span>
            </label>
            <input type="range" min="-40" max="0" step="5" value={params.revenueShock * 100} 
                   onChange={e => setParams({...params, revenueShock: parseInt(e.target.value)/100})} 
                   className="w-full mt-2 accent-amber-500" />
          </div>
          <div>
            <label className="text-sm text-on-surface-variant flex justify-between">
              <span>Receivable Delay</span>
              <span className="text-white font-mono">+{params.receivableDelay} days</span>
            </label>
            <input type="range" min="0" max="45" step="1" value={params.receivableDelay} 
                   onChange={e => setParams({...params, receivableDelay: parseInt(e.target.value)})} 
                   className="w-full mt-2 accent-amber-500" />
          </div>
          <div>
            <label className="text-sm text-on-surface-variant flex justify-between">
              <span>Cost Inflation</span>
              <span className="text-white font-mono">+{(params.costInflation * 100).toFixed(0)}%</span>
            </label>
            <input type="range" min="0" max="25" step="5" value={params.costInflation * 100} 
                   onChange={e => setParams({...params, costInflation: parseInt(e.target.value)/100})} 
                   className="w-full mt-2 accent-amber-500" />
          </div>
          <div>
            <label className="text-sm text-on-surface-variant flex justify-between">
              <span>Project Overrun</span>
              <span className="text-white font-mono">+{(params.projectOverrun * 100).toFixed(0)}%</span>
            </label>
            <input type="range" min="0" max="50" step="10" value={params.projectOverrun * 100} 
                   onChange={e => setParams({...params, projectOverrun: parseInt(e.target.value)/100})} 
                   className="w-full mt-2 accent-amber-500" />
          </div>
        </div>
        
        <button 
          onClick={handleRun}
          disabled={isPending}
          className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50"
        >
          {isPending ? 'Simulating...' : 'Run Scenario'}
        </button>
      </div>

      <div className="flex-1 space-y-6">
         <div className="glass-panel p-6 rounded-xl border border-white/5">
           <h3 className="font-geist text-lg text-white font-medium mb-6">Scenario Outcomes</h3>
           
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="text-xs text-on-surface-variant uppercase bg-white/5 border-b border-white/10">
                 <tr>
                   <th className="px-6 py-3">Metric</th>
                   <th className="px-6 py-3">Baseline</th>
                   <th className="px-6 py-3">Scenario</th>
                   <th className="px-6 py-3">Delta</th>
                 </tr>
               </thead>
               <tbody className="text-white">
                 <tr className="border-b border-white/5">
                   <td className="px-6 py-4 font-medium">Probability of Default</td>
                   <td className="px-6 py-4 font-mono">{(result.baseline.pd * 100).toFixed(2)}%</td>
                   <td className="px-6 py-4 font-mono text-rose-400">{(result.scenario.pd * 100).toFixed(2)}%</td>
                   <td className="px-6 py-4 font-mono">+{((result.scenario.pd - result.baseline.pd) * 100).toFixed(2)}%</td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="px-6 py-4 font-medium">Risk Band</td>
                   <td className="px-6 py-4">{result.baseline.risk_band}</td>
                   <td className="px-6 py-4 text-rose-400">{result.scenario.risk_band}</td>
                   <td className="px-6 py-4">-</td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="px-6 py-4 font-medium">Minimum Cash (90d)</td>
                   <td className="px-6 py-4 font-mono">₹{result.baseline.min_cash.toLocaleString(undefined, {maximumFractionDigits:0})}</td>
                   <td className={`px-6 py-4 font-mono ${result.scenario.min_cash < 0 ? 'text-rose-400' : 'text-emerald-400'}`}>₹{result.scenario.min_cash.toLocaleString(undefined, {maximumFractionDigits:0})}</td>
                   <td className="px-6 py-4 font-mono">₹{(result.scenario.min_cash - result.baseline.min_cash).toLocaleString(undefined, {maximumFractionDigits:0})}</td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="px-6 py-4 font-medium">Cash Buffer Days</td>
                   <td className="px-6 py-4 font-mono">{result.baseline.buffer_days.toFixed(1)}</td>
                   <td className="px-6 py-4 font-mono">{result.scenario.buffer_days.toFixed(1)}</td>
                   <td className="px-6 py-4 font-mono">{(result.scenario.buffer_days - result.baseline.buffer_days).toFixed(1)}</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
         
         <div className="glass-panel p-6 rounded-xl border border-white/5 space-y-4">
           <h3 className="font-geist text-lg text-white font-medium">Threshold Breaches</h3>
           {result.scenario.min_cash < 0 && (
             <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg flex items-center justify-between">
               <span className="text-rose-200">Liquidity Crunch: Minimum cash drops below 0 during forecast.</span>
               <Badge variant="critical">FAILED</Badge>
             </div>
           )}
           {result.scenario.dscr < 1.25 && (
             <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-between">
               <span className="text-amber-200">Debt Service Coverage (DSCR) falls below minimum 1.25 threshold.</span>
               <Badge variant="moderate">FAILED</Badge>
             </div>
           )}
           {result.scenario.min_cash >= 0 && result.scenario.dscr >= 1.25 && (
             <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
               <span className="text-emerald-200">No regulatory or operational thresholds breached.</span>
             </div>
           )}
         </div>
      </div>
    </div>
  )
}
