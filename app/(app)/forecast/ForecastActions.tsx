"use client";

import { useState } from "react";
import Link from "next/link";

export function ForecastExportButton() {
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
        onClick={() => showToast("Exporting 90-Day Projections CSV...")}
        className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-caps text-label-caps uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
        type="button"
      >
        <span className="material-symbols-outlined text-[16px]">file_download</span>
        Export Projections CSV
      </button>
    </>
  );
}

export function HorizonControls() {
  const [selected, setSelected] = useState("90 Days");

  const options = ["30 Days", "60 Days", "90 Days"];

  return (
    <div className="bg-surface-container-low/90 backdrop-blur-md p-1 rounded-xl flex items-center shadow-inner">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setSelected(opt)}
          className={`px-4 py-1.5 rounded-lg text-body-sm transition-all cursor-pointer ${
            selected === opt
              ? "font-semibold bg-primary text-on-primary shadow-sm"
              : "font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          }`}
          type="button"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
