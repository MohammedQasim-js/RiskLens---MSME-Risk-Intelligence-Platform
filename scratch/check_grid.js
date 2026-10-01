const fs = require('fs');
const content = fs.readFileSync('app/(app)/explainability/ExplainabilityClient.tsx', 'utf8');
const lines = content.split('\n');
let divCount = 0;
let gridStartLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('grid grid-cols-1 xl:grid-cols-12')) {
    gridStartLine = i;
  }
  if (gridStartLine !== -1) {
    const openMatches = lines[i].match(/<div[^>]*>/g) || [];
    const selfClosing = lines[i].match(/<div[^>]*\/>/g) || [];
    const closeMatches = lines[i].match(/<\/div>/g) || [];
    divCount += (openMatches.length - selfClosing.length - closeMatches.length);
    if (divCount === 0 && gridStartLine !== i) {
      console.log('Grid closed at line:', i + 1);
      break;
    }
  }
}
