/**
 * Performance Optimized Script Loader
 * ====================================
 * Lazy-loads non-critical JavaScript files only when needed
 * or after the page has become interactive.
 * 
 * This reduces initial JS payload by ~50 KiB
 */

(function () {
    'use strict';

    // Scripts to load after page is fully interactive
    const DEFERRED_SCRIPTS = [
        // UX Enhancement Scripts (17 KiB total)
        'recommendation-engine.js',
        'content-hub.js',
        'bookmarks.js',
        'keyboard-shortcuts.js',
        'share-buttons.js',
        'toast.js',
    ];

    // Scripts to load only on user interaction
    const LAZY_SCRIPTS = {
        // Only load when user scrolls to threat intel section
        'threat-intel': [
            'threat-intel.js',
            'threat-intel-tabs.js',
        ],
        // Only load when user opens command palette
        'command-palette': [
            'command-palette.js',
        ],
        // Only load when user interacts with archives
        'archives': [
            'archives-content.js',
        ],
        // Only load on ransomware section
        'ransomware': [
            'ransomware-display.js',
        ],
    };

    // Load a single script
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            // Check if already loaded
            if (document.querySelector(`script[src*="${src}"]`)) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

    // Load multiple scripts
    async function loadScripts(scripts) {
        for (const src of scripts) {
            try {
                await loadScript(src);
            } catch (e) {
                console.warn(`Failed to load: ${src}`);
            }
        }
    }

    // Load deferred scripts after page is interactive
    function loadDeferredScripts() {
        // Use requestIdleCallback if available, otherwise setTimeout
        const scheduleLoad = window.requestIdleCallback ||
            ((cb) => setTimeout(cb, 200));

        scheduleLoad(() => {
            loadScripts(DEFERRED_SCRIPTS);
        });
    }

    // Setup lazy loading for section-specific scripts
    function setupLazyLoading() {
        // Intersection Observer for visible sections
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target.dataset.lazyScripts;
                        if (section && LAZY_SCRIPTS[section]) {
                            loadScripts(LAZY_SCRIPTS[section]);
                            observer.unobserve(entry.target);
                        }
                    }
                });
            }, { rootMargin: '200px' }); // Load 200px before visible

            // Observe sections that need lazy loading
            document.querySelectorAll('[data-lazy-scripts]').forEach(el => {
                observer.observe(el);
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            loadDeferredScripts();
            setupLazyLoading();
        });
    } else {
        loadDeferredScripts();
        setupLazyLoading();
    }

    // Expose for manual triggering
    window.lazyLoadScripts = loadScripts;
    window.LAZY_SCRIPTS = LAZY_SCRIPTS;

})();
