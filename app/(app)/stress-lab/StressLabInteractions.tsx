"use client";

import { useState } from "react";

export function ExportStressDossierButton() {
  const [isExporting, setIsExporting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setToast("Stress dossier exported successfully");
      setTimeout(() => setToast(null), 3000);
    }, 1200);
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
        onClick={handleExport}
        disabled={isExporting}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container text-body-sm font-semibold shadow-[0_0_24px_rgba(99,102,241,0.25)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-80 disabled:cursor-not-allowed"
      >
        <span className={`material-symbols-outlined text-[16px] ${isExporting ? 'animate-bounce' : ''}`}>file_download</span>
        <span>{isExporting ? 'Compiling Dossier...' : 'Export Stress Dossier'}</span>
      </button>
    </>
  );
}

export function RunScenarioButton() {
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 850);
  };

  return (
    <button
      onClick={handleRun}
      disabled={isRunning}
      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-primary-container via-secondary-container to-inverse-primary text-on-primary font-headline-sm text-body-md font-semibold flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(128,131,255,0.35)] hover:shadow-[0_0_32px_rgba(128,131,255,0.5)] active:scale-[0.99] transition-all disabled:opacity-80 disabled:cursor-not-allowed"
    >
      <span className={`material-symbols-outlined text-[18px] ${isRunning ? 'animate-spin' : ''}`}>
        {isRunning ? 'refresh' : 'bolt'}
      </span>
      <span>{isRunning ? 'Computing Monte Carlo Scenarios...' : 'Run Scenario Simulation'}</span>
    </button>
  );
}

export function ScenarioSlider({ label, tooltip, min, max, step, initialValue, formatValue, unitLeft, unitRight, unitMinDesc, unitMaxDesc, colorClass }: any) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="font-body-md text-body-md font-medium text-on-surface flex items-center gap-1.5">
          <span>{label}</span>
          <span className="material-symbols-outlined text-[15px] text-outline cursor-help" title={tooltip}>info</span>
        </label>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded font-label-metric-md text-label-metric-md border ${colorClass}`}>
            {formatValue(value)}
          </span>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full bg-surface-container-highest h-1.5 rounded-lg appearance-none cursor-pointer"
        style={{ accentColor: 'currentColor', color: 'inherit' }}
      />
      <div className="flex items-center justify-between text-label-caps font-label-caps text-outline px-0.5">
        <span>{unitLeft}</span>
        <span className={`font-label-metric-md text-[11px] bg-surface-container-low px-2 py-0.5 rounded border border-border-glass ${colorClass.split(' ')[1]}`}>
          {value === min ? unitMinDesc : value === max ? unitMaxDesc : 'Dynamic scaling...'}
        </span>
        <span>{unitRight}</span>
      </div>
    </div>
  );
}
