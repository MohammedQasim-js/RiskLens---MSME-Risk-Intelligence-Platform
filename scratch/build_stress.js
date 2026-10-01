const fs = require('fs');

try {
  let html = fs.readFileSync('y:/risklens/scratch/stress.html', 'utf8');

  // Extract from inside <main ...><div ...>
  let startIndex = html.indexOf('<!-- Top Command Ribbon & Scenario Meta -->');
  let endIndex = html.indexOf('</main>');
  
  if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find start or end index');
    process.exit(1);
  }

  let jsx = html.substring(startIndex, endIndex);

  // Replace spacing tokens
  jsx = jsx.replace(/space-md/g, '4');
  jsx = jsx.replace(/space-sm/g, '2');
  jsx = jsx.replace(/space-lg/g, '6');
  jsx = jsx.replace(/space-xl/g, '10');
  jsx = jsx.replace(/margin/g, '8');
  jsx = jsx.replace(/gutter/g, '5');
  jsx = jsx.replace(/space-xs/g, '1');

  // Convert style strings to objects
  jsx = jsx.replace(/style="(.*?)"/g, (match, p1) => {
    const parts = p1.split(';').filter(Boolean);
    const styles = parts.map(p => {
      let [key, ...valParts] = p.split(':');
      let val = valParts.join(':');
      if (!key || !val) return '';
      key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      val = val.trim();
      return `${key}: '${val}'`;
    }).filter(Boolean).join(', ');
    return `style={{ ${styles} }}`;
  });

  // Remove raw HTML comments
  jsx = jsx.replace(/<!--(.*?)-->/g, '{/* $1 */}');

  // Replace class -> className
  jsx = jsx.replace(/class=/g, 'className=');

  // Fix SVG attributes
  jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
  jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
  jsx = jsx.replace(/stroke-dasharray/g, 'strokeDasharray');
  jsx = jsx.replace(/stop-color/g, 'stopColor');
  jsx = jsx.replace(/stop-opacity/g, 'stopOpacity');
  jsx = jsx.replace(/clip-path/g, 'clipPath');
  jsx = jsx.replace(/fill-rule/g, 'fillRule');
  jsx = jsx.replace(/clip-rule/g, 'clipRule');
  jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');

  // Self close elements: <img ...>, <input ...>, <hr>, <br>
  jsx = jsx.replace(/<img(.*?)>/g, '<img$1 />');
  jsx = jsx.replace(/<input(.*?)>/g, '<input$1 />');
  jsx = jsx.replace(/<hr(.*?)>/g, '<hr$1 />');
  jsx = jsx.replace(/<br(.*?)>/g, '<br$1 />');
  
  // Make sure img/input aren't double closed
  jsx = jsx.replace(/\/\s*>\s*\/\s*>/g, '/>');

  // Note: the last tag might be an unclosed </div> because of where we cut it.
  // Wait, let's see. `</main>` was preceded by `</div>`. We started inside `<main> <div>`.
  // Wait, the HTML ended with `</div></main></div></body></html>`.
  // If we start from `<!-- Top Utility ...` which is INSIDE `<div class="flex flex-col w-full">`,
  // then we need to remove the trailing `</div>` that belongs to that wrapper.
  // Remove the trailing div
  const lastDivIndex = jsx.lastIndexOf('</div>');
  if (lastDivIndex !== -1) {
      jsx = jsx.substring(0, lastDivIndex);
  }

  // Add the wrapper component
  const component = `
import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import Link from 'next/link';

export default async function StressLabPage() {
  const businessId = await getActiveBusinessId();
  if (!businessId) {
    return (
      <div className="p-8 text-white flex flex-col items-center justify-center min-h-[50vh]">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">business_center</span>
        <h2 className="text-2xl font-semibold mb-2">No active business found</h2>
        <p className="text-on-surface-variant mb-6">Please complete the onboarding process to view your risk cockpit.</p>
        <Link href="/onboarding" className="px-6 py-2.5 rounded-xl bg-primary text-black font-semibold hover:bg-primary/90 transition-all">
          Go to Onboarding
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
      ${jsx}
    </div>
  );
}
`;

  fs.writeFileSync('y:/risklens/app/(app)/stress-lab/page.tsx', component);
  console.log('done');
} catch (err) {
  console.error(err);
}
