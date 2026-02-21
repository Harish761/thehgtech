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

        // Target any legacy or modern theme toggle button
        const toggles = document.querySelectorAll('.theme-toggle, .m-theme-toggle, #themeToggle, .mobile-theme-toggle, .m-header__btn--theme');

        toggles.forEach(btn => {
            if (btn.classList.contains('premium-cyber-toggle')) return;
            // Strip out old properties
            btn.innerHTML = '';
            btn.removeAttribute('style');
            btn.classList.add('premium-cyber-toggle');

            // Remove legacy inline onClick to prevent double firing
            btn.removeAttribute('onclick');

            // Build new container
            const track = document.createElement('div');
            track.className = 'pct-track';

            // Moon icon (Dark Mode side)
            const iconDark = document.createElement('i');
            iconDark.className = 'fas fa-moon pct-icon-dark';

            // Sun icon (Light Mode side)
            const iconLight = document.createElement('i');
            iconLight.className = 'fas fa-sun pct-icon-light';

            // The moving thumb
            const thumb = document.createElement('div');
            thumb.className = 'pct-thumb';

            // Assemble
            track.appendChild(iconDark);
            track.appendChild(iconLight);
            track.appendChild(thumb);
            btn.appendChild(track);

            // Add clean event listener
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.toggleTheme();
            });
        });

        console.log(`[theme-toggle.js] ✓ Upgraded ${toggles.length} theme toggles to Premium Cyber variant.`);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', upgradeToggles);
    } else {
        upgradeToggles();
    }
})();
