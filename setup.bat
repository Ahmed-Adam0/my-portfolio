@echo off
REM 🚀 Quick Setup Script - Angular Portfolio Upgrade
REM Run this from your project root

echo.
echo 📦 Installing dependencies...
echo.

call npm install @ngx-translate/core @ngx-translate/http-loader gsap aos --save

echo.
echo ✅ Dependencies installed!
echo.
echo 📝 Next steps:
echo 1. Update hero.component.html with the template from IMPLEMENTATION_GUIDE.md
echo 2. Update projects component files
echo 3. Update contact component files
echo 4. Run: npm start
echo.
echo 🎨 Features ready:
echo ✓ Theme toggle (Light/Dark)
echo ✓ Language toggle (English/Arabic RTL)
echo ✓ Typewriter effect
echo ✓ 3D Tilt cards
echo ✓ Smooth animations
echo ✓ Glassmorphism effects
echo ✓ Custom cursors
echo.
echo 🌐 Access at: http://localhost:4200
echo.
pause
