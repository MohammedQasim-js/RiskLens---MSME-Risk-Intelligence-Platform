const fs = require('fs');

function htmlToReact(htmlFile, outFile) {
  let html = fs.readFileSync(htmlFile, 'utf8');

  // Extract body
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    html = bodyMatch[1];
  }

  // Basic React replacements
  html = html.replace(/class=/g, 'className=');
  html = html.replace(/stroke-width=/g, 'strokeWidth=');
  html = html.replace(/stroke-linecap=/g, 'strokeLinecap=');
  html = html.replace(/stroke-dasharray=/g, 'strokeDasharray=');
  html = html.replace(/stroke-opacity=/g, 'strokeOpacity=');
  html = html.replace(/stop-color=/g, 'stopColor=');
  html = html.replace(/stop-opacity=/g, 'stopOpacity=');
  html = html.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  html = html.replace(/fill-rule=/g, 'fillRule=');
  html = html.replace(/clip-rule=/g, 'clipRule=');
  html = html.replace(/clip-path=/g, 'clipPath=');

  // Self closing tags
  html = html.replace(/<br>/g, '<br />');
  html = html.replace(/<hr>/g, '<hr />');
  html = html.replace(/<img([^>]*)>/g, '<img$1 />');
  html = html.replace(/<input([^>]*)>/g, '<input$1 />');
  
  // Clean up any stray non-React attributes
  html = html.replace(/<!--[\s\S]*?-->/g, ''); // strip comments

  // Update links
  html = html.replace(/href="#"/g, 'href="/overview"');
  html = html.replace(/href="#login"/g, 'href="/login"');
  html = html.replace(/href="#audit"/g, 'href="/overview"');
  
  // Style strings to objects (primitive approximation)
  // html = html.replace(/style="([^"]*)"/g, (match, styleStr) => { ... });
  // Looking at the HTML, there's `style="width: ${...}"` which we must fix if any.
  // Wait, there are `style="width: 100%"`? No, it's just raw HTML. I will manually fix styles if build fails.

  const reactComponent = `import Link from 'next/link';

export default function MarketingPage() {
  return (
    <>
      ${html}
    </>
  );
}
`;

  fs.writeFileSync(outFile, reactComponent);
  console.log("Done!");
}

htmlToReact('y:/risklens/landing.html', 'y:/risklens/app/(marketing)/page.tsx');
