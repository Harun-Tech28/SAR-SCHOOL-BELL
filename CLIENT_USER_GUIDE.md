# 🔔 Ghana School Bell System - Complete User Guide

## 📖 Table of Contents
1. [What is This System?](#what-is-this-system)
2. [Installation Guide](#installation-guide)
3. [Getting Started](#getting-started)
4. [Using the System](#using-the-system)
5. [Troubleshooting](#troubleshooting)
6. [Technical Support](#technical-support)

---

## 🎯 What is This System?

The Ghana School Bell System is a desktop application that automatically plays school bells and announcements according to your timetable. It works completely offline and runs in the background on your Windows computer.

### Key Features
- ✅ **Fully Offline** - No internet connection required
- ✅ **Automatic Scheduling** - Set your timetable once, bells play automatically
- ✅ **Voice Announcements** - Text-to-speech for class changes and breaks
- ✅ **Background Operation** - Runs in system tray, doesn't interfere with other work
- ✅ **Data Persistence** - All settings and timetables save automatically
- ✅ **Customizable** - Choose bell sounds, voices, and schedules

---

## 💻 Installation Guide

### System Requirements
- **Operating System:** Windows 10 or Windows 11
- **Disk Space:** At least 500 MB free space
- **Internet:** Only needed for initial setup (to download Node.js)

### Step 1: Install Node.js (One-Time Setup)

Node.js is required to run the application.

1. **Download Node.js:**
   - Visit: https://nodejs.org
   - Click the green button that says "LTS" (Long Term Support)
   - Save the installer file

2. **Install Node.js:**
   - Double-click the downloaded file
   - Click "Next" through all the prompts
   - Accept the license agreement
   - Use default installation location
   - Click "Install" and wait for completion
   - Click "Finish"

3. **Restart Your Computer:**
   - This is important! Restart before continuing

### Step 2: Extract the Project Files

1. **Download the Project:**
   - You should have received a zip file named `Ghana-School-Bell-System.zip`
   - Save it to your Downloads folder

2. **Extract the Files:**
   - Right-click the zip file
   - Select "Extract All..."
   - Choose a location (recommended: `C:\Ghana-School-Bell`)
   - Click "Extract"
   - Remember this location!

### Step 3: Run the Setup (One-Time)

1. **Open the Project Folder:**
   - Navigate to where you extracted the files
   - Example: `C:\Ghana-School-Bell`

2. **Run the Setup Script:**
   - Look for a file named: `SETUP-FOR-CLIENT.bat`
   - Double-click this file
   - A black window (Command Prompt) will open

3. **Wait for Installation:**
   - The setup will download and install components
   - This takes 5-10 minutes (be patient!)
   - You'll see text scrolling in the window
   - When complete, the app will start automatically

4. **Setup Complete!**
   - The Ghana School Bell System window will open
   - You're ready to use the app!

---

## 🚀 Getting Started

### Starting the App (Daily Use)

After the one-time setup, starting the app is easy:

1. **Open the Project Folder:**
   - Navigate to: `C:\Ghana-School-Bell` (or wherever you extracted it)

2. **Double-Click the Launcher:**
   - Look for: `Start Ghana School Bell.bat`
   - Double-click this file
   - The app will open!

**Tip:** Create a desktop shortcut to this file for even easier access!

### First-Time Configuration

When you first open the app, you'll need to set up your school's schedule:

1. **Navigate to Settings:**
   - Click the "Settings" icon in the sidebar

2. **Configure Basic Settings:**
   - **School Name:** Enter your school's name
   - **Voice Settings:** Choose your preferred voice for announcements
   - **Bell Sound:** Select the bell sound you want to use

3. **Set Up Your Timetable:**
   - Click "Timetable" in the sidebar
   - Add your school's daily schedule
   - Include break times, class periods, and special events

4. **Save Your Settings:**
   - All changes save automatically
   - You'll see a confirmation message

---

## 📚 Using the System

### Understanding the Interface

#### Dashboard
- Shows current time and next scheduled bell
- Displays today's schedule
- Quick access to manual bell controls

#### Timetable
- View and edit your school schedule
- Add/remove bell times
- Set different schedules for different days

#### Settings
- Configure voice and sound preferences
- Set auto-start options
- Manage data backup and export

#### System Tray
- The app runs in the system tray (bottom-right corner of screen)
- Look for the bell icon near the clock
- Right-click for quick options

### Creating a Timetable

1. **Go to Timetable Section:**
   - Click "Timetable" in the sidebar

2. **Add a Bell Time:**
   - Click "Add Bell" button
   - Enter the time (e.g., 8:00 AM)
   - Choose the bell type (e.g., "Class Start", "Break", "Dismissal")
   - Add an announcement message (optional)
   - Click "Save"

3. **Edit Existing Bells:**
   - Click the edit icon next to any bell
   - Make your changes
   - Click "Save"

4. **Delete a Bell:**
   - Click the delete icon next to the bell
   - Confirm deletion

### Playing Bells Manually

Sometimes you need to play a bell outside the schedule:

1. **Go to Dashboard:**
   - Click "Dashboard" in the sidebar

2. **Manual Bell Controls:**
   - Click "Play Bell Now" for immediate bell
   - Choose specific bell sounds from dropdown
   - Test announcements before scheduling

### Background Operation

The app is designed to run in the background:

1. **Minimize to Tray:**
   - Click the "X" button (close)
   - The app minimizes to system tray instead of closing
   - Bells will still play on schedule

2. **Show/Hide Window:**
   - Double-click the tray icon to show the window
   - Click "X" again to hide it

3. **Quit Completely:**
   - Right-click the tray icon
   - Select "Quit App"
   - This stops all bells

### Auto-Start with Windows

To have the app start automatically when you turn on your computer:

1. **Go to Settings:**
   - Click "Settings" in the sidebar

2. **Enable Auto-Start:**
   - Find "Start with Windows" option
   - Toggle it ON
   - The app will now start automatically on boot

3. **Disable Auto-Start:**
   - Toggle the same option OFF

### Data Backup and Export

Your timetables and settings are valuable. Back them up regularly:

1. **Export Data:**
   - Go to Settings
   - Click "Export Data"
   - Choose a location to save the backup file
   - Save it to a USB drive or cloud storage

2. **Import Data:**
   - Go to Settings
   - Click "Import Data"
   - Select your backup file
   - All settings and timetables will be restored

---

## 🔧 Troubleshooting

### App Won't Start

**Problem:** Double-clicking the launcher does nothing

**Solutions:**
1. Make sure Node.js is installed (check Step 1 of Installation)
2. Restart your computer
3. Run the setup script again (`SETUP-FOR-CLIENT.bat`)
4. Check if antivirus is blocking the app

### "npm is not recognized" Error

**Problem:** You see an error message about "npm" when trying to start

**Solution:**
1. Node.js is not properly installed
2. Reinstall Node.js from https://nodejs.org
3. Restart your computer after installation
4. Try starting the app again

### No Sound / Bells Not Playing

**Problem:** The app opens but bells don't play

**Solutions:**
1. Check your computer's volume (not muted)
2. Go to Settings → Test the bell sound
3. Make sure your speakers are connected
4. Check Windows sound settings

### Announcements Not Working

**Problem:** Bells play but voice announcements don't

**Solutions:**
1. Go to Settings → Voice Settings
2. Select a different voice from the dropdown
3. Test the voice with the "Test Voice" button
4. Windows TTS might need to be enabled in Windows Settings

### Timetable Not Saving

**Problem:** You add bells but they disappear when you restart

**Solutions:**
1. Make sure you click "Save" after adding bells
2. Don't force-close the app (use "Quit App" from tray)
3. Check if you have write permissions in the app folder
4. Try exporting and re-importing your data

### App Crashes or Freezes

**Problem:** The app stops responding

**Solutions:**
1. Close the app completely (right-click tray → Quit)
2. Restart the app
3. If problem persists, restart your computer
4. Check if you have enough disk space
5. Contact technical support

### System Tray Icon Missing

**Problem:** Can't find the app in the system tray

**Solutions:**
1. Click the up arrow (^) in the system tray to show hidden icons
2. The bell icon might be hidden there
3. In Windows Settings, set the app to "Always show" in system tray

---

## 📞 Technical Support

### Before Contacting Support

Please try these steps first:
1. Restart the app
2. Restart your computer
3. Check the Troubleshooting section above
4. Make sure you have the latest version

### Contact Information

When contacting support, please provide:
- Your Windows version (Windows 10 or 11)
- Description of the problem
- Any error messages you see
- Steps you've already tried

### Useful Information to Collect

1. **Check Your Version:**
   - Open the app
   - Go to Settings
   - Look for "Version" information

2. **Screenshot Errors:**
   - Press `Windows Key + Shift + S` to take a screenshot
   - Capture any error messages
   - Send these with your support request

---

## 💡 Tips and Best Practices

### Daily Operation
- Keep the app running in the background all day
- Don't force-close it (use "Quit App" from tray menu)
- Check the dashboard each morning to verify schedule

### Maintenance
- Back up your data weekly (Export Data feature)
- Keep your computer updated with Windows Updates
- Restart the app once a week for best performance

### Customization
- Test different bell sounds to find what works best
- Adjust announcement volume separately from bell volume
- Create different timetables for different days if needed

### Power Management
- If using a laptop, keep it plugged in during school hours
- Disable sleep mode during school hours
- Set power plan to "High Performance" for reliability

---

## 📝 Quick Reference

### Starting the App
```
1. Open project folder (C:\Ghana-School-Bell)
2. Double-click: Start Ghana School Bell.bat
3. App opens!
```

### Stopping the App
```
1. Right-click tray icon (bottom-right corner)
2. Click "Quit App"
3. Done!
```

### Adding a Bell
```
1. Click "Timetable" in sidebar
2. Click "Add Bell"
3. Set time and type
4. Click "Save"
```

### Backing Up Data
```
1. Click "Settings" in sidebar
2. Click "Export Data"
3. Save file to safe location
```

---

## ✅ Summary

The Ghana School Bell System is designed to be simple and reliable. After the one-time setup:

1. **Daily:** Just double-click the launcher file
2. **Weekly:** Back up your data
3. **Monthly:** Check for updates (if provided)

The app runs in the background and handles everything automatically. You can minimize it and forget about it - the bells will play on schedule!

---

**Version:** 0.1.3  
**Last Updated:** December 2024  
**For:** Windows 10/11

---

## 🎓 Need More Help?

This guide covers the basics. For advanced features or specific questions, please contact your system administrator or technical support.

**Remember:** The app works completely offline once set up. No internet connection is needed for daily operation!

