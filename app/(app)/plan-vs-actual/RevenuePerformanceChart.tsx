"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from "recharts";

const dataMonthly = [
  { name: "Apr", target: 11.0, actual: 11.2 },
  { name: "May", target: 11.2, actual: 11.0 },
  { name: "Jun", target: 11.5, actual: 11.8 },
  { name: "Jul", target: 11.5, actual: 10.9 },
  { name: "Aug", target: 12.0, actual: 11.4 },
  { name: "Sep", target: 12.0, actual: 10.7 },
];

const dataQuarterly = [
  { name: "Q1 FY27", target: 33.7, actual: 34.0 },
  { name: "Q2 FY27", target: 35.5, actual: 33.0 },
];

const dataYTD = [
  { name: "H1 FY27", target: 69.2, actual: 67.0 },
];

const datasets: Record<string, { name: string; target: number; actual: number }[]> = {
  Monthly: dataMonthly,
  Quarterly: dataQuarterly,
  "Cumulative YTD": dataYTD,
};

const TIMEFRAMES = ["Monthly", "Quarterly", "Cumulative YTD"] as const;

export function RevenuePerformanceChart() {
  const [timeframe, setTimeframe] = useState<string>("Monthly");
  const chartData = datasets[timeframe];

  return (
    <div className="flex flex-col gap-4">
      {/* Header row: legend + toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Legend */}
        <div className="flex items-center gap-5 text-body-sm font-body-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "rgba(192,193,255,0.45)" }}></span>
            <span className="text-on-surface-variant">Target Plan</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-tertiary"></span>
            <span className="text-on-surface">Actual Realized</span>
          </div>
        </div>

        {/* Timeframe toggle */}
        <div className="inline-flex p-1 rounded-xl bg-surface-container-high/80 self-start sm:self-auto">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              type="button"
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded-lg font-body-sm text-body-sm font-medium transition-all duration-200 ${
                timeframe === tf
                  ? "bg-surface-container-highest text-on-surface shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Canvas — explicit height so ResponsiveContainer works */}
      <div className="w-full rounded-xl bg-surface-container-lowest/60 p-4" style={{ height: 340 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            barCategoryGap="30%"
            barGap={4}
            margin={{ top: 16, right: 8, left: -8, bottom: 0 }}
          >
            <defs>
              <linearGradient id="pvaActualGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#4cd7f6" />
                <stop offset="100%" stopColor="#009eb9" />
              </linearGradient>
              <linearGradient id="pvaWarnGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="rgba(255,255,255,0.06)"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#908fa0", fontSize: 13, fontFamily: "Inter", fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#908fa0", fontSize: 11, fontFamily: "JetBrains Mono" }}
              tickFormatter={(v) => `₹${v}L`}
            />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
              contentStyle={{
                backgroundColor: "rgba(20, 27, 45, 0.95)",
                borderColor: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                backdropFilter: "blur(8px)",
              }}
              itemStyle={{ fontFamily: "JetBrains Mono", fontSize: "13px" }}
              labelStyle={{
                color: "#c7c4d7",
                marginBottom: "6px",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
              formatter={(value: any, name: any) => {
                const v = Number(value).toFixed(2);
                if (name === "target") return [`₹${v}L`, "Target Plan"];
                if (name === "actual") return [`₹${v}L`, "Actual Realized"];
                return [value, name];
              }}
            />

            {/* Target bars — muted primary */}
            <Bar
              dataKey="target"
              name="target"
              barSize={28}
              radius={[4, 4, 0, 0]}
              fill="rgba(192,193,255,0.4)"
            />

            {/* Actual bars — color-coded by attainment */}
            <Bar
              dataKey="actual"
              name="actual"
              barSize={28}
              radius={[4, 4, 0, 0]}
            >
              {chartData.map((entry, i) => (
                <Cell
                  key={`cell-${i}`}
                  fill={
                    entry.actual < entry.target * 0.92
                      ? "url(#pvaWarnGrad)"
                      : "url(#pvaActualGrad)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
