/* ================================================
   M-APP.JS - Mobile App Core JavaScript
   Navigation, Theme, Gestures
   v3.1 - Fixed theme toggle
   ================================================ */

// Execute immediately, not in IIFE
(function () {
    'use strict';

    // ========== THEME TOGGLE (Global) ==========
    function toggleTheme() {
        const body = document.body;
        const html = document.documentElement;
        const isLight = body.classList.contains('light-mode');

        if (isLight) {
            // Switch to dark
            html.setAttribute('data-theme', 'dark');
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
            console.log('Switched to dark mode');
        } else {
            // Switch to light
            html.setAttribute('data-theme', 'light');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            console.log('Switched to light mode');
        }

        updateThemeIcon();
    }

    function updateThemeIcon() {
        const isLight = document.body.classList.contains('light-mode');
        const moonIcons = document.querySelectorAll('.m-header__btn--theme .fa-moon');
        const sunIcons = document.querySelectorAll('.m-header__btn--theme .fa-sun');

        moonIcons.forEach(icon => {
            icon.style.display = isLight ? 'none' : 'inline-block';
        });
        sunIcons.forEach(icon => {
            icon.style.display = isLight ? 'inline-block' : 'none';
        });
    }

    function initTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.classList.add('light-mode');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.classList.remove('light-mode');
        }
        updateThemeIcon();
    }

    // Expose globally IMMEDIATELY
    window.mToggleTheme = toggleTheme;

    // ========== HIDE BMC WIDGET ==========
    function hideBMC() {
        const bmcSelectors = [
            '#bmc-wbtn',
            '.bmc-btn-container',
            '.bmc-btn',
            'script[src*="buymeacoffee"]',
            'div[class*="bmc"]',
            'a[href*="buymeacoffee"]'
        ];

        bmcSelectors.forEach(sel => {
            const elements = document.querySelectorAll(sel);
            elements.forEach(el => {
                el.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; position: absolute !important; left: -9999px !important;';
            });
        });

        // Target by ID more aggressively
        const bmcWidget = document.getElementById('bmc-wbtn');
        if (bmcWidget) {
            bmcWidget.remove();
        }
    }

    // ========== BOTTOM NAV ==========
    function initBottomNav() {
        const path = window.location.pathname;
        const items = document.querySelectorAll('.m-bottom-nav__item');

        items.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');

            if (path === '/' || path === '/index.html' || path.endsWith('/index.html')) {
                if (href === '/' || href === '/index.html') {
                    item.classList.add('active');
                }
            } else if (href && href !== '/' && path.includes(href.replace(/^\//, ''))) {
                item.classList.add('active');
            }
        });
    }

    // ========== MOBILE NEWS CARDS ==========
    let currentNewsIndex = 0;
    let currentCategory = 'cyber';

    function renderMobileNews(category) {
        const container = document.getElementById('newsStackContainer');
        const emptyState = document.getElementById('newsEmptyState');
        const progress = document.getElementById('newsProgress');
        const progressDots = document.getElementById('newsProgressDots');
        const progressCounter = document.getElementById('newsProgressCounter');
        const navControls = document.getElementById('newsNavControls');
        const swipeHint = document.getElementById('newsSwipeHint');

        if (!container || typeof websiteContent === 'undefined') return;

        const newsData = category === 'cyber'
            ? (websiteContent.cyberShorts || [])
            : (websiteContent.aiShorts || []);

        if (newsData.length === 0) {
            if (emptyState) emptyState.style.display = 'flex';
            if (progress) progress.style.display = 'none';
            if (navControls) navControls.style.display = 'none';
            return;
        }

        // Hide empty state, show controls
        if (emptyState) emptyState.style.display = 'none';
        if (progress) progress.style.display = 'flex';
        if (navControls) navControls.style.display = 'flex';
        if (swipeHint) swipeHint.style.display = 'flex';

        // Build dots
        if (progressDots) {
            progressDots.innerHTML = newsData.slice(0, 10).map((_, i) =>
                `<span class="news-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
            ).join('');
        }

        // Build cards
        container.innerHTML = newsData.slice(0, 10).map((item, i) => `
            <div class="mobile-news-card ${i === 0 ? 'active' : ''}" data-index="${i}" style="${i > 0 ? 'display:none;' : ''}">
                <div class="mobile-news-card__source">${escapeHTMLBasic(item.source || 'News')}</div>
                <div class="mobile-news-card__date">${escapeHTMLBasic(item.date || '')}</div>
                <h3 class="mobile-news-card__title">${escapeHTMLBasic(item.title || '')}</h3>
                <p class="mobile-news-card__excerpt">${escapeHTMLBasic((item.content || '').substring(0, 180))}...</p>
                <a href="${item.sourceUrl || '#'}" target="_blank" rel="noopener" class="mobile-news-card__link">
                    Read Full Story <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `).join('');

        currentNewsIndex = 0;
        updateNewsDisplay();
    }

    function updateNewsDisplay() {
        const cards = document.querySelectorAll('.mobile-news-card');
        const dots = document.querySelectorAll('.news-dot');
        const counter = document.getElementById('newsProgressCounter');

        cards.forEach((card, i) => {
            card.style.display = i === currentNewsIndex ? 'block' : 'none';
            card.classList.toggle('active', i === currentNewsIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentNewsIndex);
        });

        if (counter && cards.length > 0) {
            counter.textContent = `${currentNewsIndex + 1} of ${cards.length}`;
        }
    }

    function switchNewsCategory(category) {
        currentCategory = category;
        currentNewsIndex = 0;

        // Update tab buttons
        document.querySelectorAll('.news-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.category === category);
        });

        renderMobileNews(category);
    }

    function navigateNews(direction) {
        const cards = document.querySelectorAll('.mobile-news-card');
        if (cards.length === 0) return;

        if (direction === 'next') {
            currentNewsIndex = (currentNewsIndex + 1) % cards.length;
        } else {
            currentNewsIndex = (currentNewsIndex - 1 + cards.length) % cards.length;
        }
        updateNewsDisplay();
    }

    function escapeHTMLBasic(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // Expose globally
    window.switchNewsCategory = switchNewsCategory;
    window.navigateNews = navigateNews;

    // ========== INIT ON DOM READY ==========
    function init() {
        // Skip on desktop
        if (window.innerWidth > 768) return;

        initTheme();
        initBottomNav();
        hideBMC();

        // Load mobile news after a short delay (content.js needs to load first)
        setTimeout(() => {
            renderMobileNews('cyber');
        }, 500);

        // Setup nav controls
        setTimeout(() => {
            const prevBtn = document.querySelector('.news-nav-btn.prev');
            const nextBtn = document.querySelector('.news-nav-btn.next');
            if (prevBtn) prevBtn.addEventListener('click', () => navigateNews('prev'));
            if (nextBtn) nextBtn.addEventListener('click', () => navigateNews('next'));
        }, 600);

        // Keep hiding BMC periodically (it loads async)
        setTimeout(hideBMC, 500);
        setTimeout(hideBMC, 1000);
        setTimeout(hideBMC, 2000);
        setTimeout(hideBMC, 5000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

// Also add CSS to forcefully hide BMC
(function () {
    if (window.innerWidth > 768) return;

    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            #bmc-wbtn,
            .bmc-btn-container,
            .bmc-btn,
            [class*="buymeacoffee"],
            [id*="bmc"],
            div[style*="buymeacoffee"] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
                position: absolute !important;
                left: -9999px !important;
                width: 0 !important;
                height: 0 !important;
            }
            
            /* Mobile news card styles */
            .mobile-news-card {
                background: var(--m-bg-card, #1a1a1a);
                border: 1px solid var(--m-border, rgba(255,255,255,0.1));
                border-radius: 16px;
                padding: 20px;
                margin: 0 16px;
            }
            
            .mobile-news-card__source {
                color: var(--m-accent-primary, #00D9FF);
                font-size: 0.75rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .mobile-news-card__date {
                color: var(--m-text-tertiary, #666);
                font-size: 0.75rem;
                margin-top: 4px;
            }
            
            .mobile-news-card__title {
                font-size: 1.25rem;
                font-weight: 700;
                line-height: 1.3;
                margin: 12px 0;
                color: var(--m-text-primary, #fff);
            }
            
            .mobile-news-card__excerpt {
                color: var(--m-text-secondary, #aaa);
                font-size: 0.95rem;
                line-height: 1.5;
                margin-bottom: 16px;
            }
            
            .mobile-news-card__link {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                color: var(--m-accent-primary, #00D9FF);
                font-weight: 600;
                font-size: 0.9rem;
                text-decoration: none;
            }
            
            .mobile-news-card__link:active {
                opacity: 0.7;
            }
            
            .news-tab-switcher {
                display: flex;
                gap: 8px;
                padding: 0 16px;
                margin-bottom: 16px;
            }
            
            .news-tab {
                padding: 8px 16px;
                border: 1px solid var(--m-border, rgba(255,255,255,0.1));
                border-radius: 20px;
                background: transparent;
                color: var(--m-text-secondary, #aaa);
                font-size: 0.85rem;
                font-weight: 500;
                cursor: pointer;
            }
            
            .news-tab.active {
                background: #FF3D3D;
                border-color: #FF3D3D;
                color: #fff;
            }
            
            .news-progress {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 12px;
                padding: 16px;
            }
            
            .news-progress-dots {
                display: flex;
                gap: 6px;
            }
            
            .news-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: var(--m-bg-tertiary, #333);
            }
            
            .news-dot.active {
                width: 20px;
                border-radius: 4px;
                background: var(--m-accent-primary, #00D9FF);
            }
            
            .news-progress-counter {
                color: var(--m-text-tertiary, #666);
                font-size: 0.75rem;
            }
            
            .news-nav-controls {
                display: flex;
                justify-content: center;
                gap: 16px;
                padding: 8px 16px;
            }
            
            .news-nav-btn {
                width: 44px;
                height: 44px;
                border-radius: 50%;
                background: var(--m-bg-tertiary, #333);
                border: 1px solid var(--m-border, rgba(255,255,255,0.1));
                color: var(--m-text-primary, #fff);
                font-size: 1rem;
                cursor: pointer;
            }
            
            .news-nav-btn:active {
                background: var(--m-accent-primary, #00D9FF);
                color: #000;
            }
            
            .news-swipe-hint {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                color: var(--m-text-tertiary, #666);
                font-size: 0.75rem;
                padding: 8px;
            }
            
            .news-empty-state {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 40px 20px;
                text-align: center;
            }
            
            .news-empty-icon {
                font-size: 2.5rem;
                color: var(--m-text-tertiary, #666);
                margin-bottom: 12px;
            }
            
            .news-empty-title {
                font-size: 1.1rem;
                font-weight: 600;
                color: var(--m-text-primary, #fff);
                margin-bottom: 8px;
            }
            
            .news-empty-text {
                color: var(--m-text-secondary, #aaa);
                font-size: 0.9rem;
            }
        }
    `;
    document.head.appendChild(style);
})();
