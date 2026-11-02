/* ==========================================================================
   THEHGTECH — UNIFIED APPLE LIQUID GLASS THEME CONTROLLER
   Manages dark/light theme persistence, <meta name="color-scheme"> sync,
   cross-tab storage synchronization, and Moon/Sun optical switch hydration.
   ========================================================================== */

(function () {
    'use strict';

    const SWITCH_INNER_HTML =
        '<span class="lg-theme-switch__knob" aria-hidden="true"></span>' +
        '<svg class="icon-moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
            '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' +
        '</svg>' +
        '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
            '<circle cx="12" cy="12" r="4"/>' +
            '<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>' +
        '</svg>';

    function readStoredTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (_) {
            return null;
        }
    }

    function writeStoredTheme(mode) {
        try {
            localStorage.setItem('theme', mode);
        } catch (_) {
            /* ignore storage restrictions */
        }
    }

    function syncMetaColorScheme(isLight) {
        let meta = document.querySelector('meta[name="color-scheme"]');
        if (!meta && document.head) {
            meta = document.createElement('meta');
            meta.name = 'color-scheme';
            document.head.appendChild(meta);
        }
        if (meta) {
            meta.content = isLight ? 'light' : 'dark';
        }
    }

    function syncAriaAndDrawerLabels(isLight) {
        document.querySelectorAll('.lg-theme-switch').forEach(btn => {
            btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
        });
        const menuIcon = document.getElementById('m-menu-theme-icon');
        if (menuIcon) {
            menuIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        }
        const menuText = document.getElementById('m-menu-theme-text');
        if (menuText) {
            menuText.textContent = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode';
        }
    }

    function applyTheme(mode, broadcast) {
        const isLight = mode === 'light';
        if (isLight) {
            document.documentElement.setAttribute('data-theme', 'light');
            if (document.body) document.body.classList.add('light-mode');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (document.body) document.body.classList.remove('light-mode');
        }
        syncMetaColorScheme(isLight);
        syncAriaAndDrawerLabels(isLight);

        if (broadcast) {
            window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: isLight ? 'light' : 'dark' } }));
        }
    }

    // Immediate pre-paint sync
    const initialSaved = readStoredTheme();
    applyTheme(initialSaved === 'light' ? 'light' : 'dark', false);

    // Global toggle entrypoint
    window.toggleTheme = function () {
        const isCurrentlyLight =
            (document.body && document.body.classList.contains('light-mode')) ||
            document.documentElement.getAttribute('data-theme') === 'light';
        const nextMode = isCurrentlyLight ? 'dark' : 'light';
        writeStoredTheme(nextMode);
        applyTheme(nextMode, true);
    };

    // Keep open tabs synchronized automatically
    window.addEventListener('storage', (event) => {
        if (event.key === 'theme' && (event.newValue === 'light' || event.newValue === 'dark')) {
            applyTheme(event.newValue, true);
        }
    });

    function upgradeSwitchButton(btn, isMobile) {
        if (!btn || btn.dataset.lgThemeWired === '1') return;
        btn.dataset.lgThemeWired = '1';

        btn.removeAttribute('onclick');
        btn.removeAttribute('style');
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-label', 'Toggle Dark and Light Theme');
        btn.setAttribute('title', 'Toggle Theme');

        btn.classList.remove('m-theme-toggle', 'theme-toggle', 'premium-cyber-toggle', 'm-header__btn');
        btn.classList.add('lg-theme-switch');
        if (isMobile) {
            btn.classList.add('lg-theme-switch--mobile');
        }

        if (!btn.querySelector('.lg-theme-switch__knob')) {
            btn.innerHTML = SWITCH_INNER_HTML;
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.toggleTheme();
        });
    }

    function initSwitches() {
        applyTheme(readStoredTheme() === 'light' ? 'light' : 'dark', false);

        const mobileTopBtn = document.getElementById('m-theme-toggle-top');
        if (mobileTopBtn) {
            upgradeSwitchButton(mobileTopBtn, true);
        }

        const toggles = document.querySelectorAll('.lg-theme-switch, .theme-toggle, .m-theme-toggle, #themeToggle, .mobile-theme-toggle, .m-header__btn--theme');
        toggles.forEach(btn => {
            if (btn === mobileTopBtn) return;
            upgradeSwitchButton(btn, btn.classList.contains('lg-theme-switch--mobile'));
        });

        const isLight = (document.body && document.body.classList.contains('light-mode')) ||
            document.documentElement.getAttribute('data-theme') === 'light';
        syncAriaAndDrawerLabels(isLight);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSwitches);
    } else {
        initSwitches();
    }
})();
