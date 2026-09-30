'use client'
import { useState } from 'react';
import { RiskDriver } from '@/lib/analytics/drivers';
import { Badge } from '@/components/ui/badge';

export function ExplainabilityInteractive({ drivers, risk }: { drivers: RiskDriver[], risk: { pd: number; risk_band: string } }) {
  const [selectedDriver, setSelectedDriver] = useState<RiskDriver | null>(null);

  return (
    <div className="flex flex-col lg:flex-row gap-6 relative">
      <div className={`flex-1 space-y-6 transition-all ${selectedDriver ? 'lg:w-2/3' : 'w-full'}`}>
        <div className="glass-panel p-6 rounded-xl flex justify-between items-center bg-white/5 border border-white/10">
          <div>
            <h2 className="text-2xl font-mono text-white">{(risk.pd * 100).toFixed(2)}%</h2>
            <p className="text-sm text-on-surface-variant font-medium">PD (Probability of Default)</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-mono text-rose-400">{risk.risk_band}</h2>
            <p className="text-sm text-on-surface-variant font-medium">Risk Band</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-geist text-lg text-white font-medium border-b border-white/10 pb-2">Identified Risk Drivers</h3>
          {drivers.map((driver, i) => (
            <div key={i} className="glass-panel p-5 rounded-xl bg-surface hover:bg-white/5 transition-colors cursor-pointer border border-white/5" onClick={() => setSelectedDriver(driver)}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-medium font-sans capitalize">{driver.feature.replace(/_/g, ' ')}</h4>
                  <p className="text-sm text-on-surface-variant mt-1">{driver.reason_code}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant={driver.magnitude === 'HIGH' ? 'critical' : 'moderate'}>{driver.magnitude} IMPACT</Badge>
                  <button className="text-xs text-blue-400 hover:text-blue-300 underline mt-2">View Evidence →</button>
                </div>
              </div>
            </div>
          ))}
          {drivers.length === 0 && <p className="text-on-surface-variant">No significant risk drivers identified.</p>}
        </div>
      </div>

      {selectedDriver && (
        <div className="w-full lg:w-1/3 glass-panel p-6 rounded-xl border-l-4 border-l-blue-500 animate-in slide-in-from-right h-fit sticky top-6 bg-surface">
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <h3 className="font-geist text-lg text-white font-medium">Driver Evidence</h3>
            <button onClick={() => setSelectedDriver(null)} className="text-on-surface-variant hover:text-white font-bold">&times; Close</button>
          </div>
          <div className="mb-6">
            <h4 className="text-white font-medium capitalize mb-2">{selectedDriver.feature.replace(/_/g, ' ')}</h4>
            <p className="text-sm text-on-surface-variant">{selectedDriver.reason_code}</p>
          </div>
          <div className="space-y-4 bg-white/5 p-4 rounded-lg border border-white/10">
            <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-2 font-semibold">Supporting Aggregates</p>
            {selectedDriver.evidence.map((e, i) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-on-surface">{e.metric}</span>
                <span className="text-white font-mono">{e.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
