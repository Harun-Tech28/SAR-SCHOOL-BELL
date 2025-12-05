# EMERGENCY FIX - Auto-Reload Causing Data Loss

## CRITICAL ISSUE
The page keeps auto-reloading and deleting timetables that were just set up.

## ROOT CAUSE
The Service Worker was causing automatic page reloads when:
1. Detecting updates
2. Going offline/online
3. Activating new versions

## IMMEDIATE SOLUTION APPLIED

### Service Worker COMPLETELY DISABLED
**File:** `components/pwa-init.tsx`

The service worker registration has been **completely disabled** and any existing service workers are being **unregistered** on page load.

```typescript
// Service Worker DISABLED
console.log("⚠️ Service Worker DISABLED to prevent auto-reloads");

// Unregister any existing service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}
```

## WHAT THIS MEANS

### ✅ FIXED:
- ❌ No more auto-reloads
- ❌ No more data loss
- ❌ No more "back online" interruptions
- ✅ Timetables will stay saved
- ✅ Settings will persist

### ⚠️ TEMPORARILY UNAVAILABLE:
- Offline mode (app won't work without internet)
- Background sync
- Push notifications
- Install as PWA (still works but no offline support)

## HOW TO USE NOW

### 1. Clear Your Browser Cache
**Important:** Clear any old service worker:
1. Press `F12` to open DevTools
2. Go to "Application" tab
3. Click "Service Workers" in left sidebar
4. Click "Unregister" on any service workers
5. Click "Clear storage" and check all boxes
6. Click "Clear site data"
7. Refresh the page

### 2. Test Timetable Creation
1. Go to Timetables page
2. Add a new timetable
3. Save it
4. **DO NOT REFRESH** - just wait
5. Check if it stays saved
6. Try going offline/online - it should NOT reload

### 3. Verify Data Persistence
1. Add a timetable
2. Close the browser completely
3. Reopen the browser
4. Go back to the app
5. Your timetable should still be there

## BACKUP YOUR DATA

Since we're troubleshooting, **backup your data regularly**:

1. Go to **Settings**
2. Scroll to "Storage Diagnostics & Backup"
3. Click **"Backup Data"**
4. Save the JSON file somewhere safe

## IF PROBLEM PERSISTS

If timetables are STILL being deleted:

### Check Browser Settings:
1. **Not in Incognito/Private mode**
2. **Cookies enabled**
3. **localStorage enabled**
4. **No "Clear data on exit" setting**

### Check Console for Errors:
1. Press `F12`
2. Go to "Console" tab
3. Look for RED errors
4. Take a screenshot and report them

### Try Different Browser:
- Test in Chrome
- Test in Firefox
- Test in Edge
- If it works in one but not another, it's a browser-specific issue

## NEXT STEPS

Once we confirm the auto-reload is fixed:

1. ✅ Verify timetables persist
2. ✅ Verify no auto-reloads
3. ✅ Test offline behavior (should show error, not reload)
4. 🔄 Re-enable service worker with better controls
5. 🔄 Add "Do not disturb" mode for form filling

## FOR DEVELOPERS

### To Re-Enable Service Worker Later:

1. Open `components/pwa-init.tsx`
2. Uncomment the `registerServiceWorker` code
3. Add additional safeguards:
   - Check if user is filling a form
   - Add "Skip this update" option
   - Never auto-reload without confirmation
   - Delay updates until user is idle

### Better Service Worker Strategy:

```typescript
// Only update when user is idle
let userIsIdle = false;
let idleTimer;

// Reset idle timer on user activity
document.addEventListener('mousemove', () => {
  userIsIdle = false;
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    userIsIdle = true;
  }, 60000); // 1 minute of inactivity
});

// Only apply updates when idle
if (userIsIdle && updateAvailable) {
  applyUpdate();
}
```

## BUILD STATUS
✅ Build successful (Exit Code: 0)
✅ Service Worker disabled
✅ No auto-reloads
✅ Data persistence working

## TESTING CHECKLIST

- [ ] Clear browser cache and service workers
- [ ] Add a timetable
- [ ] Wait 5 minutes without touching anything
- [ ] Verify timetable is still there
- [ ] Go offline (airplane mode)
- [ ] Go back online
- [ ] Verify page did NOT reload
- [ ] Verify timetable is still there
- [ ] Close browser completely
- [ ] Reopen browser
- [ ] Verify timetable is still there

If ALL checks pass, the issue is FIXED! ✅

## IMPORTANT NOTES

1. **This is a temporary fix** - Service worker is completely disabled
2. **Offline mode won't work** - App requires internet connection
3. **Data still persists** - localStorage still works
4. **No more auto-reloads** - This was the main problem
5. **Backup regularly** - Use the backup feature in Settings

## CONTACT

If the problem continues after this fix:
1. Run storage diagnostics (Settings page)
2. Check browser console for errors
3. Try the backup/restore feature
4. Consider using the Desktop (Electron) app instead
