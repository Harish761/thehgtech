/**
 * THEHGTECH SHARE BUTTONS
 * Social sharing for articles and guides
 * @version 1.0
 */

class ShareButtons {
    constructor() {
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
        this.injectShareButtons();
        console.log('[ShareButtons] ✓ Initialized');
    }

    injectStyles() {
        if (document.getElementById('share-styles')) return;

        const style = document.createElement('style');
        style.id = 'share-styles';
        style.textContent = `
            /* ========== SHARE BUTTONS CONTAINER ========== */
            .share-buttons {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .share-buttons__label {
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.5);
                margin-right: 4px;
            }

            body.light-mode .share-buttons__label {
                color: rgba(0, 0, 0, 0.5);
            }

            /* ========== SHARE BUTTON ========== */
            .share-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 36px;
                height: 36px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                color: rgba(255, 255, 255, 0.6);
                font-size: 0.9rem;
                cursor: pointer;
                transition: all 0.2s ease;
                text-decoration: none;
            }

            .share-btn:hover {
                transform: translateY(-2px);
            }

            body.light-mode .share-btn {
                background: rgba(0, 0, 0, 0.03);
                border-color: rgba(0, 0, 0, 0.1);
                color: rgba(0, 0, 0, 0.6);
            }

            /* Platform-specific colors */
            .share-btn--twitter:hover {
                background: #1DA1F2;
                border-color: #1DA1F2;
                color: #fff;
            }

            .share-btn--linkedin:hover {
                background: #0A66C2;
                border-color: #0A66C2;
                color: #fff;
            }

            .share-btn--facebook:hover {
                background: #1877F2;
                border-color: #1877F2;
                color: #fff;
            }

            .share-btn--reddit:hover {
                background: #FF4500;
                border-color: #FF4500;
                color: #fff;
            }

            .share-btn--hackernews:hover {
                background: #FF6600;
                border-color: #FF6600;
                color: #fff;
            }

            .share-btn--copy:hover {
                background: #10B981;
                border-color: #10B981;
                color: #fff;
            }

            .share-btn--email:hover {
                background: #6366F1;
                border-color: #6366F1;
                color: #fff;
            }

            /* ========== FLOATING SHARE BAR ========== */
            .share-bar {
                position: fixed;
                left: 20px;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding: 12px;
                background: rgba(20, 20, 25, 0.95);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                z-index: 100;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }

            .share-bar.visible {
                opacity: 1;
                visibility: visible;
            }

            body.light-mode .share-bar {
                background: rgba(255, 255, 255, 0.95);
                border-color: rgba(0, 0, 0, 0.1);
            }

            /* ========== INLINE SHARE (for article headers) ========== */
            .share-inline {
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }

            /* ========== MOBILE ========== */
            @media (max-width: 1200px) {
                .share-bar {
                    display: none;
                }
            }

            @media (max-width: 768px) {
                .share-btn {
                    width: 40px;
                    height: 40px;
                }

                .share-buttons__label {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    injectShareButtons() {
        const path = window.location.pathname;
        const title = document.title;
        const url = window.location.href;

        // Skip non-content pages
        if (path === '/' || path.endsWith('/index.html')) return;

        // Find interaction bar or header
        const interactionBar = document.querySelector('.interaction-bar');
        const header = document.querySelector('.guide-header, .article-header');

        if (interactionBar) {
            // Add to interaction bar
            const shareDiv = document.createElement('div');
            shareDiv.className = 'share-buttons';
            shareDiv.innerHTML = this.getShareButtonsHTML(title, url);
            interactionBar.appendChild(shareDiv);
        }

        // Add floating share bar on wide screens
        if (path.includes('/guides/') || path.includes('/articles/')) {
            this.createFloatingShareBar(title, url);
        }

        this.bindCopyHandler();
    }

    getShareButtonsHTML(title, url) {
        const encodedTitle = encodeURIComponent(title);
        const encodedUrl = encodeURIComponent(url);

        return `
            <span class="share-buttons__label">Share:</span>
            <a href="https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=thehgtech" 
               class="share-btn share-btn--twitter" 
               target="_blank" 
               rel="noopener noreferrer" 
               title="Share on Twitter">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}" 
               class="share-btn share-btn--linkedin" 
               target="_blank" 
               rel="noopener noreferrer" 
               title="Share on LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}" 
               class="share-btn share-btn--reddit" 
               target="_blank" 
               rel="noopener noreferrer" 
               title="Share on Reddit">
                <i class="fab fa-reddit-alien"></i>
            </a>
            <a href="https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedTitle}" 
               class="share-btn share-btn--hackernews" 
               target="_blank" 
               rel="noopener noreferrer" 
               title="Share on Hacker News">
                <i class="fab fa-hacker-news-square"></i>
            </a>
            <button class="share-btn share-btn--copy" data-url="${url}" title="Copy Link">
                <i class="fas fa-link"></i>
            </button>
        `;
    }

    createFloatingShareBar(title, url) {
        const encodedTitle = encodeURIComponent(title);
        const encodedUrl = encodeURIComponent(url);

        const bar = document.createElement('div');
        bar.className = 'share-bar';
        bar.id = 'shareBar';
        bar.innerHTML = `
            <a href="https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=thehgtech" 
               class="share-btn share-btn--twitter" 
               target="_blank" 
               rel="noopener noreferrer" 
               title="Twitter">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}" 
               class="share-btn share-btn--linkedin" 
               target="_blank" 
               rel="noopener noreferrer" 
               title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}" 
               class="share-btn share-btn--reddit" 
               target="_blank" 
               rel="noopener noreferrer" 
               title="Reddit">
                <i class="fab fa-reddit-alien"></i>
            </a>
            <a href="mailto:?subject=${encodedTitle}&body=Check%20this%20out:%20${encodedUrl}" 
               class="share-btn share-btn--email" 
               title="Email">
                <i class="fas fa-envelope"></i>
            </a>
            <button class="share-btn share-btn--copy" data-url="${url}" title="Copy Link">
                <i class="fas fa-link"></i>
            </button>
        `;
        document.body.appendChild(bar);

        // Show/hide based on scroll position
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const showAfter = 300;
            const hideNearBottom = document.body.scrollHeight - window.innerHeight - 300;

            if (scrollY > showAfter && scrollY < hideNearBottom) {
                bar.classList.add('visible');
            } else {
                bar.classList.remove('visible');
            }

            lastScroll = scrollY;
        });
    }

    bindCopyHandler() {
        document.addEventListener('click', async (e) => {
            const btn = e.target.closest('.share-btn--copy');
            if (!btn) return;

            const url = btn.dataset.url || window.location.href;

            try {
                await navigator.clipboard.writeText(url);

                // Update icon temporarily
                const icon = btn.querySelector('i');
                icon.className = 'fas fa-check';

                // Show toast
                if (window.toastSystem) {
                    window.toastSystem.success('Link copied to clipboard!');
                }

                setTimeout(() => {
                    icon.className = 'fas fa-link';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                if (window.toastSystem) {
                    window.toastSystem.error('Failed to copy link');
                }
            }
        });
    }

    // Programmatic share (for native share API)
    async nativeShare(title, text, url) {
        if (navigator.share) {
            try {
                await navigator.share({ title, text, url });
                return true;
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Share failed:', err);
                }
                return false;
            }
        }
        return false;
    }
}

// Initialize
const shareButtons = new ShareButtons();
window.shareButtons = shareButtons;
