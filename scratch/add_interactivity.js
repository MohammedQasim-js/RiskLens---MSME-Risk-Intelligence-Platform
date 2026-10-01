const fs = require('fs');
let code = fs.readFileSync('app/(app)/report/ReportClient.tsx', 'utf8');

// 1. Add useState, useEffect, Recharts imports
const imports = `import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip, ReferenceLine, CartesianGrid, YAxis } from 'recharts';

const chartData = [
  { day: 0, label: 'Day 0', balance: -2.10 },
  { day: 30, label: 'Day 30', balance: -1.85 },
  { day: 60, label: 'Day 60', balance: -1.21 },
  { day: 74, label: 'Dec 14 Trough', balance: -0.88, isTrough: true },
  { day: 90, label: 'Day 90', balance: -0.95 }
];
`;
code = code.replace(/import React from 'react';/, imports);

// 2. Add state variables inside ReportClient component
const stateVars = `export function ReportClient() {
  const [isExporting, setIsExporting] = useState(false);
  const [showExportToast, setShowExportToast] = useState(false);
  
  const [shareState, setShareState] = useState<'idle' | 'sharing' | 'shared'>('idle');

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setShowExportToast(true);
      setTimeout(() => setShowExportToast(false), 5000);
    }, 1500);
  };

  const handleShareTrigger = () => {
    setShareState('sharing');
    setTimeout(() => {
      setShareState('shared');
      setTimeout(() => setShareState('idle'), 3000);
    }, 800);
  };
`;
code = code.replace(/export function ReportClient\(\) \{/, stateVars);

// 3. Update export toast
const toastRegex = /<div className=\"hidden transition-all duration-300 fixed bottom-6 right-6 z-50[^>]*id=\"export-toast\">[\s\S]*?<\/div>/;
const newToast = `{showExportToast && (
  <div className="transition-all duration-300 fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl bg-surface-overlay shadow-xl border-l-4 border-l-accent-electric flex items-center gap-3 text-on-surface animate-in slide-in-from-bottom-8">
    <span className="material-symbols-outlined text-accent-electric text-lg">verified</span>
    <span className="font-body-sm text-body-sm">Document package (PDF + XBRL 2.1 taxonomy) generated successfully.</span>
    <button className="ml-2 text-outline hover:text-on-surface" onClick={() => setShowExportToast(false)}>
      <span className="material-symbols-outlined text-sm">close</span>
    </button>
  </div>
)}`;
code = code.replace(toastRegex, newToast);

// 4. Update share button
const shareBtnRegex = /<button className=\"[^\"]*\" id=\"btn-share\" onClick=\{\(\) => \{\}\} type=\"button\">[\s\S]*?<\/button>/;
const newShareBtn = `<button className="group px-4 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-md text-body-md font-medium transition-all shadow-sm flex items-center gap-2" id="btn-share" onClick={handleShareTrigger} type="button" disabled={shareState !== 'idle'}>
  {shareState === 'idle' && (
    <>
      <span className="material-symbols-outlined text-lg text-tertiary group-hover:scale-110 transition-transform">share_reviews</span>
      <span>Share with Syndicate</span>
    </>
  )}
  {shareState === 'sharing' && (
    <>
      <span className="material-symbols-outlined text-lg animate-spin text-tertiary">refresh</span>
      <span>Generating Link...</span>
    </>
  )}
  {shareState === 'shared' && (
    <>
      <span className="material-symbols-outlined text-lg text-semantic-success">check</span>
      <span className="text-semantic-success">Syndicate Link Copied</span>
    </>
  )}
</button>`;
code = code.replace(shareBtnRegex, newShareBtn);

// 5. Update export button
const exportBtnRegex = /<button className=\"[^\"]*\" id=\"btn-export\" onClick=\{\(\) => \{\}\} type=\"button\">[\s\S]*?<\/button>/;
const newExportBtn = `<button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-container via-inverse-primary to-secondary-container hover:brightness-110 text-on-primary font-body-md text-body-md font-semibold transition-all shadow-md flex items-center gap-2" id="btn-export" onClick={handleExportPDF} type="button" disabled={isExporting}>
  {isExporting ? (
    <>
      <span className="material-symbols-outlined text-lg animate-spin">refresh</span>
      <span>Compiling XBRL Dossier...</span>
    </>
  ) : (
    <>
      <span className="material-symbols-outlined text-lg">download</span>
      <span>Export Dossier (PDF / XBRL)</span>
    </>
  )}
</button>`;
code = code.replace(exportBtnRegex, newExportBtn);

// 6. Update Chart
const chartRegex = /<div className=\"h-20 w-full relative\">[\s\S]*?<\/svg>\s*<\/div>/;
const newChart = `<div className="h-24 w-full mt-2">
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
      <defs>
        <linearGradient id="liquidityFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity={0.0} />
        </linearGradient>
      </defs>
      <Tooltip 
        contentStyle={{ backgroundColor: '#0F121A', borderColor: '#1F2433', color: '#F8FAFC', fontSize: '12px' }}
        itemStyle={{ color: '#38BDF8' }}
        formatter={(value) => [\`\${value}L\`, 'Balance']}
      />
      <ReferenceLine y={-0.65} stroke="#F43F5E" strokeDasharray="4 4" strokeWidth={1} />
      <Area 
        type="monotone" 
        dataKey="balance" 
        stroke="#38BDF8" 
        strokeWidth={2.5} 
        fill="url(#liquidityFill)" 
        activeDot={{ r: 5, fill: '#F59E0B', stroke: '#0A0D14', strokeWidth: 2 }}
      />
    </AreaChart>
  </ResponsiveContainer>
</div>`;

code = code.replace(chartRegex, newChart);

fs.writeFileSync('app/(app)/report/ReportClient.tsx', code);
