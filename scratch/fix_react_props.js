const fs = require('fs');
const path = require('path');

const dir = 'app/(app)/stress-lab';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const attributesToCamelCase = [
  'font-family',
  'font-size',
  'text-anchor',
  'stroke-opacity',
  'font-weight',
  'stroke-width',
  'stroke-dasharray',
  'stroke-linecap',
  'stroke-linejoin',
  'fill-opacity',
  'clip-path',
  'clip-rule',
  'fill-rule',
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Fix SVG attributes
  attributesToCamelCase.forEach(attr => {
    const regex = new RegExp(attr + '=', 'g');
    const camel = attr.split('-').map((part, i) => i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)).join('');
    content = content.replace(regex, camel + '=');
  });

  // Fix value="..." to defaultValue="..." for inputs that lack onChange
  // Simple heuristic: if we find value= without onChange in the same element, we could just replace value= with defaultValue= globally since controlled inputs usually use value={...} with curly braces, but even if it's value="...", defaultValue="..." is safer for static HTML.
  content = content.replace(/ value="/g, ' defaultValue="');

  if (original !== content) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed:', file);
  }
});
