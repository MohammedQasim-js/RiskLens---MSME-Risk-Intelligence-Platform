const fs = require('fs');

try {
  let jsx = fs.readFileSync('y:/risklens/scratch/cashflow_jsx.txt', 'utf8');

  // Convert inline style strings to objects: style="width: 76%;" -> style={{ width: '76%' }}
  jsx = jsx.replace(/style="(.*?)"/g, (match, p1) => {
    const parts = p1.split(';').filter(Boolean);
    const styles = parts.map(p => {
      let [key, val] = p.split(':');
      if (!key || !val) return '';
      key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      val = val.trim();
      return `${key}: '${val}'`;
    }).filter(Boolean).join(', ');
    return `style={{ ${styles} }}`;
  });

  // Remove any remaining raw HTML comments
  jsx = jsx.replace(/<!--(.*?)-->/g, '{/* $1 */}');

  // Replace class -> className again just in case some were missed
  jsx = jsx.replace(/class=/g, 'className=');

  // Fix SVG specific attributes
  jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
  jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
  jsx = jsx.replace(/stroke-dasharray/g, 'strokeDasharray');
  jsx = jsx.replace(/stop-color/g, 'stopColor');
  jsx = jsx.replace(/stop-opacity/g, 'stopOpacity');

  const component = `
import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import Link from 'next/link';

export default async function CashFlowPage() {
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

  const data = await getDashboardData(businessId);

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
      ${jsx}
    </div>
  );
}
`;

  fs.writeFileSync('y:/risklens/app/(app)/cash-flow/page.tsx', component);
  console.log('done');
} catch (err) {
  console.error(err);
}
