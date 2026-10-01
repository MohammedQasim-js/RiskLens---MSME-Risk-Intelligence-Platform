const fs = require('fs');
const content = fs.readFileSync('app/(app)/explainability/ExplainabilityClient.tsx', 'utf8');
const lines = content.split('\n');
let divCount = 0;
let leftColStartLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Left Column: Selected Driver Deep Dive')) {
    leftColStartLine = i + 1; // The div is on the next line usually
  }
  if (leftColStartLine !== -1 && i >= leftColStartLine) {
    const openMatches = lines[i].match(/<div[^>]*>/g) || [];
    const selfClosing = lines[i].match(/<div[^>]*\/>/g) || [];
    const closeMatches = lines[i].match(/<\/div>/g) || [];
    divCount += (openMatches.length - selfClosing.length - closeMatches.length);
    if (divCount === 0 && leftColStartLine !== i) {
      console.log('Left Column closed at line:', i + 1);
      break;
    }
  }
}
