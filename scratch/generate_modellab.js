const fs = require('fs');
let html = fs.readFileSync('scratch/modellab.html', 'utf8');

// Extract body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
  html = bodyMatch[1];
}

// Instead of max-w-[1520px], we look for the main content wrapper.
// Usually it's after the aside.
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
if (mainMatch) {
  html = mainMatch[1];
} else {
  // Try to strip aside manually
  const asideEnd = html.indexOf('</aside>');
  if (asideEnd !== -1) {
    html = html.substring(asideEnd + 8);
  }
}

// Strip script tags
html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

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
html = html.replace(/stop-color=/g, 'stopColor=');
html = html.replace(/stop-opacity=/g, 'stopOpacity=');
html = html.replace(/stroke-opacity=/g, 'strokeOpacity=');

// Fix spacing gap classes
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
  'space-y-space-xl': 'space-y-10',
  'px-space-md': 'px-4'
};
for (const [key, val] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  html = html.replace(regex, val);
}

// Escaped characters in text
html = html.replace(/ < /g, ' &lt; ');
html = html.replace(/ > /g, ' &gt; ');
html = html.replace(/<5%/g, '&lt;5%');
html = html.replace(/>12%/g, '&gt;12%');
html = html.replace(/< 3%/g, '&lt; 3%');
html = html.replace(/> 40%/g, '&gt; 40%');
html = html.replace(/=>/g, '=&gt;'); // Arrows

// Self closing tags
const voidElements = ['img', 'input', 'br', 'hr', 'source', 'path', 'circle', 'line', 'rect', 'polygon', 'polyline', 'ellipse'];
voidElements.forEach(tag => {
  const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)(>)`, 'gi');
  html = html.replace(regex, `<${tag}$1 />`);
});

// Remove hanging tags
const hangingTags = ['path', 'circle', 'line', 'rect', 'polygon', 'polyline', 'ellipse'];
hangingTags.forEach(tag => {
  const regex = new RegExp(`</${tag}>`, 'gi');
  html = html.replace(regex, '');
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

// Balance divs
const lines = html.split('\n');
let divCount = 0;
for (let i = 0; i < lines.length; i++) {
  const openMatches = lines[i].match(/<div[^>]*>/g) || [];
  const selfClosing = lines[i].match(/<div[^>]*\/>/g) || [];
  const closeMatches = lines[i].match(/<\/div>/g) || [];
  divCount += (openMatches.length - selfClosing.length - closeMatches.length);
}

while (divCount < 0) {
  const lastDivIdx = html.lastIndexOf('</div>');
  if (lastDivIdx !== -1) {
    html = html.substring(0, lastDivIdx) + html.substring(lastDivIdx + 6);
    divCount++;
  } else {
    break;
  }
}

// Strip outer <div className="pl-72 flex flex-col min-h-screen">
// Because we have the layout wrapper in page.tsx already
html = html.replace(/<div className=\"pl-72 flex flex-col min-h-screen\">/g, '<div>');

// Wrap in component
const componentCode = `'use client';\n\nimport React from 'react';\n\nexport function ModelLabClient() {\n  return (\n    <>\n      ${html}\n    </>\n  );\n}\n`;
fs.writeFileSync('app/(app)/model-lab/ModelLabClient.tsx', componentCode);
