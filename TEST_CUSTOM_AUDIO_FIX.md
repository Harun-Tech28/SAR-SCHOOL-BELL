# Test Plan: Custom Audio for Prayer/Azan

## Test Scenario
Verify that custom audio files play correctly for Prayer/Azan bells instead of synthesized voice.

## Prerequisites
- Application is running (`npm run dev` or deployed)
- Browser console is open (F12) to view logs

## Test Steps

### 1. Upload Custom Audio File
1. Navigate to **Settings** → **Audio Library**
2. Click **"Select File"** or drag and drop an audio file
3. Upload a test audio file (MP3, WAV, or OGG format, max 10MB)
4. Verify the file appears in the audio library list
5. Click the **Play** button to preview the audio
6. **Expected:** Audio plays correctly

### 2. Create Prayer/Azan Timetable with Custom Audio
1. Navigate to **Timetables**
2. Click **"Add New Bell"**
3. Fill in the form:
   - **Bell Name:** "Fajr Prayer" (or any prayer name)
   - **Day:** Select any day or "Daily"
   - **Time:** Select any time
   - **Bell Type:** Select "Prayer Bell (Islamic)" or "Adhan Call (Islamic)"
   - **Voice Selection:** Any voice (will be ignored if custom audio is selected)
   - **Custom Audio:** Select your uploaded audio file from dropdown
4. Click **"Preview Custom Audio"** button
5. **Expected:** Your custom audio plays
6. Click **"Save Bell"**
7. **Expected:** Timetable entry is created

### 3. Test Playback from Timetable
1. Find your created timetable entry in the list
2. Click the **🔊 (Volume)** button to play
3. **Expected Behavior:**
   - Bell tone plays first (Prayer Bell sound)
   - After ~1.5 seconds delay
   - Your custom audio plays (NOT synthesized voice)
4. **Check Console Logs:**
   ```
   [BellSystem] Playing bell sequence: Fajr Prayer
   [BellSystem] Bell type: prayer-bell, Voice: azan-islamic
   [BellSystem] Message: "It is time for Fajr Prayer prayer..."
   [BellSystem] Custom Audio ID: <your-audio-id>
   [BellSystem] Sequence 1 of 1
   [BellSystem] Playing prayer-bell tone...
   [BellSystem] Playing voice: "It is time for..."
   [BellSystem] Using custom audio: <your-audio-id>
   [BellSystem] ✅ Custom audio played successfully
   [BellSystem] Bell sequence completed. Success: true
   ```

### 4. Test Without Custom Audio (Fallback to TTS)
1. Edit the same timetable entry
2. Change **Custom Audio** dropdown to **"No custom audio (use text-to-speech)"**
3. Click **"Save Bell"**
4. Click the **🔊** button to play
5. **Expected Behavior:**
   - Bell tone plays first
   - After delay
   - Synthesized voice announcement plays (using selected voice)
6. **Check Console Logs:**
   ```
   [BellSystem] Custom Audio ID: none
   [BellSystem] Using voice: azan-islamic (AI: false, High Quality: true)
   [BellSystem] Playing with STANDARD TTS voice: azan-islamic
   ```

### 5. Test Preview Complete Bell
1. Click **"Add New Bell"** or edit existing
2. Fill in form with custom audio selected
3. Click **"Preview Complete Bell"** button in the blue box
4. **Expected:** Bell tone + custom audio plays
5. **Check Console:** Should show custom audio being used

### 6. Test Multiple Prayer Times
Create timetables for different prayer times with different custom audio:
1. **Fajr** - Upload and use custom Fajr audio
2. **Dhuhr** - Upload and use custom Dhuhr audio
3. **Asr** - Upload and use custom Asr audio
4. **Maghrib** - Upload and use custom Maghrib audio
5. **Isha** - Upload and use custom Isha audio

Test each one individually to ensure correct audio plays.

## Edge Cases to Test

### Test 7: Custom Audio File Deleted
1. Create timetable with custom audio
2. Go to Audio Library
3. Delete the audio file
4. Go back to Timetables
5. Play the timetable entry
6. **Expected:** Falls back to TTS voice
7. **Console:** Should show "Custom audio failed, falling back to TTS"

### Test 8: Invalid Audio ID
1. Manually edit browser storage (if possible) to set invalid audio ID
2. Play the timetable
3. **Expected:** Falls back to TTS voice
4. **Console:** Should show error and fallback message

### Test 9: Large Audio File
1. Upload a longer audio file (e.g., 2-3 minutes)
2. Create timetable with this audio
3. Play the timetable
4. **Expected:** Full audio plays without interruption
5. Verify no timeout issues

### Test 10: Different Bell Types with Custom Audio
Test custom audio with different bell types:
- Prayer Bell (Islamic)
- Adhan Call (Islamic)
- Islamic Chime
- Regular Bell
- Announcement

**Expected:** Custom audio should work with all bell types.

## Success Criteria
✅ Custom audio plays instead of synthesized voice when selected
✅ Console logs show "✅ Custom audio played successfully"
✅ Falls back to TTS gracefully if custom audio fails
✅ Preview buttons work correctly
✅ Multiple prayer times can have different custom audio
✅ System handles missing/deleted audio files gracefully

## Known Limitations
- Custom audio replaces the voice announcement entirely
- Bell tone still plays before custom audio (by design)
- Only one custom audio file per timetable entry
- Custom audio must be uploaded before use

## Troubleshooting

### If Custom Audio Doesn't Play:
1. Check browser console for errors
2. Verify audio file is in Audio Library
3. Verify correct audio is selected in dropdown
4. Check audio file format is supported
5. Try re-uploading the audio file
6. Clear browser cache and reload

### If Console Shows Errors:
- `Audio not found` - Audio file was deleted or ID is invalid
- `Playback error` - Audio file may be corrupted
- `Custom audio failed` - Check browser audio permissions

## Regression Testing
After fix, verify these still work:
- ✅ Regular timetable bells without custom audio
- ✅ Voice-only mode (bell type = "none")
- ✅ Different voice selections for TTS
- ✅ Repeat count functionality
- ✅ Custom messages
- ✅ All bell types play correctly

## Performance Testing
- Upload 10+ audio files
- Create 20+ timetable entries
- Play multiple bells in sequence
- **Expected:** No memory leaks, smooth playback

---

## Test Results Template

**Date:** ___________
**Tester:** ___________
**Browser:** ___________
**Version:** ___________

| Test # | Test Name | Status | Notes |
|--------|-----------|--------|-------|
| 1 | Upload Custom Audio | ⬜ Pass / ⬜ Fail | |
| 2 | Create Prayer Timetable | ⬜ Pass / ⬜ Fail | |
| 3 | Test Playback | ⬜ Pass / ⬜ Fail | |
| 4 | Test TTS Fallback | ⬜ Pass / ⬜ Fail | |
| 5 | Preview Complete Bell | ⬜ Pass / ⬜ Fail | |
| 6 | Multiple Prayer Times | ⬜ Pass / ⬜ Fail | |
| 7 | Deleted Audio File | ⬜ Pass / ⬜ Fail | |
| 8 | Invalid Audio ID | ⬜ Pass / ⬜ Fail | |
| 9 | Large Audio File | ⬜ Pass / ⬜ Fail | |
| 10 | Different Bell Types | ⬜ Pass / ⬜ Fail | |

**Overall Result:** ⬜ Pass / ⬜ Fail

**Additional Comments:**
___________________________________________
___________________________________________
___________________________________________
