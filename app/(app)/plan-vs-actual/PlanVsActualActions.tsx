"use client";

import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

export function PlanVsActualActions() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      {toast && (
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-surface-container-high border border-border-glass shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-300">
          <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
          <span className="font-body-md text-body-md text-on-surface">{toast}</span>
        </div>
      )}
      <button
        onClick={() => showToast("Generating Variance PDF report…")}
        className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-highest hover:bg-surface-variant text-on-surface transition-all duration-200 shadow-sm cursor-pointer"
        type="button"
      >
        <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">picture_as_pdf</span>
        <span className="font-body-md text-body-md font-medium">Export Variance PDF</span>
      </button>
    </>
  );
}

export function InspectAgingButton() {
  return (
    <Link
      href="/cash-flow"
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-body-md text-body-md font-medium transition-colors shadow-sm cursor-pointer"
    >
      <span className="material-symbols-outlined text-[18px] text-tertiary">manage_search</span>
      <span>Inspect Invoice Aging Breakdown</span>
    </Link>
  );
}

export function LedgerFooterActions() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <>
      {toast && (
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-surface-container-high border border-border-glass shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-300">
          <span className="material-symbols-outlined text-[18px] text-semantic-success">cloud_sync</span>
          <span className="font-body-md text-body-md text-on-surface">{toast}</span>
        </div>
      )}
      <div className="flex items-center gap-2">
        <button
          onClick={() => showToast("Re-fetching E-Invoicing feed from GSTN…")}
          className="text-tertiary hover:text-on-surface font-body-sm text-body-sm font-medium transition-colors cursor-pointer"
          type="button"
        >
          Re-fetch E-Invoicing Feed
        </button>
        <span className="text-outline text-xs">•</span>
        <button
          onClick={() => showToast("Opening Baseline Model Rules configurator…")}
          className="text-primary hover:text-on-surface font-body-sm text-body-sm font-medium transition-colors cursor-pointer"
          type="button"
        >
          Configure Baseline Model Rules
        </button>
      </div>
    </>
  );
}

const PERIODS = [
  { label: "MTD Sep 2026", sub: "Month to Date" },
  { label: "MTD Aug 2026", sub: "Month to Date" },
  { label: "QTD Q2 FY27", sub: "Quarter to Date" },
  { label: "QTD Q1 FY27", sub: "Quarter to Date" },
  { label: "YTD FY26–27", sub: "Year to Date" },
  { label: "FY 2025–26", sub: "Full Year" },
];

export function DatePeriodSelector() {
  const [selected, setSelected] = useState("MTD Sep 2026");
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + 8, left: rect.left });
    }
    setOpen((o) => !o);
  };

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        onClick={handleOpen}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high backdrop-blur-md shadow-sm transition-all duration-200 cursor-pointer border border-transparent hover:border-border-glass"
      >
        <span className="material-symbols-outlined text-[18px] text-tertiary">calendar_month</span>
        <span className="font-body-md text-body-md font-medium text-on-surface">{selected}</span>
        <span className={`material-symbols-outlined text-[16px] text-outline transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>

      {open && typeof window !== "undefined" && createPortal(
        <>
          {/* Full-screen backdrop */}
          <div
            className="fixed inset-0"
            style={{ zIndex: 9998 }}
            onClick={() => setOpen(false)}
          />
          {/* Dropdown — positioned via JS so it escapes any parent stacking context */}
          <div
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              zIndex: 9999,
              minWidth: 240,
            }}
            className="rounded-2xl bg-surface-container border border-border-glass shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-1.5">
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Select Period</span>
            </div>
            <div className="flex flex-col py-1">
              {PERIODS.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => { setSelected(p.label); setOpen(false); }}
                  className={`flex items-center justify-between gap-3 px-4 py-2.5 w-full text-left hover:bg-surface-container-high transition-colors ${selected === p.label ? "text-on-surface" : "text-on-surface-variant"}`}
                >
                  <div className="flex flex-col">
                    <span className="font-body-md text-body-md font-medium leading-tight">{p.label}</span>
                    <span className="font-body-sm text-[11px] text-outline">{p.sub}</span>
                  </div>
                  {selected === p.label && (
                    <span className="material-symbols-outlined text-[16px] text-tertiary flex-shrink-0">check</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>,
        document.body
      )}
    </div>
  );
}
