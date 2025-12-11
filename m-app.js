/* ================================================
   M-APP.JS - Mobile App Core JavaScript
   Navigation, Theme, Gestures, Cards
   ================================================ */

(function () {
    'use strict';

    // Only run on mobile
    if (window.innerWidth > 768) return;

    // ========== THEME MANAGEMENT ==========
    const Theme = {
        init() {
            // Check localStorage first
            const saved = localStorage.getItem('theme');
            if (saved === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
                document.body.classList.add('light-mode');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                document.body.classList.remove('light-mode');
            }
            this.updateIcon();
        },

        toggle() {
            const isLight = document.body.classList.contains('light-mode');

            if (isLight) {
                // Switch to dark
                document.documentElement.setAttribute('data-theme', 'dark');
                document.body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                // Switch to light
                document.documentElement.setAttribute('data-theme', 'light');
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            }

            this.updateIcon();

            // Haptic feedback
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        },

        updateIcon() {
            const isLight = document.body.classList.contains('light-mode');
            const btn = document.querySelector('.m-header__btn--theme');
            if (btn) {
                const moonIcon = btn.querySelector('.fa-moon');
                const sunIcon = btn.querySelector('.fa-sun');
                if (moonIcon) moonIcon.style.display = isLight ? 'none' : 'block';
                if (sunIcon) sunIcon.style.display = isLight ? 'block' : 'none';
            }
        }
    };

    // ========== BOTTOM NAV ==========
    const BottomNav = {
        init() {
            this.highlightCurrent();
            this.addTouchFeedback();
        },

        highlightCurrent() {
            const path = window.location.pathname;
            const items = document.querySelectorAll('.m-bottom-nav__item');

            items.forEach(item => {
                item.classList.remove('active');
                const href = item.getAttribute('href');

                // Exact match or contains match
                if (path === '/' || path === '/index.html' || path.endsWith('/index.html')) {
                    if (href === '/' || href === '/index.html') {
                        item.classList.add('active');
                    }
                } else if (href && href !== '/' && path.includes(href.replace(/^\//, ''))) {
                    item.classList.add('active');
                }
            });
        },

        addTouchFeedback() {
            const items = document.querySelectorAll('.m-bottom-nav__item');
            items.forEach(item => {
                item.addEventListener('touchstart', function () {
                    this.style.transform = 'scale(0.9)';
                }, { passive: true });

                item.addEventListener('touchend', function () {
                    this.style.transform = '';
                }, { passive: true });
            });
        }
    };

    // ========== SEARCH OVERLAY ==========
    const SearchOverlay = {
        overlay: null,
        input: null,

        init() {
            this.overlay = document.querySelector('.m-search-overlay');
            this.input = document.querySelector('.m-search-overlay__input');

            const searchBtn = document.querySelector('[data-action="search"]');
            if (searchBtn) {
                searchBtn.addEventListener('click', () => this.open());
            }

            const cancelBtn = document.querySelector('.m-search-overlay__cancel');
            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => this.close());
            }
        },

        open() {
            if (this.overlay) {
                this.overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                setTimeout(() => this.input?.focus(), 100);
            }
        },

        close() {
            if (this.overlay) {
                this.overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    };

    // ========== HIDE INTERFERING ELEMENTS ==========
    function hideInterferingElements() {
        // Hide Buy Me Coffee and similar floating elements
        const selectors = [
            '.bmc-btn-container',
            '.bmc-btn',
            '[class*="buymeacoffee"]',
            '[class*="bmc"]',
            '.floating-action',
            '#bmc-wbtn'
        ];

        selectors.forEach(sel => {
            const el = document.querySelector(sel);
            if (el) {
                el.style.display = 'none';
            }
        });

        // Also target by iframe
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            if (iframe.src && iframe.src.includes('buymeacoffee')) {
                iframe.style.display = 'none';
            }
        });
    }

    // ========== INITIALIZE ==========
    function init() {
        Theme.init();
        BottomNav.init();
        SearchOverlay.init();
        hideInterferingElements();

        // Expose theme toggle globally
        window.mToggleTheme = Theme.toggle.bind(Theme);
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Also run after a short delay to catch dynamically loaded elements
    setTimeout(hideInterferingElements, 1000);
    setTimeout(hideInterferingElements, 3000);

})();
