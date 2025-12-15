/* ========== THEME TOGGLE - GLOBAL ========== */
/* Baseline theme toggle - same as index.html */

// Initialize theme immediately to prevent flash
(function () {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }
})();

// Global toggle function
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    // Dispatch event for charts/other components
    window.dispatchEvent(new CustomEvent('themeChanged', {
        detail: { theme: isLight ? 'light' : 'dark' }
    }));
}

// Attach click listener when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.addEventListener('click', toggleTheme);
        console.log('[theme-toggle.js] ✓ Attached to #themeToggle');
    } else {
        console.warn('[theme-toggle.js] ✗ #themeToggle not found');
    }
});
