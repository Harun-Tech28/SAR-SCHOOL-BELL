# 🚨 EMERGENCY FIX - App Won't Open

## ✅ SOLUTION: Use This Batch File

**Double-click this file:** `RUN-UNPACKED-VERSION.bat`

This will:
1. Close any old versions
2. Run the most reliable version of the app
3. Show you if there are any errors

---

## 🎯 If That Doesn't Work - Try These

### Option 1: Run Directly (RECOMMENDED)
```
1. Open File Explorer
2. Navigate to: build-output\win-unpacked
3. Double-click: "Ghana School Bell System.exe"
```

### Option 2: Run from Command Line (See Errors)
```
1. Press Windows + R
2. Type: cmd
3. Press Enter
4. Type: cd C:\Users\user\Downloads\school-bell-system\build-output\win-unpacked
5. Type: "Ghana School Bell System.exe"
6. Press Enter
7. Tell me what error you see
```

### Option 3: Check Task Manager
```
1. Press Ctrl + Shift + Esc
2. Look for "Ghana School Bell System"
3. If you see it, right-click → End Task
4. Try opening the app again
```

---

## 🔍 Common Issues & Fixes

### Issue 1: "Nothing happens when I double-click"
**Fix:** The app might be starting in the background
```powershell
# Check if it's running:
Get-Process | Where-Object {$_.ProcessName -like "*Ghana*"}

# If you see it, kill it:
Stop-Process -Name "Ghana School Bell System" -Force

# Try again
```

### Issue 2: "Window flashes and closes immediately"
**Fix:** There's a startup error
```
Run from command line (Option 2 above) to see the error
```

### Issue 3: "Windows Defender blocked it"
**Fix:** Allow the app
```
1. Open Windows Security
2. Virus & threat protection
3. Protection history
4. Find "Ghana School Bell System"
5. Click "Allow"
```

### Issue 4: "Missing DLL error"
**Fix:** Install Visual C++ Redistributable
```
Download and install:
https://aka.ms/vs/17/release/vc_redist.x64.exe
```

---

## 📊 Diagnostic Information

### Check if files are intact:
```powershell
# Run this to verify files:
$path = "build-output\win-unpacked"
Write-Host "Checking files..."
Write-Host "Main EXE exists:" (Test-Path "$path\Ghana School Bell System.exe")
Write-Host "App resources exist:" (Test-Path "$path\resources\app.asar")
Write-Host "Voices folder exists:" (Test-Path "$path\resources\voices")

# Check file sizes:
$exe = Get-Item "$path\Ghana School Bell System.exe"
Write-Host "EXE size:" ([math]::Round($exe.Length/1MB, 2)) "MB"
```

Expected output:
```
Main EXE exists: True
App resources exist: True  
Voices folder exists: True
EXE size: ~201 MB
```

---

## 🎮 Alternative: Use OLD Working Version

If the new version won't open, you can use the old version temporarily:

### Check for old versions:
```powershell
Get-ChildItem -Path . -Filter "*.exe" -Recurse | 
  Where-Object {$_.Name -like "*Ghana*"} | 
  Select-Object FullName, Length, LastWriteTime
```

Look for older .exe files that were working before.

---

## 💡 What's Probably Happening

Based on common Electron app issues:

1. **Antivirus is blocking it** (Most common)
   - Windows Defender sees it as "unsigned"
   - Solution: Add exception in Windows Security

2. **Old process is still running** (Second most common)
   - App is running in background
   - Solution: Kill process in Task Manager

3. **Corrupted app data** (Third most common)
   - Old settings are causing crash
   - Solution: Delete app data folder

4. **Missing dependencies** (Rare)
   - Visual C++ Redistributable not installed
   - Solution: Install from Microsoft

---

## 🔧 Nuclear Option: Clean Install

If nothing works, try this:

```powershell
# 1. Kill all processes
taskkill /F /IM "Ghana School Bell System.exe" 2>nul

# 2. Delete all app data
Remove-Item -Recurse -Force "$env:APPDATA\ghana-school-bell-system" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\ghana-school-bell-system" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "$env:APPDATA\Ghana School Bell System" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\Ghana School Bell System" -ErrorAction SilentlyContinue

# 3. Wait 5 seconds
timeout /t 5

# 4. Run the app
cd build-output\win-unpacked
.\Ghana` School` Bell` System.exe
```

---

## 📞 Tell Me This Information

If it still doesn't work, tell me:

1. **What happens when you double-click?**
   - [ ] Nothing at all
   - [ ] Window flashes briefly
   - [ ] Error message (what does it say?)
   - [ ] Loading spinner then nothing

2. **Is the process running?**
   ```powershell
   Get-Process | Where-Object {$_.ProcessName -like "*Ghana*"}
   ```
   - [ ] Yes, I see it
   - [ ] No, nothing

3. **Any errors in Event Viewer?**
   - Windows + X → Event Viewer → Windows Logs → Application
   - Look for recent errors

4. **Did Windows Defender block it?**
   - Windows Security → Protection history
   - Look for "Ghana School Bell System"

5. **What's the output of this command?**
   ```powershell
   cd build-output\win-unpacked
   .\Ghana` School` Bell` System.exe
   ```

With this information, I can help you fix it!
