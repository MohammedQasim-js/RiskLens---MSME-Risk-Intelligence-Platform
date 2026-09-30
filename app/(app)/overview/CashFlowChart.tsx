"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from "recharts";

const data = [
  { name: "Apr 2026", inflow: 12.5, outflow: 9.8, net: 8.2 },
  { name: "May 2026", inflow: 13.2, outflow: 9.1, net: 8.5 },
  { name: "Jun 2026", inflow: 11.4, outflow: 10.3, net: 6.5 },
  { name: "Jul 2026", inflow: 14.5, outflow: 10.8, net: 6.2 },
  { name: "Aug 2026", inflow: 13.9, outflow: 10.2, net: 8.6 },
  { name: "Sep 2026 (Active)", inflow: 14.8, outflow: 11.5, net: 10.4 },
];

export function CashFlowChart() {
  const [mode, setMode] = useState<'all' | 'inflow' | 'outflow'>('all');

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-headline-sm text-on-surface">Cash-Flow Dynamics & Working Capital</span>
            <span className="px-2 py-0.5 rounded-full bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps">+12.4% velocity vs Q1</span>
          </div>
          <span className="font-body-sm text-body-sm text-outline">Monthly ledger transactions: Inflows, Outflows, and Net Trajectory (Apr - Sep 2026)</span>
        </div>

        <div className="flex items-center p-1 rounded-xl bg-surface-container-lowest gap-1">
          <button 
            onClick={() => setMode('all')}
            className={`px-3 py-1 rounded-lg text-[12px] font-label-metric-md text-label-metric-md transition-all ${mode === 'all' ? 'bg-surface-container-high text-on-surface' : 'text-outline hover:text-on-surface'}`}
          >
            Consolidated
          </button>
          <button 
            onClick={() => setMode('inflow')}
            className={`px-3 py-1 rounded-lg text-[12px] font-label-metric-md text-label-metric-md transition-all ${mode === 'inflow' ? 'bg-surface-container-high text-on-surface' : 'text-outline hover:text-on-surface'}`}
          >
            Inflows
          </button>
          <button 
            onClick={() => setMode('outflow')}
            className={`px-3 py-1 rounded-lg text-[12px] font-label-metric-md text-label-metric-md transition-all ${mode === 'outflow' ? 'bg-surface-container-high text-on-surface' : 'text-outline hover:text-on-surface'}`}
          >
            Outflows
          </button>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#908fa0', fontSize: 11, fontFamily: 'JetBrains Mono' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#908fa0', fontSize: 11, fontFamily: 'JetBrains Mono' }} tickFormatter={(val) => `₹${val}L`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#191b23', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
              itemStyle={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}
              labelStyle={{ color: '#c7c4d7', marginBottom: '4px' }}
            />
            <Bar dataKey="inflow" name="Inflow" barSize={24} radius={[4, 4, 0, 0]} opacity={mode === 'outflow' ? 0.15 : 1}>
              {data.map((entry, index) => (
                <Cell key={`cell-inflow-${index}`} fill="#10B981" />
              ))}
            </Bar>
            <Bar dataKey="outflow" name="Outflow" barSize={24} radius={[4, 4, 0, 0]} opacity={mode === 'inflow' ? 0.15 : 1}>
              {data.map((entry, index) => (
                <Cell key={`cell-outflow-${index}`} fill="#F43F5E" />
              ))}
            </Bar>
            <Line type="monotone" dataKey="net" name="Net Velocity" stroke="#c0c1ff" strokeWidth={3} dot={{ fill: '#c0c1ff', r: 4, strokeWidth: 2, stroke: '#0A0D14' }} activeDot={{ r: 6 }} opacity={mode === 'all' ? 1 : 0.35} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-border-glass flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-semantic-success"></span>
            <span className="font-label-metric-md text-[12px] text-outline">Inflows (Avg ₹13.4L)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-semantic-critical"></span>
            <span className="font-label-metric-md text-[12px] text-outline">Outflows (Avg ₹9.8L)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-primary rounded-full"></span>
            <span className="font-label-metric-md text-[12px] text-outline">Net Velocity</span>
          </div>
        </div>
        <span className="font-label-metric-md text-[12px] text-outline">
          Operating Margin: <span className="text-semantic-success">24.8%</span>
        </span>
      </div>
    </div>
  );
}
