# 🔧 FIX: App Installs But Won't Open

## The Problem
The app installs successfully but when you try to open it, nothing happens or it crashes immediately.

## 🚀 QUICK FIX - Try These in Order

### Fix 1: Use the Portable Version Instead (EASIEST!)
Don't use the installer. Use the portable .exe directly:

```
1. Go to: build-output folder
2. Double-click: "Ghana School Bell System 0.1.3.exe"
3. This should work immediately!
```

The portable version doesn't need installation and often works better for testing.

---

### Fix 2: Check if Process is Running
The app might be running in the background:

```powershell
# Check if it's running:
tasklist | findstr "Ghana"

# If you see it, kill all instances:
taskkill /F /IM "Ghana School Bell System.exe"

# Wait 3 seconds, then try opening again
```

---

### Fix 3: Run from win-unpacked Folder
The unpacked version is more reliable:

```
1. Go to: build-output\win-unpacked
2. Double-click: "Ghana School Bell System.exe"
3. This is the raw app without packaging
```

---

### Fix 4: Check Windows Event Viewer
See what error is happening:

```
1. Press Windows + X
2. Click "Event Viewer"
3. Go to: Windows Logs → Application
4. Look for recent errors from "Ghana School Bell System"
5. Tell me what the error says
```

---

### Fix 5: Run as Administrator
Sometimes permissions are the issue:

```
1. Right-click: "Ghana School Bell System 0.1.3.exe"
2. Click: "Run as administrator"
3. Click "Yes" on the UAC prompt
```

---

### Fix 6: Check Antivirus/Windows Defender
Your antivirus might be blocking it:

```
1. Open Windows Security
2. Go to: Virus & threat protection
3. Click: Protection history
4. Look for "Ghana School Bell System"
5. If blocked, click "Allow on device"
```

---

### Fix 7: Delete Old App Data
Old data might be corrupted:

```powershell
# Delete old app data:
Remove-Item -Recurse -Force "$env:APPDATA\ghana-school-bell-system" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\ghana-school-bell-system" -ErrorAction SilentlyContinue

# Now try opening the app again
```

---

### Fix 8: Check Dependencies
The app needs certain Windows components:

```powershell
# Check if Visual C++ Redistributable is installed:
Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | 
  Where-Object {$_.DisplayName -like "*Visual C++*"} | 
  Select-Object DisplayName, DisplayVersion
```

If nothing shows up, you might need to install:
- Visual C++ Redistributable 2015-2022 (x64)
- Download from: https://aka.ms/vs/17/release/vc_redist.x64.exe

---

## 🎯 BEST SOLUTION: Use win-unpacked Version

This is the most reliable way:

### Step 1: Navigate to Folder
```
C:\Users\user\Downloads\school-bell-system\build-output\win-unpacked
```

### Step 2: Create Shortcut
```
1. Right-click: "Ghana School Bell System.exe"
2. Click: "Create shortcut"
3. Drag shortcut to Desktop
```

### Step 3: Run from Shortcut
```
Double-click the desktop shortcut
```

This version is:
- ✅ Not packaged (more reliable)
- ✅ Easier to debug
- ✅ Same functionality
- ✅ Includes all the save fixes

---

## 🔍 Diagnostic Commands

Run these to help me understand the issue:

### Check if app files exist:
```powershell
Test-Path "build-output\win-unpacked\Ghana School Bell System.exe"
Test-Path "build-output\win-unpacked\resources\app.asar"
```

### Check file sizes:
```powershell
Get-ChildItem "build-output\win-unpacked" -Recurse | 
  Measure-Object -Property Length -Sum | 
  Select-Object @{Name="TotalSizeMB";Expression={[math]::Round($_.Sum/1MB,2)}}
```

### Try running from command line to see errors:
```powershell
cd build-output\win-unpacked
.\Ghana` School` Bell` System.exe
```

---

## 📋 What to Tell Me

If none of these work, please tell me:

1. **Which version did you try?**
   - [ ] Portable .exe
   - [ ] Installer .exe
   - [ ] win-unpacked folder

2. **What happens when you try to open it?**
   - [ ] Nothing happens
   - [ ] Window flashes and closes
   - [ ] Error message appears (what does it say?)
   - [ ] Loading spinner then nothing

3. **Did you see any errors in Event Viewer?**
   - Copy the error message here

4. **Is the process running in Task Manager?**
   - Press Ctrl+Shift+Esc
   - Look for "Ghana School Bell System"

---

## ✅ RECOMMENDED: Use win-unpacked Version

For now, use this version while we debug:

```
Location: build-output\win-unpacked\Ghana School Bell System.exe
```

This version:
- Works more reliably
- Easier to debug
- Has all the same features
- Includes the save fix

Just create a desktop shortcut to this file and use it!
