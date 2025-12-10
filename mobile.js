/**
 * Mobile-Specific JavaScript
 * TheHGTech - Enhanced Mobile Experience
 */

// ========== MOBILE DETECTION ==========
const isMobile = () => {
    return window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const isTablet = () => {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
};

// ========== MOBILE APP CLASS ==========
class MobileApp {
    constructor() {
        this.init();
    }

    init() {
        if (!isMobile()) return;

        this.setupBottomNav();
        this.setupHamburgerMenu();
        this.setupAutoHideHeader();
        this.setupPullToRefresh();
        this.setupSwipeGestures();
        this.setupBottomSheets();
        this.setupLazyLoading();
        this.setupServiceWorker();
        this.optimizePerformance();
    }

    // ========== BOTTOM NAVIGATION ==========
    setupBottomNav() {
        const currentPage = window.location.pathname;
        const navItems = document.querySelectorAll('.mobile-nav-item');

        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (currentPage.includes(href) || (href === '/' && currentPage === '/')) {
                item.classList.add('active');
            }

            item.addEventListener('click', (e) => {
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }

    // ========== HAMBURGER MENU ==========
    setupHamburgerMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const menu = document.querySelector('.mobile-menu');
        const overlay = document.querySelector('.mobile-menu-overlay');
        const closeBtn = document.querySelector('.mobile-menu-close');

        if (!menuBtn || !menu) return;

        const openMenu = () => {
            menu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            menu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        menuBtn.addEventListener('click', openMenu);
        closeBtn?.addEventListener('click', closeMenu);
        overlay?.addEventListener('click', closeMenu);

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // ========== AUTO-HIDE HEADER ==========
    setupAutoHideHeader() {
        const header = document.querySelector('.mobile-header');
        if (!header) return;

        let lastScroll = 0;
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScroll = window.pageYOffset;

                    if (currentScroll > lastScroll && currentScroll > 100) {
                        // Scrolling down
                        header.classList.add('hidden');
                    } else {
                        // Scrolling up
                        header.classList.remove('hidden');
                    }

                    lastScroll = currentScroll;
                    ticking = false;
                });

                ticking = true;
            }
        }, { passive: true });
    }

    // ========== PULL TO REFRESH ==========
    setupPullToRefresh() {
        let startY = 0;
        let pulling = false;
        const threshold = 80;
        const refreshIndicator = document.querySelector('.pull-to-refresh');

        if (!refreshIndicator) return;

        document.addEventListener('touchstart', (e) => {
            if (window.pageYOffset === 0) {
                startY = e.touches[0].pageY;
                pulling = true;
            }
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            if (!pulling) return;

            const currentY = e.touches[0].pageY;
            const distance = currentY - startY;

            if (distance > 0 && distance < threshold) {
                refreshIndicator.classList.add('pulling');
                refreshIndicator.style.top = `${distance / 2}px`;
            }
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            if (!pulling) return;

            const distance = e.changedTouches[0].pageY - startY;

            if (distance > threshold) {
                // Trigger refresh
                this.refreshContent();
            }

            refreshIndicator.classList.remove('pulling');
            refreshIndicator.style.top = '';
            pulling = false;
        });
    }

    refreshContent() {
        // Reload current page data
        console.log('Refreshing content...');

        // Show loading indicator
        const icon = document.querySelector('.pull-to-refresh-icon');
        if (icon) {
            icon.style.animation = 'spin 1s linear infinite';
        }

        // Simulate refresh (replace with actual data loading)
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }

    // ========== SWIPE GESTURES ==========
    setupSwipeGestures() {
        const carousels = document.querySelectorAll('.mobile-carousel');

        carousels.forEach(carousel => {
            let startX = 0;
            let scrollLeft = 0;

            carousel.addEventListener('touchstart', (e) => {
                startX = e.touches[0].pageX;
                scrollLeft = carousel.scrollLeft;
            }, { passive: true });

            carousel.addEventListener('touchmove', (e) => {
                const x = e.touches[0].pageX;
                const walk = (startX - x) * 2;
                carousel.scrollLeft = scrollLeft + walk;
            }, { passive: true });

            // Update dots on scroll
            carousel.addEventListener('scroll', () => {
                this.updateCarouselDots(carousel);
            }, { passive: true });
        });
    }

    updateCarouselDots(carousel) {
        const items = carousel.querySelectorAll('.mobile-carousel-item');
        const dots = carousel.parentElement.querySelectorAll('.mobile-carousel-dot');

        if (!dots.length) return;

        const scrollLeft = carousel.scrollLeft;
        const itemWidth = items[0]?.offsetWidth || 0;
        const activeIndex = Math.round(scrollLeft / itemWidth);

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }

    // ========== BOTTOM SHEETS ==========
    setupBottomSheets() {
        const triggers = document.querySelectorAll('[data-bottom-sheet]');
        const overlay = document.querySelector('.mobile-menu-overlay');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const sheetId = trigger.getAttribute('data-bottom-sheet');
                const sheet = document.getElementById(sheetId);

                if (sheet) {
                    this.openBottomSheet(sheet);
                }
            });
        });

        // Close on overlay click
        overlay?.addEventListener('click', () => {
            this.closeAllBottomSheets();
        });

        // Swipe down to close
        document.querySelectorAll('.mobile-bottom-sheet').forEach(sheet => {
            let startY = 0;

            sheet.addEventListener('touchstart', (e) => {
                startY = e.touches[0].pageY;
            }, { passive: true });

            sheet.addEventListener('touchmove', (e) => {
                const currentY = e.touches[0].pageY;
                const distance = currentY - startY;

                if (distance > 0 && sheet.scrollTop === 0) {
                    sheet.style.transform = `translateY(${distance}px)`;
                }
            }, { passive: true });

            sheet.addEventListener('touchend', (e) => {
                const distance = e.changedTouches[0].pageY - startY;

                if (distance > 100) {
                    this.closeBottomSheet(sheet);
                } else {
                    sheet.style.transform = '';
                }
            });
        });
    }

    openBottomSheet(sheet) {
        sheet.classList.add('active');
        document.querySelector('.mobile-menu-overlay')?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeBottomSheet(sheet) {
        sheet.classList.remove('active');
        sheet.style.transform = '';
        document.querySelector('.mobile-menu-overlay')?.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeAllBottomSheets() {
        document.querySelectorAll('.mobile-bottom-sheet').forEach(sheet => {
            this.closeBottomSheet(sheet);
        });
    }

    // ========== LAZY LOADING ==========
    setupLazyLoading() {
        // Lazy load images
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');

                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                        img.classList.remove('lazy-loading');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px'
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });

        // Lazy load components
        const componentObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const component = entry.target;
                    const componentName = component.getAttribute('data-lazy-component');

                    if (componentName) {
                        this.loadComponent(componentName, component);
                        observer.unobserve(component);
                    }
                }
            });
        }, {
            rootMargin: '100px'
        });

        document.querySelectorAll('[data-lazy-component]').forEach(component => {
            componentObserver.observe(component);
        });
    }

    loadComponent(name, container) {
        // Load component dynamically
        console.log(`Loading component: ${name}`);

        // Example: Load CVE tracker
        if (name === 'cve-tracker') {
            import('./cve-tracker-mobile.js')
                .then(module => {
                    module.init(container);
                })
                .catch(err => console.error('Failed to load component:', err));
        }
    }

    // ========== SERVICE WORKER ==========
    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered:', registration);
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        }
    }

    // ========== PERFORMANCE OPTIMIZATIONS ==========
    optimizePerformance() {
        // Debounce resize events
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        // Optimize scroll events with passive listeners
        document.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });

        // Reduce animations on low-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            document.documentElement.classList.add('reduce-animations');
        }

        // Prefetch critical resources
        this.prefetchResources();
    }

    handleResize() {
        // Update viewport height for mobile browsers
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    handleScroll() {
        // Implement scroll-based optimizations
        const scrollTop = window.pageYOffset;

        // Show/hide FAB based on scroll position
        const fab = document.querySelector('.mobile-fab');
        if (fab) {
            fab.style.display = scrollTop > 300 ? 'flex' : 'none';
        }
    }

    prefetchResources() {
        // Prefetch next page resources
        const links = document.querySelectorAll('a[href^="/"]');
        const prefetchedUrls = new Set();

        const prefetchObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const url = entry.target.getAttribute('href');

                    if (url && !prefetchedUrls.has(url)) {
                        const link = document.createElement('link');
                        link.rel = 'prefetch';
                        link.href = url;
                        document.head.appendChild(link);
                        prefetchedUrls.add(url);
                    }
                }
            });
        });

        links.forEach(link => prefetchObserver.observe(link));
    }
}

// ========== COLLAPSIBLE SECTIONS ==========
class MobileCollapsible {
    constructor(element) {
        this.element = element;
        this.header = element.querySelector('.mobile-collapsible-header');
        this.content = element.querySelector('.mobile-collapsible-content');
        this.init();
    }

    init() {
        this.header.addEventListener('click', () => this.toggle());
    }

    toggle() {
        this.element.classList.toggle('expanded');

        if (this.element.classList.contains('expanded')) {
            this.content.style.maxHeight = this.content.scrollHeight + 'px';
        } else {
            this.content.style.maxHeight = '0';
        }
    }
}

// ========== INITIALIZE ON DOM READY ==========
document.addEventListener('DOMContentLoaded', () => {
    if (isMobile()) {
        // Initialize mobile app
        window.mobileApp = new MobileApp();

        // Initialize collapsibles
        document.querySelectorAll('.mobile-collapsible').forEach(element => {
            new MobileCollapsible(element);
        });

        // Set initial viewport height
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // Add mobile class to body
        document.body.classList.add('mobile-view');
    }
});

// ========== UTILITY FUNCTIONS ==========
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MobileApp, isMobile, isTablet };
}
