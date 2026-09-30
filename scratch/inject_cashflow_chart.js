const fs = require('fs');
let html = fs.readFileSync('y:/risklens/app/(app)/cash-flow/page.tsx', 'utf8');

const startStr = '<div className="flex flex-wrap items-center gap-4">';
const endStr = '<span className="text-primary italic">Oct Run-rate</span>\n</div>\n</div>';

const startIndex = html.indexOf(startStr);
const endIndex = html.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  const newHtml = 'import { CashFlowTrendChart } from "./CashFlowTrendChart";\n' + 
                  html.substring(0, startIndex) + 
                  '</div>\n<CashFlowTrendChart />' + 
                  html.substring(endIndex + endStr.length);
  fs.writeFileSync('y:/risklens/app/(app)/cash-flow/page.tsx', newHtml);
  console.log('done');
} else {
  console.log('not found');
  console.log('start', startIndex);
  console.log('end', endIndex);
}
