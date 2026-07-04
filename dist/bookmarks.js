/**
 * THEHGTECH BOOKMARK SYSTEM
 * Save articles and guides to read later (localStorage)
 * @version 1.0
 */

class BookmarkSystem {
    constructor() {
        this.bookmarks = this.loadBookmarks();
        this.init();
    }

    init() {
        this.injectStyles();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.injectBookmarkButtons();
        this.createBookmarksPanel();
        this.bindEvents();
        console.log('[BookmarkSystem] ✓ Initialized with', this.bookmarks.length, 'bookmarks');
    }

    injectStyles() {
        if (document.getElementById('bookmark-styles')) return;

        const style = document.createElement('style');
        style.id = 'bookmark-styles';
        style.textContent = `
            /* ========== BOOKMARK BUTTON ========== */
            .bookmark-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.25s ease;
                color: rgba(255, 255, 255, 0.6);
                font-size: 1rem;
            }

            .bookmark-btn:hover {
                background: rgba(255, 255, 255, 0.1);
                border-color: rgba(255, 255, 255, 0.2);
                color: #fff;
                transform: scale(1.05);
            }

            .bookmark-btn.bookmarked {
                background: linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.15) 100%);
                border-color: rgba(255, 193, 7, 0.4);
                color: #FFC107;
            }

            .bookmark-btn.bookmarked:hover {
                background: linear-gradient(135deg, rgba(255, 193, 7, 0.3) 0%, rgba(255, 152, 0, 0.2) 100%);
            }

            body.light-mode .bookmark-btn {
                background: rgba(0, 0, 0, 0.03);
                border-color: rgba(0, 0, 0, 0.1);
                color: rgba(0, 0, 0, 0.5);
            }

            body.light-mode .bookmark-btn:hover {
                background: rgba(0, 0, 0, 0.08);
                color: #000;
            }

            body.light-mode .bookmark-btn.bookmarked {
                background: linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 152, 0, 0.1) 100%);
                border-color: rgba(255, 152, 0, 0.5);
                color: #E65100;
            }

            /* ========== BOOKMARKS PANEL ========== */
            .bookmarks-panel {
                position: fixed;
                top: 0;
                right: -400px;
                width: 380px;
                max-width: 90vw;
                height: 100vh;
                background: linear-gradient(180deg, rgba(20, 20, 25, 0.98) 0%, rgba(15, 15, 20, 0.98) 100%);
                border-left: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
                z-index: 99998;
                transition: right 0.3s cubic-bezier(0.32, 0.72, 0, 1);
                display: flex;
                flex-direction: column;
            }

            .bookmarks-panel.open {
                right: 0;
            }

            body.light-mode .bookmarks-panel {
                background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 252, 0.98) 100%);
                border-color: rgba(0, 0, 0, 0.1);
            }

            .bookmarks-panel__header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }

            body.light-mode .bookmarks-panel__header {
                border-color: rgba(0, 0, 0, 0.08);
            }

            .bookmarks-panel__title {
                font-size: 1.1rem;
                font-weight: 600;
                color: #fff;
                display: flex;
                align-items: center;
                gap: 10px;
            }

            body.light-mode .bookmarks-panel__title {
                color: #1a1a2e;
            }

            .bookmarks-panel__title i {
                color: #FFC107;
            }

            .bookmarks-panel__close {
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.05);
                border: none;
                border-radius: 8px;
                color: rgba(255, 255, 255, 0.6);
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .bookmarks-panel__close:hover {
                background: rgba(255, 255, 255, 0.1);
                color: #fff;
            }

            body.light-mode .bookmarks-panel__close {
                background: rgba(0, 0, 0, 0.05);
                color: rgba(0, 0, 0, 0.6);
            }

            .bookmarks-panel__content {
                flex: 1;
                overflow-y: auto;
                padding: 16px;
            }

            .bookmarks-panel__empty {
                text-align: center;
                padding: 40px 20px;
                color: rgba(255, 255, 255, 0.4);
            }

            .bookmarks-panel__empty i {
                font-size: 3rem;
                margin-bottom: 16px;
                opacity: 0.3;
            }

            body.light-mode .bookmarks-panel__empty {
                color: rgba(0, 0, 0, 0.4);
            }

            /* ========== BOOKMARK ITEM ========== */
            .bookmark-item {
                display: flex;
                gap: 12px;
                padding: 14px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.06);
                border-radius: 10px;
                margin-bottom: 10px;
                transition: all 0.2s ease;
            }

            .bookmark-item:hover {
                background: rgba(255, 255, 255, 0.06);
                border-color: rgba(255, 255, 255, 0.1);
            }

            body.light-mode .bookmark-item {
                background: rgba(0, 0, 0, 0.02);
                border-color: rgba(0, 0, 0, 0.06);
            }

            body.light-mode .bookmark-item:hover {
                background: rgba(0, 0, 0, 0.04);
            }

            .bookmark-item__icon {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                flex-shrink: 0;
                font-size: 0.9rem;
            }

            .bookmark-item__icon--guide {
                background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(10, 150, 100, 0.1) 100%);
                color: #10B981;
            }

            .bookmark-item__icon--article {
                background: linear-gradient(135deg, rgba(255, 61, 61, 0.2) 0%, rgba(200, 50, 50, 0.1) 100%);
                color: #FF3D3D;
            }

            .bookmark-item__content {
                flex: 1;
                min-width: 0;
            }

            .bookmark-item__title {
                font-size: 0.9rem;
                font-weight: 500;
                color: #fff;
                margin-bottom: 4px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            body.light-mode .bookmark-item__title {
                color: #1a1a2e;
            }

            .bookmark-item__title a {
                color: inherit;
                text-decoration: none;
            }

            .bookmark-item__title a:hover {
                color: #00D9FF;
            }

            body.light-mode .bookmark-item__title a:hover {
                color: #0077AA;
            }

            .bookmark-item__meta {
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.4);
            }

            body.light-mode .bookmark-item__meta {
                color: rgba(0, 0, 0, 0.4);
            }

            .bookmark-item__remove {
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: transparent;
                border: none;
                border-radius: 6px;
                color: rgba(255, 255, 255, 0.3);
                cursor: pointer;
                transition: all 0.2s ease;
                flex-shrink: 0;
            }

            .bookmark-item__remove:hover {
                background: rgba(255, 61, 61, 0.2);
                color: #FF3D3D;
            }

            /* ========== BOOKMARKS TRIGGER ========== */
            .bookmarks-trigger {
                position: fixed;
                bottom: 100px;
                right: 20px;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #FFC107 0%, #FF9800 100%);
                border: none;
                border-radius: 50%;
                color: #000;
                font-size: 1.25rem;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(255, 193, 7, 0.4);
                transition: all 0.3s ease;
                z-index: 9997;
            }

            .bookmarks-trigger:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 30px rgba(255, 193, 7, 0.5);
            }

            .bookmarks-trigger__count {
                position: absolute;
                top: -4px;
                right: -4px;
                min-width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #FF3D3D;
                border-radius: 10px;
                font-size: 0.7rem;
                font-weight: 600;
                color: #fff;
                padding: 0 6px;
            }

            .bookmarks-trigger.empty {
                display: none;
            }

            /* ========== OVERLAY ========== */
            .bookmarks-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.5);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 99997;
            }

            .bookmarks-overlay.open {
                opacity: 1;
                visibility: visible;
            }

            /* ========== MOBILE ========== */
            @media (max-width: 768px) {
                .bookmarks-panel {
                    width: 100%;
                    max-width: 100%;
                    right: -100%;
                }

                .bookmarks-trigger {
                    bottom: 80px;
                    right: 16px;
                    width: 44px;
                    height: 44px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ========== BOOKMARK MANAGEMENT ==========

    loadBookmarks() {
        try {
            return JSON.parse(localStorage.getItem('bookmarks') || '[]');
        } catch {
            return [];
        }
    }

    saveBookmarks() {
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
        this.updateUI();
    }

    addBookmark(data) {
        if (this.isBookmarked(data.url)) return false;

        this.bookmarks.unshift({
            ...data,
            id: Date.now().toString(),
            savedAt: new Date().toISOString()
        });
        this.saveBookmarks();

        // Show toast
        if (window.toastSystem) {
            window.toastSystem.show('Bookmark saved!', 'success', 'fa-bookmark');
        }

        return true;
    }

    removeBookmark(url) {
        this.bookmarks = this.bookmarks.filter(b => b.url !== url);
        this.saveBookmarks();

        if (window.toastSystem) {
            window.toastSystem.show('Bookmark removed', 'info', 'fa-bookmark');
        }
    }

    isBookmarked(url) {
        return this.bookmarks.some(b => b.url === url);
    }

    // ========== UI COMPONENTS ==========

    injectBookmarkButtons() {
        // Add bookmark button to guide/article pages
        const path = window.location.pathname;
        const title = document.title.replace(' | TheHGTech', '').replace(' - TheHGTech', '');

        let type = 'page';
        if (path.includes('/guides/')) type = 'guide';
        else if (path.includes('/articles/')) type = 'article';

        // Skip index pages
        if (path === '/' || path.endsWith('/index.html')) return;

        // Find a good place to insert the button
        const header = document.querySelector('.guide-header, .article-header, .page-header');
        const interactionBar = document.querySelector('.interaction-bar');

        if (interactionBar) {
            // Add to interaction bar
            const btn = this.createBookmarkButton(path, title, type);
            btn.style.marginLeft = '8px';
            interactionBar.appendChild(btn);
        } else if (header) {
            // Create floating button
            const btn = this.createBookmarkButton(path, title, type);
            btn.style.position = 'absolute';
            btn.style.top = '20px';
            btn.style.right = '20px';
            header.style.position = 'relative';
            header.appendChild(btn);
        }
    }

    createBookmarkButton(url, title, type) {
        const btn = document.createElement('button');
        btn.className = 'bookmark-btn' + (this.isBookmarked(url) ? ' bookmarked' : '');
        btn.innerHTML = `<i class="fas fa-bookmark"></i>`;
        btn.setAttribute('aria-label', 'Bookmark this page');
        btn.dataset.url = url;
        btn.dataset.title = title;
        btn.dataset.type = type;

        btn.addEventListener('click', () => {
            if (this.isBookmarked(url)) {
                this.removeBookmark(url);
                btn.classList.remove('bookmarked');
            } else {
                this.addBookmark({ url, title, type });
                btn.classList.add('bookmarked');
            }
        });

        return btn;
    }

    createBookmarksPanel() {
        // Overlay
        const overlay = document.createElement('div');
        overlay.className = 'bookmarks-overlay';
        overlay.id = 'bookmarksOverlay';
        document.body.appendChild(overlay);

        // Panel
        const panel = document.createElement('div');
        panel.className = 'bookmarks-panel';
        panel.id = 'bookmarksPanel';
        panel.innerHTML = `
            <div class="bookmarks-panel__header">
                <h3 class="bookmarks-panel__title">
                    <i class="fas fa-bookmark"></i>
                    Saved Bookmarks
                </h3>
                <button class="bookmarks-panel__close" onclick="bookmarkSystem.closePanel()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="bookmarks-panel__content" id="bookmarksList"></div>
        `;
        document.body.appendChild(panel);

        // Floating trigger button
        const trigger = document.createElement('button');
        trigger.className = 'bookmarks-trigger' + (this.bookmarks.length === 0 ? ' empty' : '');
        trigger.id = 'bookmarksTrigger';
        trigger.innerHTML = `
            <i class="fas fa-bookmark"></i>
            <span class="bookmarks-trigger__count">${this.bookmarks.length}</span>
        `;
        trigger.onclick = () => this.openPanel();
        document.body.appendChild(trigger);

        this.panel = panel;
        this.overlay = overlay;
        this.trigger = trigger;

        this.renderBookmarksList();
    }

    renderBookmarksList() {
        const list = document.getElementById('bookmarksList');
        if (!list) return;

        if (this.bookmarks.length === 0) {
            list.innerHTML = `
                <div class="bookmarks-panel__empty">
                    <i class="fas fa-bookmark"></i>
                    <div>No bookmarks yet</div>
                    <p style="margin-top: 8px; font-size: 0.85rem;">Click the bookmark icon on any guide or article to save it here.</p>
                </div>
            `;
            return;
        }

        list.innerHTML = this.bookmarks.map(b => `
            <div class="bookmark-item" data-url="${b.url}">
                <div class="bookmark-item__icon bookmark-item__icon--${b.type}">
                    <i class="fas ${b.type === 'guide' ? 'fa-book' : 'fa-newspaper'}"></i>
                </div>
                <div class="bookmark-item__content">
                    <div class="bookmark-item__title">
                        <a href="${b.url}">${b.title}</a>
                    </div>
                    <div class="bookmark-item__meta">
                        ${b.type.charAt(0).toUpperCase() + b.type.slice(1)} • Saved ${this.formatDate(b.savedAt)}
                    </div>
                </div>
                <button class="bookmark-item__remove" onclick="bookmarkSystem.removeBookmark('${b.url}')" title="Remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        const now = new Date();
        const diff = now - date;

        if (diff < 60000) return 'just now';
        if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
        if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
        if (diff < 604800000) return Math.floor(diff / 86400000) + 'd ago';

        return date.toLocaleDateString();
    }

    updateUI() {
        this.renderBookmarksList();

        // Update trigger count
        if (this.trigger) {
            const count = this.trigger.querySelector('.bookmarks-trigger__count');
            if (count) count.textContent = this.bookmarks.length;
            this.trigger.classList.toggle('empty', this.bookmarks.length === 0);
        }

        // Update any bookmark buttons on page
        document.querySelectorAll('.bookmark-btn').forEach(btn => {
            btn.classList.toggle('bookmarked', this.isBookmarked(btn.dataset.url));
        });
    }

    openPanel() {
        this.panel?.classList.add('open');
        this.overlay?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    closePanel() {
        this.panel?.classList.remove('open');
        this.overlay?.classList.remove('open');
        document.body.style.overflow = '';
    }

    bindEvents() {
        // Close on overlay click
        this.overlay?.addEventListener('click', () => this.closePanel());

        // Close on ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.panel?.classList.contains('open')) {
                this.closePanel();
            }
        });
    }
}

// Initialize
const bookmarkSystem = new BookmarkSystem();
window.bookmarkSystem = bookmarkSystem;
