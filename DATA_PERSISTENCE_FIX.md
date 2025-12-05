# Data Persistence Fix - Settings Lost on Device Restart

## Problem
When you set up timetables and turn off your device, all settings are removed when you turn it back on.

## Root Causes

This issue can happen for several reasons:

### 1. **Browser Private/Incognito Mode**
- Private browsing mode doesn't persist localStorage
- Data is cleared when the browser closes

### 2. **Browser Settings**
- Some browsers have settings that clear data on exit
- Cookie/storage blocking can prevent persistence

### 3. **Storage Quota Issues**
- localStorage might be full
- Browser might be rejecting writes

### 4. **Browser Cache Clearing**
- Automatic cache clearing on device restart
- Security software clearing browser data

## Solutions Implemented

### 1. Enhanced Storage Verification
**File:** `lib/electron-storage-adapter.ts`

Added verification after every save:
```typescript
// Save to localStorage
window.localStorage.setItem(name, value);

// VERIFY the save worked
const verification = window.localStorage.getItem(name);
if (verification === value) {
  console.log('✅ VERIFIED: Data successfully persisted');
} else {
  console.error('❌ VERIFICATION FAILED');
  alert('Failed to save data!');
}
```

### 2. Better Error Handling
**File:** `lib/store.ts`

Added comprehensive rehydration error handling:
```typescript
onRehydrateStorage: () => {
  return (state, error) => {
    if (error) {
      alert("Failed to load saved data. Your previous settings may be lost.");
    } else if (state) {
      console.log("✅ Store rehydrated successfully");
    }
  }
}
```

### 3. Storage Diagnostics Tool
**File:** `lib/storage-diagnostics.ts`

Created comprehensive diagnostics:
- Check if localStorage is available
- Test write/read operations
- Calculate storage usage
- Verify data integrity

### 4. Backup & Restore Feature
**File:** `components/settings.tsx`

Added tools in Settings page:
- **Run Diagnostics**: Check storage health
- **Test Storage**: Verify persistence works
- **Backup Data**: Download all settings as JSON
- **Restore Backup**: Upload and restore from backup

## How to Use the New Features

### Step 1: Check Storage Health
1. Go to **Settings** page
2. Scroll to "Storage Diagnostics & Backup" section
3. Click **"Run Diagnostics"**
4. Press F12 to open browser console
5. Check the diagnostics output

### Step 2: Test Persistence
1. Click **"Test Storage"** button
2. If you see "✅ Storage is working correctly!" - good!
3. If you see "❌ Storage test failed!" - there's a problem

### Step 3: Backup Your Data
1. Click **"Backup Data"** button
2. A JSON file will download
3. Save this file somewhere safe
4. You can restore from this backup anytime

### Step 4: Restore from Backup
1. Click **"Restore Backup"** button
2. Select your backup JSON file
3. Data will be restored and page will refresh

## Troubleshooting Steps

### If Settings Are Still Being Lost:

#### 1. Check Browser Mode
```
❌ Incognito/Private Mode - Data won't persist
✅ Normal Mode - Data should persist
```

#### 2. Check Browser Settings
- **Chrome/Edge**: Settings → Privacy → Clear browsing data → Uncheck "Cookies and site data"
- **Firefox**: Settings → Privacy → History → Use custom settings → Keep until "they expire"
- **Safari**: Preferences → Privacy → Uncheck "Block all cookies"

#### 3. Check Storage Permissions
- Make sure the website has permission to store data
- Check browser's site settings for your domain

#### 4. Try Different Browser
- Test in Chrome, Firefox, or Edge
- If it works in one browser but not another, it's a browser-specific issue

#### 5. Use Desktop App (Electron)
- The Electron desktop app has more reliable storage
- Data is stored in the app's data directory
- Not affected by browser settings

### Console Logs to Watch For

**Good Signs:**
```
✅ Saved to localStorage, length: 12345
✅ VERIFIED: Data successfully persisted
✅ Store rehydrated successfully
📊 Rehydrated state: { timetablesCount: 5 }
```

**Bad Signs:**
```
❌ VERIFICATION FAILED: Data not persisted correctly!
❌ Store rehydration FAILED
⚠️ Store rehydrated but state is null/undefined
```

## Prevention Tips

### 1. Regular Backups
- Backup your data weekly using the "Backup Data" button
- Keep backups in a safe location

### 2. Use Desktop App
- Install the Electron desktop version
- More reliable storage
- Works offline

### 3. Don't Use Private Mode
- Always use normal browsing mode
- Private mode clears data on exit

### 4. Check Browser Settings
- Disable "Clear data on exit"
- Allow cookies and site data
- Don't use aggressive privacy extensions

## Technical Details

### Storage Location

**Browser (PWA):**
- Data stored in: `localStorage['school-bell-storage']`
- Location: Browser's localStorage (varies by browser)
- Persistence: Depends on browser settings

**Desktop (Electron):**
- Data stored in: App's userData directory
- Location: `%APPDATA%/school-bell-system/` (Windows)
- Persistence: Permanent until manually deleted

### Data Structure

```json
{
  "state": {
    "students": [...],
    "timetables": [...],
    "devices": [...],
    "settings": {...}
  },
  "version": 1
}
```

### Storage Limits

- **localStorage**: ~5-10MB (varies by browser)
- **IndexedDB**: ~50MB+ (used for audio files)
- **Electron**: Limited by disk space

## Files Modified

1. `lib/electron-storage-adapter.ts` - Enhanced verification
2. `lib/store.ts` - Better error handling
3. `lib/storage-diagnostics.ts` - New diagnostics tool
4. `components/settings.tsx` - Added backup/restore UI

## Next Steps

If the problem persists after trying all troubleshooting steps:

1. **Export your data** using the backup feature
2. **Clear browser cache** completely
3. **Restart browser**
4. **Import your data** using restore feature
5. **Consider using the Desktop app** for better reliability

## Support

If you continue to experience issues:
1. Run diagnostics and check console
2. Take screenshots of any error messages
3. Note which browser and version you're using
4. Check if it happens in other browsers too
