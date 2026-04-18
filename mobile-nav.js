// Mobile Hamburger Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('m-hamburger-btn');
    const closeBtn = document.getElementById('m-menu-close-btn');
    const overlay = document.getElementById('m-menu-overlay');

    if (hamburgerBtn && closeBtn && overlay) {
        hamburgerBtn.addEventListener('click', () => {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Sync hamburger-menu theme label with current mode
        window.updateMenuThemeLabel = function () {
            const isLight = document.body.classList.contains('light-mode');
            const icon = document.getElementById('m-menu-theme-icon');
            const text = document.getElementById('m-menu-theme-text');
            if (icon && text) {
                icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
                text.textContent = isLight ? 'Enable Dark Mode' : 'Enable Light Mode';
            }
        };

        // Keep hamburger menu label in sync with themeChanged events
        window.addEventListener('themeChanged', () => {
            if (typeof updateMenuThemeLabel === 'function') updateMenuThemeLabel();
        });

        updateMenuThemeLabel();
    }
});
