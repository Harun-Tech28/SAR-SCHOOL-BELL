# Ghana School Bell System - Desktop Installation Guide

## System Requirements

### Minimum Requirements

**Windows:**
- Windows 10 or later (64-bit)
- 4 GB RAM
- 500 MB free disk space
- Audio output device

**macOS:**
- macOS 12 (Monterey) or later
- 4 GB RAM
- 500 MB free disk space
- Audio output device

**Linux:**
- Ubuntu 20.04+ / Debian 11+ / Fedora 35+ or equivalent
- 4 GB RAM
- 500 MB free disk space
- Audio output device
- libappindicator (for system tray)

### Recommended Requirements

- 8 GB RAM
- 1 GB free disk space
- Speakers or headphones for audio output
- Internet connection for initial download (not required after installation)

## Installation Instructions

### Windows Installation

1. **Download the Installer**
   - Download `Ghana-School-Bell-System-Setup-X.X.X.exe` from the releases page
   - Save to your Downloads folder

2. **Run the Installer**
   - Double-click the downloaded `.exe` file
   - If Windows SmartScreen appears, click "More info" → "Run anyway"
     (This appears because the app is not code-signed)

3. **Choose Installation Location**
   - Default: `C:\Users\YourName\AppData\Local\Programs\ghana-school-bell-system`
   - Or choose custom location
   - Click "Install"

4. **Complete Installation**
   - Wait for installation to complete
   - Check "Launch Ghana School Bell System" if you want to start immediately
   - Click "Finish"

5. **First Launch**
   - The app will appear in your system tray (bottom-right corner)
   - Click the tray icon to open the main window
   - Desktop shortcut is created automatically

**Uninstall:**
- Settings → Apps → Ghana School Bell System → Uninstall
- Or run uninstaller from Start Menu

### macOS Installation

1. **Download the Installer**
   - Download `Ghana-School-Bell-System-X.X.X.dmg` from the releases page
   - Save to your Downloads folder

2. **Mount the DMG**
   - Double-click the downloaded `.dmg` file
   - A window will open showing the app icon

3. **Install the Application**
   - Drag the "Ghana School Bell System" icon to the Applications folder
   - Wait for the copy to complete
   - Eject the DMG (right-click → Eject)

4. **First Launch**
   - Open Applications folder
   - Double-click "Ghana School Bell System"
   - If Gatekeeper blocks it:
     - Right-click the app → Open
     - Click "Open" in the dialog
     - Or: System Preferences → Security & Privacy → "Open Anyway"

5. **Grant Permissions**
   - Allow notifications (optional but recommended)
   - Allow auto-start (optional)

**Uninstall:**
- Drag app from Applications to Trash
- Empty Trash
- Optional: Remove data from `~/Library/Application Support/ghana-school-bell-system`

### Linux Installation

#### Option A: AppImage (Recommended)

1. **Download AppImage**
   - Download `Ghana-School-Bell-System-X.X.X.AppImage`
   - Save to your Downloads folder

2. **Make Executable**
   ```bash
   cd ~/Downloads
   chmod +x Ghana-School-Bell-System-*.AppImage
   ```

3. **Run the Application**
   ```bash
   ./Ghana-School-Bell-System-*.AppImage
   ```

4. **Optional: Create Desktop Entry**
   - Right-click AppImage → Properties → Permissions → Allow executing as program
   - Or use AppImageLauncher for automatic integration

**Uninstall:**
- Simply delete the AppImage file

#### Option B: DEB Package (Debian/Ubuntu)

1. **Download DEB Package**
   - Download `ghana-school-bell-system_X.X.X_amd64.deb`

2. **Install via GUI**
   - Double-click the `.deb` file
   - Click "Install" in Software Center
   - Enter your password when prompted

3. **Install via Terminal**
   ```bash
   sudo dpkg -i ghana-school-bell-system_*.deb
   sudo apt-get install -f  # Fix dependencies if needed
   ```

4. **Launch**
   - Find in Applications menu under "Education"
   - Or run from terminal: `ghana-school-bell-system`

**Uninstall:**
```bash
sudo apt remove ghana-school-bell-system
```

#### System Tray Support (Linux)

For system tray to work, install libappindicator:

**Ubuntu/Debian:**
```bash
sudo apt install libappindicator3-1
```

**Fedora:**
```bash
sudo dnf install libappindicator-gtk3
```

## Post-Installation Setup

### 1. Configure School Information

1. Open the app
2. Go to Settings
3. Enter your school name
4. Upload school logo (optional)

### 2. Set Up Timetable

1. Go to Timetable section
2. Click "Add Schedule"
3. Set bell times and announcements
4. Enable the timetable

### 3. Configure Voice Settings

1. Go to Settings → Voice & Language
2. Select preferred voice (offline voices are pre-installed)
3. Adjust volume and speed
4. Test the voice

### 4. Enable Auto-Start (Optional)

1. Go to Settings → Desktop Application Settings
2. Check "Start automatically when computer boots"
3. The app will launch on system startup

### 5. Test the System

1. Create a test bell for 1 minute in the future
2. Verify the bell rings at the scheduled time
3. Check that notifications appear
4. Confirm audio plays correctly

## Features

### Offline Operation

- **No Internet Required:** All voice synthesis works offline
- **Bundled Voices:** Multiple voices included in installation
- **Local Storage:** All data stored on your computer
- **Privacy:** No data sent to external servers

### System Integration

- **System Tray:** Runs in background, accessible from tray
- **Notifications:** Desktop notifications for scheduled bells
- **Auto-Start:** Optional automatic launch on boot
- **Native Menus:** Platform-specific menu bars

### Audio Scheduling

- **Precise Timing:** Bells ring within 1 second of scheduled time
- **Queue Management:** Multiple bells handled automatically
- **Custom Sounds:** Upload your own bell sounds
- **Voice Announcements:** Text-to-speech for announcements

## Troubleshooting

### Installation Issues

**Windows: "Windows protected your PC"**
- This is normal for unsigned apps
- Click "More info" → "Run anyway"
- The app is safe to install

**macOS: "App is damaged and can't be opened"**
- This is Gatekeeper blocking unsigned apps
- Right-click app → Open → Open
- Or disable Gatekeeper temporarily:
  ```bash
  xattr -cr /Applications/Ghana\ School\ Bell\ System.app
  ```

**Linux: "Permission denied"**
- Make AppImage executable:
  ```bash
  chmod +x Ghana-School-Bell-System-*.AppImage
  ```

### Audio Issues

**No sound when bell rings:**
1. Check system volume is not muted
2. Verify audio output device is connected
3. Test voice in Settings
4. Check bell volume in Settings

**Voice sounds robotic:**
- This is normal for offline voices
- Offline voices prioritize reliability over quality
- All voices work without internet

### System Tray Issues

**Tray icon not appearing (Linux):**
- Install libappindicator:
  ```bash
  sudo apt install libappindicator3-1
  ```
- Restart the application

**Can't restore window from tray:**
- Click the tray icon
- Or use Alt+Tab to switch to the app

### Auto-Start Issues

**App doesn't start on boot:**
- Check auto-start is enabled in Settings
- Verify permissions (may need to approve on first boot)
- Check startup applications in system settings

### Data Issues

**Settings not saving:**
- Check file permissions in data directory
- Verify sufficient disk space
- Try exporting and re-importing data

## Data Location

### Windows
```
C:\Users\YourName\AppData\Roaming\ghana-school-bell-system\
```

### macOS
```
~/Library/Application Support/ghana-school-bell-system/
```

### Linux
```
~/.config/ghana-school-bell-system/
```

## Backup and Restore

### Export Data

1. Go to Settings → Desktop Application Settings
2. Click "Export Data"
3. Save the backup file to a safe location

### Import Data

1. Go to Settings → Desktop Application Settings
2. Click "Import Data"
3. Select your backup file
4. Restart the application

## Updates

The application checks for updates automatically:

1. Update notification appears when available
2. Click "Download Update"
3. Wait for download to complete
4. Click "Restart and Install"
5. Application restarts with new version

**Manual Update Check:**
- Settings → Check for Updates

## Uninstallation

### Windows
1. Settings → Apps → Ghana School Bell System
2. Click "Uninstall"
3. Follow the uninstaller prompts
4. Choose whether to keep or delete user data

### macOS
1. Open Applications folder
2. Drag "Ghana School Bell System" to Trash
3. Empty Trash
4. Optional: Delete data folder (see Data Location above)

### Linux (DEB)
```bash
sudo apt remove ghana-school-bell-system
```

### Linux (AppImage)
- Simply delete the AppImage file
- Optional: Delete data folder (see Data Location above)

## Support

### Getting Help

- Check this guide first
- Review the User Guide for feature documentation
- Check GitHub Issues for known problems
- Contact support with detailed error descriptions

### Reporting Issues

When reporting issues, include:
- Operating system and version
- Application version
- Steps to reproduce the problem
- Error messages (if any)
- Screenshots (if applicable)

## Privacy & Security

- **No Telemetry:** App doesn't collect usage data
- **No Network Calls:** Operates completely offline (except updates)
- **Local Storage:** All data stays on your computer
- **No Accounts:** No registration or login required
- **Open Source:** Code is available for review

## License

This software is provided for educational use. See LICENSE file for details.

## Credits

Ghana School Bell System - Desktop Edition
Version 1.0.0

Developed for schools in Ghana and beyond.
