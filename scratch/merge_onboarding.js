const fs = require('fs');
let html = fs.readFileSync('y:/risklens/scratch/onboarding_react.tsx', 'utf8');

// The submit button is at the bottom: 
html = html.replace(/<button className="px-6 py-2.5 rounded-xl bg-gradient-to-r([^>]*)>/g, '<button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r$1>');

// Make main a form
html = html.replace(/<main([^>]*)>/, '<form action={submitOnboarding} $1>');
html = html.replace(/<\/main>/, '</form>');

// Add names to inputs
// 1. Business Name
html = html.replace(/<input \/>\s*<span className="material-symbols-outlined absolute right-3.5 top-3.5 text-semantic-success text-base">verified<\/span>/, '<input name="legal_name" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all pr-10" />\n<span className="material-symbols-outlined absolute right-3.5 top-3.5 text-semantic-success text-base">verified</span>');

// 2. Industry
html = html.replace(/<select([^>]*)>\s*<option selected="">Precision Manufacturing & Packaging<\/option>[\s\S]*?<\/select>/, '<select name="industry" required $1><option value="">Select Industry</option><option value="Precision Manufacturing & Packaging">Precision Manufacturing & Packaging</option><option value="Textiles">Textiles</option></select>');

// 3. City
html = html.replace(/<label([^>]*)>Operating City<\/label>\s*<input \/>/, '<label$1>Operating City</label>\n<input name="city" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all" />');

// 4. State
html = html.replace(/<select([^>]*)>\s*<option selected="">Maharashtra<\/option>[\s\S]*?<\/select>/, '<select name="state" required $1><option value="">Select State</option><option value="Maharashtra">Maharashtra</option><option value="Gujarat">Gujarat</option></select>');

// 5. MSME Classification
const msmeHtml = `<div className="relative">
<select name="msme_class" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none appearance-none transition-all cursor-pointer">
  <option value="micro">Micro (&lt;₹1 Cr)</option>
  <option value="small">Small (₹1–10 Cr)</option>
  <option value="medium">Medium (₹10–50 Cr)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant pointer-events-none text-base">expand_more</span>
</div>`;
html = html.replace(/<div className="grid grid-cols-3 gap-2">[\s\S]*?<\/div>\s*<\/div>\s*<div className="flex flex-col gap-1.5">/, msmeHtml + '\n</div>\n<div className="flex flex-col gap-1.5">');

// 6. Vintage Age
html = html.replace(/<div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-lowest border border-white\/\[0.08\]">[\s\S]*?<\/div>\s*<\/div>/, '<input name="age_months" type="number" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all" placeholder="Months active" />\n</div>');

// 7. Commercial Model
html = html.replace(/<div className="flex flex-wrap gap-2">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, '<input name="business_model" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all" placeholder="e.g. B2B Wholesale" />\n</div>\n</section>');

// 8. Target Monthly Rev
html = html.replace(/<label([^>]*)>Target Monthly Rev<\/label>\s*<div className="relative">\s*<span([^>]*)>₹<\/span>\s*<input \/>/, '<label$1>Target Monthly Rev</label>\n<div className="relative">\n<span$2>₹</span>\n<input name="target_monthly_revenue" type="number" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 pl-8 rounded-xl outline-none transition-all" />');

// 9. Annual WC Budget -> project_budget
html = html.replace(/<label([^>]*)>Annual WC Budget<\/label>\s*<div className="relative">\s*<span([^>]*)>₹<\/span>\s*<input \/>/, '<label$1>Annual WC Budget</label>\n<div className="relative">\n<span$2>₹</span>\n<input name="project_budget" type="number" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 pl-8 rounded-xl outline-none transition-all" />');

// 10. Cycle Start
html = html.replace(/<label([^>]*)>Cycle Start Date<\/label>\s*<div className="relative">\s*<input \/>/, '<label$1>Cycle Start Date</label>\n<div className="relative">\n<input name="project_start" type="date" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all [color-scheme:dark]" />');

// 11. Cycle End
html = html.replace(/<label([^>]*)>Cycle End Date<\/label>\s*<div className="relative">\s*<input \/>/, '<label$1>Cycle End Date</label>\n<div className="relative">\n<input name="project_end" type="date" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all [color-scheme:dark]" />');

// 12. Expected DSO -> expected_collection_days
html = html.replace(/<span className="text-semantic-warning text-\[10px\] font-semibold">Cycle Drift<\/span>\s*<\/label>\s*<div className="relative">\s*<input \/>/, '<span className="text-semantic-warning text-[10px] font-semibold">Cycle Drift</span>\n</label>\n<div className="relative">\n<input name="expected_collection_days" type="number" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 rounded-xl outline-none transition-all" />');

// 13. Planned Monthly OPEX -> planned_monthly_expenses
html = html.replace(/<label([^>]*)>Planned Monthly OPEX<\/label>\s*<div className="relative">\s*<span([^>]*)>₹<\/span>\s*<input \/>/, '<label$1>Planned Monthly OPEX</label>\n<div className="relative">\n<span$2>₹</span>\n<input name="planned_monthly_expenses" type="number" required className="w-full bg-surface-container-lowest border border-white/[0.08] hover:border-white/20 focus:border-primary text-white font-body-md text-sm px-4 py-3 pl-8 rounded-xl outline-none transition-all" />');

// Remove header, we already have TopBar.
html = html.replace(/<header[\s\S]*?<\/header>/, '');

const finalReact = `import { submitOnboarding } from "./actions";

export default function OnboardingPage() {
  return (
    <>
      ${html}
    </>
  );
}
`;

fs.writeFileSync('y:/risklens/app/(app)/onboarding/page.tsx', finalReact);
console.log('done');
