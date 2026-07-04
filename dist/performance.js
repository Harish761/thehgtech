/**
 * THEHGTECH PERFORMANCE OPTIMIZATIONS
 * Lazy loading, skeleton loaders, and image optimization
 * @version 1.0
 */

(function () {
    'use strict';

    // ========== LAZY LOADING IMAGES ==========
    class LazyLoader {
        constructor() {
            this.observer = null;
            this.init();
        }

        init() {
            // Use IntersectionObserver for efficient lazy loading
            if ('IntersectionObserver' in window) {
                this.observer = new IntersectionObserver(
                    (entries) => this.handleIntersection(entries),
                    {
                        rootMargin: '100px 0px', // Start loading 100px before entering viewport
                        threshold: 0.01
                    }
                );

                this.observeImages();
            } else {
                // Fallback: load all images immediately
                this.loadAllImages();
            }

            console.log('[LazyLoader] ✓ Initialized');
        }

        observeImages() {
            // Find all images with data-src
            const images = document.querySelectorAll('img[data-src], [data-bg]');
            images.forEach(img => this.observer.observe(img));

            // Also observe iframes
            const iframes = document.querySelectorAll('iframe[data-src]');
            iframes.forEach(iframe => this.observer.observe(iframe));
        }

        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadElement(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }

        loadElement(el) {
            if (el.tagName === 'IMG') {
                this.loadImage(el);
            } else if (el.tagName === 'IFRAME') {
                this.loadIframe(el);
            } else if (el.dataset.bg) {
                this.loadBackground(el);
            }
        }

        loadImage(img) {
            const src = img.dataset.src;
            if (!src) return;

            // Create new image to preload
            const tempImg = new Image();
            tempImg.onload = () => {
                img.src = src;
                img.removeAttribute('data-src');
                img.classList.add('lazy-loaded');
            };
            tempImg.onerror = () => {
                img.classList.add('lazy-error');
            };
            tempImg.src = src;
        }

        loadIframe(iframe) {
            const src = iframe.dataset.src;
            if (src) {
                iframe.src = src;
                iframe.removeAttribute('data-src');
            }
        }

        loadBackground(el) {
            const bg = el.dataset.bg;
            if (bg) {
                el.style.backgroundImage = `url(${bg})`;
                el.removeAttribute('data-bg');
                el.classList.add('lazy-loaded');
            }
        }

        loadAllImages() {
            document.querySelectorAll('img[data-src]').forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }

        // Manually trigger observation for dynamically added elements
        observe(element) {
            if (this.observer) {
                this.observer.observe(element);
            }
        }
    }

    // ========== SKELETON LOADERS ==========
    class SkeletonLoader {
        constructor() {
            this.injectStyles();
        }

        injectStyles() {
            if (document.getElementById('skeleton-styles')) return;

            const style = document.createElement('style');
            style.id = 'skeleton-styles';
            style.textContent = `
                /* ========== SKELETON LOADER BASE ========== */
                .skeleton {
                    background: linear-gradient(
                        90deg,
                        rgba(255, 255, 255, 0.03) 25%,
                        rgba(255, 255, 255, 0.08) 50%,
                        rgba(255, 255, 255, 0.03) 75%
                    );
                    background-size: 200% 100%;
                    animation: skeleton-shimmer 1.5s ease-in-out infinite;
                    border-radius: 4px;
                }

                body.light-mode .skeleton {
                    background: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.03) 25%,
                        rgba(0, 0, 0, 0.08) 50%,
                        rgba(0, 0, 0, 0.03) 75%
                    );
                    background-size: 200% 100%;
                }

                @keyframes skeleton-shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }

                /* ========== SKELETON VARIANTS ========== */
                .skeleton-text {
                    height: 14px;
                    margin-bottom: 8px;
                }

                .skeleton-text:last-child {
                    width: 60%;
                }

                .skeleton-title {
                    height: 24px;
                    width: 70%;
                    margin-bottom: 12px;
                }

                .skeleton-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    flex-shrink: 0;
                }

                .skeleton-image {
                    width: 100%;
                    padding-bottom: 56.25%; /* 16:9 aspect ratio */
                    border-radius: 8px;
                }

                .skeleton-button {
                    height: 40px;
                    width: 120px;
                    border-radius: 8px;
                }

                /* ========== SKELETON CARD ========== */
                .skeleton-card {
                    padding: 1.25rem;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 12px;
                }

                body.light-mode .skeleton-card {
                    background: rgba(0, 0, 0, 0.02);
                    border-color: rgba(0, 0, 0, 0.06);
                }

                .skeleton-card__header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 16px;
                }

                .skeleton-card__body {
                    margin-bottom: 16px;
                }

                .skeleton-card__footer {
                    display: flex;
                    gap: 8px;
                }

                /* ========== ARTICLE SKELETON ========== */
                .skeleton-article {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .skeleton-article__image {
                    width: 100%;
                    padding-bottom: 50%;
                    border-radius: 12px;
                }

                .skeleton-article__content {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                /* ========== GRID SKELETON ========== */
                .skeleton-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                /* ========== LAZY LOADED IMAGE STYLES ========== */
                img[data-src] {
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                img.lazy-loaded {
                    opacity: 1;
                }

                img.lazy-error {
                    opacity: 0.5;
                }

                /* ========== FADE IN ANIMATION ========== */
                .fade-in {
                    animation: fadeIn 0.5s ease forwards;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }

        // Create skeleton HTML for different content types
        createCardSkeleton() {
            return `
                <div class="skeleton-card">
                    <div class="skeleton-card__header">
                        <div class="skeleton skeleton-avatar"></div>
                        <div style="flex: 1;">
                            <div class="skeleton skeleton-text" style="width: 40%;"></div>
                            <div class="skeleton skeleton-text" style="width: 25%;"></div>
                        </div>
                    </div>
                    <div class="skeleton-card__body">
                        <div class="skeleton skeleton-title"></div>
                        <div class="skeleton skeleton-text"></div>
                        <div class="skeleton skeleton-text"></div>
                        <div class="skeleton skeleton-text" style="width: 60%;"></div>
                    </div>
                </div>
            `;
        }

        createArticleSkeleton() {
            return `
                <div class="skeleton-article">
                    <div class="skeleton skeleton-article__image"></div>
                    <div class="skeleton-article__content">
                        <div class="skeleton skeleton-text" style="width: 30%;"></div>
                        <div class="skeleton skeleton-title"></div>
                        <div class="skeleton skeleton-text"></div>
                        <div class="skeleton skeleton-text" style="width: 60%;"></div>
                    </div>
                </div>
            `;
        }

        createGridSkeleton(count = 6) {
            return `
                <div class="skeleton-grid">
                    ${Array(count).fill(this.createCardSkeleton()).join('')}
                </div>
            `;
        }

        // Replace skeleton with actual content
        replaceSkeleton(container, content, animate = true) {
            container.innerHTML = content;
            if (animate) {
                container.querySelectorAll(':scope > *').forEach((child, i) => {
                    child.style.animationDelay = `${i * 0.1}s`;
                    child.classList.add('fade-in');
                });
            }
        }
    }

    // ========== READING PROGRESS INDICATOR ==========
    class ReadingProgress {
        constructor() {
            this.progressBar = null;
            this.init();
        }

        init() {
            // Only show on article/guide pages
            const isContentPage =
                window.location.pathname.includes('/guides/') ||
                window.location.pathname.includes('/articles/');

            if (!isContentPage) return;

            this.createProgressBar();
            this.bindScroll();
            console.log('[ReadingProgress] ✓ Initialized');
        }

        createProgressBar() {
            const bar = document.createElement('div');
            bar.id = 'reading-progress';
            bar.innerHTML = '<div class="reading-progress__fill"></div>';
            document.body.appendChild(bar);

            this.progressBar = bar.querySelector('.reading-progress__fill');

            // Inject styles
            const style = document.createElement('style');
            style.textContent = `
                #reading-progress {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.1);
                    z-index: 99999;
                }

                body.light-mode #reading-progress {
                    background: rgba(0, 0, 0, 0.1);
                }

                .reading-progress__fill {
                    height: 100%;
                    width: 0%;
                    background: linear-gradient(90deg, #00D9FF 0%, #9333EA 100%);
                    transition: width 0.1s ease-out;
                }

                @media (max-width: 768px) {
                    #reading-progress {
                        top: 56px; /* Below mobile header */
                    }
                }
            `;
            document.head.appendChild(style);
        }

        bindScroll() {
            let ticking = false;

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        this.updateProgress();
                        ticking = false;
                    });
                    ticking = true;
                }
            });
        }

        updateProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min((scrollTop / docHeight) * 100, 100);

            if (this.progressBar) {
                this.progressBar.style.width = `${progress}%`;
            }
        }
    }

    // ========== INITIALIZE ==========
    const lazyLoader = new LazyLoader();
    const skeletonLoader = new SkeletonLoader();
    const readingProgress = new ReadingProgress();

    // Export for global use
    window.lazyLoader = lazyLoader;
    window.skeletonLoader = skeletonLoader;

    // Observer for dynamically added content
    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    // Check for lazy images
                    if (node.matches && node.matches('img[data-src]')) {
                        lazyLoader.observe(node);
                    }
                    // Check children
                    const lazyImages = node.querySelectorAll ? node.querySelectorAll('img[data-src]') : [];
                    lazyImages.forEach(img => lazyLoader.observe(img));
                }
            });
        });
    });

    // Start observing once DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            mutationObserver.observe(document.body, { childList: true, subtree: true });
        });
    } else {
        mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

})();
