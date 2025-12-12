@echo off
echo ========================================
echo QUICK FIX: Copy Out Folder
echo ========================================
echo.

echo This is a temporary workaround that copies the 'out' folder
echo into the existing build.
echo.
echo For a permanent fix, run: REBUILD-WITH-FIX.bat
echo.

REM Check if out folder exists
if not exist "out" (
    echo ERROR: 'out' folder not found!
    echo.
    echo You need to build Next.js first:
    echo   npm run build
    echo.
    pause
    exit /b 1
)

if not exist "out\index.html" (
    echo ERROR: out\index.html not found!
    echo.
    echo Run: npm run build
    echo.
    pause
    exit /b 1
)

echo Found 'out' folder with Next.js build.
echo.

REM Check which build to fix
set TARGET=
if exist "installer-final\win-unpacked" (
    set TARGET=installer-final\win-unpacked
    echo Target: installer-final\win-unpacked
) else if exist "dist\win-unpacked" (
    set TARGET=dist\win-unpacked
    echo Target: dist\win-unpacked
) else if exist "dist-new\win-unpacked" (
    set TARGET=dist-new\win-unpacked
    echo Target: dist-new\win-unpacked
) else (
    echo ERROR: No unpacked build found!
    echo.
    echo Please run: npm run build:electron
    echo.
    pause
    exit /b 1
)

echo.
choice /c YN /n /m "Copy 'out' folder to %TARGET%? (Y/N): "
if errorlevel 2 goto :cancel

echo.
echo Copying files...
xcopy /E /I /Y "out" "%TARGET%\out"
if errorlevel 1 (
    echo.
    echo ERROR: Copy failed!
    pause
    exit /b 1
)

echo.
echo ✓ SUCCESS! Out folder copied.
echo.
echo ========================================
echo QUICK FIX APPLIED
echo ========================================
echo.
echo The app should now open correctly!
echo.
echo Test it: %TARGET%\Ghana School Bell System.exe
echo.

choice /c YN /n /m "Test the app now? (Y/N): "
if errorlevel 2 goto :done

echo.
echo Launching app...
start "" "%TARGET%\Ghana School Bell System.exe"
goto :done

:cancel
echo.
echo Operation cancelled.

:done
echo.
pause
