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
        this.injectStyles();

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

    injectStyles() {
        if (document.getElementById('live-dashboard-styles')) return;

        const style = document.createElement('style');
        style.id = 'live-dashboard-styles';
        style.textContent = `
            /* ========== ANIMATED COUNTERS ========== */
            .live-counter {
                display: inline-flex;
                align-items: baseline;
                gap: 4px;
            }

            .live-counter__value {
                font-variant-numeric: tabular-nums;
                font-weight: 700;
                transition: transform 0.3s ease;
            }

            .live-counter__value.updating {
                animation: counter-pulse 0.3s ease;
            }

            @keyframes counter-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); color: #00D9FF; }
            }

            /* ========== LIVE INDICATOR ========== */
            .live-indicator {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: rgba(16, 185, 129, 0.15);
                border: 1px solid rgba(16, 185, 129, 0.3);
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: 600;
                color: #10B981;
            }

            .live-indicator__dot {
                width: 8px;
                height: 8px;
                background: #10B981;
                border-radius: 50%;
                animation: live-pulse 1.5s ease-in-out infinite;
            }

            @keyframes live-pulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(0.8); }
            }

            /* ========== THREAT FEED TICKER ========== */
            .threat-ticker {
                background: linear-gradient(90deg, rgba(255, 61, 61, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(255, 61, 61, 0.05) 100%);
                border-top: 1px solid rgba(255, 61, 61, 0.1);
                border-bottom: 1px solid rgba(255, 61, 61, 0.1);
                padding: 12px 0;
                overflow: hidden;
                position: relative;
            }

            .threat-ticker__container {
                display: flex;
                animation: ticker-scroll 30s linear infinite;
            }

            .threat-ticker__container:hover {
                animation-play-state: paused;
            }

            @keyframes ticker-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }

            .threat-ticker__item {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 0 24px;
                white-space: nowrap;
                font-size: 0.85rem;
                color: rgba(255, 255, 255, 0.8);
            }

            body.light-mode .threat-ticker__item {
                color: rgba(0, 0, 0, 0.8);
            }

            .threat-ticker__icon {
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                font-size: 0.7rem;
            }

            .threat-ticker__icon--critical {
                background: rgba(255, 61, 61, 0.2);
                color: #FF3D3D;
            }

            .threat-ticker__icon--high {
                background: rgba(255, 149, 0, 0.2);
                color: #FF9500;
            }

            .threat-ticker__icon--new {
                background: rgba(0, 217, 255, 0.2);
                color: #00D9FF;
            }

            .threat-ticker__label {
                font-size: 0.65rem;
                font-weight: 600;
                padding: 2px 6px;
                border-radius: 3px;
                text-transform: uppercase;
            }

            .threat-ticker__label--cve {
                background: linear-gradient(135deg, #FF3D3D 0%, #FF6B6B 100%);
                color: #fff;
            }

            .threat-ticker__label--malware {
                background: linear-gradient(135deg, #FF9500 0%, #FFBB33 100%);
                color: #000;
            }

            .threat-ticker__label--breach {
                background: linear-gradient(135deg, #9333EA 0%, #A855F7 100%);
                color: #fff;
            }

            .threat-ticker__time {
                font-size: 0.7rem;
                color: rgba(255, 255, 255, 0.4);
            }

            body.light-mode .threat-ticker__time {
                color: rgba(0, 0, 0, 0.4);
            }

            /* ========== STATS DASHBOARD ========== */
            .stats-dashboard {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 1rem;
                padding: 1.5rem;
                background: rgba(255, 255, 255, 0.02);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 16px;
                margin: 2rem 0;
            }

            body.light-mode .stats-dashboard {
                background: rgba(0, 0, 0, 0.02);
                border-color: rgba(0, 0, 0, 0.08);
            }

            .stats-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 1.25rem;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.06);
                border-radius: 12px;
                text-align: center;
                transition: all 0.3s ease;
            }

            .stats-card:hover {
                transform: translateY(-4px);
                border-color: rgba(0, 217, 255, 0.3);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            }

            .stats-card__icon {
                width: 48px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 12px;
                font-size: 1.25rem;
                margin-bottom: 0.75rem;
            }

            .stats-card__icon--ioc {
                background: linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(0, 180, 220, 0.1) 100%);
                color: #00D9FF;
            }

            .stats-card__icon--cve {
                background: linear-gradient(135deg, rgba(255, 61, 61, 0.2) 0%, rgba(200, 50, 50, 0.1) 100%);
                color: #FF3D3D;
            }

            .stats-card__icon--article {
                background: linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(120, 40, 200, 0.1) 100%);
                color: #9333EA;
            }

            .stats-card__icon--guide {
                background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(10, 150, 100, 0.1) 100%);
                color: #10B981;
            }

            .stats-card__value {
                font-size: 1.75rem;
                font-weight: 700;
                color: #fff;
                line-height: 1.2;
                font-variant-numeric: tabular-nums;
            }

            body.light-mode .stats-card__value {
                color: #1a1a2e;
            }

            .stats-card__label {
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.5);
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-top: 4px;
            }

            body.light-mode .stats-card__label {
                color: rgba(0, 0, 0, 0.5);
            }

            .stats-card__trend {
                display: flex;
                align-items: center;
                gap: 4px;
                margin-top: 8px;
                font-size: 0.7rem;
                font-weight: 600;
            }

            .stats-card__trend--up {
                color: #10B981;
            }

            .stats-card__trend--down {
                color: #FF3D3D;
            }

            /* ========== ACTIVITY GRAPH ========== */
            .activity-graph {
                display: flex;
                align-items: flex-end;
                gap: 3px;
                height: 40px;
                padding: 0.5rem 0;
            }

            .activity-graph__bar {
                flex: 1;
                background: linear-gradient(to top, rgba(0, 217, 255, 0.3), rgba(0, 217, 255, 0.8));
                border-radius: 2px;
                min-height: 4px;
                transition: height 0.5s ease;
            }

            .activity-graph__bar:hover {
                background: linear-gradient(to top, rgba(0, 217, 255, 0.5), #00D9FF);
            }

            /* ========== MOBILE RESPONSIVE ========== */
            @media (max-width: 768px) {
                .threat-ticker {
                    display: none;
                }

                .stats-dashboard {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0.75rem;
                    padding: 1rem;
                }

                .stats-card {
                    padding: 1rem;
                }

                .stats-card__value {
                    font-size: 1.5rem;
                }
            }
        `;
        document.head.appendChild(style);
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
