const fs = require('fs');
let html = fs.readFileSync('scratch/report.html', 'utf8');

// Extract body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
  html = bodyMatch[1];
}

// Extract layout portion (skip sidebar/header)
const startIdx = html.indexOf('<div class="w-full max-w-[1520px]');
if (startIdx !== -1) {
  html = html.substring(startIdx);
}
// Strip trailing </div>s that closed body/main
html = html.replace(/<\/div>\s*<\/div>\s*<\/main>\s*<\/div>\s*$/, '');

// Clean HTML Comments
html = html.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Attributes
html = html.replace(/class=/g, 'className=');
html = html.replace(/onclick="([^"]*)"/g, 'onClick={() => {}}');
html = html.replace(/stroke-width=/g, 'strokeWidth=');
html = html.replace(/stroke-linecap=/g, 'strokeLinecap=');
html = html.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
html = html.replace(/fill-rule=/g, 'fillRule=');
html = html.replace(/clip-rule=/g, 'clipRule=');
html = html.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=');
html = html.replace(/stroke-dasharray=/g, 'strokeDasharray=');

// Fix spacing gap classes (just in case they are present here too)
const replacements = {
  'gap-space-xs': 'gap-1',
  'gap-space-sm': 'gap-2',
  'gap-space-md': 'gap-4',
  'gap-space-lg': 'gap-6',
  'gap-space-xl': 'gap-10',
  'space-y-space-xs': 'space-y-1',
  'space-y-space-sm': 'space-y-2',
  'space-y-space-md': 'space-y-4',
  'space-y-space-lg': 'space-y-6',
  'space-y-space-xl': 'space-y-10'
};
for (const [key, val] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  html = html.replace(regex, val);
}

// Self closing tags
const voidElements = ['img', 'input', 'br', 'hr', 'source', 'path', 'circle', 'line', 'rect', 'polygon', 'polyline', 'ellipse'];
voidElements.forEach(tag => {
  const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)(>)`, 'gi');
  html = html.replace(regex, `<${tag}$1 />`);
});

// Inline styles
html = html.replace(/style="([^"]*)"/g, (match, p1) => {
  const styleObj = {};
  p1.split(';').forEach(rule => {
    if (!rule.trim()) return;
    const [key, value] = rule.split(':').map(s => s.trim());
    if (key && value) {
      const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      styleObj[camelKey] = value;
    }
  });
  return 'style={{ ' + Object.entries(styleObj).map(([k, v]) => `${k}: '${v}'`).join(', ') + ' }}';
});

// Clean corrupted characters
html = html.replace(/[^\x00-\x7F]/g, '-');

// Wrap in component
const componentCode = `'use client';\n\nimport React from 'react';\n\nexport function ReportClient() {\n  return (\n    <>\n      ${html}\n    </>\n  );\n}\n`;
fs.writeFileSync('app/(app)/report/ReportClient.tsx', componentCode);
