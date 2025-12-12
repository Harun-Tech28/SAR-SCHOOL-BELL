# Implementation Plan

- [x] 1. Set up IndexedDB storage system



  - Create IndexedDB manager with timetable and log stores
  - Implement CRUD operations for timetables
  - Add database versioning and migration support
  - Ensure accessibility from both PWA and Service Worker contexts
  - _Requirements: 4.1, 4.3, 4.4_

- [ ]* 1.1 Write property test for IndexedDB persistence
  - **Property 1: Service Worker Persistence**



  - **Validates: Requirements 1.5, 4.5**

- [ ] 2. Enhance Service Worker with bell scheduling
  - Extend existing sw.js with bell manager module
  - Implement schedule loading from IndexedDB on Service Worker activation
  - Create timer management system with 10-second check interval
  - Add schedule calculation logic for next execution times
  - _Requirements: 1.1, 1.2, 4.2, 4.4_


- [ ]* 2.1 Write property test for schedule trigger accuracy
  - **Property 2: Schedule Trigger Accuracy**
  - **Validates: Requirements 1.2, 1.3**

- [ ] 3. Implement Service Worker notification system
  - Add notification display logic to Service Worker
  - Implement notification click handler to open PWA
  - Create notification payload with bell information
  - Add vibration pattern support
  - Handle notification permission checks



  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [ ]* 3.1 Write property test for notification display guarantee
  - **Property 3: Notification Display Guarantee**
  - **Validates: Requirements 2.2, 3.5**

- [ ] 4. Create PWA to Service Worker bridge
  - Implement PWAServiceWorkerBridge class
  - Add Service Worker registration and initialization

  - Create message passing system for timetable sync
  - Implement status query functionality
  - Add Service Worker support detection
  - _Requirements: 4.2, 5.1, 5.5_

- [ ]* 4.1 Write property test for IndexedDB sync consistency
  - **Property 4: IndexedDB Sync Consistency**
  - **Validates: Requirements 4.1, 4.2**

- [ ] 5. Implement background audio playback system
  - Create NotificationAudioHandler class

  - Implement notification sound URL generation
  - Add logic to open PWA in background for custom audio
  - Implement audio fallback chain (custom → notification → vibration)
  - Handle audio playback errors gracefully
  - _Requirements: 3.1, 3.2, 3.3, 3.5_

- [ ]* 5.1 Write property test for audio fallback chain
  - **Property 7: Audio Fallback Chain**

  - **Validates: Requirements 3.2, 3.5**

- [ ] 6. Create Android background bells UI component
  - Build AndroidBackgroundBells React component
  - Add Service Worker status display
  - Implement notification permission request UI
  - Create "Test Background Bell" button
  - Show scheduled bells count
  - Display browser compatibility warnings
  - _Requirements: 5.1, 5.2, 5.4, 9.1, 9.2_


- [ ] 7. Implement browser support detection
  - Add browser detection utility functions
  - Create compatibility check for Service Workers
  - Detect Chrome/Edge/Firefox/Samsung Internet
  - Display appropriate warnings for unsupported browsers
  - Show iOS-specific message about native app
  - _Requirements: 5.1, 5.4, 10.1, 10.2, 10.3, 10.4, 10.5_

- [ ]* 7.1 Write property test for browser support detection
  - **Property 10: Browser Support Detection**
  - **Validates: Requirements 5.1, 5.4, 10.1-10.5**


- [ ] 8. Add time zone handling
  - Implement time zone change detection
  - Add schedule recalculation on time zone change
  - Store times in local format
  - Handle daylight saving time transitions
  - Update Service Worker schedules on time changes

  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ]* 8.1 Write property test for time zone adjustment
  - **Property 8: Time Zone Adjustment**
  - **Validates: Requirements 8.1, 8.2**

- [x] 9. Implement bell execution logging

  - Add bell execution log storage to IndexedDB
  - Log each bell trigger with status and method
  - Include device info in logs
  - Create log viewing UI component
  - Implement automatic log cleanup (keep 1000 entries)
  - _Requirements: 6.3, 6.4_


- [ ] 10. Create setup wizard and onboarding
  - Build first-launch setup wizard
  - Add step-by-step permission requests with explanations
  - Create battery optimization instructions for Android
  - Add browser-specific setup guidance
  - Implement "Skip" option with warnings
  - _Requirements: 5.2, 5.3, 9.1_

- [ ] 11. Implement test bell functionality
  - Add "Test Background Bell" feature
  - Schedule test bell for 30 seconds in future

  - Provide instructions to close browser
  - Display test results on app reopen
  - Show troubleshooting tips if test fails
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 12. Add Service Worker update handling
  - Implement Service Worker version checking

  - Preserve IndexedDB data during updates
  - Re-register schedules with new Service Worker
  - Display update notification to user
  - Handle update failures gracefully
  - _Requirements: 4.5_

- [x]* 12.1 Write property test for Service Worker update preservation

  - **Property 9: Service Worker Update Preservation**
  - **Validates: Requirements 4.5**

- [ ] 13. Create dashboard status indicators
  - Add Service Worker status badge to dashboard
  - Display count of scheduled bells for today
  - Show next bell time
  - Add "Background Bells Active" indicator
  - Display warning if Service Worker is inactive
  - _Requirements: 6.1, 6.2, 6.6_

- [ ] 14. Implement error handling and recovery
  - Add comprehensive error handling to Service Worker
  - Implement retry logic with exponential backoff
  - Create user-friendly error messages
  - Add error logging to IndexedDB
  - Display troubleshooting guidance for common errors
  - _Requirements: 3.4, 5.3, 5.5_


- [ ] 15. Add permission management UI
  - Create notification permission status display
  - Add "Request Permission" button



  - Show step-by-step instructions for denied permissions

  - Display Android battery optimization guidance
  - Link to device settings where applicable
  - _Requirements: 2.1, 2.5, 5.2, 5.3_

- [ ]* 15.1 Write property test for notification permission enforcement
  - **Property 6: Notification Permission Enforcement**
  - **Validates: Requirements 2.5, 5.2**


- [ ] 16. Integrate with existing timetable system
  - Update timetable save logic to sync with Service Worker
  - Add Service Worker sync on timetable create/update/delete
  - Ensure backward compatibility with existing timetables
  - Migrate existing timetables to IndexedDB
  - Update timetable UI to show background status

  - _Requirements: 1.1, 4.1, 4.2_

- [ ] 17. Add offline support indicators
  - Display offline status in UI
  - Show that bells will continue working offline
  - Add sync status indicator
  - Handle offline timetable modifications

  - Queue sync operations for when online
  - _Requirements: 4.3_

- [ ] 18. Create troubleshooting guide
  - Build in-app troubleshooting page
  - Add common issues and solutions
  - Include browser-specific guidance
  - Add device-specific instructions (Samsung, Pixel, etc.)
  - Link to external resources
  - _Requirements: 5.3, 5.5, 9.5_

- [ ] 19. Implement performance optimizations
  - Optimize Service Worker timer checks
  - Add schedule caching in Service Worker memory
  - Implement efficient IndexedDB queries with indexes
  - Minimize Service Worker wake-ups
  - Release audio resources after playback
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 20. Add analytics and monitoring
  - Log Service Worker lifecycle events
  - Track bell execution success rate
  - Monitor notification display rate

  - Log audio playback method used
  - Track browser and device information
  - _Requirements: 6.3, 6.4_

- [ ] 21. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.



- [ ]* 22. Write integration tests
  - Test PWA to Service Worker communication
  - Test Service Worker to IndexedDB access
  - Test end-to-end bell flow with browser closed
  - Test with device locked
  - Test with low battery scenarios

- [ ]* 23. Write browser compatibility tests
  - Test on Chrome Android (versions 90+)
  - Test on Edge Android
  - Test on Firefox Android (with warnings)
  - Test on Samsung Internet
  - Verify iOS shows appropriate message

- [ ]* 24. Create manual testing documentation
  - Document background bell test procedure
  - Document device restart test
  - Document battery optimization test
  - Document offline test
  - Create testing checklist for QA

- [ ] 25. Final integration and polish
  - Ensure all components work together seamlessly
  - Polish UI/UX for Android devices
  - Optimize for mobile screen sizes
  - Add loading states and transitions
  - Verify accessibility compliance
  - _Requirements: All_

- [ ] 26. Final Checkpoint - Complete system verification
  - Ensure all tests pass, ask the user if questions arise.
