/**
 * UI ENHANCEMENTS - Back to Top, Skeleton Loaders, etc.
 * Version: 1.0
 */

(function () {
    'use strict';

    // ========== BACK TO TOP BUTTON ==========
    class BackToTop {
        constructor() {
            this.button = null;
            this.threshold = 400; // Show after scrolling 400px
            this.init();
        }

        init() {
            this.createButton();
            this.bindEvents();
            console.log('[BackToTop] ✓ Initialized');
        }

        createButton() {
            const btn = document.createElement('button');
            btn.className = 'back-to-top';
            btn.setAttribute('aria-label', 'Scroll to top');
            btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            document.body.appendChild(btn);
            this.button = btn;
        }

        bindEvents() {
            // Scroll listener with throttling
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        this.toggleVisibility();
                        ticking = false;
                    });
                    ticking = true;
                }
            });

            // Click handler
            this.button.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        toggleVisibility() {
            if (window.scrollY > this.threshold) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        }
    }

    // ========== SKELETON LOADER HELPER ==========
    const SkeletonHelper = {
        /**
         * Create a skeleton card HTML
         */
        createCard: function (options = {}) {
            const {
                showBadge = true,
                titleWidth = '70%',
                lines = 3
            } = options;

            let html = '<div class="skeleton-card">';

            if (showBadge) {
                html += '<div class="skeleton-loader skeleton-badge"></div>';
            }

            html += `<div class="skeleton-loader skeleton-title" style="width: ${titleWidth}"></div>`;

            for (let i = 0; i < lines; i++) {
                const width = i === lines - 1 ? '50%' : '100%';
                html += `<div class="skeleton-loader skeleton-text" style="width: ${width}"></div>`;
            }

            html += '</div>';
            return html;
        },

        /**
         * Create multiple skeleton cards in a grid
         */
        createGrid: function (count = 6, options = {}) {
            let html = '<div class="skeleton-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">';
            for (let i = 0; i < count; i++) {
                html += this.createCard(options);
            }
            html += '</div>';
            return html;
        },

        /**
         * Show skeleton in a container
         */
        show: function (container, count = 3, options = {}) {
            if (typeof container === 'string') {
                container = document.querySelector(container);
            }
            if (container) {
                container.innerHTML = this.createGrid(count, options);
            }
        },

        /**
         * Replace skeleton with real content
         */
        replace: function (container, content, animate = true) {
            if (typeof container === 'string') {
                container = document.querySelector(container);
            }
            if (container) {
                container.innerHTML = content;
                if (animate) {
                    container.querySelectorAll(':scope > *').forEach((el, i) => {
                        el.style.animation = `fadeIn 0.3s ease ${i * 0.05}s forwards`;
                        el.style.opacity = '0';
                    });
                }
            }
        }
    };

    // ========== LOADING STATE HELPERS ==========
    const LoadingStates = {
        /**
         * Create a loading spinner
         */
        createSpinner: function (message = 'Loading...') {
            return `
                <div class="loading-state">
                    <div class="loading-spinner"></div>
                    <div class="loading-text">${message}</div>
                </div>
            `;
        },

        /**
         * Create an error state with retry button
         */
        createError: function (message = 'Failed to load data', onRetry = null) {
            const retryId = 'retry-' + Math.random().toString(36).substr(2, 9);
            const html = `
                <div class="error-state">
                    <div class="error-state__icon"><i class="fas fa-exclamation-circle"></i></div>
                    <div class="error-state__message">${message}</div>
                    <button class="error-state__retry" id="${retryId}">
                        <i class="fas fa-redo"></i> Try Again
                    </button>
                </div>
            `;

            // Bind retry handler after DOM insertion
            if (onRetry) {
                setTimeout(() => {
                    const btn = document.getElementById(retryId);
                    if (btn) btn.addEventListener('click', onRetry);
                }, 0);
            }

            return html;
        },

        /**
         * Create an empty state
         */
        createEmpty: function (message = 'No data available', icon = 'fa-inbox') {
            return `
                <div class="empty-state">
                    <div class="empty-state__icon"><i class="fas ${icon}"></i></div>
                    <div class="empty-state__message">${message}</div>
                </div>
            `;
        }
    };

    // ========== KEYBOARD SHORTCUT HINT ==========
    function addKeyboardHint(element, shortcut) {
        if (!element) return;

        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const formattedShortcut = shortcut.replace('Ctrl', isMac ? '⌘' : 'Ctrl');

        const hint = document.createElement('span');
        hint.className = 'keyboard-hint';
        hint.textContent = formattedShortcut;
        element.appendChild(hint);
    }

    // ========== INITIALIZE ==========
    document.addEventListener('DOMContentLoaded', function () {
        // Only create back-to-top if not already exists
        if (!document.querySelector('.back-to-top')) {
            new BackToTop();
        }
    });

    // Export to global scope
    window.SkeletonHelper = SkeletonHelper;
    window.LoadingStates = LoadingStates;
    window.addKeyboardHint = addKeyboardHint;

})();
