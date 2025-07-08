@echo off
REM One-click script to start Vite dev server in the correct directory
cd /d %~dp0
npm run dev
pause 