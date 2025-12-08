const fs = require('fs');
const path = require('path');

// Create a simple 256x256 PNG icon using Canvas API (if available) or just copy a placeholder
// For now, let's create a simple colored square as a placeholder

const size = 256;
const canvas = Buffer.alloc(size * size * 4);

// Fill with a blue color (RGBA)
for (let i = 0; i < canvas.length; i += 4) {
  canvas[i] = 41;     // R
  canvas[i + 1] = 128; // G
  canvas[i + 2] = 185; // B
  canvas[i + 3] = 255; // A
}

// Create PNG header and data
const createPNG = (width, height, data) => {
  const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  const createChunk = (type, data) => {
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length);
    const crc = require('zlib').crc32(Buffer.concat([Buffer.from(type), data]));
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc);
    return Buffer.concat([length, Buffer.from(type), data, crcBuf]);
  };
  
  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8);  // bit depth
  ihdr.writeUInt8(6, 9);  // color type (RGBA)
  ihdr.writeUInt8(0, 10); // compression
  ihdr.writeUInt8(0, 11); // filter
  ihdr.writeUInt8(0, 12); // interlace
  
  // Prepare IDAT data
  const rows = [];
  for (let y = 0; y < height; y++) {
    const row = Buffer.alloc(1 + width * 4);
    row[0] = 0; // filter type
    data.copy(row, 1, y * width * 4, (y + 1) * width * 4);
    rows.push(row);
  }
  const idatData = require('zlib').deflateSync(Buffer.concat(rows));
  
  // IEND chunk
  const iend = Buffer.alloc(0);
  
  return Buffer.concat([
    PNG_SIGNATURE,
    createChunk('IHDR', ihdr),
    createChunk('IDAT', idatData),
    createChunk('IEND', iend)
  ]);
};

const png = createPNG(size, size, canvas);
fs.writeFileSync(path.join(__dirname, '..', 'build', 'icon.png'), png);
console.log('Created 256x256 icon.png');
