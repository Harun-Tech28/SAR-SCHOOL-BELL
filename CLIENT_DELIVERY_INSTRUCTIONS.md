# Ghana School Bell System - Client Delivery Package

## 📦 What to Send to Your Client

Send your client the **PORTABLE VERSION** located at:
```
dist-new/Ghana School Bell System 0.1.3.exe
```

This is a **single .exe file** (about 96 MB) that includes everything needed.

---

## 📧 Instructions for Your Client

### Installation Steps

1. **Download the file**: `Ghana School Bell System 0.1.3.exe`

2. **Save it anywhere** on their computer (Desktop, Documents, etc.)

3. **Double-click the .exe file** to run the app
   - No installation needed!
   - The app runs directly from the .exe file

4. **First-time Windows warning**: 
   - Windows may show "Windows protected your PC"
   - Click "More info" → "Run anyway"
   - This is normal for new apps without a code signing certificate

### How to Use

- **Open the app**: Double-click the .exe file
- **Close the app**: The app will minimize to the system tray (bottom-right corner)
- **Quit completely**: Right-click the tray icon → "Quit App"
- **Run in background**: The app can play bells even when minimized

### Features

✅ Works completely offline (no internet needed)
✅ Automatic bell scheduling
✅ Text-to-speech announcements (Windows built-in)
✅ Runs in background/system tray
✅ Saves all settings and timetables automatically
✅ Can start with Windows (optional setting)

### System Requirements

- Windows 10 or Windows 11
- No additional software needed
- Works offline

---

## 🚀 Alternative: Full Installer Version

If you want to create a traditional installer (with Start Menu shortcuts, etc.):

1. Restart your computer to release file locks
2. Open terminal in project folder
3. Run: `npm run electron:build:win`
4. Send the file from `build-output/Ghana School Bell System Setup 0.1.3.exe`

The installer version:
- Creates Start Menu shortcuts
- Adds to Programs list
- Can be uninstalled normally
- Slightly larger file size

---

## 📁 File Locations

**Portable Version (Ready Now):**
- Location: `dist-new/Ghana School Bell System 0.1.3.exe`
- Size: ~96 MB
- Type: Portable (no installation)

**Installer Version (After restart + rebuild):**
- Location: `build-output/Ghana School Bell System Setup 0.1.3.exe`
- Size: ~96 MB
- Type: Traditional installer

---

## 💡 Recommendation

**For most clients**: Send the **portable version** from `dist-new/`
- Easier to distribute
- No installation hassles
- Works immediately
- Client can move it anywhere

**For schools/organizations**: Build the **installer version** after restart
- More professional
- Appears in Programs list
- Easier to uninstall
- Creates desktop shortcuts automatically

---

## 🔧 Technical Notes

### Data Storage
- Settings saved to: `%APPDATA%/Ghana School Bell System/`
- Timetables persist between sessions
- No data lost when closing app

### Background Operation
- App runs in system tray when closed
- Bells play even when window is hidden
- Right-click tray icon for options

### Updates
- To update: Replace the .exe file with new version
- Settings and data are preserved
