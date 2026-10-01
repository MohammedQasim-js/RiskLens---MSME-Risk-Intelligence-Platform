"use client";

import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { useEffect, useState } from "react";

const data = [
  { index: 0, date: "Day 0", baseline: 280, stress: 280 },
  { index: 1, date: "Day 20", baseline: 250, stress: 185 },
  { index: 2, date: "Day 40", baseline: 230, stress: 105 },
  { index: 3, date: "Day 60", baseline: 180, stress: 45 },
  { index: 4, date: "Day 72", baseline: 160, stress: 22 },
  { index: 5, date: "Day 90", baseline: 130, stress: 35 },
];

export function StressLabChart() {
  const [mounted, setMounted] = useState(false);
  const [chartWidth, setChartWidth] = useState(800);

  useEffect(() => {
    setMounted(true);
    // basic responsive width logic without ResponsiveContainer wrapper
    const handleResize = () => {
      const container = document.getElementById('stress-chart-container');
      if (container) {
        setChartWidth(container.clientWidth);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[320px] bg-surface-container-highest/20 animate-pulse rounded-xl" />;
  }

  return (
    <div id="stress-chart-container" className="w-full h-[320px] min-h-[320px] relative">
      <ComposedChart
        width={chartWidth}
        height={320}
        data={data}
        margin={{ top: 20, right: 30, left: -10, bottom: 0 }}
      >
        <defs>
          <linearGradient id="gradBaseline2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#4cd7f6" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#4cd7f6" stopOpacity={0.0} />
          </linearGradient>
          <linearGradient id="gradStress2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F43F5E" stopOpacity={0.30} />
            <stop offset="100%" stopColor="#F43F5E" stopOpacity={0.02} />
          </linearGradient>
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
          ticks={[0, 50, 100, 200, 300]}
        />

        <Tooltip
          contentStyle={{ backgroundColor: "#141B2D", borderColor: "rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }}
          itemStyle={{ color: "#fff" }}
          labelStyle={{ color: "#908fa0", marginBottom: 4 }}
          formatter={(value: any, name: any) => [
            `₹${value}K`, 
            name === "baseline" ? "Baseline Plan" : "Stress Scenario"
          ]}
        />

        {/* Covenant Line */}
        <ReferenceLine y={65} stroke="#F59E0B" strokeDasharray="6 4" strokeWidth={1.5} opacity={0.85} />

        {/* Baseline Area + Line */}
        <Area
          type="monotone"
          dataKey="baseline"
          stroke="none"
          fill="url(#gradBaseline2)"
          connectNulls
        />
        <Line
          type="monotone"
          dataKey="baseline"
          stroke="#4cd7f6"
          strokeWidth={2.75}
          dot={{ r: 4, fill: "#4cd7f6", stroke: "#0A0D14", strokeWidth: 2 }}
          activeDot={{ r: 6, fill: "#4cd7f6" }}
        />

        {/* Stress Area + Line */}
        <Area
          type="monotone"
          dataKey="stress"
          stroke="none"
          fill="url(#gradStress2)"
          connectNulls
        />
        <Line
          type="monotone"
          dataKey="stress"
          stroke="#F43F5E"
          strokeWidth={3}
          dot={{ r: 4, fill: "#F43F5E", stroke: "#0A0D14", strokeWidth: 2 }}
          activeDot={{ r: 6, fill: "#F43F5E" }}
        />
      </ComposedChart>
    </div>
  );
}
