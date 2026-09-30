const fs = require('fs');

let html = fs.readFileSync('y:/risklens/scratch/overview.html', 'utf8');

const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) { html = bodyMatch[1]; }

// Strip header since we already have the Sidebar in the layout
html = html.replace(/<header[\s\S]*?<\/header>/, '');
// Strip footer if there's any
html = html.replace(/<footer[\s\S]*?<\/footer>/, '');

html = html.replace(/class=/g, 'className=');
html = html.replace(/stroke-width=/g, 'strokeWidth=');
html = html.replace(/stroke-linecap=/g, 'strokeLinecap=');
html = html.replace(/stroke-dasharray=/g, 'strokeDasharray=');
html = html.replace(/stroke-opacity=/g, 'strokeOpacity=');
html = html.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
html = html.replace(/stop-color=/g, 'stopColor=');
html = html.replace(/stop-opacity=/g, 'stopOpacity=');
html = html.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
html = html.replace(/fill-rule=/g, 'fillRule=');
html = html.replace(/clip-rule=/g, 'clipRule=');
html = html.replace(/clip-path=/g, 'clipPath=');
html = html.replace(/<br>/g, '<br />');
html = html.replace(/<hr>/g, '<hr />');
html = html.replace(/<img([^>]*)>/g, '<img$1 />');
html = html.replace(/<input([^>]*)>/g, '<input$1 />');
html = html.replace(/<!--[\s\S]*?-->/g, ''); // strip comments

// Fix styles (regex for simple style="width: 45%" style string)
html = html.replace(/style="([^"]*?)"/g, (match, p1) => {
    // If it's something like width: X%; or left: Ypx;
    const styles = p1.split(';').filter(s => s.trim());
    let objStr = '{';
    styles.forEach(s => {
        const parts = s.split(':');
        if(parts.length >= 2) {
            let key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            let value = parts.slice(1).join(':').trim();
            // simple check if value is a number
            if(isNaN(value)) {
                objStr += ` ${key}: "${value}",`;
            } else {
                objStr += ` ${key}: ${value},`;
            }
        }
    });
    objStr += ' }';
    return `style={${objStr}}`;
});

fs.writeFileSync('y:/risklens/scratch/overview_react.tsx', html);
console.log('done');
