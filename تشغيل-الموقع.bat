@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Twenzer Media - Local Site

echo.
echo  ========================================
echo    TWENZER. MEDIA  -  Local Preview
echo  ========================================
echo.
echo  Starting the site... please wait a few seconds.
echo  A browser tab will open automatically at:
echo.
echo      http://localhost:3000
echo.
echo  Keep this window OPEN while viewing the site.
echo  To stop the site: close this window.
echo.

if not exist "node_modules" (
  echo  First run: installing dependencies, this may take a minute...
  call npm install
)

start "" /b cmd /c "timeout /t 7 >nul && start """" http://localhost:3000"

call npm run dev
