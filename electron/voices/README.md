# Offline Voice Engines

This directory contains bundled offline text-to-speech engines for the Electron application.

## Voice Engine Strategy

The application uses a three-tier fallback system for offline voice synthesis:

1. **Web Speech API** (Primary) - Uses system-installed voices
2. **Piper TTS** (Secondary) - High-quality neural voices (bundled)
3. **eSpeak-NG** (Tertiary) - Lightweight, fast synthesis (bundled)

## Web Speech API

The Web Speech API is built into Chromium (which Electron uses) and provides access to system-installed voices:

- **Windows**: SAPI5 voices (Microsoft voices included with Windows)
- **macOS**: AVSpeech voices (Apple voices included with macOS)
- **Linux**: eSpeak or Festival (if installed on the system)

**Advantages:**
- No additional files needed
- Good quality on Windows and macOS
- Fast synthesis
- Multiple languages supported

**No setup required** - This is our primary engine.

## Piper TTS (Optional - High Quality)

Piper is a fast, local neural text-to-speech system with high-quality voices.

### Download Piper

1. Visit: https://github.com/rhasspy/piper/releases
2. Download the appropriate binary for your platform:
   - Windows: `piper_windows_amd64.zip`
   - macOS: `piper_macos_x64.tar.gz`
   - Linux: `piper_linux_x86_64.tar.gz`

3. Extract to this directory:
   ```
   electron/voices/piper/
   ├── piper.exe (Windows) or piper (Unix)
   └── ... (other files)
   ```

### Download Voice Models

Download voice models from: https://github.com/rhasspy/piper/releases/tag/v0.0.2

Recommended voices for Ghana School Bell System:
- **English (US)**: `en_US-lessac-medium.onnx` (~63 MB)
- **English (GB)**: `en_GB-alan-medium.onnx` (~63 MB)

Place voice models in:
```
electron/voices/piper/models/
├── en_US-lessac-medium.onnx
├── en_US-lessac-medium.onnx.json
├── en_GB-alan-medium.onnx
└── en_GB-alan-medium.onnx.json
```

**Total size**: ~150 MB for Piper + 2 voices

## eSpeak-NG (Optional - Lightweight)

eSpeak-NG is a compact, fast speech synthesizer.

### Download eSpeak-NG

1. Visit: https://github.com/espeak-ng/espeak-ng/releases
2. Download the appropriate binary:
   - Windows: `espeak-ng-X64.msi` (install, then copy files)
   - macOS: Install via Homebrew: `brew install espeak-ng`
   - Linux: Install via package manager: `apt-get install espeak-ng`

3. Copy the necessary files to:
   ```
   electron/voices/espeak-ng/
   ├── espeak-ng.exe (Windows) or espeak-ng (Unix)
   └── espeak-ng-data/ (voice data directory)
   ```

**Total size**: ~10 MB

## Minimal Setup (Recommended for MVP)

For the fastest setup and smallest package size, **use only Web Speech API**:

1. No additional downloads needed
2. Works immediately on all platforms
3. Good quality voices on Windows and macOS
4. Package size: 0 MB additional

The application will automatically use system voices and work offline.

## Full Setup (Maximum Quality)

For the best voice quality and most options:

1. Web Speech API (included)
2. Piper TTS with 2-3 voice models (~150 MB)
3. eSpeak-NG (~10 MB)

**Total additional size**: ~160 MB

## Configuration

The voice engines are configured in `lib/offline-voice-service.ts` with automatic detection and fallback.

## Testing Voices

After bundling voices, test them with:

```bash
npm run electron:dev
```

Then in the application:
1. Go to Settings → Voice
2. Select "Test Voice" for each available voice
3. Verify offline operation by disconnecting from internet

## Platform-Specific Notes

### Windows
- Includes Microsoft David, Zira, Mark voices by default
- High quality, natural sounding
- No additional setup needed for basic functionality

### macOS
- Includes Apple voices (Samantha, Alex, etc.)
- Excellent quality
- No additional setup needed for basic functionality

### Linux
- May require installing espeak or festival
- Piper TTS recommended for better quality
- eSpeak-NG provides good fallback

## Updating electron-builder Configuration

The `package.json` is already configured to bundle the `electron/voices` directory:

```json
"extraResources": [
  {
    "from": "electron/voices",
    "to": "voices",
    "filter": ["**/*"]
  }
]
```

Any files placed in `electron/voices/` will be included in the built application.

## License Considerations

- **Web Speech API**: Part of Chromium, no additional license needed
- **Piper TTS**: MIT License
- **eSpeak-NG**: GPL v3 License (note: may require source code distribution)

For commercial distribution, Web Speech API + Piper TTS is recommended to avoid GPL complications.
