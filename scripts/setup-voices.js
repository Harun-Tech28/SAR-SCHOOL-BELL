#!/usr/bin/env node

/**
 * Voice Engine Setup Script
 * 
 * This script helps download and configure offline voice engines
 * for the Electron application.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const VOICES_DIR = path.join(__dirname, '..', 'electron', 'voices');

console.log('🎤 Voice Engine Setup\n');
console.log('This script will help you set up offline voice engines.\n');

// Ensure voices directory exists
if (!fs.existsSync(VOICES_DIR)) {
  fs.mkdirSync(VOICES_DIR, { recursive: true });
}

console.log('📋 Voice Engine Options:\n');
console.log('1. Web Speech API (Recommended - No setup needed)');
console.log('   - Uses system voices');
console.log('   - Size: 0 MB');
console.log('   - Quality: Good to Excellent\n');

console.log('2. Piper TTS (Optional - High quality)');
console.log('   - Neural voices');
console.log('   - Size: ~150 MB');
console.log('   - Quality: Excellent\n');

console.log('3. eSpeak-NG (Optional - Lightweight)');
console.log('   - Fast synthesis');
console.log('   - Size: ~10 MB');
console.log('   - Quality: Good\n');

console.log('📝 Setup Instructions:\n');
console.log('For MINIMAL setup (recommended):');
console.log('  → No action needed! Web Speech API works out of the box.\n');

console.log('For FULL setup (maximum quality):');
console.log('  1. Download Piper TTS:');
console.log('     https://github.com/rhasspy/piper/releases');
console.log('     Extract to: electron/voices/piper/\n');

console.log('  2. Download Piper voice models:');
console.log('     https://github.com/rhasspy/piper/releases/tag/v0.0.2');
console.log('     Place in: electron/voices/piper/models/\n');

console.log('  3. Download eSpeak-NG (optional):');
console.log('     https://github.com/espeak-ng/espeak-ng/releases');
console.log('     Extract to: electron/voices/espeak-ng/\n');

console.log('✅ Current Status:\n');

// Check what's installed
const piperDir = path.join(VOICES_DIR, 'piper');
const espeakDir = path.join(VOICES_DIR, 'espeak-ng');

console.log('  Web Speech API: ✓ Available (built-in)');
console.log(`  Piper TTS: ${fs.existsSync(piperDir) ? '✓ Installed' : '✗ Not installed'}`);
console.log(`  eSpeak-NG: ${fs.existsSync(espeakDir) ? '✓ Installed' : '✗ Not installed'}`);

console.log('\n📦 Package Size Impact:\n');
const totalSize = calculateSize(VOICES_DIR);
console.log(`  Current voice engines: ${formatBytes(totalSize)}`);
console.log(`  Estimated app size: ${formatBytes(200 * 1024 * 1024 + totalSize)}`);

console.log('\n💡 Recommendation:');
console.log('  For most users, Web Speech API alone is sufficient.');
console.log('  Add Piper TTS only if you need the highest quality voices.\n');

function calculateSize(dir) {
  if (!fs.existsSync(dir)) return 0;
  
  let size = 0;
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      size += calculateSize(filePath);
    } else {
      size += stats.size;
    }
  }
  
  return size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
