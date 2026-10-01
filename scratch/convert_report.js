const fs = require('fs');
let html = fs.readFileSync('scratch/report.html', 'utf8');

// Extract the body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
  html = bodyMatch[1];
}

// Convert class to className
html = html.replace(/class=/g, 'className=');

// Fix inline styles
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

// Self-close tags
const voidElements = ['img', 'input', 'br', 'hr', 'source', 'path'];
voidElements.forEach(tag => {
  const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)(>)`, 'gi');
  html = html.replace(regex, `<${tag}$1 />`);
});

// Ensure no custom spacing utility issues like gap-space- or space-y-space-
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

// Clean corrupted characters
html = html.replace(/[^\x00-\x7F]/g, '-');

fs.writeFileSync('scratch/ReportPageContent.tsx', html);
