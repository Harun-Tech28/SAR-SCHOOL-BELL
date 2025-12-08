# Implementation Plan

- [x] 1. Set up Electron infrastructure and dependencies



  - Install Electron, electron-builder, and electron-updater packages
  - Configure electron-builder for Windows, macOS, and Linux builds
  - Update package.json scripts for Electron development and building
  - Create preload.js script for secure IPC communication
  - Update main.js with proper window management and IPC handlers
  - _Requirements: 1.1, 1.5, 5.1_

- [x] 2. Bundle offline TTS engines and configure voice system



  - Download and bundle eSpeak-NG binaries for all platforms
  - Download and bundle Piper TTS with 2-3 high-quality voice models
  - Configure electron-builder to include voice engine files in package
  - _Requirements: 1.3, 2.1, 2.2_

- [x] 3. Implement offline voice service



- [x] 3.1 Create offline voice service module


  - Write OfflineVoiceService class with voice engine initialization
  - Implement voice discovery for Web Speech API, eSpeak, and Piper
  - Create voice metadata structure with engine, quality, and language info
  - _Requirements: 2.1, 2.3, 2.4_

- [ ]* 3.2 Write property test for offline voice synthesis
  - **Property 2: Offline Voice Synthesis**
  - **Validates: Requirements 2.1, 2.3**

- [x] 3.3 Implement voice fallback chain


  - Create VoiceFallbackChain class with ordered engine attempts
  - Implement fallback logic: Web Speech → Piper → eSpeak
  - Add error handling with non-network error messages
  - _Requirements: 2.5_

- [ ]* 3.4 Write property test for voice availability
  - **Property 3: Voice Availability**
  - **Validates: Requirements 2.4**

- [ ]* 3.5 Write property test for voice error messages
  - **Property 4: Voice Error Messages**
  - **Validates: Requirements 2.5**

- [x] 4. Replace AI voice service with offline voice service



- [x] 4.1 Update voice-utils.ts to use offline voice service


  - Modify playTextToSpeech to call offline voice service
  - Update playAnnouncement to use offline synthesis
  - Remove dependencies on AI voice providers (OpenAI, ElevenLabs, Azure)
  - _Requirements: 2.1, 2.3_

- [x] 4.2 Update voice initialization to detect offline engines


  - Modify initializeVoiceSystem to initialize offline engines
  - Update getAvailableVoices to return offline voices
  - Remove AI voice configuration UI elements
  - _Requirements: 2.2, 2.4_

- [ ]* 4.3 Write property test for offline launch
  - **Property 1: Offline Launch**
  - **Validates: Requirements 1.2**

- [x] 5. Implement file system storage manager


- [x] 5.1 Create storage manager for main process


  - Write StorageManager class with file system operations
  - Implement saveSettings, loadSettings, saveTimetable, loadTimetable methods
  - Add data export and import functionality
  - Set secure file permissions (0600) for all data files
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 8.1_

- [ ]* 5.2 Write property test for data persistence
  - **Property 5: Data Persistence**
  - **Validates: Requirements 3.1, 3.3, 3.4**

- [ ]* 5.3 Write property test for settings round-trip
  - **Property 6: Settings Round-Trip**
  - **Validates: Requirements 3.2**

- [ ]* 5.4 Write property test for secure file permissions
  - **Property 14: Secure File Permissions**
  - **Validates: Requirements 8.1**

- [x] 5.5 Add IPC channels for storage operations

  - Create IPC handlers in main.js for save-settings, load-settings, etc.
  - Implement secure IPC communication with validation
  - Add error handling for storage failures
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 6. Migrate Zustand store to use file system storage



- [x] 6.1 Update store.ts to use IPC for persistence


  - Replace IndexedDB storage adapter with IPC-based adapter
  - Implement file system storage adapter that calls IPC methods
  - Update store initialization to load from file system
  - _Requirements: 3.2_

- [x] 6.2 Implement graceful shutdown with data persistence


  - Add app 'before-quit' handler to flush pending writes
  - Ensure all data is written before application exits
  - Add timeout protection for shutdown (max 5 seconds)
  - _Requirements: 3.5_

- [ ]* 6.3 Write property test for graceful shutdown
  - **Property 7: Graceful Shutdown**
  - **Validates: Requirements 3.5**

- [x] 7. Implement system tray integration


- [x] 7.1 Create system tray with menu

  - Create SystemTrayManager class
  - Implement tray icon with platform-specific icons
  - Add tray menu with Show/Hide, Settings, Quit options
  - Handle tray click to restore window
  - _Requirements: 4.1, 4.4, 4.5_

- [x] 7.2 Implement window state management

  - Add minimize to tray functionality
  - Implement window restoration from tray
  - Preserve window size and position across restarts
  - _Requirements: 4.1, 4.4_

- [x] 7.3 Add native notifications

  - Implement system notification display
  - Add notification for scheduled bells
  - Include notification settings in preferences
  - _Requirements: 4.2_

- [ ]* 7.4 Write property test for scheduled notifications
  - **Property 8: Scheduled Notifications**
  - **Validates: Requirements 4.2**

- [x] 8. Implement auto-start functionality



- [x] 8.1 Add auto-start configuration


  - Use electron's app.setLoginItemSettings for auto-start
  - Add auto-start toggle in settings UI
  - Implement platform-specific auto-start (registry/Login Items/autostart)
  - _Requirements: 4.3_

- [x] 9. Implement audio scheduler in main process




- [ ] 9.1 Create audio scheduler module
  - Write AudioScheduler class with schedule management
  - Implement scheduleAudio, cancelScheduledAudio, getUpcomingSchedules methods
  - Add timer-based audio triggering with 1-second accuracy
  - Implement audio queue for multiple simultaneous requests
  - _Requirements: 6.1, 6.2_

- [ ]* 9.2 Write property test for audio timing accuracy
  - **Property 9: Audio Timing Accuracy**
  - **Validates: Requirements 6.1**

- [ ]* 9.3 Write property test for audio queue ordering
  - **Property 10: Audio Queue Ordering**
  - **Validates: Requirements 6.2**


- [ ] 9.4 Add IPC channels for audio scheduling
  - Create IPC handlers for schedule-audio, cancel-audio, get-schedules
  - Implement IPC event for scheduled-audio-trigger to renderer
  - Add error handling for scheduling conflicts
  - _Requirements: 6.1, 6.2_

- [x] 10. Implement audio playback in main process





- [ ] 10.1 Create audio playback module
  - Implement audio playback using Node.js audio libraries (speaker, audio-play)
  - Add support for default audio device selection
  - Implement audio error handling with logging and notifications
  - _Requirements: 6.4, 6.5_

- [ ]* 10.2 Write property test for default audio device
  - **Property 11: Default Audio Device**
  - **Validates: Requirements 6.4**

- [ ]* 10.3 Write property test for audio error handling
  - **Property 12: Audio Error Handling**
  - **Validates: Requirements 6.5**

- [x] 11. Update UI components to work with Electron



- [x] 11.1 Update settings component for Electron features

  - Add auto-start toggle to settings
  - Add offline voice engine selection
  - Remove AI voice provider configuration
  - Add data export/import buttons
  - _Requirements: 4.3, 2.4_


- [x] 11.2 Update dashboard to show Electron status


  - Add system tray status indicator
  - Show offline voice engine status
  - Display scheduled audio queue
  - Add notification settings
  - _Requirements: 4.1, 4.2, 6.2_

- [x] 12. Configure electron-builder for packaging


- [x] 12.1 Set up Windows packaging

  - Configure NSIS installer with per-user installation
  - Include all voice engines and dependencies
  - Add uninstaller configuration
  - Set up code signing configuration (optional)
  - _Requirements: 5.1, 5.2, 5.4, 5.5_


- [x] 12.2 Set up macOS packaging

  - Configure DMG installer with drag-to-Applications
  - Include all voice engines and dependencies
  - Set up code signing and notarization (required for distribution)
  - Add uninstaller script
  - _Requirements: 5.1, 5.2, 5.5_



- [ ] 12.3 Set up Linux packaging


  - Configure AppImage for universal Linux support
  - Configure .deb package for Debian/Ubuntu
  - Include all voice engines and dependencies
  - Add uninstaller script
  - _Requirements: 5.1, 5.2, 5.5_




- [ ] 13. Implement electron-updater for auto-updates
- [ ] 13.1 Configure electron-updater
  - Add electron-updater to main process
  - Configure update server URL (GitHub releases)
  - Implement update check on application start

  - Add manual update check option

  - _Requirements: 7.1, 7.5_

- [ ] 13.2 Create update notification UI
  - Add update available notification
  - Create update dialog with release notes

  - Add update progress indicator

  - Implement update approval flow
  - _Requirements: 7.1, 7.2_

- [ ] 13.3 Implement update installation and rollback
  - Add automatic update download and installation
  - Implement data backup before update
  - Add rollback functionality for failed updates
  - Preserve user data and settings during update
  - _Requirements: 7.2, 7.3, 7.4_


- [ ]* 13.4 Write property test for update data preservation
  - **Property 13: Update Data Preservation**
  - **Validates: Requirements 7.3**

- [x] 14. Implement network isolation monitoring

- [x] 14.1 Add network monitoring for testing

  - Create network monitor module for development/testing
  - Log all network requests during application operation
  - Add network isolation verification in tests
  - _Requirements: 8.2, 8.3_


- [ ]* 14.2 Write property test for network isolation
  - **Property 15: Network Isolation**
  - **Validates: Requirements 8.2, 8.3**

- [x] 15. Create data migration from PWA

- [x] 15.1 Implement PWA data import

  - Detect existing IndexedDB data from PWA
  - Create migration utility to convert browser storage to file system
  - Offer import on first launch
  - Preserve all settings, timetables, and student data
  - _Requirements: 3.2, 3.3, 3.4_


- [ ] 16. Build and test installers
- [x] 16.1 Build installers for all platforms

  - Run electron-builder for Windows, macOS, and Linux
  - Verify all voice engines are included in packages
  - Test installer size is within acceptable range (250-400 MB)
  - _Requirements: 5.1, 5.2_

- [x] 16.2 Test installation on clean systems

  - Test Windows installer on clean Windows 10/11

  - Test macOS DMG on clean macOS 12+
  - Test Linux AppImage on Ubuntu 22.04+
  - Verify all features work after installation
  - _Requirements: 1.1, 1.3, 5.4_

- [x] 17. Create documentation




- [x] 17.1 Write installation guide

  - Create step-by-step installation guide for each platform
  - Document system requirements
  - Add troubleshooting section
  - Include screenshots
  - _Requirements: 1.1, 5.4_

- [x] 17.2 Write user guide

  - Document offline voice features
  - Explain system tray usage
  - Document auto-start configuration

  - Add FAQ section
  - _Requirements: 2.1, 4.1, 4.3_

- [ ] 18. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
