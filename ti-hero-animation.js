// ============================================
// THREAT INTELLIGENCE HERO - ULTIMATE ANIMATION SCRIPT
// Powers the most epic hero animation ever created
// ============================================

class ThreatIntelHero {
    constructor() {
        this.init();
    }

    init() {
        this.createParticles();
        this.createRadarScanner();
        this.createDataStreams();
        this.initTypingAnimation();
        this.initCounterAnimation();
        this.initGlitchEffect();
    }

    // ============================================
    // PARTICLE SYSTEM
    // ============================================
    createParticles() {
        const container = document.querySelector('.threat-particles');
        if (!container) return;

        // Create 30 floating particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            container.appendChild(particle);
        }
    }

    // ============================================
    // RADAR SCANNER
    // ============================================
    createRadarScanner() {
        const container = document.querySelector('.radar-scanner');
        if (!container) return;

        // Create 4 pulsing circles
        for (let i = 0; i < 4; i++) {
            const circle = document.createElement('div');
            circle.className = 'radar-circle';
            container.appendChild(circle);
        }

        // Create radar sweep line
        const sweep = document.createElement('div');
        sweep.className = 'radar-sweep';
        container.appendChild(sweep);
    }

    // ============================================
    // DATA STREAMS
    // ============================================
    createDataStreams() {
        const container = document.querySelector('.data-streams');
        if (!container) return;

        // Create 5 flowing data lines
        for (let i = 0; i < 5; i++) {
            const line = document.createElement('div');
            line.className = 'data-line';
            container.appendChild(line);
        }
    }

    // ============================================
    // TYPING ANIMATION
    // ============================================
    initTypingAnimation() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;

        const phrases = [
            'Real-time IOCs from 9 vendors',
            'AI-powered threat analysis',
            'Updated every 4 hours',
            '7-day trend visualization',
            'Live threat intelligence'
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        const type = () => {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                // Pause at end of phrase
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        };

        type();
    }

    // ============================================
    // COUNTER ANIMATION - NO JITTER VERSION
    // ============================================
    initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number');
        if (!counters.length) return;

        // Immediately show target values as loading placeholders (no "0" showing)
        counters.forEach(counter => {
            const target = counter.getAttribute('data-target');
            if (target) {
                // Show formatted target immediately to reserve space
                counter.textContent = this.formatNumber(parseInt(target));
                counter.style.opacity = '0.5';  // Dim until animation starts
            }
        });

        // Try to get real IOC count from dashboard
        const updateRealCount = async () => {
            try {
                if (window.ThreatDashboard) {
                    const dashboard = new window.ThreatDashboard();
                    const stats = await dashboard.loadAllData();

                    // Update the first counter (Active IOCs) with real data
                    const iocCounter = counters[0];
                    if (iocCounter && stats.totalIOCs) {
                        iocCounter.setAttribute('data-target', stats.totalIOCs);
                        iocCounter.textContent = this.formatNumber(stats.totalIOCs);
                    }
                }
            } catch (e) {
                console.log('Using default IOC count');
            }
        };

        updateRealCount();

        const animateCounter = (element, target) => {
            const finalValue = this.formatNumber(target);
            element.style.opacity = '1';  // Full opacity when animating

            // Quick fade-in animation instead of counting up
            element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            element.style.transform = 'scale(1.05)';

            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 150);

            element.textContent = finalValue;
        };

        // Observe when counters come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateCounter(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Start observing immediately
        setTimeout(() => {
            counters.forEach(counter => observer.observe(counter));
        }, 100);
    }

    // ============================================
    // GLITCH EFFECT
    // ============================================
    initGlitchEffect() {
        const title = document.querySelector('.glitch-title');
        if (!title) return;

        // Set data attribute for glitch effect
        title.setAttribute('data-text', title.textContent);

        // Random glitch effect every 5-10 seconds
        const randomGlitch = () => {
            title.classList.add('glitching');
            setTimeout(() => {
                title.classList.remove('glitching');
            }, 300);

            // Schedule next glitch
            const nextGlitch = Math.random() * 5000 + 5000; // 5-10 seconds
            setTimeout(randomGlitch, nextGlitch);
        };

        setTimeout(randomGlitch, 5000);
    }

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ThreatIntelHero();
    });
} else {
    new ThreatIntelHero();
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    const hero = document.querySelector('.ti-hero');
    if (!hero) return;

    if (document.hidden) {
        hero.style.animationPlayState = 'paused';
    } else {
        hero.style.animationPlayState = 'running';
    }
});
