// ============================================
// VISUAL ENHANCEMENTS - Professional Polish
// ============================================

(function () {
    'use strict';

    // ===== ANIMATED COUNTER =====
    class AnimatedCounter {
        constructor(element, options = {}) {
            this.element = element;
            this.target = parseInt(element.getAttribute('data-count') || element.textContent.replace(/,/g, ''));
            this.duration = options.duration || 2000;
            this.hasAnimated = false;
        }

        animate() {
            if (this.hasAnimated) return;
            this.hasAnimated = true;

            const start = 0;
            const increment = this.target / (this.duration / 16);
            let current = start;

            const updateCounter = () => {
                current += increment;
                if (current < this.target) {
                    this.element.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    this.element.textContent = this.target.toLocaleString();
                }
            };

            updateCounter();
        }
    }

    // ===== SCROLL ANIMATIONS =====
    class ScrollAnimations {
        constructor() {
            this.elements = [];
            this.observer = null;
            this.init();
        }

        init() {
            // Find all elements with animation classes
            const animationClasses = [
                '.fade-in',
                '.slide-in-left',
                '.slide-in-right',
                '.scale-in'
            ];

            animationClasses.forEach(className => {
                document.querySelectorAll(className).forEach(el => {
                    this.elements.push(el);
                });
            });

            // Setup Intersection Observer
            const options = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');

                        // If it's a counter, animate it
                        if (entry.target.hasAttribute('data-count')) {
                            const counter = new AnimatedCounter(entry.target);
                            counter.animate();
                        }
                    }
                });
            }, options);

            // Observe all elements
            this.elements.forEach(el => this.observer.observe(el));
        }
    }

    // ===== TOAST NOTIFICATIONS =====
    class ToastManager {
        constructor() {
            this.container = null;
            this.toasts = [];
            this.init();
        }

        init() {
            // Create toast container if it doesn't exist
            if (!document.querySelector('.toast-container')) {
                this.container = document.createElement('div');
                this.container.className = 'toast-container';
                document.body.appendChild(this.container);
            } else {
                this.container = document.querySelector('.toast-container');
            }
        }

        show(message, type = 'info', duration = 3000) {
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;

            const icons = {
                success: '✓',
                error: '✕',
                info: 'ℹ',
                warning: '⚠'
            };

            toast.innerHTML = `
                <div class="toast-icon">${icons[type]}</div>
                <div class="toast-content">
                    <div class="toast-message">${message}</div>
                </div>
                <button class="toast-close" onclick="this.parentElement.remove()">×</button>
            `;

            this.container.appendChild(toast);
            this.toasts.push(toast);

            // Auto-dismiss
            if (duration > 0) {
                setTimeout(() => {
                    toast.style.animation = 'slideOut 0.3s ease';
                    setTimeout(() => {
                        if (toast.parentElement) {
                            toast.remove();
                        }
                        this.toasts = this.toasts.filter(t => t !== toast);
                    }, 300);
                }, duration);
            }

            return toast;
        }

        success(message, duration) {
            return this.show(message, 'success', duration);
        }

        error(message, duration) {
            return this.show(message, 'error', duration);
        }

        info(message, duration) {
            return this.show(message, 'info', duration);
        }

        warning(message, duration) {
            return this.show(message, 'warning', duration);
        }
    }

    // ===== RIPPLE EFFECT =====
    function addRippleEffect() {
        document.querySelectorAll('.ripple').forEach(button => {
            if (button.hasAttribute('data-ripple-initialized')) return;
            button.setAttribute('data-ripple-initialized', 'true');

            button.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple-effect');

                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // ===== ENHANCE EXISTING ELEMENTS =====
    function enhanceExistingElements() {
        // Add gradient text to main headings (but not all h1s, be selective)
        document.querySelectorAll('.section-title').forEach(heading => {
            if (!heading.classList.contains('gradient-text')) {
                heading.classList.add('gradient-text');
            }
        });

        // Add hover effects to cards
        document.querySelectorAll('.article-card, .stat-card, .vendor-card').forEach(card => {
            if (!card.classList.contains('hover-lift')) {
                card.classList.add('hover-lift', 'glass-card');
            }
        });

        // DO NOT auto-add scroll animations to sections - let them be visible by default
        // Only add animations to elements that explicitly have data-animate attribute
        document.querySelectorAll('[data-animate]').forEach(element => {
            const animationType = element.getAttribute('data-animate');
            if (!element.classList.contains(animationType)) {
                element.classList.add(animationType);
            }
        });

        // Add ripple to buttons
        document.querySelectorAll('button, .btn').forEach(btn => {
            if (!btn.classList.contains('ripple')) {
                btn.classList.add('ripple');
            }
        });
    }

    // ===== COPY TO CLIPBOARD WITH TOAST =====
    function enhanceCopyFunctionality() {
        // Add copy functionality to code blocks, IOCs, etc.
        document.querySelectorAll('[data-copy]').forEach(element => {
            element.style.cursor = 'pointer';
            element.title = 'Click to copy';

            element.addEventListener('click', async function () {
                const textToCopy = this.getAttribute('data-copy') || this.textContent;

                try {
                    await navigator.clipboard.writeText(textToCopy);
                    window.toast.success('Copied to clipboard!', 2000);
                } catch (err) {
                    window.toast.error('Failed to copy', 2000);
                }
            });
        });
    }

    // ===== INITIALIZE =====
    function init() {
        console.log('[visual-enhancements] Initializing...');

        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize toast manager
        window.toast = new ToastManager();

        // Initialize scroll animations
        new ScrollAnimations();

        // Enhance existing elements
        enhanceExistingElements();

        // Add ripple effects
        addRippleEffect();

        // Enhance copy functionality
        enhanceCopyFunctionality();

        // Re-run enhancements when new content is added (for dynamic content)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    enhanceExistingElements();
                    addRippleEffect();
                    enhanceCopyFunctionality();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        console.log('[visual-enhancements] Initialized successfully!');
    }

    // Start initialization
    init();

    // ===== EXPOSE UTILITIES =====
    window.VisualEnhancements = {
        toast: () => window.toast,
        AnimatedCounter: AnimatedCounter,
        addRipple: addRippleEffect
    };

})();
