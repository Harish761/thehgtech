/* ========== PREMIUM THEME TOGGLE ========== */

// Initialize theme immediately to prevent flash
(function () {
    const savedTheme = localStorage.getItem('theme');
    const isLightMode = savedTheme === 'light';

    if (isLightMode) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.add('light-mode');
    }

    // Global toggle function
    window.toggleTheme = function () {
        const isCurrentlyLight = document.body.classList.contains('light-mode') || document.documentElement.getAttribute('data-theme') === 'light';

        if (isCurrentlyLight) {
            document.documentElement.removeAttribute('data-theme');
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
            window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: 'dark' } }));
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: 'light' } }));
        }
    };

    // Construct premium futuristic toggle buttons dynamically
    function upgradeToggles() {
        if (window._pctUpgraded) return;
        window._pctUpgraded = true;

        // 1. Setup the mobile top-header theme button (simple icon swap)
        const mobileTopBtn = document.getElementById('m-theme-toggle-top');
        if (mobileTopBtn) {
            // Function to sync only the top button icon
            const syncTopIcon = () => {
                const icon = mobileTopBtn.querySelector('i');
                if (!icon) return;
                const isLight = document.body.classList.contains('light-mode');
                icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
                console.log('[theme-toggle.js] Top icon synced:', isLight ? 'light' : 'dark');
            };

            // Remove inline onclick if we're wiring it via JS to prevent double-fire
            mobileTopBtn.removeAttribute('onclick');
            
            mobileTopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.toggleTheme();
            });

            // Listen for changes to keep in sync
            window.addEventListener('themeChanged', syncTopIcon);
            syncTopIcon(); // Initial sync
        }

        // 2. Setup all other premium toggles (toggles with track UI)
        const toggles = document.querySelectorAll('.theme-toggle, .m-theme-toggle, #themeToggle, .mobile-theme-toggle, .m-header__btn--theme');
        toggles.forEach(btn => {
            if (btn === mobileTopBtn) return; // Skip top button already handled
            if (btn.classList.contains('premium-cyber-toggle')) return;
            
            // Re-use logic to build the sliding track
            btn.innerHTML = '';
            btn.removeAttribute('style');
            btn.removeAttribute('onclick');
            btn.classList.add('premium-cyber-toggle');

            const track = document.createElement('div');
            track.className = 'pct-track';
            const iconDark = document.createElement('i'); iconDark.className = 'fas fa-moon pct-icon-dark';
            const iconLight = document.createElement('i'); iconLight.className = 'fas fa-sun pct-icon-light';
            const thumb = document.createElement('div'); thumb.className = 'pct-thumb';

            track.appendChild(iconDark);
            track.appendChild(iconLight);
            track.appendChild(thumb);
            btn.appendChild(track);

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.toggleTheme();
            });
        });

        console.log(`[theme-toggle.js] ✓ Upgraded ${toggles.length} toggles.`);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', upgradeToggles);
    } else {
        upgradeToggles();
    }
})();
