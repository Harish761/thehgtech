/* ============================================
   SWIPEABLE NEWS CARDS - JAVASCRIPT
   Tinder-style swipe navigation
   ============================================ */

class NewsCardStack {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.cards = [];
        this.currentIndex = 0;
        this.startX = 0;
        this.currentX = 0;
        this.isDragging = false;
        this.swipeThreshold = 100;

        this.init();
    }

    init() {
        this.cards = Array.from(this.container.querySelectorAll('.news-card-stack'));
        this.updateCardStates();
        this.attachEventListeners();
        this.updateProgress();
    }

    attachEventListeners() {
        this.cards.forEach((card, index) => {
            // Touch events
            card.addEventListener('touchstart', (e) => this.handleTouchStart(e, index));
            card.addEventListener('touchmove', (e) => this.handleTouchMove(e, index));
            card.addEventListener('touchend', (e) => this.handleTouchEnd(e, index));

            // Mouse events (for desktop testing)
            card.addEventListener('mousedown', (e) => this.handleMouseDown(e, index));
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e, index));
            card.addEventListener('mouseup', (e) => this.handleMouseUp(e, index));
            card.addEventListener('mouseleave', (e) => this.handleMouseUp(e, index));
        });

        // Navigation buttons
        const prevBtn = document.querySelector('.news-nav-btn.prev');
        const nextBtn = document.querySelector('.news-nav-btn.next');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousCard());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextCard());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousCard();
            if (e.key === 'ArrowRight') this.nextCard();
        });
    }

    handleTouchStart(e, index) {
        if (index !== this.currentIndex) return;
        this.isDragging = true;
        this.startX = e.touches[0].clientX;
    }

    handleTouchMove(e, index) {
        if (!this.isDragging || index !== this.currentIndex) return;

        this.currentX = e.touches[0].clientX;
        const diff = this.currentX - this.startX;
        const card = this.cards[index];

        // Apply transform
        const rotation = diff * 0.05;
        const opacity = 1 - Math.abs(diff) / 300;

        card.style.transform = `translateX(calc(-50% + ${diff}px)) rotate(${rotation}deg)`;
        card.style.opacity = opacity;

        // Add visual feedback
        if (diff > 50) {
            card.classList.add('swiping-right');
            card.classList.remove('swiping-left');
        } else if (diff < -50) {
            card.classList.add('swiping-left');
            card.classList.remove('swiping-right');
        } else {
            card.classList.remove('swiping-left', 'swiping-right');
        }
    }

    handleTouchEnd(e, index) {
        if (!this.isDragging || index !== this.currentIndex) return;

        const diff = this.currentX - this.startX;
        const card = this.cards[index];

        if (Math.abs(diff) > this.swipeThreshold) {
            // Swipe threshold reached
            if (diff > 0) {
                this.previousCard();
            } else {
                this.nextCard();
            }
        } else {
            // Snap back
            card.style.transform = '';
            card.style.opacity = '';
            card.classList.remove('swiping-left', 'swiping-right');
        }

        this.isDragging = false;
    }

    handleMouseDown(e, index) {
        if (index !== this.currentIndex) return;
        this.isDragging = true;
        this.startX = e.clientX;
    }

    handleMouseMove(e, index) {
        if (!this.isDragging || index !== this.currentIndex) return;

        this.currentX = e.clientX;
        const diff = this.currentX - this.startX;
        const card = this.cards[index];

        const rotation = diff * 0.05;
        const opacity = 1 - Math.abs(diff) / 300;

        card.style.transform = `translateX(calc(-50% + ${diff}px)) rotate(${rotation}deg)`;
        card.style.opacity = opacity;

        if (diff > 50) {
            card.classList.add('swiping-right');
            card.classList.remove('swiping-left');
        } else if (diff < -50) {
            card.classList.add('swiping-left');
            card.classList.remove('swiping-right');
        } else {
            card.classList.remove('swiping-left', 'swiping-right');
        }
    }

    handleMouseUp(e, index) {
        if (!this.isDragging || index !== this.currentIndex) return;

        const diff = this.currentX - this.startX;
        const card = this.cards[index];

        if (Math.abs(diff) > this.swipeThreshold) {
            if (diff > 0) {
                this.previousCard();
            } else {
                this.nextCard();
            }
        } else {
            card.style.transform = '';
            card.style.opacity = '';
            card.classList.remove('swiping-left', 'swiping-right');
        }

        this.isDragging = false;
    }

    nextCard() {
        if (this.currentIndex < this.cards.length - 1) {
            this.currentIndex++;
            this.updateCardStates();
            this.updateProgress();
        }
    }

    previousCard() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCardStates();
            this.updateProgress();
        }
    }

    updateCardStates() {
        this.cards.forEach((card, index) => {
            card.classList.remove('active', 'next', 'prev');
            card.style.transform = '';
            card.style.opacity = '';

            if (index === this.currentIndex) {
                card.classList.add('active');
            } else if (index === this.currentIndex + 1) {
                card.classList.add('next');
            } else if (index < this.currentIndex) {
                card.classList.add('prev');
            }
        });
    }

    updateProgress() {
        // Update progress dots
        const dots = document.querySelectorAll('.news-progress-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });

        // Update counter
        const counter = document.querySelector('.news-progress-counter');
        if (counter) {
            counter.textContent = `${this.currentIndex + 1} of ${this.cards.length}`;
        }

        // Hide swipe hint after first swipe
        if (this.currentIndex > 0) {
            const hint = document.querySelector('.news-swipe-hint');
            if (hint) hint.style.display = 'none';
        }
    }

    goToCard(index) {
        if (index >= 0 && index < this.cards.length) {
            this.currentIndex = index;
            this.updateCardStates();
            this.updateProgress();
        }
    }
}

// Initialize news card stack when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on mobile
    if (window.innerWidth <= 768) {
        const newsStack = new NewsCardStack('newsStackContainer');

        // Tab switcher
        const tabs = document.querySelectorAll('.news-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                const category = this.dataset.category;
                // Filter news by category
                // This would be implemented based on your data structure
            });
        });
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NewsCardStack;
}
