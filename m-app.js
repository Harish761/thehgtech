/* ================================================
   M-APP.JS - Mobile App Core JavaScript
   Navigation, Theme, Gestures, Cards
   ================================================ */

(function () {
    'use strict';

    // Only run on mobile
    if (window.innerWidth > 768) return;

    // ========== THEME MANAGEMENT ==========
    const Theme = {
        init() {
            const saved = localStorage.getItem('theme');
            if (saved) {
                document.documentElement.setAttribute('data-theme', saved);
            } else {
                // Default to dark
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        },

        toggle() {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);

            // Update icon
            const icons = document.querySelectorAll('.m-header__btn--theme i');
            icons.forEach(icon => {
                if (next === 'light') {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            });
        }
    };

    // ========== BOTTOM NAV ==========
    const BottomNav = {
        init() {
            this.highlightCurrent();
            this.bindEvents();
        },

        highlightCurrent() {
            const path = window.location.pathname;
            const items = document.querySelectorAll('.m-bottom-nav__item');

            items.forEach(item => {
                item.classList.remove('active');
                const href = item.getAttribute('href');

                if (path === '/' || path === '/index.html') {
                    if (href === '/' || href === '/index.html') {
                        item.classList.add('active');
                    }
                } else if (href && path.includes(href.replace('/', ''))) {
                    item.classList.add('active');
                }
            });
        },

        bindEvents() {
            // More button handler
            const moreBtn = document.querySelector('[data-action="more"]');
            if (moreBtn) {
                moreBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    MorePanel.toggle();
                });
            }
        }
    };

    // ========== MORE PANEL ==========
    const MorePanel = {
        overlay: null,
        panel: null,

        init() {
            this.overlay = document.querySelector('.m-more-overlay');
            this.panel = document.querySelector('.m-more-panel');

            if (this.overlay) {
                this.overlay.addEventListener('click', () => this.close());
            }
        },

        toggle() {
            if (this.overlay && this.panel) {
                this.overlay.classList.toggle('active');
                this.panel.classList.toggle('active');
                document.body.style.overflow = this.panel.classList.contains('active') ? 'hidden' : '';
            }
        },

        close() {
            if (this.overlay && this.panel) {
                this.overlay.classList.remove('active');
                this.panel.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    };

    // ========== SEARCH OVERLAY ==========
    const SearchOverlay = {
        overlay: null,
        input: null,

        init() {
            this.overlay = document.querySelector('.m-search-overlay');
            this.input = document.querySelector('.m-search-overlay__input');

            const searchBtn = document.querySelector('[data-action="search"]');
            if (searchBtn) {
                searchBtn.addEventListener('click', () => this.open());
            }

            const cancelBtn = document.querySelector('.m-search-overlay__cancel');
            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => this.close());
            }
        },

        open() {
            if (this.overlay) {
                this.overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                setTimeout(() => this.input?.focus(), 100);
            }
        },

        close() {
            if (this.overlay) {
                this.overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    };

    // ========== NEWS CARDS SWIPE ==========
    const NewsCards = {
        container: null,
        cards: [],
        currentIndex: 0,
        startX: 0,
        currentX: 0,
        isDragging: false,

        init() {
            this.container = document.querySelector('.m-news-stack');
            if (!this.container) return;

            this.cards = [...this.container.querySelectorAll('.m-news-card')];
            if (this.cards.length === 0) return;

            this.updatePositions();
            this.bindEvents();
            this.updateDots();
        },

        bindEvents() {
            this.cards.forEach(card => {
                card.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: true });
                card.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: true });
                card.addEventListener('touchend', (e) => this.onTouchEnd(e));

                // Mouse events for testing
                card.addEventListener('mousedown', (e) => this.onMouseDown(e));
            });

            document.addEventListener('mousemove', (e) => this.onMouseMove(e));
            document.addEventListener('mouseup', (e) => this.onMouseUp(e));
        },

        onTouchStart(e) {
            this.startX = e.touches[0].clientX;
            this.isDragging = true;
        },

        onTouchMove(e) {
            if (!this.isDragging) return;
            this.currentX = e.touches[0].clientX;
            const diff = this.currentX - this.startX;

            const frontCard = this.cards[this.currentIndex];
            if (frontCard) {
                frontCard.style.transform = `translateX(${diff}px) rotate(${diff * 0.05}deg)`;
            }
        },

        onTouchEnd(e) {
            if (!this.isDragging) return;
            this.isDragging = false;

            const diff = this.currentX - this.startX;
            const threshold = 80;

            if (Math.abs(diff) > threshold) {
                if (diff < 0) {
                    this.next();
                } else {
                    this.prev();
                }
            } else {
                this.resetCardPosition();
            }
        },

        onMouseDown(e) {
            this.startX = e.clientX;
            this.isDragging = true;
            e.target.style.cursor = 'grabbing';
        },

        onMouseMove(e) {
            if (!this.isDragging) return;
            this.currentX = e.clientX;
            const diff = this.currentX - this.startX;

            const frontCard = this.cards[this.currentIndex];
            if (frontCard) {
                frontCard.style.transform = `translateX(${diff}px) rotate(${diff * 0.05}deg)`;
            }
        },

        onMouseUp(e) {
            if (!this.isDragging) return;
            this.isDragging = false;

            const diff = this.currentX - this.startX;
            const threshold = 80;

            if (Math.abs(diff) > threshold) {
                if (diff < 0) {
                    this.next();
                } else {
                    this.prev();
                }
            } else {
                this.resetCardPosition();
            }
        },

        next() {
            if (this.currentIndex < this.cards.length - 1) {
                this.currentIndex++;
                this.updatePositions();
                this.updateDots();
            } else {
                this.resetCardPosition();
            }
        },

        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updatePositions();
                this.updateDots();
            } else {
                this.resetCardPosition();
            }
        },

        updatePositions() {
            this.cards.forEach((card, index) => {
                card.style.transform = '';
                const position = index - this.currentIndex;

                if (position < 0 || position > 2) {
                    card.setAttribute('data-position', 'hidden');
                } else {
                    card.setAttribute('data-position', position);
                }
            });
        },

        resetCardPosition() {
            const frontCard = this.cards[this.currentIndex];
            if (frontCard) {
                frontCard.style.transform = '';
            }
        },

        updateDots() {
            const dots = document.querySelectorAll('.m-news-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }
    };

    // ========== EXPANDABLE LIST ==========
    const ExpandableList = {
        init() {
            const items = document.querySelectorAll('.m-expand-item');

            items.forEach(item => {
                const header = item.querySelector('.m-expand-item__header');
                if (header) {
                    header.addEventListener('click', () => {
                        // Close others
                        items.forEach(other => {
                            if (other !== item) {
                                other.classList.remove('expanded');
                            }
                        });
                        // Toggle current
                        item.classList.toggle('expanded');
                    });
                }
            });
        }
    };

    // ========== PULL TO REFRESH (Visual) ==========
    const PullToRefresh = {
        indicator: null,
        startY: 0,
        pulling: false,

        init() {
            this.indicator = document.querySelector('.m-pull-indicator');
            if (!this.indicator) return;

            document.addEventListener('touchstart', (e) => {
                if (window.scrollY === 0) {
                    this.startY = e.touches[0].clientY;
                    this.pulling = true;
                }
            }, { passive: true });

            document.addEventListener('touchmove', (e) => {
                if (!this.pulling) return;
                const currentY = e.touches[0].clientY;
                const diff = currentY - this.startY;

                if (diff > 0 && diff < 150) {
                    this.indicator.classList.add('visible');
                    this.indicator.style.transform = `translateX(-50%) translateY(${Math.min(diff * 0.5, 60)}px)`;
                }
            }, { passive: true });

            document.addEventListener('touchend', () => {
                if (!this.pulling) return;
                this.pulling = false;

                // Animate back
                this.indicator.classList.add('loading');
                setTimeout(() => {
                    this.indicator.classList.remove('visible', 'loading');
                    this.indicator.style.transform = '';
                }, 1000);
            });
        }
    };

    // ========== INITIALIZE ==========
    function init() {
        Theme.init();
        BottomNav.init();
        MorePanel.init();
        SearchOverlay.init();
        NewsCards.init();
        ExpandableList.init();
        PullToRefresh.init();

        // Expose theme toggle globally
        window.mToggleTheme = Theme.toggle.bind(Theme);
        window.mCloseMorePanel = MorePanel.close.bind(MorePanel);
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-init on resize (for responsive testing)
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth <= 768) {
                init();
            }
        }, 200);
    });

})();
