const fs = require('fs');
let code = fs.readFileSync('app/(app)/model-lab/ModelLabClient.tsx', 'utf8');

// Fix the padding and margin classes
code = code.replace(/px-space-xs/g, 'px-1');
code = code.replace(/px-space-sm/g, 'px-2');
code = code.replace(/px-space-md/g, 'px-4');
code = code.replace(/px-space-lg/g, 'px-6');
code = code.replace(/px-space-xl/g, 'px-10');

code = code.replace(/py-space-xs/g, 'py-1');
code = code.replace(/py-space-sm/g, 'py-2');
code = code.replace(/py-space-md/g, 'py-4');
code = code.replace(/py-space-lg/g, 'py-6');
code = code.replace(/py-space-xl/g, 'py-10');

code = code.replace(/p-space-xs/g, 'p-1');
code = code.replace(/p-space-sm/g, 'p-2');
code = code.replace(/p-space-md/g, 'p-4');
code = code.replace(/p-space-lg/g, 'p-6');
code = code.replace(/p-space-xl/g, 'p-10');

code = code.replace(/px-margin/g, 'px-4 md:px-8 lg:px-12');

// Make the table look a LOT better by adding consistent vertical padding to ALL td/th
code = code.replace(/<td className="/g, '<td className="py-4 ');
code = code.replace(/<th className="/g, '<th className="py-4 ');

// Fix the Download Button
const btnRegex = /<button className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-bright transition-colors font-body-sm text-body-sm flex items-center gap-2 shadow-sm" type="button">\s*<span className="material-symbols-outlined text-\[16px\]">download<\/span>\s*<span>Download Audit Dossier<\/span>\s*<\/button>/;
const newBtn = `<button onClick={handleDownload} disabled={isDownloading} className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-bright transition-colors font-body-sm text-body-sm flex items-center gap-2 shadow-sm disabled:opacity-50" type="button">
    <span className={\`material-symbols-outlined text-[16px] \${isDownloading ? 'animate-spin' : ''}\`}>{isDownloading ? 'refresh' : 'download'}</span>
    <span>{isDownloading ? 'Downloading...' : 'Download Audit Dossier'}</span>
  </button>`;
code = code.replace(btnRegex, newBtn);

fs.writeFileSync('app/(app)/model-lab/ModelLabClient.tsx', code);
