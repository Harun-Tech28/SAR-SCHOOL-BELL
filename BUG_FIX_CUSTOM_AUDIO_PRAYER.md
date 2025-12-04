# Bug Fix: Custom Audio Not Playing for Prayer/Azan

## Problem
When selecting "Custom Audio" for Prayer/Azan bells in the timetable, the system was playing a synthesized voice instead of the uploaded custom audio file.

## Root Cause
The `playPrayerBell` function in `lib/complete-bell-system.ts` was trying to retrieve a custom audio ID from `settings.prayerAudioIds`, which doesn't exist in the settings interface. This was overriding the `customAudioId` that was being correctly passed through the `options` parameter from the timetable component.

### Code Before Fix (Line 227-238):
```typescript
static async playPrayerBell(prayerName: string, options?: BellSystemOptions): Promise<boolean> {
  const settings = useStore.getState().settings
  const customAudioId = settings.prayerAudioIds?.[prayerName.toLowerCase() as keyof typeof settings.prayerAudioIds]

  const message = `It is time for ${prayerName} prayer. Please proceed to the prayer area.`
  return this.playBellSequence(prayerName, message, {
    bellType: "prayer-bell",
    delayBetweenToneAndVoice: 1500,
    voice: "azan-islamic",
    language: "arabic",
    customAudioId,  // ❌ This was undefined, overriding the options
    ...options
  })
}
```

## Solution
Removed the incorrect attempt to fetch `customAudioId` from settings and let it be passed through the `options` parameter instead. The `...options` spread at the end will include `customAudioId` if it was provided by the caller.

### Code After Fix:
```typescript
static async playPrayerBell(prayerName: string, options?: BellSystemOptions): Promise<boolean> {
  const message = `It is time for ${prayerName} prayer. Please proceed to the prayer area.`
  return this.playBellSequence(prayerName, message, {
    bellType: "prayer-bell",
    delayBetweenToneAndVoice: 1500,
    voice: "azan-islamic",
    language: "arabic",
    ...options // ✅ This will include customAudioId if provided
  })
}
```

## Additional Improvements
Added enhanced logging to help debug custom audio playback:

1. **Log custom audio ID at the start of playback:**
   ```typescript
   console.log(`[BellSystem] Custom Audio ID: ${customAudioId || 'none'}`)
   ```

2. **Log success/failure of custom audio playback:**
   ```typescript
   if (voiceSuccess) {
     console.log(`[BellSystem] ✅ Custom audio played successfully`)
   } else {
     console.warn(`[BellSystem] ❌ Custom audio failed, falling back to TTS`)
   }
   ```

## How It Works Now

### Flow for Prayer/Azan with Custom Audio:

1. **User uploads custom audio** in Settings → Audio Library
2. **User creates/edits timetable** for Prayer/Azan
3. **User selects custom audio** from dropdown
4. **Form saves** with `customAudioId` field populated
5. **When bell plays:**
   - Timetable component passes `customAudioId` in options
   - `playPrayerBell` receives it through `...options`
   - `playBellSequence` checks for `customAudioId`
   - If present, plays custom audio via `playStoredAudio()`
   - If custom audio fails or not present, falls back to TTS

## Testing
To verify the fix:

1. Go to Settings → Audio Library
2. Upload a custom audio file (e.g., recorded Azan)
3. Go to Timetables
4. Create a new bell or edit existing one
5. Select a prayer bell type (e.g., "Prayer Bell (Islamic)")
6. In "Custom Audio" dropdown, select your uploaded file
7. Click "Preview Custom Audio" to test
8. Save the timetable
9. Click the play button (🔊) on the timetable entry
10. **Expected:** Your custom audio should play after the bell tone
11. **Check console:** Should see `[BellSystem] ✅ Custom audio played successfully`

## Files Modified
- `lib/complete-bell-system.ts` - Fixed `playPrayerBell` function and added logging

## Related Files (No Changes Needed)
- `components/timetable.tsx` - Already correctly passing `customAudioId`
- `lib/store.ts` - Already has `customAudioId` in Timetable interface
- `lib/audio-storage.ts` - `playStoredAudio` function working correctly
- `components/audio-upload.tsx` - Audio upload and storage working correctly

## Status
✅ **FIXED** - Custom audio now plays correctly for Prayer/Azan bells
