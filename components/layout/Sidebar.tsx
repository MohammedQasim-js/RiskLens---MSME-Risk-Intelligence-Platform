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
  FileText,
  Settings,
  HelpCircle,
  ShieldCheck
} from "lucide-react";

const navigation = [
  { name: "Overview", href: "/overview", icon: LayoutDashboard },
  { name: "Cash Flow", href: "/cash-flow", icon: LineChart },
  { name: "Plan vs Actual", href: "/plan-vs-actual", icon: Target },
  { name: "Forecast", href: "/forecast", icon: TrendingUp },
  { name: "Stress Lab", href: "/stress-lab", icon: Activity },
  { name: "Explainability", href: "/explainability", icon: BrainCircuit },
  { name: "Model Lab & Fairness", href: "/model-lab", icon: TestTube2, children: [
    { name: "↳ Fairness Evaluation", href: "/fairness" }
  ]},
  { name: "Report", href: "/report", icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-72 flex-col h-screen shrink-0 bg-surface-container-lowest/90 backdrop-blur-2xl z-50 justify-between border-r border-border-glass shadow-[0_8px_32px_-4px_rgba(0,0,0,0.45)]">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="h-16 px-4 flex items-center justify-between border-b border-border-glass shrink-0">
          <div className="flex items-center gap-3">
            <img 
              alt="RiskLens MRIP Logo" 
              className="h-8 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1UvG8Yk7CY-ssJoe1p7NbQGWzQrOH4cH06gKF0H_NC4iHpkoQyLimYy2dZsuz1wjyRURVQimQLQVDXiARAlxi4fuYDeon6d70jbeiwgrNUtKiNHHaXP7RC5mgZb6bS0iqB1jY-uQTHA335qgctiZyNfdRKNVKMiqaPbjeTNlumfqguFzI2R9StY2vWAYqMLneE0qo2UEV5x0qboheUvxfJ04-UBV9r6Aj5Mqx1xvSaEjdrlsly9aGeGOm3A" 
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-[16px] text-on-surface font-semibold tracking-tight leading-tight">RiskLens</span>
              <span className="font-label-caps text-[10px] text-tertiary tracking-wider uppercase leading-tight">MRIP Engine</span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 border border-secondary-container/50 text-secondary font-label-caps text-[10px]">v3.8</span>
        </div>
        
        <div className="px-4 py-4">
          <div className="px-2 py-1 font-label-caps text-[11px] text-outline uppercase tracking-wider">
            Intelligence Suites
          </div>
          <nav className="flex flex-col gap-1 mt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href));
              
              return (
                <div key={item.name} className="flex flex-col gap-1">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-xl font-body-md text-sm transition-all duration-200",
                      isActive
                        ? "bg-primary-container text-on-primary-container font-medium shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                        : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                    )}
                  >
                    <item.icon className={cn("mr-3 h-5 w-5 shrink-0", isActive ? "text-primary" : "")} aria-hidden="true" />
                    {item.name}
                  </Link>
                  
                  {item.children && isActive && (
                    <div className="flex flex-col gap-1 mt-1">
                      {item.children.map(child => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "flex items-center pl-11 pr-4 py-1.5 rounded-xl font-body-sm text-sm transition-all duration-200",
                              isChildActive
                                ? "text-on-surface font-medium bg-surface-container-high/50"
                                : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                            )}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
      
      <div className="p-4 flex flex-col gap-3 border-t border-border-glass bg-surface-container-low/40">
        <div className="p-3 rounded-lg bg-surface-container/60 border border-border-glass flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-[11px] text-semantic-success flex items-center gap-1.5 font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-semantic-success animate-pulse"></span>
              RBI / AA Protocol Enclave
            </span>
            <ShieldCheck className="w-4 h-4 text-semantic-success" />
          </div>
          <span className="font-body-sm text-[11px] text-outline-variant">Tier-1 End-to-End Encryption</span>
        </div>
        
        <div className="flex items-center justify-between pt-1">
          <Link href="/settings" suppressHydrationWarning className="flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-sm">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Link>
          <button suppressHydrationWarning className="flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-sm">
            <HelpCircle className="w-4 h-4" />
            <span>Support</span>
          </button>
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-caps text-[11px]">
            <span className="w-2 h-2 rounded-full bg-semantic-success"></span>
            <span>Active</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
