const fs = require('fs');
let code = fs.readFileSync('app/(app)/model-lab/ModelLabClient.tsx', 'utf8');

const imports = `import React, { useState } from 'react';
import { useRouter } from 'next/navigation';`;
code = code.replace(/import React from 'react';/, imports);

const signature = `export function ModelLabClient({ defaultTab = 'model-lab' }: { defaultTab?: 'model-lab' | 'fairness' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const router = useRouter();
  
  const handleTabChange = (tab: 'model-lab' | 'fairness') => {
    setActiveTab(tab);
    router.push(tab === 'model-lab' ? '/model-lab' : '/fairness');
  };`;
code = code.replace(/export function ModelLabClient\(\) \{/, signature);

// Tab buttons
const btnLabRegex = /<button className="[^"]*" id="tab-btn-model-lab" onClick=\{\(\) => \{\}\} type="button">/;
code = code.replace(btnLabRegex, `<button className={\`flex-1 py-2 px-4 rounded-lg font-body-sm text-body-sm transition-all duration-200 flex items-center justify-center gap-2 \${activeTab === 'model-lab' ? 'bg-surface-container text-on-surface font-medium shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}\`} id="tab-btn-model-lab" onClick={() => handleTabChange('model-lab')} type="button">`);

const btnFairnessRegex = /<button className="[^"]*" id="tab-btn-fairness" onClick=\{\(\) => \{\}\} type="button">/;
code = code.replace(btnFairnessRegex, `<button className={\`flex-1 py-2 px-4 rounded-lg font-body-sm text-body-sm transition-all duration-200 flex items-center justify-center gap-2 \${activeTab === 'fairness' ? 'bg-surface-container text-on-surface font-medium shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}\`} id="tab-btn-fairness" onClick={() => handleTabChange('fairness')} type="button">`);

// Views
const viewLabRegex = /<div className="flex flex-col gap-10" id="view-model-lab">/;
code = code.replace(viewLabRegex, `<div className={\`flex-col gap-10 \${activeTab === 'model-lab' ? 'flex' : 'hidden'}\`} id="view-model-lab">`);

const viewFairnessRegex = /<div className="hidden flex-col gap-10" id="view-fairness">/;
code = code.replace(viewFairnessRegex, `<div className={\`flex-col gap-10 \${activeTab === 'fairness' ? 'flex' : 'hidden'}\`} id="view-fairness">`);

fs.writeFileSync('app/(app)/model-lab/ModelLabClient.tsx', code);
