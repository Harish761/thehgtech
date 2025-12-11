/* ================================================
   M-APP.JS - Mobile App Core JavaScript
   Navigation, Theme, Gestures
   v3.1 - Fixed theme toggle
   ================================================ */

// Execute immediately, not in IIFE
(function () {
    'use strict';

    // ========== THEME TOGGLE (Global) ==========
    function toggleTheme() {
        const body = document.body;
        const html = document.documentElement;
        const isLight = body.classList.contains('light-mode');

        if (isLight) {
            // Switch to dark
            html.setAttribute('data-theme', 'dark');
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
            console.log('Switched to dark mode');
        } else {
            // Switch to light
            html.setAttribute('data-theme', 'light');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            console.log('Switched to light mode');
        }

        updateThemeIcon();
    }

    function updateThemeIcon() {
        const isLight = document.body.classList.contains('light-mode');
        const moonIcons = document.querySelectorAll('.m-header__btn--theme .fa-moon');
        const sunIcons = document.querySelectorAll('.m-header__btn--theme .fa-sun');

        moonIcons.forEach(icon => {
            icon.style.display = isLight ? 'none' : 'inline-block';
        });
        sunIcons.forEach(icon => {
            icon.style.display = isLight ? 'inline-block' : 'none';
        });
    }

    function initTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.classList.add('light-mode');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.classList.remove('light-mode');
        }
        updateThemeIcon();
    }

    // Expose globally IMMEDIATELY
    window.mToggleTheme = toggleTheme;

    // ========== HIDE BMC WIDGET ==========
    function hideBMC() {
        const bmcSelectors = [
            '#bmc-wbtn',
            '.bmc-btn-container',
            '.bmc-btn',
            'script[src*="buymeacoffee"]',
            'div[class*="bmc"]',
            'a[href*="buymeacoffee"]'
        ];

        bmcSelectors.forEach(sel => {
            const elements = document.querySelectorAll(sel);
            elements.forEach(el => {
                el.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; position: absolute !important; left: -9999px !important;';
            });
        });

        // Target by ID more aggressively
        const bmcWidget = document.getElementById('bmc-wbtn');
        if (bmcWidget) {
            bmcWidget.remove();
        }
    }

    // ========== BOTTOM NAV ==========
    function initBottomNav() {
        const path = window.location.pathname;
        const items = document.querySelectorAll('.m-bottom-nav__item');

        items.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');

            if (path === '/' || path === '/index.html' || path.endsWith('/index.html')) {
                if (href === '/' || href === '/index.html') {
                    item.classList.add('active');
                }
            } else if (href && href !== '/' && path.includes(href.replace(/^\//, ''))) {
                item.classList.add('active');
            }
        });
    }

    // ========== INIT ON DOM READY ==========
    function init() {
        // Skip on desktop
        if (window.innerWidth > 768) return;

        initTheme();
        initBottomNav();
        hideBMC();

        // Keep hiding BMC periodically (it loads async)
        setTimeout(hideBMC, 500);
        setTimeout(hideBMC, 1000);
        setTimeout(hideBMC, 2000);
        setTimeout(hideBMC, 5000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

// Also add CSS to forcefully hide BMC
(function () {
    if (window.innerWidth > 768) return;

    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            #bmc-wbtn,
            .bmc-btn-container,
            .bmc-btn,
            [class*="buymeacoffee"],
            [id*="bmc"],
            div[style*="buymeacoffee"] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
                position: absolute !important;
                left: -9999px !important;
                width: 0 !important;
                height: 0 !important;
            }
        }
    `;
    document.head.appendChild(style);
})();
