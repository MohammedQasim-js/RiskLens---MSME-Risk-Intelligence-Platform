const fs = require('fs');
let content = fs.readFileSync('app/(app)/report/ReportClient.tsx', 'utf8');

const hangingTags = ['path', 'circle', 'line', 'rect', 'polygon', 'polyline', 'ellipse'];
hangingTags.forEach(tag => {
  const regex = new RegExp(`</${tag}>`, 'gi');
  content = content.replace(regex, '');
});

// Fix unescaped < and > in text nodes.
content = content.replace(/Low <5%/g, 'Low &lt;5%');
content = content.replace(/Critical >12%/g, 'Critical &gt;12%');
content = content.replace(/< 3%/g, '&lt; 3%');
content = content.replace(/> 40%/g, '&gt; 40%');
content = content.replace(/ > /g, ' &gt; ');
content = content.replace(/ < /g, ' &lt; ');

// Any other stray < or > without tags might be problematic. Let's just fix known ones.
// I will also fix `stop-color` and `stop-opacity`
content = content.replace(/stop-color=/g, 'stopColor=');
content = content.replace(/stop-opacity=/g, 'stopOpacity=');

// Fix inline styles that were not closed or broken
// For any <defs> that didn't close properly? The original HTML had </defs>, so they should be fine.

// Handle other known SWC issues in generated code
// Sometimes we need to fix generic issues:
content = content.replace(/class=/g, 'className=');

fs.writeFileSync('app/(app)/report/ReportClient.tsx', content);
