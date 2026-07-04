/**
 * THEHGTECH CONTENT HUB ENHANCEMENTS
 * Article filtering, infinite scroll, and pagination
 * @version 1.0
 */

class ContentHub {
    constructor() {
        this.items = [];
        this.filteredItems = [];
        this.currentPage = 1;
        this.itemsPerPage = 12;
        this.activeFilters = { category: 'all', sort: 'newest' };
        this.isLoading = false;
        this.hasMore = true;
        this.container = null;

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
        // Find the content container
        this.container = document.querySelector('.content-hub, .articles-grid, .guides-grid, #articlesGrid, #guidesGrid');
        if (!this.container) return;

        // Check if filter bar exists, if not inject it
        if (!document.querySelector('.content-hub__filters')) {
            this.injectFilterBar();
        }

        // Bind filter events
        this.bindFilters();

        // Setup infinite scroll or load more
        this.setupInfiniteScroll();

        console.log('[ContentHub] ✓ Initialized');
    }

    injectStyles() {
        if (document.getElementById('content-hub-styles')) return;

        const style = document.createElement('style');
        style.id = 'content-hub-styles';
        style.textContent = `
            /* ========== FILTER BAR ========== */
            .content-hub__filters {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 2rem;
                padding: 1rem 1.25rem;
                background: rgba(255, 255, 255, 0.02);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 12px;
            }

            body.light-mode .content-hub__filters {
                background: rgba(0, 0, 0, 0.02);
                border-color: rgba(0, 0, 0, 0.08);
            }

            .content-hub__filter-group {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }

            /* Filter Pills */
            .filter-pill {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 8px 16px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                font-size: 0.85rem;
                color: rgba(255, 255, 255, 0.7);
                cursor: pointer;
                transition: all 0.2s ease;
                user-select: none;
            }

            .filter-pill:hover {
                background: rgba(255, 255, 255, 0.08);
                border-color: rgba(255, 255, 255, 0.2);
            }

            .filter-pill.active {
                background: linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(0, 180, 220, 0.1) 100%);
                border-color: rgba(0, 217, 255, 0.4);
                color: #00D9FF;
            }

            body.light-mode .filter-pill {
                background: rgba(0, 0, 0, 0.03);
                border-color: rgba(0, 0, 0, 0.1);
                color: rgba(0, 0, 0, 0.7);
            }

            body.light-mode .filter-pill:hover {
                background: rgba(0, 0, 0, 0.06);
            }

            body.light-mode .filter-pill.active {
                background: linear-gradient(135deg, rgba(0, 119, 170, 0.15) 0%, rgba(0, 100, 150, 0.1) 100%);
                border-color: rgba(0, 119, 170, 0.4);
                color: #0077AA;
            }

            .filter-pill__count {
                font-size: 0.7rem;
                padding: 2px 6px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
            }

            .filter-pill.active .filter-pill__count {
                background: rgba(0, 217, 255, 0.2);
            }

            /* Sort Dropdown */
            .sort-dropdown {
                position: relative;
            }

            .sort-dropdown__trigger {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 14px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                font-size: 0.85rem;
                color: rgba(255, 255, 255, 0.8);
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .sort-dropdown__trigger:hover {
                border-color: rgba(255, 255, 255, 0.2);
            }

            body.light-mode .sort-dropdown__trigger {
                background: rgba(0, 0, 0, 0.03);
                border-color: rgba(0, 0, 0, 0.1);
                color: rgba(0, 0, 0, 0.8);
            }

            .sort-dropdown__menu {
                position: absolute;
                top: 100%;
                right: 0;
                margin-top: 4px;
                min-width: 160px;
                background: rgba(30, 30, 35, 0.98);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.2s ease;
                z-index: 100;
            }

            .sort-dropdown:hover .sort-dropdown__menu,
            .sort-dropdown.open .sort-dropdown__menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            body.light-mode .sort-dropdown__menu {
                background: rgba(255, 255, 255, 0.98);
                border-color: rgba(0, 0, 0, 0.1);
            }

            .sort-dropdown__item {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 14px;
                font-size: 0.85rem;
                color: rgba(255, 255, 255, 0.8);
                cursor: pointer;
                transition: background 0.15s ease;
            }

            .sort-dropdown__item:hover {
                background: rgba(255, 255, 255, 0.05);
            }

            .sort-dropdown__item.active {
                color: #00D9FF;
            }

            body.light-mode .sort-dropdown__item {
                color: rgba(0, 0, 0, 0.8);
            }

            body.light-mode .sort-dropdown__item:hover {
                background: rgba(0, 0, 0, 0.05);
            }

            body.light-mode .sort-dropdown__item.active {
                color: #0077AA;
            }

            /* ========== RESULTS INFO ========== */
            .content-hub__info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1rem;
                font-size: 0.85rem;
                color: rgba(255, 255, 255, 0.5);
            }

            body.light-mode .content-hub__info {
                color: rgba(0, 0, 0, 0.5);
            }

            /* ========== LOAD MORE BUTTON ========== */
            .load-more-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                width: 100%;
                max-width: 300px;
                margin: 2rem auto;
                padding: 14px 24px;
                background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
                border: 1px solid rgba(0, 217, 255, 0.3);
                border-radius: 12px;
                font-size: 0.95rem;
                font-weight: 500;
                color: #00D9FF;
                cursor: pointer;
                transition: all 0.25s ease;
            }

            .load-more-btn:hover {
                background: linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%);
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(0, 217, 255, 0.2);
            }

            .load-more-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                transform: none;
            }

            .load-more-btn__spinner {
                width: 18px;
                height: 18px;
                border: 2px solid rgba(0, 217, 255, 0.3);
                border-top-color: #00D9FF;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                to { transform: rotate(360deg); }
            }

            body.light-mode .load-more-btn {
                background: linear-gradient(135deg, rgba(0, 119, 170, 0.1) 0%, rgba(120, 40, 200, 0.1) 100%);
                border-color: rgba(0, 119, 170, 0.3);
                color: #0077AA;
            }

            /* ========== NO RESULTS ========== */
            .no-results {
                grid-column: 1 / -1;
                padding: 4rem 2rem;
                text-align: center;
                color: rgba(255, 255, 255, 0.5);
            }

            .no-results__icon {
                font-size: 3rem;
                margin-bottom: 1rem;
                opacity: 0.3;
            }

            .no-results__title {
                font-size: 1.25rem;
                color: rgba(255, 255, 255, 0.7);
                margin-bottom: 0.5rem;
            }

            body.light-mode .no-results {
                color: rgba(0, 0, 0, 0.5);
            }

            body.light-mode .no-results__title {
                color: rgba(0, 0, 0, 0.7);
            }

            /* ========== INFINITE SCROLL SENTINEL ========== */
            .infinite-scroll-sentinel {
                height: 1px;
                width: 100%;
            }

            /* ========== MOBILE RESPONSIVE ========== */
            @media (max-width: 768px) {
                .content-hub__filters {
                    flex-direction: column;
                    align-items: stretch;
                }

                .content-hub__filter-group {
                    overflow-x: auto;
                    padding-bottom: 8px;
                    -webkit-overflow-scrolling: touch;
                }

                .filter-pill {
                    flex-shrink: 0;
                }

                .sort-dropdown {
                    width: 100%;
                }

                .sort-dropdown__trigger {
                    width: 100%;
                    justify-content: space-between;
                }

                .sort-dropdown__menu {
                    left: 0;
                    right: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    injectFilterBar() {
        const filterBar = document.createElement('div');
        filterBar.className = 'content-hub__filters';
        filterBar.innerHTML = `
            <div class="content-hub__filter-group">
                <button class="filter-pill active" data-category="all">
                    <i class="fas fa-layer-group"></i>
                    All
                </button>
                <button class="filter-pill" data-category="security">
                    <i class="fas fa-shield-halved"></i>
                    Security
                </button>
                <button class="filter-pill" data-category="compliance">
                    <i class="fas fa-clipboard-check"></i>
                    Compliance
                </button>
                <button class="filter-pill" data-category="cloud">
                    <i class="fas fa-cloud"></i>
                    Cloud
                </button>
                <button class="filter-pill" data-category="ai">
                    <i class="fas fa-robot"></i>
                    AI/ML
                </button>
            </div>
            <div class="sort-dropdown">
                <button class="sort-dropdown__trigger">
                    <i class="fas fa-arrow-down-wide-short"></i>
                    <span>Newest First</span>
                    <i class="fas fa-chevron-down" style="font-size: 0.7rem; opacity: 0.5;"></i>
                </button>
                <div class="sort-dropdown__menu">
                    <div class="sort-dropdown__item active" data-sort="newest">
                        <i class="fas fa-clock"></i> Newest First
                    </div>
                    <div class="sort-dropdown__item" data-sort="oldest">
                        <i class="fas fa-clock-rotate-left"></i> Oldest First
                    </div>
                    <div class="sort-dropdown__item" data-sort="popular">
                        <i class="fas fa-fire"></i> Most Popular
                    </div>
                    <div class="sort-dropdown__item" data-sort="az">
                        <i class="fas fa-arrow-down-a-z"></i> A to Z
                    </div>
                </div>
            </div>
        `;

        // Insert before the container
        this.container.parentNode.insertBefore(filterBar, this.container);
    }

    bindFilters() {
        // Category filters
        document.querySelectorAll('.filter-pill[data-category]').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.filter-pill[data-category]').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.activeFilters.category = pill.dataset.category;
                this.applyFilters();
            });
        });

        // Sort dropdown
        const sortDropdown = document.querySelector('.sort-dropdown');
        const sortTrigger = sortDropdown?.querySelector('.sort-dropdown__trigger');
        const sortItems = sortDropdown?.querySelectorAll('.sort-dropdown__item');

        sortTrigger?.addEventListener('click', () => {
            sortDropdown.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!sortDropdown?.contains(e.target)) {
                sortDropdown?.classList.remove('open');
            }
        });

        sortItems?.forEach(item => {
            item.addEventListener('click', () => {
                sortItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const triggerText = sortTrigger.querySelector('span');
                if (triggerText) triggerText.textContent = item.textContent.trim();

                this.activeFilters.sort = item.dataset.sort;
                sortDropdown.classList.remove('open');
                this.applyFilters();
            });
        });
    }

    applyFilters() {
        if (!this.container) return;

        const items = this.container.querySelectorAll('.guide-card, .article-card, [data-category]');
        let visibleCount = 0;

        items.forEach(item => {
            let show = true;

            // Category filter
            if (this.activeFilters.category !== 'all') {
                const itemCategory = item.dataset.category?.toLowerCase() ||
                    item.querySelector('.tag, .category')?.textContent?.toLowerCase() || '';
                show = itemCategory.includes(this.activeFilters.category);
            }

            item.style.display = show ? '' : 'none';
            if (show) visibleCount++;
        });

        // Show no results message
        let noResults = this.container.querySelector('.no-results');
        if (visibleCount === 0) {
            if (!noResults) {
                noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.innerHTML = `
                    <div class="no-results__icon"><i class="fas fa-filter-circle-xmark"></i></div>
                    <div class="no-results__title">No content found</div>
                    <p>Try adjusting your filters</p>
                `;
                this.container.appendChild(noResults);
            }
            noResults.style.display = 'block';
        } else if (noResults) {
            noResults.style.display = 'none';
        }

        // Sort items
        this.sortItems();
    }

    sortItems() {
        if (!this.container) return;

        const items = Array.from(this.container.querySelectorAll('.guide-card, .article-card, [data-date]'));
        if (items.length === 0) return;

        items.sort((a, b) => {
            const dateA = new Date(a.dataset.date || '1970-01-01');
            const dateB = new Date(b.dataset.date || '1970-01-01');
            const titleA = a.querySelector('h3, .title')?.textContent || '';
            const titleB = b.querySelector('h3, .title')?.textContent || '';

            switch (this.activeFilters.sort) {
                case 'oldest':
                    return dateA - dateB;
                case 'az':
                    return titleA.localeCompare(titleB);
                case 'popular':
                    const viewsA = parseInt(a.dataset.views || '0');
                    const viewsB = parseInt(b.dataset.views || '0');
                    return viewsB - viewsA;
                case 'newest':
                default:
                    return dateB - dateA;
            }
        });

        // Re-append in sorted order
        items.forEach(item => this.container.appendChild(item));
    }

    setupInfiniteScroll() {
        const sentinel = document.createElement('div');
        sentinel.className = 'infinite-scroll-sentinel';
        this.container.parentNode.insertBefore(sentinel, this.container.nextSibling);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && this.hasMore && !this.isLoading) {
                    this.loadMore();
                }
            });
        }, { rootMargin: '200px' });

        observer.observe(sentinel);
    }

    async loadMore() {
        // This is a placeholder - integrate with your actual data loading
        this.isLoading = true;
        console.log('[ContentHub] Loading more content...');

        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 500));

        this.isLoading = false;
        this.currentPage++;
    }
}

// Initialize
const contentHub = new ContentHub();
window.contentHub = contentHub;
