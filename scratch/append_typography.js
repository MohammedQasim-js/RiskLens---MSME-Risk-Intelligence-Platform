const fs = require('fs');

const fontConfig = {
  'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '-0.01em', fontWeight: '400' }],
  'label-caps': ['11px', { lineHeight: '16px', letterSpacing: '0.06em', fontWeight: '600' }],
  'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.03em', fontWeight: '600' }],
  'body-sm': ['12px', { lineHeight: '18px', letterSpacing: '0.01em', fontWeight: '400' }],
  'body-md': ['14px', { lineHeight: '20px', letterSpacing: '0em', fontWeight: '400' }],
  'label-metric-md': ['14px', { lineHeight: '20px', letterSpacing: '0em', fontWeight: '500' }],
  'headline-md': ['22px', { lineHeight: '30px', letterSpacing: '-0.015em', fontWeight: '500' }],
  'headline-xl-mobile': ['26px', { lineHeight: '34px', letterSpacing: '-0.02em', fontWeight: '600' }],
  'display-lg-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '600' }],
  'label-metric-lg': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em', fontWeight: '500' }],
  'headline-xl': ['36px', { lineHeight: '44px', letterSpacing: '-0.025em', fontWeight: '600' }],
  'headline-lg': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '600' }],
  'headline-sm': ['18px', { lineHeight: '26px', letterSpacing: '-0.01em', fontWeight: '500' }]
};

let css = '\n/* Stitch Typography Classes */\n';
for (const [key, value] of Object.entries(fontConfig)) {
  css += `.text-${key} {\n\tfont-size: ${value[0]};\n\tline-height: ${value[1].lineHeight};\n\tletter-spacing: ${value[1].letterSpacing};\n\tfont-weight: ${value[1].fontWeight};\n}\n`;
}

fs.appendFileSync('y:/risklens/app/globals.css', css);
console.log('done');
