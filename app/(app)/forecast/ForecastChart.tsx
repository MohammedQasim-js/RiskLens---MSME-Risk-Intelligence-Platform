"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

const data = [
  { date: "Aug 15", historical: 180, p50: null, range: null },
  { date: "Sep 01", historical: 200, p50: null, range: null },
  { date: "Sep 15", historical: 175, p50: null, range: null },
  { date: "Sep 30", historical: 185, p50: 185, range: [185, 185] },
  { date: "Oct 18", historical: null, p50: 146, range: [140, 220] },
  { date: "Oct 30", historical: null, p50: 155, range: [120, 240] },
  { date: "Nov 12", historical: null, p50: 188, range: [100, 260] },
  { date: "Nov 30", historical: null, p50: 140, range: [80, 210] },
  { date: "Dec 14", historical: null, p50: 88,  range: [70, 180] },
  { date: "Dec 31", historical: null, p50: 135, range: [125, 250] },
];

export function ForecastChart() {
  return (
    <div className="w-full h-80 sm:h-96 relative">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="uncertaintyGradient" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#8083ff" stopOpacity={0.28} />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity={0.14} />
              <stop offset="100%" stopColor="#8083ff" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="historyFill" x1="0" x2="0" y1="0" y2="100%">
              <stop offset="0%" stopColor="#4cd7f6" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#4cd7f6" stopOpacity={0.00} />
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#c0c1ff" floodOpacity={0.6} />
            </filter>
          </defs>

          <CartesianGrid vertical={false} strokeDasharray="2 4" stroke="#44475a" opacity={0.3} />
          
          <XAxis 
            dataKey="date" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#908fa0", fontSize: 10, fontFamily: "JetBrains Mono" }}
            tickMargin={16}
          />
          
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#908fa0", fontSize: 10, fontFamily: "JetBrains Mono" }}
            tickFormatter={(val) => `₹${(val / 100).toFixed(1)}L`}
            domain={[0, 300]}
            ticks={[0, 100, 200, 300]}
          />

          <Tooltip
            contentStyle={{ backgroundColor: "#141B2D", borderColor: "rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }}
            itemStyle={{ color: "#fff" }}
            labelStyle={{ color: "#908fa0", marginBottom: 4 }}
            formatter={(value: any, name: any) => {
              if (Array.isArray(value)) return [`₹${value[0]}K – ₹${value[1]}K`, "90% Confidence"];
              return [`₹${value}K`, name === "historical" ? "Historical" : "Median (p50)"];
            }}
          />

          <ReferenceLine y={65} stroke="#F43F5E" strokeDasharray="5 4" strokeWidth={1.5} opacity={0.8} />

          {/* Historical Area */}
          <Area
            type="monotone"
            dataKey="historical"
            stroke="none"
            fill="url(#historyFill)"
            connectNulls
          />
          {/* Historical Line */}
          <Line
            type="monotone"
            dataKey="historical"
            stroke="#4cd7f6"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6, fill: "#38BDF8", stroke: "#0A0D14", strokeWidth: 2 }}
            connectNulls
          />

          {/* Forecast Uncertainty Corridor */}
          <Area
            type="monotone"
            dataKey="range"
            stroke="none"
            fill="url(#uncertaintyGradient)"
            connectNulls
          />
          {/* Forecast Median Line */}
          <Line
            type="monotone"
            dataKey="p50"
            stroke="#c0c1ff"
            strokeWidth={3}
            filter="url(#neonGlow)"
            dot={false}
            activeDot={{ r: 6, fill: "#c0c1ff", stroke: "#0A0D14", strokeWidth: 2 }}
            connectNulls
          />

          {/* Custom Dots for Annotations */}
          {/* Today */}
          <ReferenceLine x="Sep 30" stroke="#38BDF8" strokeDasharray="4 4" strokeWidth={1.5} opacity={0.7} />
          
          <ReferenceDot x="Oct 18" y={146} r={4} fill="#F43F5E" stroke="#141B2D" strokeWidth={2} />
          <ReferenceDot x="Nov 12" y={188} r={4} fill="#10B981" stroke="#141B2D" strokeWidth={2} />
          <ReferenceDot x="Dec 14" y={88} r={4.5} fill="#F59E0B" stroke="#141B2D" strokeWidth={2} className="animate-pulse" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
