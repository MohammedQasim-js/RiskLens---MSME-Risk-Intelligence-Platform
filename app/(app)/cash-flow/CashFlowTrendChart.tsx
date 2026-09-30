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
  Area
} from "recharts";

const data90D = [
  { name: "01 Aug", inflow: 10.5, outflow: 7.2, net: 6.8 },
  { name: "04 Aug", inflow: 11.2, outflow: 8.5, net: 7.1 },
  { name: "07 Aug", inflow: 9.4, outflow: 5.1, net: 6.5 },
  { name: "10 Aug", inflow: 7.5, outflow: 12.5, net: 3.2 },
  { name: "13 Aug", inflow: 10.1, outflow: 8.2, net: 4.5 },
  { name: "16 Aug", inflow: 13.5, outflow: 7.8, net: 6.9 },
  { name: "19 Aug", inflow: 12.2, outflow: 9.8, net: 7.8 },
  { name: "22 Aug", inflow: 9.8, outflow: 5.5, net: 8.5 },
  { name: "25 Aug", inflow: 12.8, outflow: 9.1, net: 8.2 },
  { name: "28 Aug", inflow: 11.5, outflow: 7.5, net: 8.9 },
  { name: "01 Sep", inflow: 14.5, outflow: 10.2, net: 9.8 },
  { name: "04 Sep", inflow: 12.8, outflow: 8.9, net: 10.1 },
  { name: "07 Sep", inflow: 11.2, outflow: 6.5, net: 10.8 },
  { name: "10 Sep", inflow: 13.5, outflow: 9.8, net: 11.2 },
  { name: "13 Sep", inflow: 12.1, outflow: 7.5, net: 11.9 },
  { name: "16 Sep", inflow: 15.5, outflow: 11.2, net: 12.5 },
  { name: "20 Sep", inflow: 16.8, outflow: 8.5, net: 14.2 },
  { name: "30 Sep", inflow: 13.5, outflow: 9.2, net: 13.5, projection: 13.5 },
  { name: "05 Oct", projection: 14.5 },
  { name: "15 Oct", projection: 15.8 },
];

const data30D = data90D.slice(10); // Last 30 days
const data6M = [
  { name: "Apr", inflow: 34.5, outflow: 28.2, net: 6.8 },
  { name: "May", inflow: 38.2, outflow: 31.5, net: 7.1 },
  { name: "Jun", inflow: 36.4, outflow: 35.1, net: 6.5 },
  { name: "Jul", inflow: 41.5, outflow: 32.5, net: 10.2 },
  { name: "Aug", inflow: 35.1, outflow: 38.2, net: 8.5 },
  { name: "Sep", inflow: 45.5, outflow: 37.8, net: 13.5, projection: 13.5 },
  { name: "Oct", projection: 16.5 },
];
const data12M = [
  { name: "Q1", inflow: 98.5, outflow: 88.2, net: 6.8 },
  { name: "Q2", inflow: 112.2, outflow: 91.5, net: 7.1 },
  { name: "Q3", inflow: 124.4, outflow: 105.1, net: 13.5, projection: 13.5 },
  { name: "Q4", projection: 18.5 },
];

const datasets: Record<string, any[]> = {
  '30D': data30D,
  '90D': data90D,
  '6M': data6M,
  '12M': data12M
};

export function CashFlowTrendChart() {
  const [activeSeries, setActiveSeries] = useState({
    inflows: true,
    outflows: true,
    netCurve: true,
    projection: true
  });
  const [timeframe, setTimeframe] = useState('90D');

  const toggleSeries = (key: keyof typeof activeSeries) => {
    setActiveSeries(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const chartData = datasets[timeframe];

  return (
    <div className="flex flex-col gap-4">
      {/* Interactive Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 z-10 -mt-10 self-end relative top-10">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl">
            <button 
              onClick={() => toggleSeries('inflows')}
              className={`px-2.5 py-1 rounded-lg text-[12px] font-label-caps flex items-center gap-1.5 transition-all ${activeSeries.inflows ? 'text-semantic-success bg-surface-container shadow-sm' : 'text-outline hover:text-on-surface'}`}
            >
              <span className={`w-2 h-2 rounded-full ${activeSeries.inflows ? 'bg-semantic-success' : 'bg-outline'}`}></span>
              Inflows
            </button>
            <button 
              onClick={() => toggleSeries('outflows')}
              className={`px-2.5 py-1 rounded-lg text-[12px] font-label-caps flex items-center gap-1.5 transition-all ${activeSeries.outflows ? 'text-rose-400 bg-surface-container shadow-sm' : 'text-outline hover:text-on-surface'}`}
            >
              <span className={`w-2 h-2 rounded-full ${activeSeries.outflows ? 'bg-semantic-critical' : 'bg-outline'}`}></span>
              Outflows
            </button>
            <button 
              onClick={() => toggleSeries('netCurve')}
              className={`px-2.5 py-1 rounded-lg text-[12px] font-label-caps flex items-center gap-1.5 transition-all ${activeSeries.netCurve ? 'text-accent-electric bg-surface-container-high shadow-sm' : 'text-outline hover:text-on-surface'}`}
            >
              <span className={`w-2 h-2 rounded-full ${activeSeries.netCurve ? 'bg-accent-electric shadow-[0_0_6px_#38BDF8]' : 'bg-outline'}`}></span>
              Net Curve
            </button>
            <button 
              onClick={() => toggleSeries('projection')}
              className={`px-2.5 py-1 rounded-lg text-[12px] font-label-caps flex items-center gap-1.5 transition-all ${activeSeries.projection ? 'text-primary bg-surface-container shadow-sm' : 'text-outline hover:text-on-surface'}`}
            >
              <span className={`w-2 h-0.5 ${activeSeries.projection ? 'bg-primary' : 'bg-outline'}`}></span>
              Projection
            </button>
          </div>
          
          <div className="flex items-center bg-surface-container-low p-1 rounded-xl">
            {['30D', '90D', '6M', '12M'].map(tf => (
              <button 
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 rounded-lg font-label-caps text-label-caps transition-all ${timeframe === tf ? 'bg-primary-container text-on-primary-container shadow-sm font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recharts Canvas */}
      <div className="relative w-full h-80 sm:h-96 bg-surface-container/40 rounded-xl p-4 flex flex-col justify-between overflow-hidden mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 30, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="inflowBarGrad2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.85"></stop>
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.1"></stop>
              </linearGradient>
              <linearGradient id="outflowBarGrad2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.75"></stop>
                <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.05"></stop>
              </linearGradient>
              <linearGradient id="netAreaGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3"></stop>
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0"></stop>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#908fa0', fontSize: 11, fontFamily: 'JetBrains Mono' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#908fa0', fontSize: 11, fontFamily: 'JetBrains Mono' }} tickFormatter={(val) => `₹${val}L`} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(20, 27, 45, 0.95)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(8px)' }}
              itemStyle={{ fontFamily: 'JetBrains Mono', fontSize: '13px' }}
              labelStyle={{ color: '#c7c4d7', marginBottom: '8px', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' }}
              formatter={(value: any, name: string) => {
                if (name === 'net') return [`+₹${Number(value).toFixed(2)}L`, 'Daily Net Delta'];
                if (name === 'inflow') return [`+₹${Number(value).toFixed(2)}L`, 'Inflow'];
                if (name === 'outflow') return [`-₹${Number(value).toFixed(2)}L`, 'Outflow'];
                if (name === 'projection') return [`₹${Number(value).toFixed(2)}L`, 'Projected Net Flow'];
                return [value, name];
              }}
            />
            
            {activeSeries.netCurve && (
              <Area type="monotone" dataKey="net" stroke="none" fill="url(#netAreaGrad)" connectNulls />
            )}
            
            {activeSeries.inflows && (
              <Bar dataKey="inflow" name="inflow" barSize={10} radius={[3, 3, 0, 0]} fill="url(#inflowBarGrad2)" />
            )}
            {activeSeries.outflows && (
              <Bar dataKey="outflow" name="outflow" barSize={10} radius={[3, 3, 0, 0]} fill="url(#outflowBarGrad2)" />
            )}
            
            {activeSeries.netCurve && (
              <Line 
                type="monotone" 
                dataKey="net" 
                name="net" 
                stroke="#38BDF8" 
                strokeWidth={3} 
                dot={{ fill: '#38BDF8', r: 4, strokeWidth: 2, stroke: '#0A0D14' }} 
                activeDot={{ r: 6, fill: '#38BDF8', stroke: '#fff' }} 
                connectNulls
              />
            )}
            
            {activeSeries.projection && (
              <Line 
                type="monotone" 
                dataKey="projection" 
                name="projection" 
                stroke="#8083ff" 
                strokeWidth={2.5} 
                strokeDasharray="6 4"
                dot={{ fill: '#8083ff', r: 4, strokeWidth: 2, stroke: '#0A0D14' }} 
                activeDot={{ r: 6, fill: '#8083ff', stroke: '#fff' }} 
                connectNulls
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
