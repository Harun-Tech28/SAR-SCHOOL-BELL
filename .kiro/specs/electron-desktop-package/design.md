# Design Document

## Overview

This design document outlines the architecture for converting the Ghana School Bell System from a web-based Progressive Web App (PWA) into a fully offline Electron desktop application. The application will bundle all voice synthesis capabilities locally, eliminating the need for internet connectivity or cloud-based AI voice services.

The key challenge is replacing cloud-based AI voice services (OpenAI, ElevenLabs, Azure) with offline text-to-speech engines while maintaining voice quality and functionality. The solution leverages the Web Speech API's built-in voices, enhanced with platform-specific offline TTS engines bundled with the Electron application.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  Electron Main Process                   │
│  ┌────────────────────────────────────────────────────┐ │
│  │  - Window Management                                │ │
│  │  - System Tray Integration                          │ │
│  │  - Auto-start Configuration                         │ │
│  │  - File System Storage                              │ │
│  │  - Native Notifications                             │ │
│  │  - Audio Scheduling & Playback                      │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ↕ IPC
┌─────────────────────────────────────────────────────────┐
│                 Electron Renderer Process                │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Next.js Application (Static Export)               │ │
│  │  ┌──────────────────────────────────────────────┐  │ │
│  │  │  React Components                             │  │ │
│  │  │  - Dashboard, Timetable, Settings, etc.      │  │ │
│  │  └──────────────────────────────────────────────┘  │ │
│  │  ┌──────────────────────────────────────────────┐  │ │
│  │  │  Offline Voice System                         │  │ │
│  │  │  - Web Speech API (Browser TTS)              │  │ │
│  │  │  - Offline TTS Engine Integration            │  │ │
│  │  │  - Voice Fallback Chain                      │  │ │
│  │  └──────────────────────────────────────────────┘  │ │
│  │  ┌──────────────────────────────────────────────┐  │ │
│  │  │  Local Storage Layer                          │  │ │
│  │  │  - IndexedDB for structured data             │  │ │
│  │  │  - File system via IPC for audio cache       │  │ │
│  │  └──────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────┐
│              Bundled Offline TTS Engines                 │
│  - eSpeak-NG (cross-platform, lightweight)              │
│  - Piper TTS (neural voices, high quality)              │
│  - Platform-specific engines (SAPI5, AVSpeech, etc.)    │
└─────────────────────────────────────────────────────────┘
```

### Technology Stack

**Desktop Framework:**
- Electron 28+ (latest stable)
- electron-builder for packaging
- electron-updater for auto-updates

**Frontend:**
- Next.js 16 (static export mode)
- React 19
- TypeScript 5
- Existing UI components (Radix UI, Tailwind CSS)

**Offline Voice Synthesis:**
- Web Speech API (primary, uses system voices)
- eSpeak-NG (fallback, bundled)
- Piper TTS (high-quality neural voices, bundled)
- say.js (Node.js wrapper for platform TTS)

**Storage:**
- IndexedDB (structured data, settings, schedules)
- File system (audio cache, user uploads)
- electron-store (app configuration)

**Build & Distribution:**
- electron-builder (Windows NSIS, macOS DMG, Linux AppImage/deb)
- Code signing (optional, for trusted distribution)

## Components and Interfaces

### 1. Main Process Components

#### Window Manager
```typescript
interface WindowManager {
  createMainWindow(): BrowserWindow
  restoreWindow(): void
  minimizeToTray(): void
  handleDeepLinks(url: string): void
}
```

#### System Tray Manager
```typescript
interface SystemTrayManager {
  createTray(): Tray
  updateTrayMenu(status: BellSystemStatus): void
  showNotification(title: string, body: string): void
}
```

#### Storage Manager
```typescript
interface StorageManager {
  getDataPath(): string
  saveSettings(settings: SystemSettings): Promise<void>
  loadSettings(): Promise<SystemSettings>
  saveTimetable(timetable: Timetable): Promise<void>
  loadTimetable(): Promise<Timetable>
  exportData(): Promise<Blob>
  importData(data: Blob): Promise<void>
}
```

#### Audio Scheduler
```typescript
interface AudioScheduler {
  scheduleAudio(time: Date, audioConfig: AudioConfig): string
  cancelScheduledAudio(id: string): void
  getUpcomingSchedules(): ScheduledAudio[]
  playAudioNow(audioConfig: AudioConfig): Promise<void>
}
```

### 2. Renderer Process Components

#### Offline Voice Service
```typescript
interface OfflineVoiceService {
  // Initialize offline TTS engines
  initialize(): Promise<void>
  
  // Get available offline voices
  getAvailableVoices(): Promise<OfflineVoice[]>
  
  // Generate speech using offline engines
  generateSpeech(
    text: string,
    voice: string,
    options?: VoiceOptions
  ): Promise<AudioBuffer>
  
  // Test voice availability
  testVoice(voiceId: string): Promise<boolean>
  
  // Get voice engine status
  getEngineStatus(): OfflineEngineStatus
}

interface OfflineVoice {
  id: string
  name: string
  language: string
  gender: 'male' | 'female' | 'neutral'
  engine: 'webspeech' | 'espeak' | 'piper' | 'system'
  quality: 'low' | 'medium' | 'high'
  local: true
}

interface OfflineEngineStatus {
  webSpeech: { available: boolean; voiceCount: number }
  espeak: { available: boolean; voiceCount: number }
  piper: { available: boolean; voiceCount: number }
  system: { available: boolean; voiceCount: number }
}
```

#### Voice Fallback Chain
```typescript
interface VoiceFallbackChain {
  // Try voices in order until one succeeds
  generateWithFallback(
    text: string,
    preferredVoice: string,
    fallbackVoices: string[]
  ): Promise<AudioBuffer>
  
  // Get recommended fallback chain for a language
  getRecommendedChain(language: string): string[]
}
```

### 3. IPC Communication

#### IPC Channels
```typescript
// Main → Renderer
interface MainToRendererChannels {
  'system-tray-click': () => void
  'scheduled-audio-trigger': (audioConfig: AudioConfig) => void
  'app-update-available': (version: string) => void
  'storage-changed': (key: string, value: any) => void
}

// Renderer → Main
interface RendererToMainChannels {
  'save-settings': (settings: SystemSettings) => Promise<void>
  'load-settings': () => Promise<SystemSettings>
  'schedule-audio': (time: Date, config: AudioConfig) => Promise<string>
  'cancel-audio': (id: string) => Promise<void>
  'minimize-to-tray': () => void
  'show-notification': (title: string, body: string) => void
  'get-data-path': () => Promise<string>
  'export-data': () => Promise<string>
  'import-data': (filePath: string) => Promise<void>
}
```

## Data Models

### System Settings (Local Storage)
```typescript
interface SystemSettings {
  // School information
  schoolName: string
  schoolLogo?: string
  
  // Voice settings
  voice: {
    engine: 'webspeech' | 'espeak' | 'piper' | 'system'
    voiceId: string
    language: string
    speed: number
    pitch: number
    volume: number
  }
  
  // Bell settings
  bellSound: string
  bellVolume: number
  bellDuration: number
  
  // System settings
  autoStart: boolean
  minimizeToTray: boolean
  showNotifications: boolean
  theme: 'light' | 'dark' | 'system'
  
  // Audio settings
  audioOutputDevice?: string
  enableAudioCache: boolean
  cacheSize: number
}
```

### Timetable (Local Storage)
```typescript
interface Timetable {
  id: string
  name: string
  active: boolean
  schedule: ScheduleEntry[]
  validFrom: Date
  validTo: Date
}

interface ScheduleEntry {
  id: string
  time: string // HH:mm format
  days: number[] // 0-6 (Sunday-Saturday)
  type: 'class' | 'break' | 'lunch' | 'assembly' | 'dismissal' | 'prayer' | 'custom'
  announcement?: string
  bellSound?: string
  repeat?: number
  enabled: boolean
}
```

### Audio Cache (File System)
```typescript
interface AudioCacheEntry {
  id: string
  text: string
  voice: string
  language: string
  filePath: string
  size: number
  createdAt: Date
  lastUsed: Date
  useCount: number
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

After reviewing all testable criteria, several properties can be consolidated:

- Properties 3.1, 3.3, and 3.4 (settings, timetables, student data persistence) can be combined into a single "data persistence" property
- Properties 2.1 and 2.3 (offline voice synthesis) are essentially the same and can be combined
- Properties 8.2 and 8.3 (no network transmission, local processing) can be combined into a single "offline operation" property

### Core Properties

**Property 1: Offline Launch**
*For any* application launch attempt with network disabled, the application should start successfully and display the full interface
**Validates: Requirements 1.2**

**Property 2: Offline Voice Synthesis**
*For any* text input and available bundled voice, the application should synthesize speech without making network requests
**Validates: Requirements 2.1, 2.3**

**Property 3: Voice Availability**
*For any* voice in the bundled voice set, the application should provide access to it without requiring downloads
**Validates: Requirements 2.4**

**Property 4: Voice Error Messages**
*For any* voice synthesis failure, the error message should not reference network connectivity issues
**Validates: Requirements 2.5**

**Property 5: Data Persistence**
*For any* data modification (settings, timetables, student data), the changes should be immediately written to the local file system
**Validates: Requirements 3.1, 3.3, 3.4**

**Property 6: Settings Round-Trip**
*For any* settings configuration, saving and restarting the application should restore identical settings
**Validates: Requirements 3.2**

**Property 7: Graceful Shutdown**
*For any* pending data writes, closing the application should complete all writes before exiting
**Validates: Requirements 3.5**

**Property 8: Scheduled Notifications**
*For any* scheduled bell event, the application should display a system notification when the time is reached
**Validates: Requirements 4.2**

**Property 9: Audio Timing Accuracy**
*For any* scheduled audio time, the audio should begin playback within 1 second of the scheduled time
**Validates: Requirements 6.1**

**Property 10: Audio Queue Ordering**
*For any* sequence of audio playback requests, they should play in the order they were queued
**Validates: Requirements 6.2**

**Property 11: Default Audio Device**
*For any* audio playback, the application should use the system's default audio output device
**Validates: Requirements 6.4**

**Property 12: Audio Error Handling**
*For any* audio playback failure, the application should create a log entry and display a user notification
**Validates: Requirements 6.5**

**Property 13: Update Data Preservation**
*For any* user data and settings before an update, the same data should exist after the update completes
**Validates: Requirements 7.3**

**Property 14: Secure File Permissions**
*For any* file created by the application, it should have restrictive permissions (user-only read/write)
**Validates: Requirements 8.1**

**Property 15: Network Isolation**
*For any* application operation during normal use, there should be zero network requests (excluding update checks)
**Validates: Requirements 8.2, 8.3**

## Error Handling

### Voice Synthesis Errors

**Fallback Chain Strategy:**
1. Primary: Web Speech API (system voices)
2. Secondary: Piper TTS (bundled neural voices)
3. Tertiary: eSpeak-NG (bundled lightweight voices)
4. Final: Silent failure with user notification

**Error Types:**
- `VoiceEngineNotAvailable`: Voice engine failed to initialize
- `VoiceNotFound`: Requested voice doesn't exist in bundled set
- `SynthesisFailed`: Voice engine encountered an error during synthesis
- `AudioPlaybackFailed`: Generated audio couldn't be played

### Storage Errors

**Error Types:**
- `StorageQuotaExceeded`: Disk space insufficient for operation
- `FilePermissionDenied`: Cannot write to data directory
- `DataCorrupted`: Stored data failed integrity check
- `MigrationFailed`: Data migration from old version failed

**Recovery Strategies:**
- Automatic retry with exponential backoff
- Fallback to in-memory storage (with warning)
- Data export option before critical operations
- Automatic backup before migrations

### Audio Scheduling Errors

**Error Types:**
- `ScheduleConflict`: Multiple audio events at same time
- `InvalidScheduleTime`: Time is in the past or invalid format
- `AudioFileNotFound`: Referenced audio file doesn't exist
- `SystemClockChanged`: System time jumped significantly

**Recovery Strategies:**
- Queue conflicting audio sequentially
- Reject invalid schedules with clear error messages
- Fallback to default bell sound if custom audio missing
- Re-sync schedules when clock changes detected

## Testing Strategy

### Unit Testing

**Framework:** Vitest (already in use for Next.js project)

**Unit Test Coverage:**
- Voice engine initialization and fallback logic
- IPC message handlers (main ↔ renderer)
- Storage manager CRUD operations
- Audio scheduler queue management
- Settings validation and migration
- Timetable parsing and validation
- System tray menu generation
- Notification formatting

**Example Unit Tests:**
- Test that invalid settings are rejected
- Test that timetable entries are correctly parsed
- Test that IPC handlers return expected responses
- Test that audio queue maintains order
- Test that storage paths are correctly resolved

### Property-Based Testing

**Framework:** fast-check (JavaScript/TypeScript property testing library)

**Configuration:**
- Minimum 100 iterations per property test
- Each property test must reference its design document property using the format: `**Feature: electron-desktop-package, Property {number}: {property_text}**`

**Property Test Coverage:**
- Property 1: Offline Launch - Generate random network states, verify app starts
- Property 2: Offline Voice Synthesis - Generate random text, verify synthesis without network
- Property 3: Voice Availability - Generate random voice selections from bundled set
- Property 4: Voice Error Messages - Trigger failures, verify error messages
- Property 5: Data Persistence - Generate random data changes, verify file writes
- Property 6: Settings Round-Trip - Generate random settings, verify save/load cycle
- Property 7: Graceful Shutdown - Generate random pending writes, verify completion
- Property 8: Scheduled Notifications - Generate random schedule times, verify notifications
- Property 9: Audio Timing Accuracy - Generate random schedule times, measure playback timing
- Property 10: Audio Queue Ordering - Generate random audio sequences, verify order
- Property 11: Default Audio Device - Generate random audio requests, verify device
- Property 12: Audio Error Handling - Generate random audio failures, verify logging
- Property 13: Update Data Preservation - Generate random data, verify post-update
- Property 14: Secure File Permissions - Generate random files, verify permissions
- Property 15: Network Isolation - Generate random operations, monitor network activity

### Integration Testing

**Framework:** Playwright (for Electron testing)

**Integration Test Scenarios:**
- Complete application lifecycle (install → launch → use → close → uninstall)
- End-to-end timetable creation and bell scheduling
- Voice synthesis through all fallback engines
- System tray interaction and window restoration
- Settings persistence across restarts
- Update installation and rollback
- Audio playback at scheduled times
- Multi-platform installer generation

### Manual Testing Checklist

**Installation:**
- [ ] Windows installer runs without admin rights
- [ ] macOS DMG mounts and installs correctly
- [ ] Linux AppImage is executable without installation
- [ ] All voice engines are present after installation

**Offline Operation:**
- [ ] Application launches with network disabled
- [ ] Voice synthesis works without internet
- [ ] All features accessible offline
- [ ] No network error messages appear

**System Integration:**
- [ ] System tray icon appears and functions
- [ ] Notifications display correctly
- [ ] Auto-start works on OS boot
- [ ] Menu bar has all expected options

**Audio Playback:**
- [ ] Scheduled bells ring at correct times
- [ ] Audio plays through default device
- [ ] Multiple audio files queue correctly
- [ ] Volume controls work as expected

## Implementation Phases

### Phase 1: Electron Setup & Offline Voice Integration
- Configure Electron with Next.js static export
- Bundle offline TTS engines (eSpeak-NG, Piper)
- Implement offline voice service with fallback chain
- Replace AI voice service with offline voice service
- Test voice synthesis without network

### Phase 2: Local Storage & Data Persistence
- Implement file system storage manager
- Migrate from IndexedDB to file-based storage
- Add IPC channels for storage operations
- Implement data export/import functionality
- Test data persistence across restarts

### Phase 3: System Integration
- Implement system tray with menu
- Add native notifications
- Configure auto-start functionality
- Implement window state management
- Test OS-specific features on each platform

### Phase 4: Audio Scheduling & Playback
- Implement audio scheduler in main process
- Add IPC channels for scheduling operations
- Implement audio playback with queue management
- Add system wake/sleep handling
- Test scheduled audio accuracy

### Phase 5: Packaging & Distribution
- Configure electron-builder for all platforms
- Bundle all voice engines and dependencies
- Set up code signing (optional)
- Create installers for Windows, macOS, Linux
- Test installation on clean systems

### Phase 6: Updates & Maintenance
- Implement electron-updater integration
- Add update notification UI
- Implement automatic update installation
- Add rollback functionality
- Test update process end-to-end

## Security Considerations

### Data Protection
- All user data stored locally with restrictive file permissions (0600)
- No data transmitted over network during normal operation
- Optional data encryption at rest using OS keychain
- Secure deletion option during uninstall

### Code Integrity
- Code signing for installers (prevents tampering)
- Integrity checks for bundled voice engines
- Sandboxed renderer process (contextIsolation: true)
- No nodeIntegration in renderer (security best practice)

### Update Security
- Updates signed and verified before installation
- HTTPS-only for update checks
- Rollback capability if update fails verification
- User approval required for updates

### Permission Minimization
- Request only necessary OS permissions
- No camera/microphone access
- No location access
- File system access limited to app data directory

## Performance Considerations

### Application Size
- Base application: ~150-200 MB
- eSpeak-NG voices: ~10 MB
- Piper TTS voices: ~50-100 MB per voice (include 2-3 high-quality voices)
- Total package size: ~250-400 MB

### Memory Usage
- Electron base: ~100-150 MB
- Renderer process: ~50-100 MB
- Voice engines: ~50-100 MB
- Audio cache: ~50-200 MB (configurable)
- Total: ~250-550 MB

### Startup Time
- Cold start: 2-4 seconds
- Warm start: 1-2 seconds
- Voice engine initialization: 500ms-1s

### Voice Synthesis Performance
- Web Speech API: 100-500ms (system dependent)
- Piper TTS: 500ms-2s (CPU dependent)
- eSpeak-NG: 50-200ms (very fast)

## Platform-Specific Considerations

### Windows
- NSIS installer with per-user installation option
- System tray integration using native Windows API
- Auto-start via registry entry
- SAPI5 voices available via Web Speech API
- Code signing with Authenticode (optional)

### macOS
- DMG installer with drag-to-Applications
- Menu bar integration (native macOS style)
- Auto-start via Login Items
- AVSpeech voices available via Web Speech API
- Code signing with Apple Developer certificate (required for distribution)
- Notarization for Gatekeeper (required for macOS 10.15+)

### Linux
- AppImage (universal, no installation required)
- .deb package for Debian/Ubuntu
- .rpm package for Fedora/RHEL (optional)
- System tray using libappindicator
- Auto-start via .desktop file in autostart directory
- eSpeak-NG and Piper as primary voice engines

## Migration from Web Version

### Data Migration
- Detect existing PWA data in IndexedDB
- Offer to import settings and timetables on first launch
- Convert browser storage format to file system format
- Preserve all user configurations and schedules

### User Communication
- Clear messaging about offline capabilities
- Guide users through installation process
- Explain differences from web version
- Provide troubleshooting documentation

### Backward Compatibility
- Web version continues to work independently
- No breaking changes to data formats
- Users can run both versions simultaneously
- Export/import between versions supported

## Deployment Strategy

### Distribution Channels
- Direct download from project website/GitHub releases
- No app store distribution (avoids review delays and fees)
- Auto-update mechanism for seamless updates
- Portable versions available (no installation required)

### Version Management
- Semantic versioning (MAJOR.MINOR.PATCH)
- Release notes for each version
- Beta channel for testing new features
- Stable channel for production use

### Support & Documentation
- Installation guide for each platform
- Troubleshooting guide for common issues
- FAQ for offline voice synthesis
- Video tutorials for setup and usage

## Future Enhancements

### Potential Features
- Multiple language voice packs (downloadable)
- Custom voice recording and playback
- Network sync option (optional, for multi-device setups)
- Advanced scheduling with calendar integration
- Voice customization (speed, pitch, effects)
- Audio waveform visualization
- Backup and restore functionality
- Multi-school support (profiles)

### Technical Improvements
- Reduce application size with lazy-loading
- Improve voice quality with better TTS engines
- Add GPU acceleration for faster synthesis
- Implement differential updates (smaller downloads)
- Add telemetry (opt-in) for crash reporting
