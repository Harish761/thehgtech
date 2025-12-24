/**
 * THEHGTECH CONTENT RECOMMENDATION ENGINE
 * Tag-based matching, reading history, and popularity tracking
 * @version 1.0
 */

class RecommendationEngine {
    constructor() {
        this.readingHistory = this.loadHistory();
        this.popularContent = this.loadPopular();
        this.contentIndex = [];
        this.initialized = false;

        this.init();
    }

    init() {
        this.trackCurrentPage();
        this.injectStyles();

        // Wait for DOM ready to render widgets
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.renderWidgets());
        } else {
            this.renderWidgets();
        }

        console.log('[RecommendationEngine] ✓ Initialized');
    }

    injectStyles() {
        if (document.getElementById('recommendation-styles')) return;

        const style = document.createElement('style');
        style.id = 'recommendation-styles';
        style.textContent = `
            /* ========== RECOMMENDATION WIDGETS ========== */
            .rec-widget {
                margin: 3rem 0;
                padding: 2rem;
                background: rgba(255, 255, 255, 0.02);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 16px;
            }

            body.light-mode .rec-widget {
                background: rgba(0, 0, 0, 0.02);
                border-color: rgba(0, 0, 0, 0.08);
            }

            .rec-widget__header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1.5rem;
            }

            .rec-widget__title {
                font-size: 1.25rem;
                font-weight: 600;
                color: var(--text-primary, #fff);
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .rec-widget__title i {
                color: #00D9FF;
            }

            body.light-mode .rec-widget__title i {
                color: #0077AA;
            }

            .rec-widget__view-all {
                font-size: 0.85rem;
                color: #00D9FF;
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 6px;
                transition: opacity 0.2s;
            }

            .rec-widget__view-all:hover {
                opacity: 0.8;
            }

            .rec-widget__grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1rem;
            }

            /* ========== RECOMMENDATION CARDS ========== */
            .rec-card {
                display: flex;
                flex-direction: column;
                padding: 1.25rem;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 12px;
                text-decoration: none;
                transition: all 0.25s ease;
                position: relative;
                overflow: hidden;
            }

            .rec-card:hover {
                transform: translateY(-4px);
                border-color: rgba(0, 217, 255, 0.3);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            }

            body.light-mode .rec-card {
                background: rgba(0, 0, 0, 0.02);
                border-color: rgba(0, 0, 0, 0.08);
            }

            body.light-mode .rec-card:hover {
                border-color: rgba(0, 119, 170, 0.3);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }

            .rec-card__badge {
                position: absolute;
                top: 12px;
                right: 12px;
                font-size: 0.65rem;
                padding: 3px 8px;
                border-radius: 4px;
                text-transform: uppercase;
                font-weight: 600;
            }

            .rec-card__badge--popular {
                background: linear-gradient(135deg, #FF3D3D 0%, #FF6B6B 100%);
                color: #fff;
            }

            .rec-card__badge--recent {
                background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
                color: #fff;
            }

            .rec-card__badge--related {
                background: linear-gradient(135deg, #00D9FF 0%, #0099CC 100%);
                color: #fff;
            }

            .rec-card__icon {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                background: linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(0, 180, 220, 0.08) 100%);
                color: #00D9FF;
                font-size: 1rem;
                margin-bottom: 1rem;
            }

            .rec-card__icon--guide { color: #10B981; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(10, 150, 100, 0.08) 100%); }
            .rec-card__icon--article { color: #FF3D3D; background: linear-gradient(135deg, rgba(255, 61, 61, 0.15) 0%, rgba(200, 50, 50, 0.08) 100%); }
            .rec-card__icon--cve { color: #FF9500; background: linear-gradient(135deg, rgba(255, 149, 0, 0.15) 0%, rgba(200, 120, 0, 0.08) 100%); }

            .rec-card__title {
                font-size: 0.95rem;
                font-weight: 600;
                color: #fff;
                margin-bottom: 0.5rem;
                line-height: 1.4;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            body.light-mode .rec-card__title {
                color: #1a1a2e;
            }

            .rec-card__desc {
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.6);
                line-height: 1.5;
                flex: 1;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            body.light-mode .rec-card__desc {
                color: rgba(0, 0, 0, 0.6);
            }

            .rec-card__meta {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-top: 1rem;
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.4);
            }

            body.light-mode .rec-card__meta {
                color: rgba(0, 0, 0, 0.4);
            }

            .rec-card__tag {
                padding: 2px 8px;
                background: rgba(0, 217, 255, 0.15);
                border-radius: 4px;
                color: #00D9FF;
                font-weight: 500;
            }

            body.light-mode .rec-card__tag {
                background: rgba(0, 119, 170, 0.1);
                color: #0077AA;
            }

            /* ========== CONTINUE READING SECTION ========== */
            .rec-continue {
                background: linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%);
                border-color: rgba(0, 217, 255, 0.15);
            }

            .rec-continue .rec-widget__title i {
                color: #9333EA;
            }

            /* ========== TRENDING SECTION ========== */
            .rec-trending {
                background: linear-gradient(135deg, rgba(255, 61, 61, 0.03) 0%, rgba(255, 149, 0, 0.03) 100%);
                border-color: rgba(255, 61, 61, 0.1);
            }

            .rec-trending .rec-widget__title i {
                color: #FF3D3D;
            }

            /* ========== MOBILE RESPONSIVE ========== */
            @media (max-width: 768px) {
                .rec-widget {
                    margin: 2rem 0;
                    padding: 1.25rem;
                    border-radius: 12px;
                }

                .rec-widget__grid {
                    grid-template-columns: 1fr;
                    gap: 0.75rem;
                }

                .rec-card {
                    padding: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ========== DATA MANAGEMENT ==========

    trackCurrentPage() {
        const path = window.location.pathname;
        const title = document.title.replace(' | TheHGTech', '').replace(' - TheHGTech', '');

        // Determine content type
        let type = 'page';
        if (path.includes('/guides/')) type = 'guide';
        else if (path.includes('/articles/')) type = 'article';
        else if (path.includes('/cve-tracker')) type = 'cve';
        else if (path.includes('/comparisons/')) type = 'comparison';

        // Skip index pages
        if (path === '/' || path.endsWith('/index.html')) return;
        if (path === '/articles.html' || path === '/guides/' || path === '/comparisons/') return;

        // Extract tags from page (if available)
        const tags = this.extractTags();

        // Update history
        const entry = {
            path, title, type, tags,
            timestamp: Date.now(),
            visits: 1
        };

        const existing = this.readingHistory.findIndex(h => h.path === path);
        if (existing >= 0) {
            this.readingHistory[existing].visits++;
            this.readingHistory[existing].timestamp = Date.now();
        } else {
            this.readingHistory.unshift(entry);
            this.readingHistory = this.readingHistory.slice(0, 50); // Keep last 50
        }

        this.saveHistory();

        // Update popularity
        this.updatePopularity(path, title, type);
    }

    extractTags() {
        const tags = [];

        // From meta keywords
        const keywords = document.querySelector('meta[name="keywords"]');
        if (keywords) {
            tags.push(...keywords.content.split(',').map(t => t.trim().toLowerCase()).slice(0, 5));
        }

        // From article-category or guide-tag elements
        document.querySelectorAll('.article-category, .guide-tag, .tag').forEach(el => {
            tags.push(el.textContent.trim().toLowerCase());
        });

        return [...new Set(tags)].slice(0, 10);
    }

    updatePopularity(path, title, type) {
        const existing = this.popularContent.find(p => p.path === path);
        if (existing) {
            existing.views++;
            existing.lastView = Date.now();
        } else {
            this.popularContent.push({ path, title, type, views: 1, lastView: Date.now() });
        }

        // Sort by views (weighted by recency)
        this.popularContent.sort((a, b) => {
            const recencyA = (Date.now() - (a.lastView || 0)) / (1000 * 60 * 60 * 24); // days ago
            const recencyB = (Date.now() - (b.lastView || 0)) / (1000 * 60 * 60 * 24);
            const scoreA = a.views / (1 + recencyA * 0.1);
            const scoreB = b.views / (1 + recencyB * 0.1);
            return scoreB - scoreA;
        });

        this.popularContent = this.popularContent.slice(0, 30);
        this.savePopular();
    }

    loadHistory() {
        try { return JSON.parse(localStorage.getItem('recHistory') || '[]'); } catch { return []; }
    }

    saveHistory() {
        localStorage.setItem('recHistory', JSON.stringify(this.readingHistory));
    }

    loadPopular() {
        try { return JSON.parse(localStorage.getItem('recPopular') || '[]'); } catch { return []; }
    }

    savePopular() {
        localStorage.setItem('recPopular', JSON.stringify(this.popularContent));
    }

    // ========== RECOMMENDATION ALGORITHMS ==========

    getRelatedContent(currentTags = [], currentPath = '') {
        // Score content based on tag overlap
        const scored = this.readingHistory
            .filter(h => h.path !== currentPath && h.tags?.length)
            .map(h => {
                const tagOverlap = h.tags.filter(t => currentTags.includes(t)).length;
                return { ...h, score: tagOverlap };
            })
            .filter(h => h.score > 0)
            .sort((a, b) => b.score - a.score);

        return scored.slice(0, 4);
    }

    getContinueReading() {
        // Get recently viewed but not finished (visited once)
        return this.readingHistory
            .filter(h => h.visits === 1)
            .slice(0, 3);
    }

    getPopularThisWeek() {
        const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        return this.popularContent
            .filter(p => (p.lastView || 0) > weekAgo)
            .slice(0, 4);
    }

    // ========== WIDGET RENDERING ==========

    renderWidgets() {
        // Find placeholder containers
        const placeholders = document.querySelectorAll('[data-recommendation]');
        placeholders.forEach(el => {
            const type = el.dataset.recommendation;
            if (type === 'related') this.renderRelatedWidget(el);
            else if (type === 'continue') this.renderContinueWidget(el);
            else if (type === 'popular') this.renderPopularWidget(el);
        });

        // Auto-inject on guide/article pages if no placeholder
        if (!placeholders.length) {
            const mainContent = document.querySelector('.guide-content, .article-content, main');
            if (mainContent) {
                this.autoInjectWidgets(mainContent);
            }
        }
    }

    autoInjectWidgets(container) {
        const currentTags = this.extractTags();
        const currentPath = window.location.pathname;

        // Related content widget
        const related = this.getRelatedContent(currentTags, currentPath);
        if (related.length >= 2) {
            const widget = this.createWidget('Related Content', 'fa-link', related, 'related');
            container.appendChild(widget);
        }

        // Popular this week
        const popular = this.getPopularThisWeek();
        if (popular.length >= 2) {
            const widget = this.createWidget('Popular This Week', 'fa-fire', popular, 'popular', 'rec-trending');
            container.appendChild(widget);
        }
    }

    createWidget(title, icon, items, badgeType = '', extraClass = '') {
        const widget = document.createElement('div');
        widget.className = `rec-widget ${extraClass}`;

        widget.innerHTML = `
            <div class="rec-widget__header">
                <h3 class="rec-widget__title">
                    <i class="fas ${icon}"></i>
                    ${title}
                </h3>
            </div>
            <div class="rec-widget__grid">
                ${items.map(item => this.createCard(item, badgeType)).join('')}
            </div>
        `;

        return widget;
    }

    createCard(item, badgeType = '') {
        const icons = { guide: 'fa-book', article: 'fa-newspaper', cve: 'fa-bug', comparison: 'fa-scale-balanced' };
        const icon = icons[item.type] || 'fa-file';

        let badge = '';
        if (badgeType === 'popular') badge = '<span class="rec-card__badge rec-card__badge--popular">🔥 Hot</span>';
        else if (badgeType === 'recent') badge = '<span class="rec-card__badge rec-card__badge--recent">Recent</span>';
        else if (badgeType === 'related') badge = '<span class="rec-card__badge rec-card__badge--related">Related</span>';

        const tagHtml = item.type ? `<span class="rec-card__tag">${item.type}</span>` : '';

        return `
            <a href="${item.path}" class="rec-card">
                ${badge}
                <div class="rec-card__icon rec-card__icon--${item.type}">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="rec-card__title">${item.title}</div>
                <div class="rec-card__meta">
                    ${tagHtml}
                    ${item.views ? `<span><i class="fas fa-eye"></i> ${item.views} views</span>` : ''}
                </div>
            </a>
        `;
    }

    renderRelatedWidget(container) {
        const currentTags = this.extractTags();
        const related = this.getRelatedContent(currentTags, window.location.pathname);
        if (related.length < 2) return;

        const widget = this.createWidget('Related Content', 'fa-link', related, 'related');
        container.appendChild(widget);
    }

    renderContinueWidget(container) {
        const items = this.getContinueReading();
        if (items.length < 2) return;

        const widget = this.createWidget('Continue Reading', 'fa-book-open', items, 'recent', 'rec-continue');
        container.appendChild(widget);
    }

    renderPopularWidget(container) {
        const items = this.getPopularThisWeek();
        if (items.length < 2) return;

        const widget = this.createWidget('Popular This Week', 'fa-fire', items, 'popular', 'rec-trending');
        container.appendChild(widget);
    }
}

// Initialize
const recommendationEngine = new RecommendationEngine();
