/**
 * THEHGTECH ENHANCED THEME TOGGLE
 * Smooth transitions, system preference detection, and persistence
 * @version 2.0
 */

(function () {
    'use strict';

    // ========== CONFIGURATION ==========
    const TRANSITION_DURATION = 300; // ms
    const STORAGE_KEY = 'theme';
    const DARK_CLASS = 'dark-mode';
    const LIGHT_CLASS = 'light-mode';

    // ========== INITIAL SETUP (BEFORE RENDER) ==========
    function getInitialTheme() {
        // 1. Check localStorage
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }

        // 2. Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }

        // 3. Default to dark
        return 'dark';
    }

    function applyTheme(theme, animate = false) {
        const html = document.documentElement;
        const body = document.body;

        // Add transition class for smooth animation
        if (animate) {
            html.classList.add('theme-transitioning');
            setTimeout(() => html.classList.remove('theme-transitioning'), TRANSITION_DURATION);
        }

        if (theme === 'light') {
            body.classList.add(LIGHT_CLASS);
            body.classList.remove(DARK_CLASS);
            html.style.colorScheme = 'light';
        } else {
            body.classList.remove(LIGHT_CLASS);
            body.classList.add(DARK_CLASS);
            html.style.colorScheme = 'dark';
        }

        // Update meta theme-color for mobile browsers
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.content = theme === 'light' ? '#ffffff' : '#000000';
        }

        // Store preference
        localStorage.setItem(STORAGE_KEY, theme);

        // Dispatch event for other components
        window.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme, animated: animate }
        }));
    }

    // Apply initial theme immediately (before DOM ready)
    const initialTheme = getInitialTheme();
    if (document.body) {
        applyTheme(initialTheme, false);
    } else {
        // Body not ready yet, add class to html
        if (initialTheme === 'light') {
            document.documentElement.classList.add('prefers-light');
        }
    }

    // ========== INJECT TRANSITION STYLES ==========
    function injectStyles() {
        if (document.getElementById('theme-transition-styles')) return;

        const style = document.createElement('style');
        style.id = 'theme-transition-styles';
        style.textContent = `
            /* ========== SMOOTH THEME TRANSITIONS ========== */
            html.theme-transitioning,
            html.theme-transitioning *,
            html.theme-transitioning *::before,
            html.theme-transitioning *::after {
                transition: 
                    background-color ${TRANSITION_DURATION}ms ease,
                    border-color ${TRANSITION_DURATION}ms ease,
                    color ${TRANSITION_DURATION}ms ease,
                    fill ${TRANSITION_DURATION}ms ease,
                    stroke ${TRANSITION_DURATION}ms ease,
                    box-shadow ${TRANSITION_DURATION}ms ease !important;
            }

            /* ========== ENHANCED TOGGLE BUTTON ========== */
            .theme-toggle-btn {
                position: relative;
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.2s ease;
                overflow: hidden;
            }

            .theme-toggle-btn:hover {
                background: rgba(255, 255, 255, 0.1);
                transform: scale(1.05);
            }

            .theme-toggle-btn:active {
                transform: scale(0.95);
            }

            body.light-mode .theme-toggle-btn {
                background: rgba(0, 0, 0, 0.05);
                border-color: rgba(0, 0, 0, 0.1);
            }

            body.light-mode .theme-toggle-btn:hover {
                background: rgba(0, 0, 0, 0.1);
            }

            /* Icon container with flip animation */
            .theme-toggle-icons {
                position: relative;
                width: 20px;
                height: 20px;
            }

            .theme-toggle-icon {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 1.1rem;
                transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }

            .theme-toggle-icon--sun {
                color: #FFB800;
                opacity: 0;
                transform: translate(-50%, -50%) rotate(-90deg) scale(0.5);
            }

            .theme-toggle-icon--moon {
                color: #9CA3AF;
                opacity: 1;
                transform: translate(-50%, -50%) rotate(0) scale(1);
            }

            body.light-mode .theme-toggle-icon--sun {
                opacity: 1;
                transform: translate(-50%, -50%) rotate(0) scale(1);
            }

            body.light-mode .theme-toggle-icon--moon {
                opacity: 0;
                transform: translate(-50%, -50%) rotate(90deg) scale(0.5);
            }

            /* Tooltip */
            .theme-toggle-btn::after {
                content: 'Switch to light mode';
                position: absolute;
                bottom: -32px;
                left: 50%;
                transform: translateX(-50%);
                padding: 4px 8px;
                background: rgba(0, 0, 0, 0.9);
                border-radius: 4px;
                font-size: 0.7rem;
                color: #fff;
                white-space: nowrap;
                opacity: 0;
                visibility: hidden;
                transition: all 0.2s ease;
                pointer-events: none;
            }

            body.light-mode .theme-toggle-btn::after {
                content: 'Switch to dark mode';
                background: rgba(0, 0, 0, 0.8);
            }

            .theme-toggle-btn:hover::after {
                opacity: 1;
                visibility: visible;
                bottom: -36px;
            }

            /* ========== SYSTEM PREFERENCE INDICATOR ========== */
            .theme-system-indicator {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                font-size: 0.7rem;
                color: rgba(255, 255, 255, 0.4);
                margin-left: 8px;
            }

            body.light-mode .theme-system-indicator {
                color: rgba(0, 0, 0, 0.4);
            }

            /* ========== MOBILE OPTIMIZATIONS ========== */
            @media (max-width: 768px) {
                .theme-toggle-btn {
                    width: 40px;
                    height: 40px;
                }

                .theme-toggle-btn::after {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ========== TOGGLE FUNCTION ==========
    function toggleTheme() {
        const currentTheme = document.body.classList.contains(LIGHT_CLASS) ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme, true);
        return newTheme;
    }

    // Make globally accessible
    window.toggleTheme = toggleTheme;
    window.setTheme = (theme) => applyTheme(theme, true);
    window.getTheme = () => document.body.classList.contains(LIGHT_CLASS) ? 'light' : 'dark';

    // ========== DOM READY SETUP ==========
    function domReady(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    domReady(function () {
        // Inject styles
        injectStyles();

        // Apply theme if not already (for late-loading body)
        if (!document.body.classList.contains(LIGHT_CLASS) && !document.body.classList.contains(DARK_CLASS)) {
            applyTheme(initialTheme, false);
        }

        // Upgrade existing toggle buttons
        upgradeToggleButtons();

        // Listen for system preference changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
            mediaQuery.addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set preference
                const stored = localStorage.getItem(STORAGE_KEY);
                if (!stored) {
                    applyTheme(e.matches ? 'light' : 'dark', true);
                }
            });
        }

        console.log('[ThemeToggle] ✓ Enhanced theme system ready');
    });

    // ========== UPGRADE EXISTING BUTTONS ==========
    function upgradeToggleButtons() {
        // Find existing toggle buttons
        const toggles = document.querySelectorAll('#themeToggle, .theme-toggle, [data-theme-toggle]');

        toggles.forEach(btn => {
            // Skip if already upgraded
            if (btn.dataset.upgraded) return;
            btn.dataset.upgraded = 'true';

            // Add enhanced structure if not present
            if (!btn.querySelector('.theme-toggle-icons')) {
                btn.classList.add('theme-toggle-btn');
                btn.innerHTML = `
                    <div class="theme-toggle-icons">
                        <i class="fas fa-sun theme-toggle-icon theme-toggle-icon--sun"></i>
                        <i class="fas fa-moon theme-toggle-icon theme-toggle-icon--moon"></i>
                    </div>
                `;
            }

            // Bind click
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleTheme();
            });
        });
    }

    // ========== CREATE NEW TOGGLE BUTTON ==========
    window.createThemeToggle = function (container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (!container) return null;

        const btn = document.createElement('button');
        btn.className = 'theme-toggle-btn';
        btn.setAttribute('aria-label', 'Toggle theme');
        btn.dataset.upgraded = 'true';
        btn.innerHTML = `
            <div class="theme-toggle-icons">
                <i class="fas fa-sun theme-toggle-icon theme-toggle-icon--sun"></i>
                <i class="fas fa-moon theme-toggle-icon theme-toggle-icon--moon"></i>
            </div>
        `;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
        });

        container.appendChild(btn);
        return btn;
    };

})();
