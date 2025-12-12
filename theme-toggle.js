/* ========== THEME TOGGLE - GLOBAL ========== */
/* Hardcoded theme toggle functionality for all pages */

(function () {
    'use strict';

    // Initialize theme from localStorage on page load
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }

    // Toggle theme function - exposed globally
    window.toggleTheme = function () {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    };

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initTheme();

            // Attach click handler to theme toggle button
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', window.toggleTheme);
            }
        });
    } else {
        initTheme();

        // Attach click handler to theme toggle button
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', window.toggleTheme);
        }
    }

    // Also run immediately to prevent flash
    initTheme();
})();
