import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "safe" | "moderate" | "critical" | "default" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-emerald-500/12 border border-emerald-500/25 text-emerald-500": variant === "safe",
          "bg-amber-500/12 border border-amber-500/25 text-amber-500": variant === "moderate",
          "bg-rose-500/14 border border-rose-500/35 text-rose-500": variant === "critical",
          "bg-white/10 text-white": variant === "default",
          "border border-white/20 text-white": variant === "outline"
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
