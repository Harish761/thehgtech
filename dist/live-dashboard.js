/**
 * THEHGTECH LIVE DASHBOARD
 * Animated threat counters, real-time feed ticker, and visual stats
 * @version 1.0
 */

class LiveDashboard {
    constructor() {
        this.stats = {
            iocs: 52000,
            cves: 0,
            articles: 0,
            guides: 0,
            threats: 0
        };
        this.tickerItems = [];
        this.tickerIndex = 0;
        this.animationFrameId = null;

        this.init();
    }

    init() {

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.initCounters();
        this.initTicker();
        this.initPulseIndicators();
        console.log('[LiveDashboard] ✓ Initialized');
    }


    // ========== ANIMATED COUNTERS ==========

    initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.counter) || 0;
            this.animateCounter(counter, target);
        });

        // Also look for specific stat elements
        this.updateStatCards();
    }

    animateCounter(element, target, duration = 2000) {
        const start = 0;
        const startTime = performance.now();
        const valueEl = element.querySelector('.live-counter__value') || element;

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutQuart)
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (target - start) * eased);

            valueEl.textContent = this.formatNumber(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                valueEl.textContent = this.formatNumber(target);
            }
        };

        requestAnimationFrame(animate);
    }

    formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toLocaleString();
    }

    updateStatCards() {
        // Find stat cards and animate them
        const statValues = document.querySelectorAll('.stats-card__value, .stat-value, [data-stat]');
        statValues.forEach(el => {
            const rawValue = el.textContent.replace(/[^0-9]/g, '');
            const target = parseInt(rawValue) || 0;
            if (target > 0) {
                this.animateCounter(el, target, 1500);
            }
        });
    }

    // ========== THREAT FEED TICKER ==========

    initTicker() {
        const tickerContainer = document.querySelector('.threat-ticker__container');
        if (tickerContainer) {
            this.loadTickerData();
        } else {
            // Auto-inject ticker if on homepage
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                this.injectTicker();
            }
        }
    }

    async loadTickerData() {
        try {
            // Fetch latest CVEs
            const cveRes = await fetch('/cve-data.json');
            if (cveRes.ok) {
                const data = await cveRes.json();
                const cves = data.cves.slice(0, 5).map(c => ({
                    type: 'cve',
                    label: c.severity || 'CVE',
                    text: `${c.cveId}: ${c.vendor} ${c.product}`,
                    time: c.dateAdded || 'Today'
                }));
                this.tickerItems.push(...cves);
            }

            // Add some sample threat items
            this.tickerItems.push(
                { type: 'malware', label: 'Malware', text: 'New LockBit 3.0 variant detected targeting healthcare', time: '2h ago' },
                { type: 'breach', label: 'Breach', text: 'Major telecom reports unauthorized access', time: '4h ago' },
            );

            this.renderTicker();
        } catch (e) {
            console.warn('[LiveDashboard] Ticker data load failed:', e);
        }
    }

    injectTicker() {
        const hero = document.querySelector('.hero, .main-content');
        if (!hero) return;

        const ticker = document.createElement('div');
        ticker.className = 'threat-ticker';
        ticker.innerHTML = '<div class="threat-ticker__container"></div>';

        // Insert after hero or at top of main content
        hero.parentNode.insertBefore(ticker, hero.nextSibling);

        this.loadTickerData();
    }

    renderTicker() {
        const container = document.querySelector('.threat-ticker__container');
        if (!container) return;

        // Duplicate items for seamless scrolling
        const items = [...this.tickerItems, ...this.tickerItems];

        container.innerHTML = items.map(item => this.createTickerItem(item)).join('');
    }

    createTickerItem(item) {
        const iconClasses = {
            cve: 'fa-bug',
            malware: 'fa-virus',
            breach: 'fa-user-shield'
        };
        const labelClasses = {
            cve: 'threat-ticker__label--cve',
            malware: 'threat-ticker__label--malware',
            breach: 'threat-ticker__label--breach'
        };

        return `
            <div class="threat-ticker__item">
                <span class="threat-ticker__label ${labelClasses[item.type] || ''}">${item.label}</span>
                <span>${item.text}</span>
                <span class="threat-ticker__time">${item.time}</span>
            </div>
        `;
    }

    // ========== PULSE INDICATORS ==========

    initPulseIndicators() {
        // Add live indicators to elements with data-live attribute
        const liveElements = document.querySelectorAll('[data-live]');
        liveElements.forEach(el => {
            if (!el.querySelector('.live-indicator')) {
                const indicator = document.createElement('span');
                indicator.className = 'live-indicator';
                indicator.innerHTML = '<span class="live-indicator__dot"></span> LIVE';
                el.prepend(indicator);
            }
        });
    }

    // ========== UTILITY ==========

    createStatsWidget(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="stats-dashboard">
                <div class="stats-card">
                    <div class="stats-card__icon stats-card__icon--ioc">
                        <i class="fas fa-shield-halved"></i>
                    </div>
                    <div class="stats-card__value" data-counter="52847">0</div>
                    <div class="stats-card__label">IOCs Tracked</div>
                    <div class="stats-card__trend stats-card__trend--up">
                        <i class="fas fa-arrow-up"></i> +1.2K today
                    </div>
                </div>
                <div class="stats-card">
                    <div class="stats-card__icon stats-card__icon--cve">
                        <i class="fas fa-bug"></i>
                    </div>
                    <div class="stats-card__value" data-counter="1247">0</div>
                    <div class="stats-card__label">CVEs Monitored</div>
                    <div class="stats-card__trend stats-card__trend--up">
                        <i class="fas fa-arrow-up"></i> +15 this week
                    </div>
                </div>
                <div class="stats-card">
                    <div class="stats-card__icon stats-card__icon--article">
                        <i class="fas fa-newspaper"></i>
                    </div>
                    <div class="stats-card__value" data-counter="156">0</div>
                    <div class="stats-card__label">Articles</div>
                </div>
                <div class="stats-card">
                    <div class="stats-card__icon stats-card__icon--guide">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="stats-card__value" data-counter="34">0</div>
                    <div class="stats-card__label">Security Guides</div>
                </div>
            </div>
        `;

        // Animate the counters
        setTimeout(() => this.initCounters(), 100);
    }
}

// Initialize
const liveDashboard = new LiveDashboard();
