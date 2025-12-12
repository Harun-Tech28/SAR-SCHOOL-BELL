@echo off
echo ========================================
echo INSTALLER VERIFICATION TOOL
echo ========================================
echo.

set ERRORS=0

echo Checking installer files...
echo.

REM Check main installer
if exist "installer-final\Ghana School Bell System Setup 0.1.3.exe" (
    echo [OK] Main installer found
    for %%A in ("installer-final\Ghana School Bell System Setup 0.1.3.exe") do (
        set size=%%~zA
    )
    echo     Size: %size% bytes
    echo     Expected: ~95,930,916 bytes
) else (
    echo [ERROR] Main installer NOT FOUND!
    echo     Expected: installer-final\Ghana School Bell System Setup 0.1.3.exe
    set /a ERRORS+=1
)
echo.

REM Check unpacked version
if exist "installer-final\win-unpacked\Ghana School Bell System.exe" (
    echo [OK] Unpacked application found
) else (
    echo [ERROR] Unpacked application NOT FOUND!
    set /a ERRORS+=1
)
echo.

REM Check for voices
if exist "installer-final\win-unpacked\resources\voices" (
    echo [OK] Offline voices folder found
    dir /b "installer-final\win-unpacked\resources\voices\*.mp3" 2>nul | find /c /v "" > temp.txt
    set /p voicecount=<temp.txt
    del temp.txt
    echo     Voice files: %voicecount%
) else (
    echo [WARNING] Offline voices folder not found
    echo     App will work but may need internet for TTS
)
echo.

REM Check documentation
echo Checking documentation...
echo.

if exist "INSTALLER_WORKING_GUIDE.md" (
    echo [OK] Working guide found
) else (
    echo [WARNING] Working guide not found
)

if exist "WORK-WITH-INSTALLER.md" (
    echo [OK] Quick reference found
) else (
    echo [WARNING] Quick reference not found
)

if exist "TEST-INSTALLER.bat" (
    echo [OK] Test tool found
) else (
    echo [WARNING] Test tool not found
)

if exist "PREPARE-FOR-CLIENT.bat" (
    echo [OK] Package creator found
) else (
    echo [WARNING] Package creator not found
)
echo.

REM Summary
echo ========================================
echo VERIFICATION SUMMARY
echo ========================================
echo.

if %ERRORS% EQU 0 (
    echo STATUS: ✓ ALL CHECKS PASSED
    echo.
    echo Your installer is ready to use!
    echo.
    echo NEXT STEPS:
    echo 1. Run TEST-INSTALLER.bat to test
    echo 2. Run PREPARE-FOR-CLIENT.bat to package
    echo 3. Send to your client
) else (
    echo STATUS: ✗ %ERRORS% ERROR(S) FOUND
    echo.
    echo Please fix the errors above before proceeding.
    echo.
    echo If installer is missing, you may need to rebuild:
    echo   npm run build:electron
)
echo.

echo ========================================
echo INSTALLER DETAILS
echo ========================================
echo.
echo Location: installer-final\Ghana School Bell System Setup 0.1.3.exe
echo Type: Windows NSIS Installer
echo Version: 0.1.3
echo.
echo Features:
echo   ✓ Offline TTS
echo   ✓ Background audio
echo   ✓ Data persistence
echo   ✓ System tray
echo   ✓ Professional installation
echo.

pause
