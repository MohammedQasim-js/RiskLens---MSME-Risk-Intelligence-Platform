const fs = require('fs');
let code = fs.readFileSync('y:/risklens/app/(app)/plan-vs-actual/page.tsx', 'utf8');

const startStr = '{/*  Chart Legend  */}';
const footerStr = '{/*  Variance Insight Bar Footer  */}';
const startIndex = code.indexOf(startStr);
const endIndex = code.indexOf(footerStr);

if (startIndex !== -1 && endIndex !== -1) {
  const componentImport = 'import { RevenuePerformanceChart } from "./RevenuePerformanceChart";\n';
  
  // The Chart Legend is inside `<div className="flex flex-col md:flex-row ...">` which ends before High-Contrast SVG.
  // Wait, I need to make sure I don't leave unclosed divs.
  // Let's just do a regex replace to be safe.
  
  // Let's find exactly what tags wrap `startIndex` and `endIndex`
  // Actually, wait, there are two closing divs at the end of the High-Contrast SVG section!
  // It looks like:
  // </div> (closes the Sep 2026 actual bar)
  // </div> (closes the flex-col group)
  // </div> (closes the grid grid-cols-6)
  // </div> (closes the relative w-full)
  
  // Let's print out lines around endIndex to see what to delete
  const lines = code.substring(startIndex, endIndex).split('\n');
  console.log(lines.slice(-10));
}
