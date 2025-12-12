# 🐛 Timetable Display Bug - Diagnosis and Fix

## Problem Description

**Symptom:** Bells ring at the correct scheduled times, but the timetable page shows empty (no bells displayed) when you open it.

**Root Cause:** This is likely a data loading/display issue where:
1. The data IS saved correctly (bells ring on schedule)
2. The data IS loaded correctly (bells work)
3. But the UI component isn't showing the loaded data

## Diagnostic Steps

### Step 1: Check Browser Console

1. Open the app
2. Press `F12` to open Developer Tools
3. Go to the "Console" tab
4. Look for these messages:
   - `✅ Store rehydrated successfully`
   - `📊 Rehydrated state:` (should show timetablesCount > 0)

### Step 2: Check localStorage

1. In Developer Tools, go to "Application" tab
2. Expand "Local Storage" in the left sidebar
3. Click on your app's URL
4. Look for key: `school-bell-storage`
5. Click on it and check if you see timetables data

### Step 3: Check Electron File Storage

If running in Electron:
1. Open File Explorer
2. Navigate to: `%APPDATA%\Ghana School Bell System\`
3. Look for file: `zustand-school-bell-storage.json`
4. Open it in Notepad
5. Check if timetables are there

## Quick Fix Options

### Option 1: Force Reload from Storage

Add this button to your timetable page temporarily:

```typescript
<Button
  onClick={() => {
    // Force reload from storage
    window.location.reload()
  }}
  variant="outline"
>
  Reload Timetables
</Button>
```

### Option 2: Check Store State Directly

Add this diagnostic button:

```typescript
<Button
  onClick={() => {
    const state = useStore.getState()
    console.log("Current timetables:", state.timetables)
    alert(`Timetables in store: ${state.timetables.length}`)
  }}
  variant="outline"
>
  Check Store
</Button>
```

### Option 3: Export and Reimport Data

1. Open browser console (F12)
2. Run this command:
```javascript
// Export data
const data = localStorage.getItem('school-bell-storage')
console.log(data)
// Copy the output

// Then to reimport:
localStorage.setItem('school-bell-storage', 'PASTE_DATA_HERE')
window.location.reload()
```

## Permanent Fix

The issue is likely that the component renders before the store is fully rehydrated. Here's the fix:

### Fix 1: Add Loading State

```typescript
export function Timetable() {
  const { timetables, addTimetable, removeTimetable, updateTimetable } = useStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Wait for store to rehydrate
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <div className="p-8">Loading timetables...</div>
  }

  // Rest of component...
}
```

### Fix 2: Add Rehydration Check

```typescript
export function Timetable() {
  const { timetables, addTimetable, removeTimetable, updateTimetable } = useStore()
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    // Check if store has been hydrated
    const unsubscribe = useStore.persist.onFinishHydration(() => {
      console.log("Store hydrated, timetables:", useStore.getState().timetables.length)
      setHasHydrated(true)
    })
    
    // If already hydrated
    if (useStore.persist.hasHydrated()) {
      setHasHydrated(true)
    }

    return unsubscribe
  }, [])

  if (!hasHydrated) {
    return <div className="p-8">Loading timetables...</div>
  }

  // Rest of component...
}
```

## Testing the Fix

After applying the fix:

1. **Add a test timetable:**
   - Click "Add New Bell"
   - Fill in the form
   - Click "Save Bell"
   - Verify it appears in the list

2. **Close and reopen the app:**
   - Close the app completely
   - Reopen it
   - Go to Timetable page
   - Verify your timetables are still there

3. **Wait for a scheduled bell:**
   - Let a scheduled bell ring
   - Verify it plays correctly
   - Check that the timetable still shows in the UI

## Common Issues

### Issue 1: Data in localStorage but not showing

**Cause:** Component renders before rehydration
**Fix:** Use Fix 1 or Fix 2 above

### Issue 2: Data shows after refresh but not on first load

**Cause:** Timing issue with Zustand persist
**Fix:** Add the rehydration check (Fix 2)

### Issue 3: Data in Electron file but not in localStorage

**Cause:** Electron IPC not loading data properly
**Fix:** Check main.js IPC handlers are working

## Verification Commands

Run these in browser console to verify data:

```javascript
// Check if data exists
localStorage.getItem('school-bell-storage')

// Parse and view
JSON.parse(localStorage.getItem('school-bell-storage'))

// Check timetables specifically
JSON.parse(localStorage.getItem('school-bell-storage')).state.timetables

// Force reload store
window.location.reload()
```

## Next Steps

1. Apply Fix 2 (Rehydration Check) - most reliable
2. Test thoroughly
3. If still not working, check browser console for errors
4. Verify data is actually being saved (check localStorage)

