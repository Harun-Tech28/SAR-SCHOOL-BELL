@echo off
echo ========================================
echo REBUILDING APP WITH FIX
echo ========================================
echo.

echo This will rebuild your app with the missing Next.js files.
echo.
choice /c YN /n /m "Continue? (Y/N): "
if errorlevel 2 goto :cancel

echo.
echo Step 1: Building Next.js static export...
call npm run build
if errorlevel 1 (
    echo.
    echo ERROR: Next.js build failed!
    echo Check the error messages above.
    pause
    exit /b 1
)
echo ✓ Next.js build complete
echo.

echo Step 2: Verifying out folder...
if not exist "out\index.html" (
    echo.
    echo ERROR: out\index.html not found!
    echo Next.js build may have failed.
    pause
    exit /b 1
)
echo ✓ Out folder verified
echo   Found: out\index.html
echo.

echo Step 3: Cleaning old builds...
if exist "dist" (
    echo   Removing dist...
    rmdir /s /q "dist"
)
if exist "dist-new" (
    echo   Removing dist-new...
    rmdir /s /q "dist-new"
)
if exist "dist-fixed" (
    echo   Removing dist-fixed...
    rmdir /s /q "dist-fixed"
)
if exist "installer-final" (
    echo   Removing installer-final...
    rmdir /s /q "installer-final"
)
echo ✓ Old builds cleaned
echo.

echo Step 4: Building Electron app...
echo   This may take a few minutes...
call npm run build:electron
if errorlevel 1 (
    echo.
    echo ERROR: Electron build failed!
    echo Check the error messages above.
    pause
    exit /b 1
)
echo ✓ Electron build complete
echo.

echo Step 5: Verifying fix...
if exist "dist\win-unpacked\out\index.html" (
    echo ✓ SUCCESS! Out folder is now included in build
    echo   Location: dist\win-unpacked\out\
    echo.
    echo The app should now open correctly!
) else (
    echo ✗ WARNING: out folder still not in build
    echo.
    echo Checking alternative locations...
    if exist "dist\win-unpacked\resources\app.asar" (
        echo   Found: app.asar (files may be inside)
        echo   The app might still work.
    )
)
echo.

echo ========================================
echo REBUILD COMPLETE
echo ========================================
echo.
echo Next steps:
echo 1. Test the app: dist\win-unpacked\Ghana School Bell System.exe
echo 2. If it works, the new installer will be in: dist\
echo.

choice /c YN /n /m "Test the app now? (Y/N): "
if errorlevel 2 goto :done

echo.
echo Launching app...
start "" "dist\win-unpacked\Ghana School Bell System.exe"
goto :done

:cancel
echo.
echo Operation cancelled.
goto :done

:done
echo.
pause
