import * as React from "react"
import { Card, CardContent } from "./card"
import { cn } from "@/lib/utils"

interface KPIProps {
  title: string
  value: string | number
  trend?: number
  trendDirection?: "up" | "down" | "neutral"
  trendLabel?: string
  icon?: React.ReactNode
  variant?: "safe" | "moderate" | "critical" | "neutral"
}

export function KPI({ title, value, trend, trendDirection, trendLabel, icon, variant = "neutral" }: KPIProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-2">
          <p className="text-sm font-medium text-on-surface-variant font-geist">{title}</p>
          {icon && <div className="text-on-surface-variant">{icon}</div>}
        </div>
        <div className="mt-4 flex items-baseline space-x-2">
          <h2 className="text-2xl font-semibold text-on-surface font-mono tracking-tight">{value}</h2>
        </div>
        {(trend !== undefined || trendLabel) && (
          <div className="mt-2 flex items-center text-sm font-sans">
            {trend !== undefined && (
              <span
                className={cn("flex items-center font-mono text-xs", {
                  "text-emerald-500": trendDirection === "up" && variant !== "critical" || variant === "safe",
                  "text-rose-500": trendDirection === "down" && variant !== "safe" || variant === "critical",
                  "text-amber-500": variant === "moderate",
                  "text-on-surface-variant": trendDirection === "neutral" || (!trendDirection && variant === "neutral"),
                })}
              >
                {trend > 0 ? "+" : ""}{trend}%
              </span>
            )}
            {trendLabel && (
              <span className="ml-2 text-on-surface-variant text-xs">{trendLabel}</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
