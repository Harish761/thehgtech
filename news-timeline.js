/**
 * News Timeline Display - TheHGTech
 * Option C: Featured Hero + Timeline List with Modals
 * Replaces premium-news.js with new scannable design
 */

(function () {
    'use strict';

    // Category detection keywords (same as before)
    const CATEGORY_KEYWORDS = {
        ransomware: ['ransomware', 'ransom', 'lockbit', 'alphv', 'blackcat', 'qilin', 'akira', 'clop', 'hive', 'conti', 'rhysida', 'medusa', 'extortion'],
        vulnerability: ['vulnerability', 'cve-', 'patch', 'flaw', 'exploit', 'security update', 'critical flaw', 'rce', 'remote code execution'],
        breach: ['breach', 'data leak', 'exposed', 'stolen', 'hack', 'compromise', 'leaked', 'exfiltrated', 'data theft'],
        zeroday: ['zero-day', '0-day', 'zeroday', 'actively exploited', 'in the wild'],
        malware: ['malware', 'trojan', 'botnet', 'backdoor', 'stealer', 'infostealer', 'rat ', 'keylogger', 'worm'],
        apt: ['apt', 'nation-state', 'lazarus', 'fancy bear', 'cozy bear', 'sandworm', 'kimsuky', 'chinese hackers', 'russian hackers', 'threat actor'],
        ai: ['ai ', 'artificial intelligence', 'machine learning', 'llm', 'chatgpt', 'claude', 'grok', 'gemini', 'gpt-', 'language model', 'neural', 'deep learning', 'deepfake']
    };

    // Severity mapping for categories
    const CATEGORY_SEVERITY = {
        zeroday: 'critical',
        ransomware: 'critical',
        apt: 'high',
        breach: 'high',
        vulnerability: 'medium',
        malware: 'medium',
        ai: 'info',
        default: 'low'
    };

    // Threat severity scores (for featured selection)
    const THREAT_SCORES = {
        zeroday: 10,
        ransomware: 8,
        apt: 7,
        vulnerability: 6,
        breach: 5,
        malware: 4,
        ai: 3,
        default: 2
    };

    // Store current items for modal access
    let currentCyberItems = [];
    let currentAIItems = [];

    /**
     * Detect category from title/content
     */
    function detectCategory(title, content) {
        const text = (title + ' ' + (content || '')).toLowerCase();
        for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
            if (keywords.some(keyword => text.includes(keyword))) {
                return category;
            }
        }
        return 'default';
    }

    /**
     * Get category display name
     */
    function getCategoryDisplayName(category) {
        const names = {
            ransomware: 'Ransomware',
            vulnerability: 'Vulnerability',
            breach: 'Data Breach',
            zeroday: 'Zero-Day',
            malware: 'Malware',
            apt: 'APT Campaign',
            ai: 'AI Security',
            default: 'Security Intel'
        };
        return names[category] || 'Security Intel';
    }

    /**
     * Get category icon
     */
    function getCategoryIcon(category) {
        const icons = {
            ransomware: 'fa-lock',
            vulnerability: 'fa-bug',
            breach: 'fa-database',
            zeroday: 'fa-exclamation-triangle',
            malware: 'fa-virus',
            apt: 'fa-user-secret',
            ai: 'fa-robot',
            default: 'fa-shield-alt'
        };
        return icons[category] || 'fa-shield-alt';
    }

    /**
     * Calculate threat score for sorting
     */
    function calculateThreatScore(item) {
        const category = detectCategory(item.title || '', item.content || '');
        return THREAT_SCORES[category] || 2;
    }

    /**
     * Escape HTML for safety
     */
    function escapeHTML(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    /**
     * Format relative time
     */
    function formatRelativeTime(dateStr) {
        try {
            // Parse date like "Jan 05 2026"
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) {
                return dateStr; // Invalid date, return as-is
            }

            const now = new Date();
            const diffMs = now - date;

            // Future dates - show the date as-is
            if (diffMs < 0) {
                return dateStr;
            }

            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

            if (diffHours < 1) return 'Just now';
            if (diffHours < 24) return `${diffHours}h ago`;
            if (diffDays === 1) return 'Yesterday';
            if (diffDays < 7) return `${diffDays}d ago`;
            if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
            return dateStr; // Older than a month, show full date
        } catch (e) {
            return dateStr;
        }
    }

    /**
     * Render featured hero card
     */
    function renderFeaturedHero(item, index, type) {
        const category = detectCategory(item.title || '', item.content || '');
        const isAI = type === 'ai';
        const headline = item.headline || item.title || 'No headline';
        const excerpt = (item.content || '').substring(0, 180);

        return `
            <div class="news-featured-hero ${isAI ? 'ai-featured' : ''}" 
                 data-index="${index}" 
                 data-type="${type}" 
                 onclick="openNewsDetailModal(${index}, '${type}')">
                <div class="featured-label">
                    <i class="fas ${getCategoryIcon(category)}"></i>
                    ${getCategoryDisplayName(category)} • Featured
                </div>
                <h3 class="featured-headline">${escapeHTML(headline)}</h3>
                <p class="featured-excerpt">${escapeHTML(excerpt)}...</p>
                <div class="featured-meta">
                    <span><i class="far fa-clock"></i> ${escapeHTML(item.date || '')}</span>
                    <span><i class="fas fa-newspaper"></i> ${escapeHTML(item.source || '')}</span>
                    <span class="featured-cta">
                        Read full story <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        `;
    }

    /**
     * Render timeline item
     */
    function renderTimelineItem(item, index, type) {
        const category = detectCategory(item.title || '', item.content || '');
        const severity = CATEGORY_SEVERITY[category] || 'low';
        const isAI = type === 'ai';
        const headline = item.headline || item.title || 'No headline';
        const relativeTime = formatRelativeTime(item.date);

        return `
            <div class="news-timeline-item ${isAI ? 'ai-item' : ''}"
                 data-index="${index}"
                 data-type="${type}"
                 onclick="openNewsDetailModal(${index}, '${type}')">
                <div class="timeline-severity ${severity}"></div>
                <div class="timeline-content">
                    <div class="timeline-headline">
                        ${escapeHTML(headline)}
                        <span class="timeline-category ${category}">${getCategoryDisplayName(category)}</span>
                    </div>
                    <div class="timeline-meta">
                        <span class="timeline-time"><i class="far fa-clock"></i> ${relativeTime}</span>
                        <span>${escapeHTML(item.source || '')}</span>
                    </div>
                </div>
                <i class="fas fa-chevron-right timeline-arrow"></i>
            </div>
        `;
    }

    /**
     * Render the full news timeline section
     */
    function renderNewsTimeline(containerId, items, type) {
        const container = document.getElementById(containerId);
        if (!container || !items || items.length === 0) {
            if (container) {
                container.innerHTML = `
                    <div class="news-empty-state">
                        <i class="fas fa-newspaper"></i>
                        <p>No news items available at this time.</p>
                    </div>
                `;
            }
            return;
        }

        // Store items for modal access
        if (type === 'cyber') {
            currentCyberItems = items;
        } else {
            currentAIItems = items;
        }

        const isAI = type === 'ai';
        const sectionClass = isAI ? 'ai-section' : '';
        const sectionTitle = isAI ? 'AI Security Intel' : 'Threat Intelligence';
        const titleIcon = isAI ? 'fa-robot' : 'fa-shield-alt';
        const titleClass = isAI ? 'ai-intel' : '';

        // Limit to 10 items max
        const displayItems = items.slice(0, 10);

        // Find highest-scoring item for featured spot
        let featuredIndex = 0;
        let highestScore = 0;
        displayItems.forEach((item, idx) => {
            const score = calculateThreatScore(item);
            if (score > highestScore) {
                highestScore = score;
                featuredIndex = idx;
            }
        });

        // Get featured item and remaining timeline items
        const featuredItem = displayItems[featuredIndex];
        const timelineItems = displayItems.filter((_, idx) => idx !== featuredIndex);

        // Render featured hero
        const featuredHTML = renderFeaturedHero(featuredItem, featuredIndex, type);

        // Render timeline items
        const timelineHTML = timelineItems.map((item, idx) => {
            const originalIndex = idx >= featuredIndex ? idx + 1 : idx;
            return renderTimelineItem(item, originalIndex, type);
        }).join('');

        container.innerHTML = `
            <div class="news-timeline-section ${sectionClass}">
                <div class="news-section-header">
                    <h2 class="news-section-title ${titleClass}">
                        <i class="fas ${titleIcon}"></i>
                        ${sectionTitle}
                    </h2>
                    <span class="news-section-count">${displayItems.length} stories</span>
                </div>
                
                ${featuredHTML}
                
                <div class="news-timeline-list">
                    ${timelineHTML}
                </div>
            </div>
        `;
    }

    /**
     * Create and show the news detail modal
     */
    function openNewsDetailModal(index, type) {
        const items = type === 'cyber' ? currentCyberItems : currentAIItems;
        const item = items[index];

        if (!item) {
            console.error('News item not found:', index, type);
            return;
        }

        const category = detectCategory(item.title || '', item.content || '');
        const title = item.title || item.headline || 'No title';
        const content = item.content || 'No content available.';
        const source = item.source || 'Unknown';
        const sourceUrl = item.sourceUrl || '#';
        const date = item.date || '';
        const relatedResources = item.relatedResources || [];

        // Build related links HTML
        let relatedHTML = '';
        if (relatedResources.length > 0) {
            const linksHTML = relatedResources.map(link => `
                <a href="${link.url}" class="modal-related-link">
                    <i class="fas ${link.icon || 'fa-link'}"></i>
                    ${escapeHTML(link.label)}
                </a>
            `).join('');

            relatedHTML = `
                <div class="modal-related-section">
                    <div class="modal-related-title">
                        <i class="fas fa-link"></i> Related on TheHGTech
                    </div>
                    <div class="modal-related-links">
                        ${linksHTML}
                    </div>
                </div>
            `;
        }

        // Create modal HTML
        const modalHTML = `
            <div class="news-detail-modal active" id="newsDetailModal" onclick="closeNewsDetailModal(event)">
                <div class="news-modal-content" onclick="event.stopPropagation()">
                    <div class="news-modal-header">
                        <div>
                            <span class="modal-category-badge ${category}">
                                <i class="fas ${getCategoryIcon(category)}"></i>
                                ${getCategoryDisplayName(category)}
                            </span>
                            <h2 class="modal-title">${escapeHTML(title)}</h2>
                        </div>
                        <button class="modal-close" onclick="closeNewsDetailModal(event, true)">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="news-modal-body">
                        <div class="modal-meta-bar">
                            <span><i class="far fa-calendar"></i> ${escapeHTML(date)}</span>
                            <span><i class="fas fa-newspaper"></i> ${escapeHTML(source)}</span>
                        </div>
                        <div class="modal-content-text">
                            ${escapeHTML(content)}
                        </div>
                        ${relatedHTML}
                        <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer" class="modal-source-btn">
                            <i class="fas fa-external-link-alt"></i>
                            Read Full Article on ${escapeHTML(source)}
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal if present
        const existingModal = document.getElementById('newsDetailModal');
        if (existingModal) {
            existingModal.remove();
        }

        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';

        // Add escape key listener
        document.addEventListener('keydown', handleModalEscape);
    }

    /**
     * Close the news detail modal
     */
    function closeNewsDetailModal(event, force = false) {
        if (!force && event.target.closest('.news-modal-content')) {
            return;
        }

        const modal = document.getElementById('newsDetailModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        }
        document.removeEventListener('keydown', handleModalEscape);
    }

    /**
     * Handle escape key for modal
     */
    function handleModalEscape(event) {
        if (event.key === 'Escape') {
            closeNewsDetailModal(event, true);
        }
    }

    /**
     * Initialize news timeline display
     */
    function initNewsTimeline() {
        if (typeof websiteContent === 'undefined') {
            console.warn('websiteContent not loaded yet');
            return;
        }

        // Render Cyber news
        if (websiteContent.cyberShorts && websiteContent.cyberShorts.length > 0) {
            renderNewsTimeline('cyberNewsPremium', websiteContent.cyberShorts, 'cyber');
        }

        // Render AI news
        if (websiteContent.aiShorts && websiteContent.aiShorts.length > 0) {
            renderNewsTimeline('aiNewsPremium', websiteContent.aiShorts, 'ai');
        }

        console.log('✅ News Timeline initialized');
    }

    // Expose functions to global scope
    window.initNewsTimeline = initNewsTimeline;
    window.openNewsDetailModal = openNewsDetailModal;
    window.closeNewsDetailModal = closeNewsDetailModal;
    window.renderNewsTimeline = renderNewsTimeline;

    // Also expose for backward compatibility with premium-news
    window.initPremiumNews = initNewsTimeline;
    window.openNewsModal = openNewsDetailModal;

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(initNewsTimeline, 100);
        });
    } else {
        setTimeout(initNewsTimeline, 100);
    }

})();
