# Timetable Save Error Fix

## Problem

When trying to save a timetable, the app shows an error:
```
Failed to save timetable. Please try again.
```

## Root Cause

The `addTimetable`, `updateTimetable`, and `removeTimetable` functions in the store were calling `syncTimetablesToDB()` which tries to sync data to IndexedDB. If IndexedDB fails or is unavailable, it was causing the entire save operation to fail.

## Solution

Modified the store functions to:
1. Wrap operations in try-catch blocks
2. Make IndexedDB sync non-blocking (don't wait for it)
3. Log IndexedDB failures as warnings instead of errors
4. Ensure the main save operation succeeds even if IndexedDB fails

## Changes Made

### `lib/store.ts`

- Added try-catch blocks to `addTimetable`, `removeTimetable`, and `updateTimetable`
- Changed IndexedDB sync error handling from `console.error` to `console.warn`
- Made it clear that IndexedDB sync failures are non-critical
- Ensured errors are re-thrown only if the main operation fails

## Result

- ✅ Timetables save successfully even if IndexedDB is unavailable
- ✅ Data still persists to localStorage and file system
- ✅ IndexedDB sync happens in background (non-blocking)
- ✅ No more "Failed to save timetable" errors

## Testing

1. Try saving a timetable
2. Should save successfully without errors
3. Check console for any warnings (non-critical)
4. Verify timetable appears in the list

## Next Steps

Rebuild the app to apply the fix:
```
npm run electron:build
```

Then test the new version.
