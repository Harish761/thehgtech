// Mobile Hamburger Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('m-hamburger-btn');
    const closeBtn = document.getElementById('m-menu-close-btn');
    const overlay = document.getElementById('m-menu-overlay');
    const topThemeBtn = document.getElementById('m-theme-toggle-top');
    
    if (topThemeBtn) {
        topThemeBtn.addEventListener('click', () => {
            if (typeof toggleTheme === 'function') {
                toggleTheme();
                if(typeof updateMenuThemeLabel === 'function') updateMenuThemeLabel();
            }
        });
    }

    if (hamburgerBtn && closeBtn && overlay) {
        hamburgerBtn.addEventListener('click', () => {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop background scrolling
        });
        
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = ''; 
        });
        
        // Update theme label based on current mode
        window.updateMenuThemeLabel = function() {
            const isLight = document.body.classList.contains('light-mode');
            const icon = document.getElementById('m-menu-theme-icon');
            const text = document.getElementById('m-menu-theme-text');
            
            if(icon && text) {
                if (isLight) {
                    icon.className = 'fas fa-sun';
                    text.textContent = 'Enable Dark Mode';
                } else {
                    icon.className = 'fas fa-moon';
                    text.textContent = 'Enable Light Mode';
                }
            }
            
            if(topThemeBtn) {
                const topIcon = topThemeBtn.querySelector('i');
                if(topIcon) {
                     if (isLight) {
                         topIcon.className = 'fas fa-sun';
                     } else {
                         topIcon.className = 'fas fa-moon';
                     }
                }
            }
        };
        updateMenuThemeLabel();
    }
});
