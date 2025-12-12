@echo off
echo ========================================
echo GHANA SCHOOL BELL SYSTEM
echo Client Delivery Package Creator
echo ========================================
echo.

REM Check if installer exists
if not exist "installer-final\Ghana School Bell System Setup 0.1.3.exe" (
    echo ERROR: Installer not found!
    echo Expected location: installer-final\Ghana School Bell System Setup 0.1.3.exe
    echo.
    pause
    exit /b 1
)

echo This will create a client-ready delivery package.
echo.
echo The package will include:
echo   - The installer file
echo   - Installation instructions
echo   - User guide
echo.

choice /c YN /n /m "Continue? (Y/N): "
if errorlevel 2 goto :cancel

echo.
echo ========================================
echo CREATING DELIVERY PACKAGE...
echo ========================================
echo.

REM Create delivery folder
set DELIVERY_FOLDER=CLIENT-DELIVERY-PACKAGE
if exist "%DELIVERY_FOLDER%" (
    echo Removing old delivery package...
    rmdir /s /q "%DELIVERY_FOLDER%"
)

echo Creating delivery folder...
mkdir "%DELIVERY_FOLDER%"

REM Copy installer
echo Copying installer...
copy "installer-final\Ghana School Bell System Setup 0.1.3.exe" "%DELIVERY_FOLDER%\" >nul
if errorlevel 1 (
    echo ERROR: Failed to copy installer!
    pause
    exit /b 1
)

REM Create installation instructions
echo Creating installation instructions...
(
echo ========================================
echo GHANA SCHOOL BELL SYSTEM
echo Installation Instructions
echo ========================================
echo.
echo STEP 1: RUN THE INSTALLER
echo   - Double-click "Ghana School Bell System Setup 0.1.3.exe"
echo.
echo STEP 2: WINDOWS SECURITY WARNING
echo   - Windows will show: "Windows protected your PC"
echo   - Click "More info"
echo   - Click "Run anyway"
echo   - This is normal for new software
echo.
echo STEP 3: FOLLOW THE WIZARD
echo   - Choose installation location ^(or use default^)
echo   - Select if you want a desktop shortcut
echo   - Click "Install"
echo   - Wait for installation to complete
echo.
echo STEP 4: OPEN THE APP
echo   - Click Start Menu
echo   - Find "Ghana School Bell System"
echo   - Click to open
echo.
echo STEP 5: SET UP YOUR BELLS
echo   - Click "Timetable" in the sidebar
echo   - Click "Add Timetable"
echo   - Enter your school's bell schedule
echo   - Click "Save"
echo   - Done! Bells will ring automatically
echo.
echo ========================================
echo FEATURES
echo ========================================
echo.
echo ✓ Works completely offline ^(no internet needed^)
echo ✓ Automatic bell scheduling
echo ✓ Voice announcements in English
echo ✓ Runs in background
echo ✓ All settings save automatically
echo ✓ System tray integration
echo.
echo ========================================
echo USAGE TIPS
echo ========================================
echo.
echo - The app runs in the system tray ^(bottom-right corner^)
echo - Double-click tray icon to show/hide window
echo - Right-click tray icon for options
echo - Bells ring even when window is closed
echo - All timetables save automatically
echo.
echo ========================================
echo UNINSTALL
echo ========================================
echo.
echo If you need to uninstall:
echo   1. Open Control Panel
echo   2. Click "Programs and Features"
echo   3. Find "Ghana School Bell System"
echo   4. Click "Uninstall"
echo.
echo ========================================
echo SYSTEM REQUIREMENTS
echo ========================================
echo.
echo - Windows 10 or Windows 11
echo - 200 MB free disk space
echo - No additional software needed
echo.
echo ========================================
echo SUPPORT
echo ========================================
echo.
echo For help or questions, contact your
echo system administrator.
echo.
echo ========================================
) > "%DELIVERY_FOLDER%\INSTALLATION-INSTRUCTIONS.txt"

REM Create quick start guide
echo Creating quick start guide...
(
echo ========================================
echo QUICK START GUIDE
echo ========================================
echo.
echo 1. INSTALL
echo    - Run "Ghana School Bell System Setup 0.1.3.exe"
echo    - Click through the installer
echo.
echo 2. OPEN
echo    - Start Menu ^> "Ghana School Bell System"
echo.
echo 3. ADD TIMETABLE
echo    - Click "Timetable" ^> "Add Timetable"
echo    - Enter your bell times
echo    - Click "Save"
echo.
echo 4. DONE!
echo    - Bells will ring automatically
echo    - App runs in background
echo.
echo ========================================
echo TIPS
echo ========================================
echo.
echo - Look for app icon in system tray ^(bottom-right^)
echo - Right-click tray icon for options
echo - All data saves automatically
echo - Works completely offline
echo.
echo ========================================
) > "%DELIVERY_FOLDER%\QUICK-START.txt"

REM Create README
echo Creating README...
(
echo ========================================
echo GHANA SCHOOL BELL SYSTEM v0.1.3
echo Client Delivery Package
echo ========================================
echo.
echo CONTENTS:
echo.
echo 1. Ghana School Bell System Setup 0.1.3.exe
echo    - The installer file ^(91.5 MB^)
echo.
echo 2. INSTALLATION-INSTRUCTIONS.txt
echo    - Detailed installation guide
echo.
echo 3. QUICK-START.txt
echo    - Quick reference guide
echo.
echo 4. README.txt ^(this file^)
echo    - Package information
echo.
echo ========================================
echo DELIVERY OPTIONS
echo ========================================
echo.
echo OPTION 1: USB Drive
echo   - Copy this entire folder to USB
echo   - Give USB to client
echo.
echo OPTION 2: Cloud Storage
echo   - Upload installer to Google Drive/Dropbox
echo   - Share download link with client
echo   - Send instruction files via email
echo.
echo OPTION 3: Email ^(if file size allows^)
echo   - Compress folder to ZIP
echo   - Send via email
echo.
echo ========================================
echo WHAT TO TELL YOUR CLIENT
echo ========================================
echo.
echo "I've prepared the Ghana School Bell System
echo for your school. Simply run the installer
echo and follow the instructions. The app works
echo completely offline and will ring bells
echo automatically according to your schedule."
echo.
echo ========================================
echo TECHNICAL DETAILS
echo ========================================
echo.
echo Version: 0.1.3
echo Size: 91.5 MB
echo Type: Windows NSIS Installer
echo Requirements: Windows 10/11
echo Internet: Not required
echo.
echo ========================================
) > "%DELIVERY_FOLDER%\README.txt"

echo.
echo ========================================
echo SUCCESS!
echo ========================================
echo.
echo Client delivery package created!
echo.
echo Location: %DELIVERY_FOLDER%\
echo.
echo Contents:
echo   ✓ Installer file ^(91.5 MB^)
echo   ✓ Installation instructions
echo   ✓ Quick start guide
echo   ✓ README file
echo.
echo ========================================
echo NEXT STEPS
echo ========================================
echo.
echo 1. Review the package contents
echo 2. Choose delivery method:
echo    - USB Drive
echo    - Cloud storage ^(Google Drive/Dropbox^)
echo    - Email ^(if size allows^)
echo 3. Send to your client
echo.

choice /c YN /n /m "Open the delivery folder now? (Y/N): "
if errorlevel 2 goto :done

explorer "%DELIVERY_FOLDER%"
goto :done

:cancel
echo.
echo Operation cancelled.
goto :done

:done
echo.
echo ========================================
echo Done!
echo ========================================
pause
