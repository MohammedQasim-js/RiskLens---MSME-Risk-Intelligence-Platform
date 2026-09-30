"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  LineChart,
  Target,
  TrendingUp,
  Activity,
  BrainCircuit,
  TestTube2,
  Scale,
  FileText
} from "lucide-react";

const navigation = [
  { name: "Overview", href: "/overview", icon: LayoutDashboard },
  { name: "Cash Flow", href: "/cash-flow", icon: LineChart },
  { name: "Plan vs Actual", href: "/plan-vs-actual", icon: Target },
  { name: "Forecast", href: "/forecast", icon: TrendingUp },
  { name: "Stress Lab", href: "/stress-lab", icon: Activity },
  { name: "Explainability", href: "/explainability", icon: BrainCircuit },
  { name: "Model Lab", href: "/model-lab", icon: TestTube2 },
  { name: "Fairness", href: "/fairness", icon: Scale },
  { name: "Report", href: "/report", icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex w-64 flex-col bg-surface-container-lowest border-r border-white/5">
      <div className="flex h-16 shrink-0 items-center px-6">
        <h1 className="text-xl font-geist font-bold text-white tracking-tight">MRIP</h1>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto pt-4">
        <nav className="flex-1 space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium font-sans transition-all",
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
                    : "text-on-surface-variant hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 shrink-0",
                    isActive ? "text-primary" : "text-outline group-hover:text-white"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
