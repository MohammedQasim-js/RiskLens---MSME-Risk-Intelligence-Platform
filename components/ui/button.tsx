import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive" | "ghost" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-br from-primary to-secondary text-white shadow-sm hover:brightness-110 shadow-[0_0_20px_rgba(99,102,241,0.35)]": variant === "primary",
            "bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-sky-400": variant === "secondary",
            "bg-rose-500/12 border border-rose-500/30 text-rose-500 hover:bg-rose-500/20": variant === "destructive",
            "border border-white/10 bg-transparent hover:bg-white/5": variant === "outline",
            "hover:bg-white/5 text-gray-300 hover:text-white": variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-12 rounded-lg px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
