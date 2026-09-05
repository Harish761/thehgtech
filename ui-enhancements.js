function escapeHTMLBasic(str) { if (!str) return ''; return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
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

        // Add keyboard hints to search elements
        const searchButtons = document.querySelectorAll('.m-header__btn--search, .search-btn, [data-action="search"]');
        searchButtons.forEach(btn => {
            if (!btn.querySelector('.keyboard-hint')) {
                addKeyboardHint(btn, '/');
            }
        });

        // Add keyboard hint to search inputs
        const searchInputs = document.querySelectorAll('input[type="search"], .search-input, #searchInput');
        searchInputs.forEach(input => {
            // Add hint as placeholder enhancement
            const wrapper = input.parentElement;
            if (wrapper && !wrapper.querySelector('.keyboard-hint')) {
                const hint = document.createElement('span');
                hint.className = 'keyboard-hint search-hint';
                hint.textContent = '/';
                hint.style.position = 'absolute';
                hint.style.right = '12px';
                hint.style.top = '50%';
                hint.style.transform = 'translateY(-50%)';
                wrapper.style.position = 'relative';
                wrapper.appendChild(hint);
            }
        });

        // Auto-set active state for mobile bottom navigation globally mapped via url
        const bottomNavItems = document.querySelectorAll('.m-bottom-nav__item');
        if (bottomNavItems.length > 0) {
            const currentPath = window.location.pathname;
            const currentHash = window.location.hash;
            let activeSet = false;

            bottomNavItems.forEach(item => {
                // remove statically rendered active state
                item.classList.remove('active');

                const href = item.getAttribute('href');
                if (!href) return;

                // Match exact paths
                if (href === currentPath || (href === '/' && currentPath === '/index.html')) {
                    item.classList.add('active');
                    activeSet = true;
                    // Auto scroll the nav to ensure the active item is visible
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
                // Special match for hash routes like /#news or index.html#news
                else if (href.includes('#') && (currentPath + currentHash).includes(href.replace('/index.html', '').replace('/', ''))) {
                    item.classList.add('active');
                    activeSet = true;
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
                // Partial match for nested routes (e.g. /guides/xxx matching /guides/)
                else if (href !== '/' && currentPath.startsWith(href)) {
                    item.classList.add('active');
                    activeSet = true;
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            });

            // Fallback for sub-pages to match their top-level directory
            if (!activeSet) {
                if (currentPath.includes('/guides/')) {
                    const guidesTab = document.querySelector('.m-bottom-nav__item[href*="/guides"]');
                    if (guidesTab) { guidesTab.classList.add('active'); guidesTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }
                } else if (currentPath.includes('/articles/')) {
                    const articlesTab = document.querySelector('.m-bottom-nav__item[href*="/articles"]');
                    if (articlesTab) { articlesTab.classList.add('active'); articlesTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }
                }
            }
        }
    });

    // Export to global scope
    window.SkeletonHelper = SkeletonHelper;
    window.LoadingStates = LoadingStates;
    window.addKeyboardHint = addKeyboardHint;

})();

// ========== CYBER COOKIE BANNER ==========
(function () {
    function initCyberCookie() {
        if (localStorage.getItem('hg_cyber_cookie') === 'true') return;

        const banner = document.createElement('div');
        banner.className = 'cyber-cookie-banner';
        banner.innerHTML = `
            <div class="cyber-cookie-content">
                <h4 class="cyber-cookie-title"><i class="fas fa-shield-alt"></i> Security Clearance</h4>
                <p class="cyber-cookie-text">Protocol requires telemetry authorization. We use minimal cookies to operationalize this node. No tracking. Do you accept the protocol?</p>
            </div>
            <button class="cyber-cookie-btn">Authorize</button>
        `;

        document.body.appendChild(banner);

        // trigger slide up animation
        setTimeout(() => banner.classList.add('active'), 1500);

        banner.querySelector('.cyber-cookie-btn').addEventListener('click', () => {
            localStorage.setItem('hg_cyber_cookie', 'true');
            banner.classList.remove('active');
            setTimeout(() => banner.remove(), 600);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCyberCookie);
    } else {
        initCyberCookie();
    }
})();

// ========== COMMAND CENTER NOTIFICATION DRAWER ==========
(function() {
    class CommandCenter {
        constructor() {
            this.articles = [];
            this.changelog = [];
            this.hasNew = false;
            this.lastViewTime = localStorage.getItem('hg_cc_last_view') || '1970-01-01T00:00:00Z';
            this.thirtyDaysAgo = new Date();
            this.thirtyDaysAgo.setDate(this.thirtyDaysAgo.getDate() - 30);
            
            this.init();
        }

        async init() {
            this.injectIcons();
            this.createDrawer();
            await this.fetchData();
            this.checkNewItems();
            this.renderTabs();
        }

        injectIcons() {
            if (document.querySelector('.nav-bell-btn')) return; // Prevent double injection
            
            // Desktop Header Injection (Before the search button if exists)
            const desktopNav = document.querySelector('.nav-modern');
            if (desktopNav) {
                const searchBtn = desktopNav.querySelector('.desktop-search-btn') || desktopNav.querySelector('.m-theme-toggle');
                const bellHtml = `<button class="nav-bell-btn cc-trigger" aria-label="Command Center" title="What's New">
                                    <i class="fas fa-bell"></i>
                                    <span class="pulse"></span>
                                  </button>`;
                if (searchBtn) {
                    searchBtn.insertAdjacentHTML('beforebegin', bellHtml);
                } else {
                    desktopNav.insertAdjacentHTML('beforeend', bellHtml);
                }
            }

            // Mobile Header Injection
            const mobileActions = document.querySelector('.m-header__actions');
            if (mobileActions) {
                const searchBtn = mobileActions.querySelector('[data-action="command-palette"]');
                const bellHtml = `<button class="m-header__btn cc-trigger nav-bell-btn" aria-label="Command Center" style="margin-left:0; padding:0; width: 44px; height: 44px;">
                                    <i class="fas fa-bell"></i>
                                    <span class="pulse"></span>
                                  </button>`;
                if (searchBtn) {
                    searchBtn.insertAdjacentHTML('beforebegin', bellHtml);
                } else {
                    mobileActions.insertAdjacentHTML('afterbegin', bellHtml);
                }
            }

            document.querySelectorAll('.cc-trigger').forEach(btn => {
                btn.addEventListener('click', () => this.toggleDrawer());
            });
        }

        createDrawer() {
            const html = `
                <div class="cc-overlay" id="ccOverlay"></div>
                <div class="cc-drawer" id="ccDrawer">
                    <div class="cc-header">
                        <h3 class="cc-title"><i class="fas fa-terminal" style="color:var(--accent-cyan)"></i> Command Center</h3>
                        <button class="cc-close" id="ccClose"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="cc-tabs">
                        <div class="cc-tab active" data-target="cc-intel">Intel Feed</div>
                        <div class="cc-tab" data-target="cc-changelog">Platform Updates</div>
                    </div>
                    <div class="cc-content">
                        <div class="cc-pane active" id="cc-intel"></div>
                        <div class="cc-pane" id="cc-changelog"></div>
                    </div>
                </div>
                <div class="cc-modal-overlay" id="ccModalOverlay">
                    <div class="cc-modal" id="ccModal">
                        <div class="cc-modal-header">
                            <div class="cc-modal-icon" id="ccModalIcon"><i class="fas fa-bolt"></i></div>
                            <button class="cc-modal-close" id="ccModalClose"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="cc-modal-date" id="ccModalDate"></div>
                        <h3 class="cc-modal-title" id="ccModalTitle"></h3>
                        <p class="cc-modal-desc" id="ccModalDesc"></p>
                        <div id="ccModalAction" style="margin-top: 25px; display: none;">
                            <a href="#" id="ccModalLink" style="display:inline-block; background:linear-gradient(135deg, rgba(0,217,255,0.1), rgba(0,217,255,0.25)); color:#00D9FF; padding:10px 24px; border:1px solid #00D9FF; border-radius:6px; font-weight:700; text-transform:uppercase; letter-spacing:1px; text-decoration:none; font-size:0.9rem; transition:all 0.3s ease;">View Integration</a>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', html);

            document.getElementById('ccOverlay').addEventListener('click', () => this.toggleDrawer());
            document.getElementById('ccClose').addEventListener('click', () => this.toggleDrawer());
            
            document.getElementById('ccModalOverlay').addEventListener('click', (e) => {
                if (e.target.id === 'ccModalOverlay') this.closeModal();
            });
            document.getElementById('ccModalClose').addEventListener('click', () => this.closeModal());
            
            document.querySelectorAll('.cc-tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    document.querySelectorAll('.cc-tab, .cc-pane').forEach(el => el.classList.remove('active'));
                    tab.classList.add('active');
                    document.getElementById(tab.dataset.target).classList.add('active');
                });
            });
        }

        async fetchData() {
            try {
                const cacheBuster = `?v=${Date.now()}`;
                // Fetch Articles
                const artRes = await fetch('/ioc-data/articles.json' + cacheBuster);
                if (artRes.ok) {
                    const data = await artRes.json();
                    this.articles = this.filterAndSort(data.articles || []);
                }

                // Fetch Changelog
                const clRes = await fetch('/ioc-data/changelog.json' + cacheBuster);
                if (clRes.ok) {
                    const data = await clRes.json();
                    this.changelog = this.filterAndSort(data.changelog || []);
                }
            } catch (e) {
            }
        }

        filterAndSort(items) {
            // Sort by date descending
            let sorted = items.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            // Filter: within 30 days OR top 5
            let filtered = sorted.filter((item, index) => {
                return new Date(item.date) >= this.thirtyDaysAgo || index < 5;
            });
            return filtered;
        }

        checkNewItems() {
            const lastView = new Date(this.lastViewTime);
            let isNew = false;
            
            if (this.articles.length > 0 && new Date(this.articles[0].date) > lastView) isNew = true;
            if (this.changelog.length > 0 && new Date(this.changelog[0].date) > lastView) isNew = true;

            this.hasNew = isNew;

            if (this.hasNew) {
                document.querySelectorAll('.nav-bell-btn').forEach(b => b.classList.add('has-new'));
            }
        }

        renderTabs() {
            const lastView = new Date(this.lastViewTime);

            // Render Intel
            const intelPane = document.getElementById('cc-intel');
            if (this.articles.length === 0) {
                intelPane.innerHTML = '<div class="cc-empty"><i class="fas fa-inbox"></i><p>No recent intel.</p></div>';
            } else {
                intelPane.innerHTML = this.articles.map(a => {
                    const isNew = new Date(a.date) > lastView;
                    const dateStr = new Date(a.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                    return `
                        <a href="${(a.externalUrl || '').startsWith('/') ? a.externalUrl : '/' + (a.externalUrl || '')}" class="cc-item ${isNew ? 'new-item' : ''}">
                            <div class="cc-item-icon" style="color: var(--accent-cyan); background: rgba(0, 217, 255, 0.1);"><i class="fas fa-newspaper"></i></div>
                            <div class="cc-item-content">
                                <div class="cc-item-date">
                                    <span>${dateStr}</span>
                                    ${isNew ? '<span class="cc-item-badge">NEW</span>' : ''}
                                </div>
                                <h4 class="cc-item-title">${a.title}</h4>
                                <p class="cc-item-desc">${a.excerpt || ''}</p>
                            </div>
                        </a>
                    `;
                }).join('');
            }

            // Render Changelog
            const clPane = document.getElementById('cc-changelog');
            if (this.changelog.length === 0) {
                clPane.innerHTML = '<div class="cc-empty"><i class="fas fa-inbox"></i><p>No recent updates.</p></div>';
            } else {
                clPane.innerHTML = this.changelog.map((c, index) => {
                    const isNew = new Date(c.date) > lastView;
                    const dateStr = new Date(c.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                    const tagHtml = c.type === 'feature' ? '<span style="color:#10B981; font-size:0.75rem; margin-right:5px;">[FEATURE]</span>' : '';
                    return `
                        <div class="cc-item cc-cl-item ${isNew ? 'new-item' : ''}" data-index="${index}" style="cursor:pointer;">
                            <div class="cc-item-icon" style="color: #8b5cf6; background: rgba(139, 92, 246, 0.1);"><i class="fas ${c.icon || 'fa-bolt'}"></i></div>
                            <div class="cc-item-content">
                                <div class="cc-item-date">
                                    <span>${dateStr}</span>
                                    ${isNew ? '<span class="cc-item-badge">NEW</span>' : ''}
                                </div>
                                <h4 class="cc-item-title">${tagHtml}${c.title}</h4>
                                <p class="cc-item-desc">${c.description || ''}</p>
                            </div>
                        </div>
                    `;
                }).join('');

                // Add click listeners for modal
                document.querySelectorAll('.cc-cl-item').forEach(el => {
                    el.addEventListener('click', () => {
                        this.openModal(this.changelog[el.dataset.index]);
                    });
                });
            }
        }

        openModal(item) {
            const dateStr = new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            const tagStr = item.type === 'feature' ? '[FEATURE] ' : '[ENHANCEMENT] ';
            
            document.getElementById('ccModalIcon').innerHTML = `<i class="fas ${escapeHTMLBasic(item.icon) || 'fa-bolt'}"></i>`;
            document.getElementById('ccModalDate').innerText = dateStr;
            document.getElementById('ccModalTitle').innerText = tagStr + item.title;
            document.getElementById('ccModalDesc').innerText = item.description || '';
            
            const actionBtn = document.getElementById('ccModalAction');
            if (item.url) {
                actionBtn.style.display = 'block';
                document.getElementById('ccModalLink').href = item.url;
            } else {
                actionBtn.style.display = 'none';
            }

            document.getElementById('ccModalOverlay').classList.add('active');
        }

        closeModal() {
            document.getElementById('ccModalOverlay').classList.remove('active');
        }

        toggleDrawer() {
            const drawer = document.getElementById('ccDrawer');
            const overlay = document.getElementById('ccOverlay');
            
            const isOpening = !drawer.classList.contains('active');
            
            if (isOpening) {
                drawer.classList.add('active');
                overlay.classList.add('active');
                
                // Update last view time
                this.lastViewTime = new Date().toISOString();
                localStorage.setItem('hg_cc_last_view', this.lastViewTime);
                document.querySelectorAll('.nav-bell-btn').forEach(b => b.classList.remove('has-new'));
                
                // Re-render to clear 'new-item' left borders
                setTimeout(() => this.renderTabs(), 500); 
            } else {
                drawer.classList.remove('active');
                overlay.classList.remove('active');
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new CommandCenter());
    } else {
        new CommandCenter();
    }
})();
