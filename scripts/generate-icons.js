// Script to generate PWA icons
// This creates placeholder SVG icons that can be converted to PNG
// For production, replace with actual school logo

const fs = require('fs');
const path = require('path');

// SAR Educational Complex colors
const SAR_RED = '#DC2626';
const SAR_GOLD = '#FCD34D';

// Generate SVG icon with SAR branding
function generateIcon(size, maskable = false) {
  const padding = maskable ? size * 0.1 : 0; // 10% padding for maskable icons
  const iconSize = size - (padding * 2);
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = iconSize / 2;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="${size}" height="${size}" fill="${SAR_RED}"/>
  
  <!-- Bell icon -->
  <g transform="translate(${centerX}, ${centerY})">
    <!-- Bell body -->
    <path d="M -${radius * 0.4} -${radius * 0.2} 
             Q -${radius * 0.4} -${radius * 0.5} 0 -${radius * 0.6}
             Q ${radius * 0.4} -${radius * 0.5} ${radius * 0.4} -${radius * 0.2}
             L ${radius * 0.5} ${radius * 0.3}
             Q ${radius * 0.5} ${radius * 0.4} ${radius * 0.4} ${radius * 0.45}
             L -${radius * 0.4} ${radius * 0.45}
             Q -${radius * 0.5} ${radius * 0.4} -${radius * 0.5} ${radius * 0.3}
             Z" 
          fill="${SAR_GOLD}" 
          stroke="white" 
          stroke-width="${size * 0.01}"/>
    
    <!-- Bell clapper -->
    <circle cx="0" cy="${radius * 0.5}" r="${radius * 0.08}" fill="white"/>
    
    <!-- Bell top -->
    <rect x="-${radius * 0.08}" y="-${radius * 0.65}" 
          width="${radius * 0.16}" height="${radius * 0.1}" 
          fill="white" rx="${radius * 0.02}"/>
  </g>
  
  <!-- Text for larger icons -->
  ${size >= 512 ? `
  <text x="${centerX}" y="${size * 0.85}" 
        font-family="Arial, sans-serif" 
        font-size="${size * 0.08}" 
        font-weight="bold"
        fill="white" 
        text-anchor="middle">SAR</text>
  ` : ''}
</svg>`;
}

// Create icons directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate icons
const icons = [
  { name: 'icon-192x192.png', size: 192, maskable: false },
  { name: 'icon-512x512.png', size: 512, maskable: false },
  { name: 'icon-maskable-192x192.png', size: 192, maskable: true },
  { name: 'icon-maskable-512x512.png', size: 512, maskable: true },
];

console.log('Generating PWA icons...\n');

icons.forEach(({ name, size, maskable }) => {
  const svgContent = generateIcon(size, maskable);
  const svgPath = path.join(publicDir, name.replace('.png', '.svg'));
  
  fs.writeFileSync(svgPath, svgContent);
  console.log(`✓ Generated ${name.replace('.png', '.svg')} (${size}x${size}${maskable ? ' maskable' : ''})`);
});

console.log('\n✅ Icon generation complete!');
console.log('\n📝 Note: SVG files created. For production:');
console.log('   1. Convert SVG to PNG using an image editor or online tool');
console.log('   2. Or replace with actual school logo in PNG format');
console.log('   3. Ensure icons are optimized for web use\n');
