const fs = require('fs');
let code = fs.readFileSync('app/(app)/model-lab/ModelLabClient.tsx', 'utf8');

// 1. Add handleSetChampion function
const stateInjectRegex = /const \[toastMessage, setToastMessage\] = useState<string \| null>\(null\);/;
const stateInjectReplacement = `const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSetChampion = (modelName: string) => {
    setToastMessage(\`\${modelName} promoted to Active Production.\`);
    setTimeout(() => setToastMessage(null), 3000);
  };`;
code = code.replace(stateInjectRegex, stateInjectReplacement);

// 2. Replace Card A button
const btn1Regex = /<div className="w-full py-1.5 px-2 rounded bg-surface-container-highest text-center font-label-caps text-\[11px\] text-outline uppercase tracking-wider">\s*Fallback \/ Baseline\s*<\/div>/;
const btn1Replacement = `<button onClick={() => handleSetChampion('Logistic Regression')} className="w-full py-1.5 px-2 rounded bg-surface-container-highest text-center font-label-caps text-[11px] text-outline uppercase tracking-wider hover:bg-surface-bright hover:text-on-surface transition-colors focus:ring-2 focus:ring-secondary/50 outline-none" type="button">
                Set as Active Champion
              </button>`;
code = code.replace(btn1Regex, btn1Replacement);

// 3. Replace Card B button
const btn2Regex = /<div className="w-full py-1.5 px-2 rounded bg-primary-container text-on-primary-container text-center font-label-caps text-\[11px\] font-semibold uppercase tracking-wider shadow-sm">\s*Production Champion \(Serving Live\)\s*<\/div>/;
const btn2Replacement = `<button onClick={() => handleSetChampion('Gradient Boosting')} className="w-full py-1.5 px-2 rounded bg-primary-container text-on-primary-container text-center font-label-caps text-[11px] font-semibold uppercase tracking-wider shadow-sm hover:opacity-90 transition-opacity focus:ring-2 focus:ring-primary/50 outline-none" type="button">
                Production Champion (Serving Live)
              </button>`;
code = code.replace(btn2Regex, btn2Replacement);

// 4. Replace Card C button
const btn3Regex = /<div className="w-full py-1.5 px-2 rounded bg-surface-container-highest text-center font-label-caps text-\[11px\] text-accent-electric uppercase tracking-wider">\s*Experimental Challenger\s*<\/div>/;
const btn3Replacement = `<button onClick={() => handleSetChampion('Neural Tabular Net')} className="w-full py-1.5 px-2 rounded bg-surface-container-highest text-center font-label-caps text-[11px] text-accent-electric uppercase tracking-wider hover:bg-surface-bright hover:text-accent-electric/80 transition-colors focus:ring-2 focus:ring-accent-electric/50 outline-none" type="button">
                Promote to Champion
              </button>`;
code = code.replace(btn3Regex, btn3Replacement);


fs.writeFileSync('app/(app)/model-lab/ModelLabClient.tsx', code);
