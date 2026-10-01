const fs = require('fs');

let code = fs.readFileSync('app/(app)/model-lab/ModelLabClient.tsx', 'utf8');

// 1. Add Imports
code = code.replace(
  /import React, \{ useState \} from 'react';/,
  `import React, { useState } from 'react';\nimport { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';`
);

// 2. Add Chart Data
const chartDataCode = `
const chartData = [
  { decile: 'Decile 1', baseline: 0.1, champion: 0.08, challenger: 0.09 },
  { decile: 'Decile 2', baseline: 0.15, champion: 0.12, challenger: 0.14 },
  { decile: 'Decile 3', baseline: 0.22, champion: 0.18, challenger: 0.20 },
  { decile: 'Decile 4', baseline: 0.35, champion: 0.28, challenger: 0.31 },
  { decile: 'Decile 5', baseline: 0.50, champion: 0.42, challenger: 0.46 },
  { decile: 'Decile 6', baseline: 0.65, champion: 0.58, challenger: 0.62 },
  { decile: 'Decile 7', baseline: 0.80, champion: 0.72, challenger: 0.75 },
  { decile: 'Decile 8', baseline: 0.95, champion: 0.85, challenger: 0.88 },
  { decile: 'Decile 9', baseline: 1.15, champion: 1.05, challenger: 1.10 },
  { decile: 'Decile 10', baseline: 1.40, champion: 1.30, challenger: 1.35 }
];
`;
code = code.replace(/export function ModelLabClient/, chartDataCode + '\nexport function ModelLabClient');

// 3. Add Button States inside component
const statesCode = `
  const [isDownloading, setIsDownloading] = useState(false);
  const [isViewingLedger, setIsViewingLedger] = useState(false);
  const [isRunningAudit, setIsRunningAudit] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setToastMessage('Audit Dossier downloaded successfully.');
      setTimeout(() => setToastMessage(null), 3000);
    }, 1500);
  };

  const handleViewLedger = () => {
    setIsViewingLedger(true);
    setTimeout(() => {
      setIsViewingLedger(false);
      setToastMessage('Calibration Ledger loaded.');
      setTimeout(() => setToastMessage(null), 3000);
    }, 1000);
  };

  const handleRunAudit = () => {
    setIsRunningAudit(true);
    setTimeout(() => {
      setIsRunningAudit(false);
      setToastMessage('Bias Disparity Audit completed successfully.');
      setTimeout(() => setToastMessage(null), 3000);
    }, 2000);
  };
`;
code = code.replace(/const router = useRouter\(\);/, 'const router = useRouter();\n' + statesCode);

// 4. Toast Notification
const toastUI = `
{toastMessage && (
  <div className="fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl bg-surface-overlay shadow-xl border-l-4 border-l-accent-electric flex items-center gap-3 text-on-surface animate-in slide-in-from-bottom-8">
    <span className="material-symbols-outlined text-accent-electric text-lg">verified</span>
    <span className="font-body-sm text-body-sm">{toastMessage}</span>
    <button className="ml-2 text-outline hover:text-on-surface" onClick={() => setToastMessage(null)}>
      <span className="material-symbols-outlined text-sm">close</span>
    </button>
  </div>
)}
`;
code = code.replace(/<div className="px-margin py-space-lg flex flex-col gap-6 max-w-\[1600px\] mx-auto w-full">/, '<div className="px-margin py-space-lg flex flex-col gap-6 max-w-[1600px] mx-auto w-full">\n' + toastUI);

// 5. Replace SVG with Recharts
const rechartsUI = `
<div className="w-full h-full min-h-[300px]">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
      <XAxis dataKey="decile" stroke="rgba(255,255,255,0.3)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} />
      <YAxis stroke="rgba(255,255,255,0.3)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} />
      <Tooltip 
        contentStyle={{ backgroundColor: '#0F121A', borderColor: '#1F2433', color: '#F8FAFC' }}
        itemStyle={{ fontSize: '13px' }}
      />
      <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }} />
      <Line type="monotone" dataKey="baseline" name="Baseline (v1.1)" stroke="rgba(144, 143, 160, 0.6)" strokeWidth={2} dot={false} />
      <Line type="monotone" dataKey="champion" name="Champion (v0.3)" stroke="#d0bcff" strokeWidth={3} dot={{r: 3}} activeDot={{r: 6}} />
      <Line type="monotone" dataKey="challenger" name="Challenger" stroke="#4cd7f6" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
</div>
`;
code = code.replace(/<svg className="absolute inset-0 w-full h-full pointer-events-none"[^>]*>[\s\S]*?<\/svg>/g, rechartsUI);

// 6. Wire Buttons
code = code.replace(
  /<button className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-bright transition-colors font-body-sm text-body-sm flex items-center gap-2 shadow-sm" type="button">\s*<span className="material-symbols-outlined text-lg">download<\/span>\s*<span>Download Audit Dossier<\/span>\s*<\/button>/,
  `<button onClick={handleDownload} disabled={isDownloading} className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-bright transition-colors font-body-sm text-body-sm flex items-center gap-2 shadow-sm disabled:opacity-50" type="button">
    <span className={\`material-symbols-outlined text-lg \${isDownloading ? 'animate-spin' : ''}\`}>{isDownloading ? 'refresh' : 'download'}</span>
    <span>{isDownloading ? 'Downloading...' : 'Download Audit Dossier'}</span>
  </button>`
);

code = code.replace(
  /<button className="px-4 py-1.5 rounded bg-surface-container text-on-surface font-body-sm text-body-sm hover:bg-surface-bright transition-colors" type="button">\s*View Calibration Ledger\s*<\/button>/,
  `<button onClick={handleViewLedger} disabled={isViewingLedger} className="px-4 py-1.5 rounded bg-surface-container text-on-surface font-body-sm text-body-sm hover:bg-surface-bright transition-colors disabled:opacity-50" type="button">
    {isViewingLedger ? 'Loading...' : 'View Calibration Ledger'}
  </button>`
);

code = code.replace(
  /<button className="px-4 py-1.5 rounded bg-primary-container text-on-primary-container font-body-sm text-body-sm font-medium hover:opacity-90 transition-opacity" type="button">\s*Re-run Bias Disparity Audit\s*<\/button>/,
  `<button onClick={handleRunAudit} disabled={isRunningAudit} className="px-4 py-1.5 rounded bg-primary-container text-on-primary-container font-body-sm text-body-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50" type="button">
    {isRunningAudit ? 'Running Audit...' : 'Re-run Bias Disparity Audit'}
  </button>`
);

fs.writeFileSync('app/(app)/model-lab/ModelLabClient.tsx', code);
