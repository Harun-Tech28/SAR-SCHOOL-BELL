# Audio Dropdown Fix - Uploaded Audio Not Showing

## Problem
After uploading custom audio files in the Settings page, the audio files were not appearing in the dropdown menus for prayer times. The files were successfully uploaded to IndexedDB, but the UI wasn't refreshing to show them.

## Root Cause
The Settings component loaded the audio list once on mount, but it didn't reload when new audio was uploaded. The AudioUpload component had its own state and updated its own list, but the parent Settings component's state remained stale.

## Solution
Added a callback mechanism to notify the parent component when audio is uploaded or deleted:

### Changes Made:

1. **AudioUpload Component** (`components/audio-upload.tsx`)
   - Added `onAudioUploaded` prop (optional callback function)
   - Called the callback after successful upload
   - Called the callback after successful deletion

2. **Settings Component** (`components/settings.tsx`)
   - Extracted `loadAudios` function to be reusable
   - Passed `loadAudios` as callback to AudioUpload component
   - Now refreshes the audio list whenever files are uploaded/deleted

## How It Works Now

```
User uploads audio
    ↓
AudioUpload stores file in IndexedDB
    ↓
AudioUpload updates its own list
    ↓
AudioUpload calls onAudioUploaded callback
    ↓
Settings component reloads audio list
    ↓
Dropdowns update with new audio files
```

## Testing

1. Go to Settings page
2. Upload an audio file in "Custom Audio Library"
3. Scroll to "Islamic Prayer Times" section
4. Check the "Custom Audio" dropdown for any prayer
5. ✅ Uploaded audio should now appear in the dropdown

## Files Modified

- `components/audio-upload.tsx` - Added callback prop and calls
- `components/settings.tsx` - Added callback to refresh audio list

## Commit
```
Fix audio dropdown not updating after upload - add callback to refresh audio list
```

---

**Status:** ✅ Fixed and deployed
