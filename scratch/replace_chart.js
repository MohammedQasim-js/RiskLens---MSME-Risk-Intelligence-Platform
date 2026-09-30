const fs = require('fs');
let html = fs.readFileSync('y:/risklens/app/(app)/overview/page.tsx', 'utf8');

const startStr = '<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4">';
const endStr = '</div>\n\n<div className="lg:col-span-4 rounded-xl bg-surface-container-low/80 backdrop-blur-xl p-4 flex flex-col justify-between shadow-xl">';

const startIndex = html.indexOf(startStr);
const endIndex = html.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  const newHtml = 'import { CashFlowChart } from "./CashFlowChart";\n' + 
                  html.substring(0, startIndex) + 
                  '<CashFlowChart />\n' + 
                  html.substring(endIndex);
  fs.writeFileSync('y:/risklens/app/(app)/overview/page.tsx', newHtml);
  console.log('done');
} else {
  console.log('not found');
  console.log('start', startIndex);
  console.log('end', endIndex);
}
