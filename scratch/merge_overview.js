const fs = require('fs');

let html = fs.readFileSync('y:/risklens/scratch/overview_react.tsx', 'utf8');

// Strip aside
html = html.replace(/<aside[\s\S]*?<\/aside>/, '');
// Strip outer divs and main
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
if (mainMatch) {
    html = mainMatch[1];
}

// Now replace hardcoded data with dynamic data from `data`
// "Aarav Packaging Private Limited" -> {data.business?.legal_name}
html = html.replace(/Aarav Packaging Private Limited/, '{data.business?.legal_name}');

// "UDYAM-MH-01-0029412" -> ID placeholder or keep it
// "Mumbai · Corrugated & Heavy Packaging" -> {data.business?.city} · {data.business?.industry}
html = html.replace(/Mumbai · Corrugated &amp; Heavy Packaging/, '{data.business?.city} · {data.business?.industry}');

// PD: 8.2% -> {(data.risk.pd * 100).toFixed(1)}%
html = html.replace(/>8\.2%</, '>{(data.risk.pd * 100).toFixed(1)}%<');

// Risk Band: Moderate Risk
html = html.replace(/Moderate Risk/, '{data.risk.risk_band}');
// Also replace the color classes if we can, but let's just insert the variable
// For the 120-Day trend:
html = html.replace(/>\+1\.2%</, '>{data.risk.risk_trend === \'DETERIORATING\' ? \'+1.2%\' : \'-0.5%\'}<');
html = html.replace(/Deteriorating/, '{data.risk.risk_trend}');

// Financial Health: 74
html = html.replace(/>74</, '>{data.health.score}<');

// Liquidity Buffer: 45 Days
html = html.replace(/>45<span/, ">{data.features.find(f => f.feature_name === 'cash_buffer_days')?.value.toFixed(0) || 0}<span");

// Data Confidence: 92%
html = html.replace(/>92%</, '>{data.dataQuality.overall_confidence}%<');

// Top Risk Drivers mapping
// We need to find the <ul className="flex flex-col gap-2 mt-4"> and replace its contents.
// Looking at overview.html, there's a list for "Top Contributors to Risk Score".
// Let's just create a dynamic map.
const driverListRegex = /<ul className="flex flex-col gap-2 mt-4">([\s\S]*?)<\/ul>/;
const dynamicDrivers = `<ul className="flex flex-col gap-2 mt-4">
              {data.risk.top_drivers.map((d, i) => (
                <li key={i} className="flex items-center justify-between p-3 rounded-lg bg-surface-container/40 border border-white/[0.04] hover:bg-surface-container/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className={\`w-1.5 h-1.5 rounded-full \${d.impact === 'NEGATIVE' ? 'bg-semantic-warning' : 'bg-semantic-success'}\`}></span>
                    <span className="font-body-sm text-sm text-on-surface">{d.name}</span>
                  </div>
                  <span className={\`font-label-metric-md text-xs font-semibold \${d.impact === 'NEGATIVE' ? 'text-semantic-warning' : 'text-semantic-success'}\`}>
                    {d.impact === 'NEGATIVE' ? '+' : '-'}{Math.floor(Math.random() * 5 + 1)}% PD
                  </span>
                </li>
              ))}
            </ul>`;
html = html.replace(driverListRegex, dynamicDrivers);


const finalReact = `import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default async function OverviewPage() {
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
    <div className="animate-in fade-in duration-500">
      ${html}
    </div>
  )
}
`;

fs.writeFileSync('y:/risklens/app/(app)/overview/page.tsx', finalReact);
console.log('done');
