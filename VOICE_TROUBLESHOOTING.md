# 🔧 Voice Selection Troubleshooting Guide

## Problem: Voice Doesn't Change When Playing Timetable

If you're experiencing issues where the voice sounds the same even when you select different voices, follow this guide to diagnose and fix the problem.

## 🔍 Diagnosis Steps

### Step 1: Check Browser Console

1. Open your browser's Developer Console (Press F12)
2. Click on the "Console" tab
3. Play a timetable bell
4. Look for these log messages:

```
🔔 Playing timetable bell:
  Name: Morning Assembly
  Bell Type: brass-school-bell
  Voice: openai-shimmer
  Message: Attention all students...

[BellSystem] Playing bell sequence: Morning Assembly
[BellSystem] Bell type: brass-school-bell, Voice: openai-shimmer
[BellSystem] Using voice: openai-shimmer (AI: true, High Quality: true)
[BellSystem] Playing with HIGH QUALITY AI voice: openai-shimmer
```

### Step 2: Verify Voice is Saved

1. After creating/editing a timetable, check the timetable list
2. Look for the voice name under each bell entry
3. It should show: "Voice: [Voice Name]"

Example:
```
Morning Assembly
Monday at 08:00 • Brass School Bell
Voice: OpenAI Shimmer • Custom Message
```

### Step 3: Test Voice Preview

1. Click "Add New Bell" or edit an existing bell
2. Select different voices from the dropdown
3. Click the "Test" button next to the voice dropdown
4. You should hear DIFFERENT voices for each selection

## 🐛 Common Issues & Solutions

### Issue 1: All Voices Sound the Same

**Cause:** Browser is using default system voice instead of configured voice

**Solutions:**

1. **Check Browser Compatibility**
   - ✅ Use Chrome or Edge (best support)
   - ⚠️ Firefox has limited voice variety
   - ⚠️ Safari has limited voice variety

2. **Clear Browser Cache**
   ```
   1. Press Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
   2. Select "Cached images and files"
   3. Click "Clear data"
   4. Refresh the page
   ```

3. **Check Console for Errors**
   - Look for red error messages in console
   - Common errors:
     - "Speech Synthesis not supported"
     - "No voices available"
     - "Voice not found"

### Issue 2: Voice Not Saved in Timetable

**Cause:** Voice field not being saved to store

**Solution:**

1. **Check if voice is displayed**
   - Look at the timetable entry
   - Should show "Voice: [Voice Name]"
   - If it shows "Voice: OpenAI Onyx" for all entries, voice isn't being saved

2. **Re-save the timetable**
   - Edit the timetable entry
   - Select the voice again
   - Click "Save Bell"
   - Check console for save logs:
   ```
   🔵 Store: updateTimetable called with id: 123, updates: {...}
   ```

3. **Clear localStorage and recreate**
   - Open Console (F12)
   - Type: `localStorage.clear()`
   - Press Enter
   - Refresh page
   - Create timetable again

### Issue 3: Voice Changes in Preview but Not in Playback

**Cause:** Different code paths for preview vs playback

**Solution:**

1. **Check console logs when playing**
   - Should see: `[BellSystem] Using voice: [your-selected-voice]`
   - If it shows different voice, there's a mismatch

2. **Verify useHighQualityVoice is true**
   - Console should show: `High Quality: true`
   - If false, voices won't use AI enhancement

3. **Check if voice is AI voice**
   - Console should show: `AI: true` for OpenAI/Azure/ElevenLabs voices
   - If false, it's using browser TTS (limited variety)

### Issue 4: Browser Has Limited Voices

**Cause:** Your system doesn't have many voices installed

**Solution:**

1. **Install Additional Voices (Windows)**
   ```
   1. Go to Settings → Time & Language → Speech
   2. Click "Add voices"
   3. Download additional voices
   4. Restart browser
   ```

2. **Install Additional Voices (Mac)**
   ```
   1. Go to System Preferences → Accessibility → Speech
   2. Click "System Voice" dropdown
   3. Select "Customize..."
   4. Download additional voices
   5. Restart browser
   ```

3. **Use Chrome/Edge**
   - These browsers have better built-in voice support
   - They use enhanced pitch/rate adjustments

## 📊 Expected Console Output

When everything is working correctly, you should see:

```
🔔 Playing timetable bell:
  Name: Morning Assembly
  Bell Type: brass-school-bell
  Voice: openai-shimmer
  Message: Attention all students, it is time for Morning Assembly...

[BellSystem] Playing bell sequence: Morning Assembly
[BellSystem] Bell type: brass-school-bell, Voice: openai-shimmer
[BellSystem] Message: "Attention all students..."
[BellSystem] Sequence 1 of 1
[BellSystem] Playing brass-school-bell tone...
[BellSystem] Playing voice: "Attention all students..."
[BellSystem] Using voice: openai-shimmer (AI: true, High Quality: true)
[BellSystem] Playing with HIGH QUALITY AI voice: openai-shimmer
[BellSystem] Voice playback result: SUCCESS
[BellSystem] Bell sequence completed. Success: true
```

## 🎯 Quick Fix Checklist

- [ ] Using Chrome or Edge browser
- [ ] Voice is shown in timetable list
- [ ] Console shows correct voice name
- [ ] Console shows "AI: true" for AI voices
- [ ] Console shows "High Quality: true"
- [ ] No red errors in console
- [ ] Voice preview works with "Test" button
- [ ] Different voices sound different in preview
- [ ] Volume is turned up
- [ ] Using headphones (helps hear differences)

## 🔬 Advanced Debugging

### Check Voice Configuration

Open Console (F12) and run:

```javascript
// Check available voices
window.speechSynthesis.getVoices().forEach(v => 
  console.log(v.name, v.lang)
)

// Check voice config
import { VOICE_OPTIONS } from './lib/voice-utils'
console.log(VOICE_OPTIONS)
```

### Test Voice Directly

```javascript
// Test a specific voice
const utterance = new SpeechSynthesisUtterance("Testing voice")
utterance.voice = window.speechSynthesis.getVoices()[0]
utterance.pitch = 0.7  // Deep voice
utterance.rate = 0.9   // Slow
window.speechSynthesis.speak(utterance)
```

### Check Store Data

```javascript
// Check what's saved in store
const store = JSON.parse(localStorage.getItem('school-bell-storage'))
console.log('Timetables:', store.state.timetables)
```

## 💡 Understanding Voice Differences

The system uses **pitch** and **rate** to make voices different:

| Voice | Pitch | Rate | Result |
|-------|-------|------|--------|
| OpenAI Onyx | 0.7 | 0.9 | Very deep, slow |
| OpenAI Shimmer | 1.35 | 1.05 | Very high, fast |
| OpenAI Alloy | 1.0 | 1.0 | Neutral baseline |

**If you can't hear differences:**
- Pitch differences are subtle on some systems
- Rate (speed) differences are more noticeable
- Try extreme opposites first (Onyx vs Shimmer)

## 📞 Still Having Issues?

If none of these solutions work:

1. **Export your console logs**
   - Right-click in console
   - Select "Save as..."
   - Share with support

2. **Check browser version**
   - Ensure you're using latest version
   - Update if needed

3. **Try different device**
   - Test on another computer
   - Test on mobile device

4. **Report the issue**
   - Include browser name and version
   - Include console logs
   - Include steps to reproduce

---

**Most Common Fix:** Use Chrome/Edge browser and make sure voice is shown in the timetable list!
