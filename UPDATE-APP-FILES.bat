@echo off
echo ========================================
echo  Updating App Files (Quick Fix)
echo ========================================
echo.
echo Step 1: Installing asar tool...
call npm install -g @electron/asar
echo.
echo Step 2: Extracting app.asar...
cd build-output\win-unpacked\resources
call npx @electron/asar extract app.asar app
echo.
echo Step 3: Copying fixed files...
cd ..\..\..
copy /Y main.js build-output\win-unpacked\resources\app\main.js
copy /Y preload.js build-output\win-unpacked\resources\app\preload.js
xcopy /E /Y out\* build-output\win-unpacked\resources\app\out\
echo.
echo Step 4: Repackaging app.asar...
cd build-output\win-unpacked\resources
call npx @electron/asar pack app app.asar
echo.
echo Step 5: Cleaning up...
rmdir /S /Q app
cd ..\..\..
echo.
echo ========================================
echo  ✓ App files updated successfully!
echo  
echo  Now run: RUN-UNPACKED-VERSION.bat
echo ========================================
pause
