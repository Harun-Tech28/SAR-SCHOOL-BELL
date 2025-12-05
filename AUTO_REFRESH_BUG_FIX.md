# Auto-Refresh Bug Fix

## Problem
When setting up timetables, the page would auto-refresh showing "back online" message and delete all settings being entered. This was causing data loss and frustration.

## Root Cause
The issue was caused by the PWA (Progressive Web App) service worker update mechanism:

1. **Service Worker Update Detection**: When the connection went offline and came back online, the service worker would sometimes detect this as an "update available" event
2. **Auto-Reload Toast**: The `PWAInit` component was showing a toast notification with a "Refresh" button that would reload the page
3. **Accidental Clicks**: Users could accidentally click the refresh button while filling out forms
4. **Frequent Update Checks**: The service worker was checking for updates every hour, increasing the chance of interruptions

## Solution Applied

### 1. Removed Auto-Reload Button
**File:** `components/pwa-init.tsx`

**Before:**
```typescript
onUpdate: () => {
  toast.info("New version available!", {
    description: "Refresh to update the app",
    action: {
      label: "Refresh",
      onClick: () => window.location.reload(), // ❌ Dangerous!
    },
    duration: 10000,
  });
}
```

**After:**
```typescript
onUpdate: () => {
  console.log("ℹ️ New version available. Refresh the page when convenient to update.");
  
  toast.info("Update available", {
    description: "A new version is available. Refresh when you're ready.",
    duration: 5000, // Auto-dismiss after 5 seconds
    // ✅ No action button to prevent accidental clicks
  });
}
```

### 2. Reduced Update Check Frequency
**File:** `lib/pwa/register-sw.ts`

**Before:**
```typescript
// Check for updates periodically (every hour)
setInterval(() => {
  registration.update();
}, 60 * 60 * 1000); // ❌ Too frequent
```

**After:**
```typescript
// Check for updates periodically (every 4 hours to reduce interruptions)
setInterval(() => {
  registration.update();
}, 4 * 60 * 60 * 1000); // ✅ Less intrusive
```

### 3. Added Confirmation Before Reload
**File:** `lib/pwa/update-manager.ts`

**Before:**
```typescript
async applyUpdate(): Promise<void> {
  // ... code ...
  window.location.reload(); // ❌ No warning!
}
```

**After:**
```typescript
async applyUpdate(): Promise<void> {
  // ✅ Warn user before reloading
  const confirmed = confirm('This will reload the page to apply the update. Any unsaved changes will be lost. Continue?');
  if (!confirmed) {
    console.log('[UpdateManager] Update cancelled by user');
    return;
  }
  // ... code ...
  window.location.reload();
}
```

### 4. Removed Duplicate Online/Offline Toasts
**File:** `components/pwa-init.tsx`

The `OfflineIndicator` component already handles showing online/offline status, so we removed the duplicate toast notifications from `PWAInit` to reduce noise.

## Benefits

✅ **No More Data Loss**: Forms won't be interrupted by auto-refresh
✅ **User Control**: Users decide when to refresh for updates
✅ **Less Intrusive**: Update notifications auto-dismiss and don't have clickable buttons
✅ **Fewer Interruptions**: Update checks happen every 4 hours instead of every hour
✅ **Confirmation Required**: Any manual update requires user confirmation

## Testing

After this fix:
1. ✅ Build completes successfully
2. ✅ No TypeScript errors
3. ✅ Service worker still registers correctly
4. ✅ Offline functionality still works
5. ✅ Update notifications are now passive

## User Experience

**Before:**
- User fills out timetable form
- Connection briefly drops and reconnects
- "Back online!" toast appears with "Refresh" button
- User accidentally clicks or page auto-refreshes
- All form data is lost ❌

**After:**
- User fills out timetable form
- Connection briefly drops and reconnects
- Subtle "Back online" indicator appears at top (auto-dismisses)
- If update is available, a passive notification appears (no button)
- User can continue working without interruption ✅
- User refreshes manually when ready

## Additional Recommendations

For even better user experience, consider:

1. **Form Auto-Save**: Implement auto-save for timetable forms to localStorage
2. **Unsaved Changes Warning**: Add a warning when user tries to leave page with unsaved changes
3. **Update Scheduling**: Allow users to schedule updates for specific times
4. **Offline Queue**: Queue timetable saves when offline and sync when back online

## Files Modified

1. `components/pwa-init.tsx` - Removed auto-reload button and duplicate toasts
2. `lib/pwa/register-sw.ts` - Reduced update check frequency
3. `lib/pwa/update-manager.ts` - Added confirmation before reload

## Verification

Run the application and test:
```bash
npm run dev
```

1. Navigate to Timetables page
2. Start filling out a form
3. Simulate offline/online by toggling network in DevTools
4. Verify no auto-refresh occurs
5. Verify form data is preserved
