# Design Document

## Overview

This design implements a Service Worker-based background bell system for Android PWA that enables scheduled bells to ring even when the browser is completely closed. The system uses Service Worker persistent connections, IndexedDB for offline storage, Web Notifications API for alerts, and strategic audio playback mechanisms to ensure reliable bell operation on Android devices.

The architecture leverages Chrome/Edge's Service Worker capabilities on Android to maintain background timers, trigger notifications at scheduled times, and play audio through either notification sounds or by briefly opening the PWA in the background.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Android Device                           │
│                                                              │
│  ┌────────────────┐         ┌──────────────────────┐       │
│  │   PWA (Closed) │         │   Service Worker     │       │
│  │                │         │   (Always Running)   │       │
│  │  - UI Layer    │◄────────┤                      │       │
│  │  - Timetable   │  Opens  │  - Schedule Monitor  │       │
│  │    Management  │  When   │  - Timer Management  │       │
│  │                │  Needed │  - Notification API  │       │
│  └────────────────┘         │  - Audio Trigger     │       │
│         │                   └──────────────────────┘       │
│         │                            │                      │
│         │                            │                      │
│         ▼                            ▼                      │
│  ┌──────────────────────────────────────────────┐         │
│  │           IndexedDB Storage                   │         │
│  │  - Timetables                                 │         │
│  │  - Bell Schedules                             │         │
│  │  - Audio Configurations                       │         │
│  │  - Execution Logs                             │         │
│  └──────────────────────────────────────────────┘         │
│                                                              │
│  ┌──────────────────────────────────────────────┐         │
│  │        Android Notification System            │         │
│  │  - Visual Notifications                       │         │
│  │  - Notification Sounds                        │         │
│  │  - Vibration Patterns                         │         │
│  └──────────────────────────────────────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

### Component Interaction Flow

```
User Saves Timetable
       │
       ▼
PWA stores to IndexedDB
       │
       ▼
PWA sends message to Service Worker
       │
       ▼
Service Worker loads schedules from IndexedDB
       │
       ▼
Service Worker sets up timers
       │
       ▼
User closes browser
       │
       ▼
Service Worker continues running
       │
       ▼
Timer fires at scheduled time
       │
       ▼
Service Worker shows notification
       │
       ├──► Plays notification sound
       │
       └──► Opens PWA in background (if needed for custom audio)
              │
              ▼
         Plays bell audio
              │
              ▼
         Closes automatically
```

## Components and Interfaces

### 1. Service Worker Bell Manager (`public/sw-bell-manager.js`)

The core Service Worker module that handles background bell scheduling.

```javascript
// Service Worker Bell Manager Interface
class ServiceWorkerBellManager {
  constructor() {
    this.schedules = [];
    this.timers = new Map();
    this.db = null;
  }

  // Initialize the manager
  async initialize(): Promise<void>

  // Load schedules from IndexedDB
  async loadSchedules(): Promise<Schedule[]>

  // Set up timers for all schedules
  setupTimers(schedules: Schedule[]): void

  // Trigger a bell event
  async triggerBell(schedule: Schedule): Promise<void>

  // Show notification with audio
  async showBellNotification(schedule: Schedule): Promise<void>

  // Open PWA in background to play audio
  async openPWAForAudio(schedule: Schedule): Promise<void>

  // Handle messages from PWA
  handleMessage(event: MessageEvent): void

  // Clean up expired timers
  cleanupTimers(): void
}
```

### 2. PWA Service Worker Bridge (`lib/pwa-sw-bridge.ts`)

Client-side module for communicating with the Service Worker.

```typescript
// PWA to Service Worker Bridge
export class PWAServiceWorkerBridge {
  private sw: ServiceWorker | null;
  private registration: ServiceWorkerRegistration | null;

  constructor();

  // Initialize Service Worker connection
  async initialize(): Promise<boolean>;

  // Send timetable updates to Service Worker
  async syncTimetables(timetables: Timetable[]): Promise<void>;

  // Request Service Worker status
  async getStatus(): Promise<ServiceWorkerStatus>;

  // Force immediate schedule check
  async checkSchedulesNow(): Promise<void>;

  // Listen for messages from Service Worker
  onMessage(callback: (data: any) => void): void;

  // Check if Service Worker is supported
  static isSupported(): boolean;
}
```

### 3. IndexedDB Manager (`lib/indexeddb-manager.ts`)

Manages persistent storage accessible by both PWA and Service Worker.

```typescript
export class IndexedDBManager {
  private dbName: string = 'SchoolBellDB';
  private version: number = 2;
  private db: IDBDatabase | null;

  // Open database connection
  async open(): Promise<IDBDatabase>;

  // Save timetable
  async saveTimetable(timetable: Timetable): Promise<void>;

  // Get all timetables
  async getAllTimetables(): Promise<Timetable[]>;

  // Get active timetables for today
  async getActiveTimetables(): Promise<Timetable[]>;

  // Delete timetable
  async deleteTimetable(id: string): Promise<void>;

  // Save bell execution log
  async logBellExecution(log: BellLog): Promise<void>;

  // Get execution logs
  async getLogs(limit?: number): Promise<BellLog[]>;

  // Clear old logs
  async clearOldLogs(daysToKeep: number): Promise<void>;
}
```

### 4. Android Background Bell Component (`components/android-background-bells.tsx`)

React component for managing Android-specific background bell settings.

```typescript
export function AndroidBackgroundBells() {
  const [isSupported, setIsSupported] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default');
  const [swStatus, setSwStatus] = useState<'active' | 'inactive' | 'unsupported'>('inactive');
  const [scheduledCount, setScheduledCount] = useState(0);

  // Check browser support
  useEffect(() => {
    checkSupport();
  }, []);

  // Request notification permission
  const requestPermission = async (): Promise<void>;

  // Test background bell
  const testBackgroundBell = async (): Promise<void>;

  // Show setup instructions
  const showSetupInstructions = (): void;

  // Render UI
  return (/* Component JSX */);
}
```

### 5. Notification Audio Handler (`lib/notification-audio-handler.ts`)

Handles audio playback through notifications and background PWA opening.

```typescript
export class NotificationAudioHandler {
  // Play audio through notification
  static async playThroughNotification(
    title: string,
    body: string,
    audioUrl?: string
  ): Promise<void>;

  // Open PWA in background to play audio
  static async openPWAForAudio(
    schedule: Schedule
  ): Promise<void>;

  // Check if custom notification sounds are supported
  static supportsCustomNotificationSound(): boolean;

  // Get notification sound URL
  static getNotificationSoundUrl(bellType: string): string;

  // Create vibration pattern
  static getVibrationPattern(bellType: string): number[];
}
```

## Data Models

### Timetable Model

```typescript
interface Timetable {
  id: string;
  name: string;
  bells: Bell[];
  days: DayOfWeek[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Bell {
  id: string;
  time: string; // HH:MM format
  label: string;
  bellType: 'bell' | 'chime' | 'gong' | 'custom';
  audioUrl?: string;
  announcement?: string;
  volume: number;
  repeatCount: number;
}

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
```

### Schedule Model (Service Worker)

```typescript
interface Schedule {
  id: string;
  timetableId: string;
  timetableName: string;
  bellId: string;
  time: string; // HH:MM format
  days: DayOfWeek[];
  bellConfig: {
    label: string;
    bellType: string;
    audioUrl?: string;
    announcement?: string;
    volume: number;
    repeatCount: number;
  };
  nextExecution: Date;
  lastExecution?: Date;
}
```

### Bell Execution Log

```typescript
interface BellLog {
  id: string;
  scheduleId: string;
  timetableName: string;
  bellLabel: string;
  executionTime: Date;
  scheduledTime: string;
  status: 'success' | 'failed' | 'skipped';
  method: 'notification' | 'background-pwa' | 'foreground';
  error?: string;
  deviceInfo: {
    browser: string;
    os: string;
    batteryLevel?: number;
  };
}
```

### Service Worker Status

```typescript
interface ServiceWorkerStatus {
  isActive: boolean;
  isSupported: boolean;
  scheduledBellsCount: number;
  nextBellTime?: Date;
  lastSyncTime: Date;
  notificationPermission: NotificationPermission;
  errors: string[];
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Service Worker Persistence
*For any* timetable saved to IndexedDB, when the browser is closed and reopened, the Service Worker should reload the same schedules without data loss.
**Validates: Requirements 1.5, 4.5**

### Property 2: Schedule Trigger Accuracy
*For any* scheduled bell time, when the current time matches the scheduled time (within 1 minute tolerance), the Service Worker should trigger exactly one bell event.
**Validates: Requirements 1.2, 1.3**

### Property 3: Notification Display Guarantee
*For any* bell event triggered by the Service Worker, a notification should be displayed regardless of whether audio playback succeeds.
**Validates: Requirements 2.2, 3.5**

### Property 4: IndexedDB Sync Consistency
*For any* timetable modification in the PWA, the IndexedDB should reflect the changes and the Service Worker should reload schedules within 5 seconds.
**Validates: Requirements 4.1, 4.2**

### Property 5: Browser Closure Resilience
*For any* active schedule, closing all browser tabs should not prevent the Service Worker from triggering bells at scheduled times.
**Validates: Requirements 1.2, 1.4**

### Property 6: Notification Permission Enforcement
*For any* attempt to schedule background bells, if notification permission is denied, the system should display a warning and prevent Service Worker bell registration.
**Validates: Requirements 2.5, 5.2**

### Property 7: Audio Fallback Chain
*For any* bell event, if custom audio playback fails, the system should fall back to notification sound, and if that fails, fall back to vibration only.
**Validates: Requirements 3.2, 3.5**

### Property 8: Time Zone Adjustment
*For any* scheduled bell, when the device time zone changes, the Service Worker should recalculate the next execution time to maintain the correct local time.
**Validates: Requirements 8.1, 8.2**

### Property 9: Service Worker Update Preservation
*For any* Service Worker update, all scheduled bells and IndexedDB data should be preserved and re-registered with the new Service Worker instance.
**Validates: Requirements 4.5**

### Property 10: Browser Support Detection
*For any* browser that does not support Service Workers or notifications, the system should detect this on initialization and display appropriate guidance.
**Validates: Requirements 5.1, 5.4, 10.1-10.5**

## Error Handling

### Service Worker Errors

1. **Service Worker Registration Failure**
   - Detect during PWA initialization
   - Display error message with browser compatibility info
   - Fall back to foreground-only mode
   - Log error details for debugging

2. **IndexedDB Access Failure**
   - Retry with exponential backoff (3 attempts)
   - Display error toast to user
   - Fall back to in-memory storage (loses data on close)
   - Log error for troubleshooting

3. **Timer Setup Failure**
   - Log the specific schedule that failed
   - Continue setting up other timers
   - Display warning about affected bells
   - Retry on next sync

4. **Notification Display Failure**
   - Check notification permission status
   - If denied, prompt user to enable
   - If error, log and retry once
   - Display in-app alert as fallback

### Audio Playback Errors

1. **Notification Sound Failure**
   - Fall back to default notification sound
   - Use vibration pattern as additional alert
   - Log the failure
   - Continue with visual notification

2. **Background PWA Opening Failure**
   - Retry once after 2-second delay
   - If still fails, use notification sound only
   - Log error with device/browser info
   - Display troubleshooting tips on next app open

3. **Audio File Not Found**
   - Fall back to default bell sound
   - Display warning in app
   - Log missing file path
   - Suggest re-uploading custom audio

### Permission Errors

1. **Notification Permission Denied**
   - Display prominent warning banner
   - Show step-by-step instructions to enable
   - Disable background bell scheduling
   - Offer foreground-only mode

2. **Battery Optimization Blocking**
   - Detect through Service Worker wake failures
   - Display Android-specific instructions
   - Link to device settings
   - Suggest testing with "Test Bell" feature

### Network Errors

1. **Offline During Sync**
   - Queue sync operation
   - Retry when connection restored
   - Use cached data in Service Worker
   - Display offline indicator

2. **Service Worker Update Failure**
   - Continue using current Service Worker
   - Retry update on next app open
   - Log update failure
   - Don't disrupt existing schedules

## Testing Strategy

### Unit Testing

1. **IndexedDB Operations**
   - Test CRUD operations for timetables
   - Test concurrent access from PWA and Service Worker
   - Test database upgrade scenarios
   - Test error handling for quota exceeded

2. **Schedule Calculation**
   - Test time parsing and validation
   - Test day-of-week matching
   - Test time zone conversions
   - Test next execution time calculation

3. **Notification Creation**
   - Test notification payload generation
   - Test audio URL resolution
   - Test vibration pattern creation
   - Test notification action handling

### Integration Testing

1. **PWA to Service Worker Communication**
   - Test message passing
   - Test schedule synchronization
   - Test status queries
   - Test error propagation

2. **Service Worker to IndexedDB**
   - Test schedule loading on Service Worker start
   - Test concurrent writes from PWA and Service Worker
   - Test data consistency after updates

3. **End-to-End Bell Flow**
   - Test complete flow from timetable save to bell trigger
   - Test with browser closed
   - Test with device locked
   - Test with low battery

### Browser Compatibility Testing

1. **Chrome on Android**
   - Test Service Worker persistence
   - Test notification display
   - Test audio playback
   - Test battery optimization scenarios

2. **Edge on Android**
   - Same tests as Chrome
   - Verify feature parity

3. **Firefox on Android**
   - Test with limited Service Worker support
   - Verify graceful degradation
   - Test warning messages

4. **Samsung Internet**
   - Test Service Worker behavior
   - Test notification quirks
   - Test audio playback

### Property-Based Testing

We will use **fast-check** (JavaScript property-based testing library) to verify correctness properties.

1. **Property 1: Service Worker Persistence**
   - Generate random timetables
   - Save to IndexedDB
   - Simulate Service Worker restart
   - Verify all schedules are reloaded

2. **Property 2: Schedule Trigger Accuracy**
   - Generate random bell times
   - Simulate time progression
   - Verify bells trigger at correct times
   - Verify no duplicate triggers

3. **Property 4: IndexedDB Sync Consistency**
   - Generate random timetable modifications
   - Verify IndexedDB reflects changes
   - Verify Service Worker reloads within timeout

4. **Property 8: Time Zone Adjustment**
   - Generate random schedules
   - Simulate time zone changes
   - Verify execution times adjust correctly

### Manual Testing Checklist

1. **Background Bell Test**
   - Schedule bell for 2 minutes from now
   - Close browser completely
   - Wait for bell time
   - Verify notification appears
   - Verify audio plays

2. **Device Restart Test**
   - Schedule bells for next day
   - Restart Android device
   - Verify schedules persist
   - Verify bells trigger correctly

3. **Battery Optimization Test**
   - Enable aggressive battery optimization
   - Schedule bells
   - Close browser
   - Verify bells still trigger (may be delayed)

4. **Offline Test**
   - Turn off network
   - Verify bells still trigger
   - Verify no errors displayed

## Implementation Notes

### Service Worker Lifecycle

The Service Worker must handle these lifecycle events:

1. **Install**: Precache essential assets
2. **Activate**: Clean up old caches, load schedules from IndexedDB
3. **Message**: Handle sync requests from PWA
4. **Notification Click**: Open PWA to dashboard
5. **Periodic Sync** (if supported): Check for missed bells

### Android-Specific Considerations

1. **Battery Optimization**
   - Chrome/Edge may be killed by Android battery optimization
   - Provide instructions to disable optimization for browser
   - Test on various Android versions (9, 10, 11, 12, 13, 14)

2. **Doze Mode**
   - Service Workers may be throttled in Doze mode
   - Use high-priority notifications to wake device
   - Accept potential delays (up to 15 minutes)

3. **Background Limits**
   - Android 12+ has stricter background limits
   - Use foreground service notification if needed
   - Test on Android 12+ specifically

### Audio Playback Strategy

Due to browser restrictions on background audio:

1. **Primary**: Use notification sound (limited to system sounds)
2. **Secondary**: Open PWA in background, play audio, close automatically
3. **Fallback**: Vibration pattern only

### Performance Optimization

1. **Timer Management**
   - Use single interval timer checking every 10 seconds
   - Calculate next bell time to minimize checks
   - Clear timers for past bells

2. **IndexedDB Access**
   - Cache schedules in Service Worker memory
   - Only access IndexedDB on sync or restart
   - Use indexes for efficient queries

3. **Memory Management**
   - Limit log storage to 1000 entries
   - Clean up old logs weekly
   - Release audio resources after playback

## Security Considerations

1. **Service Worker Scope**
   - Register Service Worker at root scope
   - Validate all messages from PWA
   - Sanitize notification content

2. **IndexedDB Security**
   - No sensitive data stored
   - Validate data structure on read
   - Handle corrupted data gracefully

3. **Notification Content**
   - Sanitize user-provided text
   - Limit notification body length
   - Validate audio URLs

## Browser Support Matrix

| Feature | Chrome Android | Edge Android | Firefox Android | Samsung Internet | Safari iOS |
|---------|---------------|--------------|-----------------|------------------|------------|
| Service Worker | ✅ Full | ✅ Full | ⚠️ Limited | ✅ Full | ❌ No Background |
| Background Sync | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ❌ No |
| Notifications | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ⚠️ Limited |
| Custom Notification Sound | ⚠️ Limited | ⚠️ Limited | ❌ No | ⚠️ Limited | ❌ No |
| Background Audio | ⚠️ Via PWA Open | ⚠️ Via PWA Open | ❌ No | ⚠️ Via PWA Open | ❌ No |
| IndexedDB | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

**Recommended Browsers**: Chrome or Edge on Android 9+

## Deployment Considerations

1. **HTTPS Requirement**
   - Service Workers require HTTPS
   - Use Let's Encrypt for free SSL
   - Test on localhost during development

2. **Service Worker Updates**
   - Implement versioning in Service Worker file
   - Force update on critical changes
   - Preserve user data during updates

3. **Progressive Enhancement**
   - Detect Service Worker support
   - Fall back to foreground mode gracefully
   - Provide clear messaging about capabilities

4. **User Onboarding**
   - Show setup wizard on first launch
   - Request permissions with context
   - Provide "Test Bell" feature
   - Link to troubleshooting guide
