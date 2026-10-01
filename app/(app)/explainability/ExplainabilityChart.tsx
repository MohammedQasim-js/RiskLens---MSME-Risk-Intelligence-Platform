'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, ReferenceLine, Area, AreaChart } from 'recharts';

const data = [
  { name: 'Apr', value: 34 },
  { name: 'May', value: 36 },
  { name: 'Jun', value: 39 },
  { name: 'Jul', value: 41 },
  { name: 'Aug', value: 44 },
  { name: 'Sep', value: 47 },
];

export function ExplainabilityChart() {
  return (
    <div className="w-full" style={{ height: 120 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <defs>
            <linearGradient id="dsoGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.35}/>
              <stop offset="95%" stopColor="#F43F5E" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#908fa0', fontSize: 10 }} dy={5} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1d1f27', borderColor: '#464554', borderRadius: '8px' }}
            itemStyle={{ color: '#F43F5E' }}
            cursor={{ stroke: '#464554', strokeWidth: 1, strokeDasharray: '3 3' }}
          />
          <ReferenceLine y={32} stroke="#908fa0" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'PLAN TARGET: 32d', fill: '#908fa0', fontSize: 10 }} />
          <Area type="monotone" dataKey="value" stroke="#F43F5E" strokeWidth={2.5} fillOpacity={1} fill="url(#dsoGradient)" 
            activeDot={{ r: 6, fill: '#F43F5E', stroke: '#10131a', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
