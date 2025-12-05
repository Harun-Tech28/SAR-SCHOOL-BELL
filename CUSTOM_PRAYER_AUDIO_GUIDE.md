# Custom Audio for Islamic Prayer Times Guide

This guide explains how to use your own custom audio files (like Azan recordings) for Islamic prayer times in the School Bell System.

## Features

✅ Upload your own Azan recordings  
✅ Use different audio for each prayer time (Fajr, Dhuhr, Asr, Maghrib, Isha)  
✅ Store audio files locally in your browser  
✅ Preview audio before using  
✅ Manage your audio library  

## Step-by-Step Instructions

### 1. Access Settings

1. Open the School Bell System
2. Click on **"Settings"** in the sidebar
3. Scroll to find two sections:
   - **"Custom Audio Library"** - for uploading files
   - **"Islamic Prayer Times (Azan)"** - for configuring prayer times

### 2. Upload Custom Audio Files

1. In the **"Custom Audio Library"** section:
   - Click **"Upload Audio Files"** button
   - Select one or more audio files from your computer
   - Supported formats: MP3, WAV, OGG, M4A
   - Maximum file size: 10MB per file

2. Wait for upload to complete
3. Your files will appear in the audio library list

### 3. Configure Prayer Times

1. In the **"Islamic Prayer Times (Azan)"** section:
   - Check the box **"Enable Azan (Islamic Call to Prayer)"**
   
2. For each prayer time (Fajr, Dhuhr, Asr, Maghrib, Isha):
   - Set the **Time** when the prayer should be called
   - Select your **Custom Audio** from the dropdown
   - Or leave as "Default Azan" to use the built-in voice

3. Click **"Save Settings"** at the bottom

### 4. Test Your Setup

1. After saving, the system will automatically play your custom audio at the scheduled times
2. To test immediately:
   - Click the **Play** button next to any audio in your library
   - Verify it sounds correct

## Audio File Requirements

### Recommended Specifications

- **Format:** MP3 (best compatibility)
- **Quality:** 128-192 kbps (good balance of quality and size)
- **Duration:** 2-5 minutes (typical Azan length)
- **Sample Rate:** 44.1 kHz
- **Channels:** Mono or Stereo

### File Size Limits

- **Per File:** Maximum 10MB
- **Total Storage:** Limited by browser storage (typically 50-100MB)

### Supported Formats

| Format | Extension | Recommended |
|--------|-----------|-------------|
| MP3    | .mp3      | ✅ Yes      |
| WAV    | .wav      | ⚠️ Large    |
| OGG    | .ogg      | ✅ Yes      |
| M4A    | .m4a      | ✅ Yes      |
| AAC    | .aac      | ✅ Yes      |

## Managing Your Audio Library

### View Audio Files

- All uploaded files appear in the **Custom Audio Library**
- Each file shows:
  - File name
  - File size
  - Duration
  - Play/Delete buttons

### Play Audio

- Click the **Play** button (▶️) to preview
- Click **Pause** button (⏸️) to stop
- Only one audio plays at a time

### Delete Audio

- Click the **Trash** button (🗑️) next to any file
- Confirm deletion
- File is permanently removed from storage

### Storage Information

- View total storage used at the top of the library
- See number of audio files stored
- Monitor available space

## Prayer Time Configuration

### Setting Prayer Times

Each prayer has two settings:

1. **Time:** When to play the Azan
   - Use 24-hour format (e.g., 05:30, 17:45)
   - Adjust based on your location
   - Consider local prayer time calculations

2. **Custom Audio:** Which audio to play
   - Select from your uploaded files
   - Or use "Default Azan" (AI-generated voice)
   - Each prayer can have different audio

### Example Configuration

```
Fajr Prayer:
  Time: 05:30
  Custom Audio: "Fajr_Azan_Makkah.mp3"

Dhuhr Prayer:
  Time: 12:30
  Custom Audio: "Standard_Azan.mp3"

Asr Prayer:
  Time: 15:00
  Custom Audio: "Standard_Azan.mp3"

Maghrib Prayer:
  Time: 17:45
  Custom Audio: "Maghrib_Azan_Madinah.mp3"

Isha Prayer:
  Time: 19:00
  Custom Audio: "Standard_Azan.mp3"
```

## Tips & Best Practices

### 1. Audio Quality

- Use clear, high-quality recordings
- Avoid background noise
- Test volume levels before deployment
- Consider using professional Azan recordings

### 2. File Organization

- Name files clearly (e.g., "Fajr_Azan.mp3")
- Use consistent naming conventions
- Keep file sizes reasonable
- Delete unused files to save space

### 3. Prayer Time Accuracy

- Verify prayer times for your location
- Update times seasonally if needed
- Consider using Islamic calendar apps for reference
- Test the system before first use

### 4. Backup Your Audio

- Keep original files on your computer
- Export settings regularly (use Storage Diagnostics)
- Re-upload if you clear browser data

## Troubleshooting

### Audio Not Playing

**Problem:** Custom audio doesn't play at prayer time

**Solutions:**
1. Check that "Enable Azan" is checked
2. Verify the time is set correctly
3. Ensure custom audio is selected (not "Default Azan")
4. Test audio playback using the Play button
5. Check browser audio permissions

### Upload Fails

**Problem:** Cannot upload audio files

**Solutions:**
1. Check file size (must be under 10MB)
2. Verify file format is supported
3. Try a different browser
4. Clear browser cache and try again
5. Check available storage space

### Audio Files Disappeared

**Problem:** Uploaded files are missing

**Solutions:**
1. Check if browser data was cleared
2. Verify you're not in Incognito/Private mode
3. Re-upload files from backup
4. Consider using Desktop app (Electron) for better persistence

### Wrong Audio Plays

**Problem:** Different audio plays than selected

**Solutions:**
1. Re-save settings after selecting audio
2. Refresh the page and check settings
3. Delete and re-upload the audio file
4. Clear browser cache

## Advanced Features

### Multiple Audio Files

- Upload different Azan styles for variety
- Use specific recordings for different prayers
- Rotate between files manually

### Audio Editing

Before uploading, you can edit audio files:

1. **Trim:** Remove silence at start/end
2. **Normalize:** Adjust volume levels
3. **Convert:** Change format to MP3
4. **Compress:** Reduce file size

Recommended tools:
- Audacity (free, desktop)
- Online audio editors
- Mobile audio apps

### Integration with Timetables

Custom audio can also be used in regular timetables:

1. Go to **Timetable** section
2. Create or edit a timetable entry
3. Select custom audio from dropdown
4. Use for special announcements or events

## Storage & Privacy

### Where Files Are Stored

- Audio files are stored in your browser's IndexedDB
- Files never leave your device
- No cloud storage or external servers
- Completely private and offline

### Storage Limits

- Browser-dependent (typically 50-100MB)
- Monitor usage in Custom Audio Library
- Delete unused files to free space
- Consider Desktop app for unlimited storage

### Data Persistence

- Files persist across browser sessions
- Cleared if you clear browser data
- Not affected by page refresh
- Backed up with Export Data feature

## Getting Audio Files

### Sources for Azan Recordings

1. **Record Your Own**
   - Use smartphone voice recorder
   - Record from mosque speakers
   - Hire a professional reciter

2. **Download from Internet**
   - Islamic audio websites
   - YouTube (convert to MP3)
   - Islamic apps with export feature

3. **Purchase Professional Recordings**
   - Islamic audio stores
   - Professional reciters
   - High-quality studio recordings

### Legal Considerations

- Ensure you have rights to use the audio
- Respect copyright and licensing
- Use royalty-free or licensed content
- Give credit where required

## Support

### Need Help?

If you encounter issues:

1. Check this guide first
2. Use Storage Diagnostics in Settings
3. Try the Desktop app (Electron) for better reliability
4. Contact your system administrator

### Reporting Issues

When reporting problems, include:
- Browser name and version
- File format and size
- Error messages (if any)
- Steps to reproduce the issue

---

## Quick Reference

### Upload Audio
Settings → Custom Audio Library → Upload Audio Files

### Set Prayer Times
Settings → Islamic Prayer Times → Enable Azan → Configure times

### Test Audio
Custom Audio Library → Click Play button

### Delete Audio
Custom Audio Library → Click Trash button

### Save Changes
Settings → Save Settings button (bottom of page)

---

**May your prayers be answered! 🤲**
