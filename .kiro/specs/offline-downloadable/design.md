# Design Document: Offline-Downloadable PWA

## Overview

This design transforms the SAR Educational Complex School Bell System into a Progressive Web App (PWA) that can be installed on any device and function completely offline. The solution leverages Next.js static export capabilities, service workers for offline functionality, and browser storage APIs for data persistence.

The architecture follows PWA best practices with an app shell model, aggressive caching strategies, and seamless online/offline transitions. All existing features (bell sounds, voice synthesis, timetables, announcements) will work without internet connectivity.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     User Device                          │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Browser/Installed App                 │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │         Next.js App (Static Export)         │  │  │
│  │  │  ┌──────────────┐  ┌──────────────────┐    │  │  │
│  │  │  │  App Shell   │  │  React Components │    │  │  │
│  │  │  └──────────────┘  └──────────────────┘    │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │                        ↕                           │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │          Service Worker Layer               │  │  │
│  │  │  • Cache Management                         │  │  │
│  │  │  • Offline Routing                          │  │  │
│  │  │  • Background Sync                          │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │                        ↕                           │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │         Browser Storage Layer               │  │  │
│  │  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  │  │  │
│  │  │  │ Cache    │  │IndexedDB │  │LocalStor.│  │  │  │
│  │  │  │ Storage  │  │          │  │          │  │  │  │
│  │  │  └──────────┘  └──────────┘  └──────────┘  │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### PWA Components

1. **Web App Manifest** (`manifest.json`)
   - Defines app metadata (name, icons, colors)
   - Controls display mode (standalone, fullscreen)
   - Specifies start URL and scope

2. **Service Worker** (`sw.js`)
   - Intercepts network requests
   - Implements caching strategies
   - Handles offline fallbacks
   - Manages cache versioning

3. **Static Export**
   - Pre-rendered HTML pages
   - Optimized assets (JS, CSS, images)
   - No server-side dependencies

4. **Storage Layer**
   - Cache API for static assets
   - IndexedDB for structured data
   - LocalStorage for settings

## Components and Interfaces

### 1. PWA Configuration

#### Web App Manifest
```typescript
// public/manifest.json
interface WebAppManifest {
  name: string;
  short_name: string;
  description: string;
  start_url: string;
  display: 'standalone' | 'fullscreen' | 'minimal-ui';
  background_color: string;
  theme_color: string;
  icons: Array<{
    src: string;
    sizes: string;
    type: string;
    purpose?: 'any' | 'maskable' | 'monochrome';
  }>;
  categories: string[];
  orientation: 'portrait' | 'landscape' | 'any';
}
```

#### Service Worker Registration
```typescript
// lib/pwa/register-sw.ts
export interface ServiceWorkerConfig {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onOffline?: () => void;
  onOnline?: () => void;
}

export function registerServiceWorker(config?: ServiceWorkerConfig): void;
export function unregisterServiceWorker(): Promise<boolean>;
```

### 2. Caching Strategy

#### Cache Manager
```typescript
// lib/pwa/cache-manager.ts
export interface CacheConfig {
  version: string;
  caches: {
    static: string;    // App shell, CSS, JS
    assets: string;    // Images, fonts
    audio: string;     // Bell sounds
    data: string;      // API responses (if any)
  };
}

export class CacheManager {
  constructor(config: CacheConfig);
  
  // Pre-cache essential assets
  async precache(urls: string[]): Promise<void>;
  
  // Cache with strategy
  async cacheFirst(request: Request): Promise<Response>;
  async networkFirst(request: Request): Promise<Response>;
  async staleWhileRevalidate(request: Request): Promise<Response>;
  
  // Cache management
  async clearOldCaches(): Promise<void>;
  async getCacheSize(): Promise<number>;
}
```

#### Caching Strategies by Resource Type
- **App Shell** (HTML, CSS, JS): Cache First
- **Bell Sounds**: Cache First with fallback
- **Images/Fonts**: Cache First
- **Data/Settings**: Network First with cache fallback

### 3. Offline Storage

#### Storage Manager
```typescript
// lib/pwa/storage-manager.ts
export interface StorageQuota {
  usage: number;
  quota: number;
  percentage: number;
}

export class StorageManager {
  // IndexedDB for structured data
  async saveToIndexedDB<T>(store: string, key: string, data: T): Promise<void>;
  async getFromIndexedDB<T>(store: string, key: string): Promise<T | null>;
  async deleteFromIndexedDB(store: string, key: string): Promise<void>;
  
  // LocalStorage for settings
  saveToLocalStorage(key: string, value: any): void;
  getFromLocalStorage<T>(key: string): T | null;
  
  // Storage info
  async getStorageQuota(): Promise<StorageQuota>;
  async clearAllStorage(): Promise<void>;
}
```

#### Data Stores
```typescript
// IndexedDB Schema
interface DBSchema {
  timetable: {
    key: string;
    value: TimetableEntry[];
  };
  students: {
    key: string;
    value: Student[];
  };
  announcements: {
    key: string;
    value: Announcement[];
  };
  settings: {
    key: string;
    value: AppSettings;
  };
}
```

### 4. Offline Detection

#### Network Status Hook
```typescript
// hooks/use-online-status.ts
export interface OnlineStatus {
  isOnline: boolean;
  isOffline: boolean;
  effectiveType?: string; // '4g', '3g', '2g', 'slow-2g'
  downlink?: number;      // Mbps
  rtt?: number;           // Round-trip time in ms
}

export function useOnlineStatus(): OnlineStatus;
```

#### Offline Indicator Component
```typescript
// components/offline-indicator.tsx
export interface OfflineIndicatorProps {
  position?: 'top' | 'bottom';
  showWhenOnline?: boolean;
  customMessage?: string;
}

export function OfflineIndicator(props: OfflineIndicatorProps): JSX.Element;
```

### 5. Install Prompt

#### Install Prompt Manager
```typescript
// lib/pwa/install-prompt.ts
export interface InstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export class InstallPromptManager {
  private deferredPrompt: InstallPromptEvent | null;
  
  // Capture install prompt
  capturePrompt(event: InstallPromptEvent): void;
  
  // Show install prompt
  async showInstallPrompt(): Promise<'accepted' | 'dismissed' | 'unavailable'>;
  
  // Check if already installed
  isInstalled(): boolean;
  
  // Check if installable
  canInstall(): boolean;
}
```

#### Install Button Component
```typescript
// components/install-button.tsx
export interface InstallButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onInstallSuccess?: () => void;
  onInstallDismiss?: () => void;
}

export function InstallButton(props: InstallButtonProps): JSX.Element | null;
```

### 6. Update Manager

#### Update Notification System
```typescript
// lib/pwa/update-manager.ts
export interface UpdateInfo {
  available: boolean;
  version?: string;
  releaseNotes?: string;
}

export class UpdateManager {
  // Check for updates
  async checkForUpdates(): Promise<UpdateInfo>;
  
  // Apply update
  async applyUpdate(): Promise<void>;
  
  // Skip update
  skipUpdate(version: string): void;
  
  // Listen for updates
  onUpdateAvailable(callback: (info: UpdateInfo) => void): void;
}
```

## Data Models

### PWA State
```typescript
interface PWAState {
  isInstalled: boolean;
  isOnline: boolean;
  canInstall: boolean;
  updateAvailable: boolean;
  cacheStatus: {
    size: number;
    lastUpdated: Date;
    version: string;
  };
  storageQuota: {
    used: number;
    available: number;
    percentage: number;
  };
}
```

### Cache Entry
```typescript
interface CacheEntry {
  url: string;
  timestamp: number;
  size: number;
  type: 'static' | 'asset' | 'audio' | 'data';
  version: string;
}
```

### Offline Queue
```typescript
interface OfflineQueueItem {
  id: string;
  type: 'sync' | 'upload' | 'request';
  data: any;
  timestamp: number;
  retries: number;
  maxRetries: number;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Installation creates app icon
*For any* device where the app is installed, the home screen should contain an app icon with SAR Educational Complex branding
**Validates: Requirements 1.2**

### Property 2: Offline bell sounds work
*For any* cached bell sound type (Traditional, Modern, Soft), playing the sound while offline should produce audio output equivalent to online mode
**Validates: Requirements 2.2, 2.4**

### Property 3: Data persistence across sessions
*For any* timetable entry or setting saved while online or offline, restarting the application should restore the exact same data
**Validates: Requirements 3.2, 3.4**

### Property 4: UI availability offline
*For any* UI component or navigation action, the interface should remain fully functional when offline
**Validates: Requirements 4.1, 4.2**

### Property 5: Network status accuracy
*For any* network state change (online to offline or vice versa), the system should update the status indicator within 2 seconds
**Validates: Requirements 5.1, 5.2**

### Property 6: Cache size limits
*For any* installation of the app, the total cache size should not exceed 50MB
**Validates: Requirements 9.1**

### Property 7: Update notification
*For any* new version available, the system should notify the user and allow them to accept or dismiss the update
**Validates: Requirements 6.2, 6.3**

### Property 8: Offline announcements work
*For any* announcement created while offline, the system should play it using browser speech synthesis without errors
**Validates: Requirements 7.1, 7.3**

### Property 9: Cross-device compatibility
*For any* supported device type (desktop, tablet, mobile), the installed app should provide appropriate UI layout and full offline functionality
**Validates: Requirements 8.1, 8.2, 8.3, 8.4**

### Property 10: Static export completeness
*For any* production build, all pages and assets should be pre-rendered as static files with no server dependencies
**Validates: Requirements 10.1**

## Error Handling

### Service Worker Errors
- **Registration Failure**: Fallback to online-only mode with user notification
- **Cache Failure**: Log error, continue with network requests
- **Update Failure**: Keep current version, retry on next session

### Storage Errors
- **Quota Exceeded**: Implement LRU cache eviction, notify user
- **IndexedDB Unavailable**: Fallback to LocalStorage with reduced capacity
- **Data Corruption**: Clear corrupted store, reload from defaults

### Network Errors
- **Offline Mode**: Show offline indicator, queue sync operations
- **Timeout**: Retry with exponential backoff (3 attempts)
- **Failed Fetch**: Serve from cache or show offline fallback

### Installation Errors
- **Unsupported Browser**: Show message with supported browser list
- **Install Declined**: Don't show prompt again for 7 days
- **Install Failed**: Log error, allow retry

## Testing Strategy

### Unit Tests
- Cache manager operations (add, retrieve, delete, clear)
- Storage manager CRUD operations
- Network status detection logic
- Install prompt state management
- Update manager version comparison

### Property-Based Tests
Each correctness property will be validated using property-based testing with a minimum of 100 iterations:

1. **Installation Icon Test**: Verify manifest generates correct icon metadata
2. **Offline Audio Test**: Generate random bell configurations, verify playback offline
3. **Data Persistence Test**: Generate random timetable data, verify round-trip storage
4. **UI Availability Test**: Navigate to random routes offline, verify rendering
5. **Network Status Test**: Simulate network changes, verify indicator updates
6. **Cache Size Test**: Cache random assets, verify total size stays under limit
7. **Update Flow Test**: Simulate version changes, verify notification behavior
8. **Offline Announcements Test**: Generate random announcements, verify offline playback
9. **Device Compatibility Test**: Test on different viewport sizes, verify layout
10. **Static Export Test**: Verify all routes generate static HTML files

### Integration Tests
- Full offline workflow: install → use offline → sync when online
- Update workflow: detect update → download → apply → verify
- Storage workflow: save data → go offline → retrieve data → verify integrity
- Cache workflow: precache → serve from cache → update cache → verify freshness

### Manual Testing Checklist
- Install on iOS Safari
- Install on Android Chrome
- Install on desktop Chrome/Edge/Firefox
- Test offline mode on each platform
- Verify bell sounds work offline
- Verify timetable persistence
- Test update flow
- Verify storage usage display
- Test uninstall/reinstall

### Testing Tools
- **Lighthouse**: PWA audit score (target: 100)
- **Workbox**: Service worker testing utilities
- **Chrome DevTools**: Application panel for PWA debugging
- **Network throttling**: Simulate offline/slow connections

## Implementation Notes

### Next.js Configuration
```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',  // Enable static export
  images: {
    unoptimized: true,  // Required for static export
  },
  // Disable features incompatible with static export
  typescript: {
    ignoreBuildErrors: false,  // Fix before deployment
  },
};
```

### Service Worker with Workbox
Use Workbox library for robust service worker implementation:
- Precaching with automatic versioning
- Runtime caching strategies
- Background sync for offline operations
- Cache expiration policies

### Build Output Structure
```
out/
├── _next/
│   ├── static/
│   │   ├── chunks/
│   │   └── css/
│   └── ...
├── index.html
├── manifest.json
├── sw.js
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   └── icon-maskable.png
└── [other pages].html
```

### Deployment Options
1. **Static Hosting**: Netlify, Vercel, GitHub Pages
2. **CDN**: Cloudflare, AWS CloudFront
3. **Self-Hosted**: Nginx, Apache
4. **Offline Package**: Zip file for local deployment

### Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari (iOS 16.4+): Full support
- Safari (macOS): Full support
- Opera: Full support
- Samsung Internet: Full support

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse PWA Score: 100
- Cache Hit Rate: > 95% after first load
- Offline Load Time: < 500ms
