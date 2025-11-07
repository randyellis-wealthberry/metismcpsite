import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple Canvas polyfill for Node.js (using basic rendering)
// For production, you'd want to use 'canvas' npm package
// This creates SVG first, then you can convert to PNG

function generateOGImageSVG() {
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1e1b4b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#312e81;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="orb1" cx="200" cy="150" r="300">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.4" />
      <stop offset="100%" style="stop-color:#6366f1;stop-opacity:0" />
    </radialGradient>
    <radialGradient id="orb2" cx="1000" cy="480" r="300">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.4" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>

  <!-- Glowing orbs -->
  <rect width="1200" height="630" fill="url(#orb1)"/>
  <rect width="1200" height="630" fill="url(#orb2)"/>

  <!-- Metis logo -->
  <text x="80" y="140" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="bold" fill="#ffffff">METIS</text>

  <!-- Tagline -->
  <text x="80" y="190" font-family="system-ui, -apple-system, sans-serif" font-size="32" fill="#a5b4fc">Design Tools for Claude</text>

  <!-- Value proposition -->
  <text x="80" y="290" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="bold" fill="#ffffff">Professional Design Systems</text>
  <text x="80" y="350" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="bold" fill="#ffffff">via Model Context Protocol</text>

  <!-- Tool icons and labels -->
  <!-- Typography -->
  <g transform="translate(80, 420)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">T</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">Typography</text>
  </g>

  <!-- Color -->
  <g transform="translate(240, 420)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">C</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">Color</text>
  </g>

  <!-- Depth -->
  <g transform="translate(400, 420)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">D</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">Depth</text>
  </g>

  <!-- Layout -->
  <g transform="translate(560, 420)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">L</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">Layout</text>
  </g>

  <!-- Theme -->
  <g transform="translate(720, 420)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="18" font-weight="bold" fill="#a5b4fc" text-anchor="middle">Th</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">Theme</text>
  </g>

  <!-- A11y -->
  <g transform="translate(880, 420)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">A</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">A11y</text>
  </g>

  <!-- Free tier badge -->
  <rect x="80" y="550" width="200" height="40" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" stroke-width="2"/>
  <text x="180" y="576" font-family="system-ui" font-size="18" font-weight="bold" fill="#22c55e" text-anchor="middle">FREE TIER</text>

  <!-- Pricing info -->
  <text x="1120" y="570" font-family="system-ui" font-size="20" fill="#94a3b8" text-anchor="end">Free 50 cycles/day  •  Pro $5/mo</text>

  <!-- URL -->
  <text x="600" y="600" font-family="system-ui" font-size="18" fill="#64748b" text-anchor="middle">metis-mcp.dev</text>
</svg>`;
}

function generateTwitterImageSVG() {
  return `<svg width="1200" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1e1b4b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#312e81;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="orb1" cx="200" cy="150" r="300">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.4" />
      <stop offset="100%" style="stop-color:#6366f1;stop-opacity:0" />
    </radialGradient>
    <radialGradient id="orb2" cx="1000" cy="450" r="300">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.4" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="600" fill="url(#bgGradient)"/>

  <!-- Glowing orbs -->
  <rect width="1200" height="600" fill="url(#orb1)"/>
  <rect width="1200" height="600" fill="url(#orb2)"/>

  <!-- Metis logo -->
  <text x="80" y="140" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="bold" fill="#ffffff">METIS</text>

  <!-- Tagline -->
  <text x="80" y="190" font-family="system-ui, -apple-system, sans-serif" font-size="32" fill="#a5b4fc">Design Tools for Claude</text>

  <!-- Value proposition -->
  <text x="80" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="bold" fill="#ffffff">Professional Design Systems</text>
  <text x="80" y="335" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="bold" fill="#ffffff">via Model Context Protocol</text>

  <!-- Tool icons and labels -->
  <!-- Typography -->
  <g transform="translate(80, 400)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">T</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">Typography</text>
  </g>

  <!-- Color -->
  <g transform="translate(240, 400)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">C</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">Color</text>
  </g>

  <!-- Depth -->
  <g transform="translate(400, 400)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">D</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">Depth</text>
  </g>

  <!-- Layout -->
  <g transform="translate(560, 400)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">L</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">Layout</text>
  </g>

  <!-- Theme -->
  <g transform="translate(720, 400)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="18" font-weight="bold" fill="#a5b4fc" text-anchor="middle">Th</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">Theme</text>
  </g>

  <!-- A11y -->
  <g transform="translate(880, 400)">
    <rect width="40" height="40" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
    <text x="20" y="27" font-family="system-ui" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">A</text>
    <text x="20" y="68" font-family="system-ui" font-size="16" fill="#cbd5e1" text-anchor="middle">A11y</text>
  </g>

  <!-- Free tier badge -->
  <rect x="80" y="530" width="200" height="40" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" stroke-width="2"/>
  <text x="180" y="556" font-family="system-ui" font-size="18" font-weight="bold" fill="#22c55e" text-anchor="middle">FREE TIER</text>

  <!-- Pricing info -->
  <text x="1120" y="550" font-family="system-ui" font-size="20" fill="#94a3b8" text-anchor="end">Free 50 cycles/day  •  Pro $5/mo</text>
</svg>`;
}

function generateFaviconSVG() {
  return `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background with rounded corners -->
  <rect width="512" height="512" rx="64" fill="url(#iconGradient)"/>

  <!-- M letter -->
  <text x="256" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="320" font-weight="bold" fill="#ffffff" text-anchor="middle">M</text>

  <!-- Small design dots -->
  <circle cx="128" cy="128" r="12" fill="rgba(255, 255, 255, 0.6)"/>
  <circle cx="384" cy="128" r="12" fill="rgba(255, 255, 255, 0.6)"/>
</svg>`;
}

// Generate the SVG files
const publicDir = path.join(__dirname, '..', 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write SVG files
fs.writeFileSync(path.join(publicDir, 'og-image.svg'), generateOGImageSVG());
fs.writeFileSync(path.join(publicDir, 'twitter-image.svg'), generateTwitterImageSVG());
fs.writeFileSync(path.join(publicDir, 'icon.svg'), generateFaviconSVG());

console.log('SVG files generated successfully!');
console.log('Location:', publicDir);
console.log('\nGenerated files:');
console.log('- og-image.svg (1200x630)');
console.log('- twitter-image.svg (1200x600)');
console.log('- icon.svg (512x512)');
console.log('\nNext steps:');
console.log('1. Open the HTML file in scripts/generate-og-image.html in a browser');
console.log('2. Click the download buttons to get PNG versions');
console.log('3. Or use an SVG-to-PNG converter tool (imagemagick, inkscape, etc.)');
console.log('\nExample with ImageMagick:');
console.log('  convert public/og-image.svg public/og-image.png');
console.log('  convert public/twitter-image.svg public/twitter-image.png');
console.log('  convert public/icon.svg -resize 512x512 public/icon-512.png');
console.log('  convert public/icon.svg -resize 192x192 public/icon-192.png');
console.log('  convert public/icon.svg -resize 180x180 public/apple-touch-icon.png');
console.log('  convert public/icon.svg -resize 32x32 public/favicon-32x32.png');
console.log('  convert public/icon.svg -resize 16x16 public/favicon-16x16.png');
