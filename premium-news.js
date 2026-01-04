/**
 * Premium News Display - TheHGTech
 * Feature + Grid Layout with Internal Link Enrichment
 */

(function () {
    'use strict';

    // Category detection keywords
    const CATEGORY_KEYWORDS = {
        ransomware: ['ransomware', 'ransom', 'lockbit', 'alphv', 'blackcat', 'qilin', 'akira', 'clop', 'hive', 'conti', 'rhysida', 'medusa', 'extortion'],
        vulnerability: ['vulnerability', 'cve-', 'patch', 'flaw', 'exploit', 'security update', 'zero-day', '0-day', 'critical flaw', 'rce', 'remote code execution'],
        breach: ['breach', 'data leak', 'exposed', 'stolen', 'hack', 'compromise', 'leaked', 'exfiltrated', 'data theft'],
        zeroday: ['zero-day', '0-day', 'zeroday', 'actively exploited', 'in the wild'],
        malware: ['malware', 'trojan', 'botnet', 'backdoor', 'stealer', 'infostealer', 'rat ', 'keylogger', 'worm'],
        apt: ['apt', 'nation-state', 'lazarus', 'fancy bear', 'cozy bear', 'sandworm', 'kimsuky', 'chinese hackers', 'russian hackers'],
        ai: ['ai ', 'artificial intelligence', 'machine learning', 'llm', 'chatgpt', 'claude', 'grok', 'gemini', 'gpt-', 'language model', 'neural', 'deep learning']
    };

    // Internal link mapping
    const INTERNAL_LINKS = {
        ransomware: {
            label: 'Ransomware Tracker',
            url: '/ransomware-tracker.html',
            icon: 'fa-skull-crossbones'
        },
        vulnerability: {
            label: 'CVE Tracker',
            url: '/cve-tracker.html',
            icon: 'fa-bug'
        },
        breach: {
            label: 'Threat Intel',
            url: '/threat-intel.html',
            icon: 'fa-shield-alt'
        },
        zeroday: {
            label: 'CVE Tracker',
            url: '/cve-tracker.html',
            icon: 'fa-exclamation-triangle'
        },
        guide_ransomware: {
            label: 'Response Guide',
            url: '/guides/ransomware-response-playbook.html',
            icon: 'fa-book'
        },
        guide_vulnerability: {
            label: 'Patch Guide',
            url: '/guides/cve-prioritization-patch-management.html',
            icon: 'fa-book'
        },
        guide_threat: {
            label: 'Threat Hunting',
            url: '/guides/threat-hunting-techniques.html',
            icon: 'fa-crosshairs'
        }
    };

    // Detect category from title/content
    function detectCategory(title, content) {
        const text = (title + ' ' + content).toLowerCase();

        for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
            if (keywords.some(keyword => text.includes(keyword))) {
                return category;
            }
        }
        return 'default';
    }

    // Get related internal links based on category
    function getRelatedLinks(category) {
        const links = [];

        // Primary link based on category
        if (INTERNAL_LINKS[category]) {
            links.push(INTERNAL_LINKS[category]);
        }

        // Add relevant guide
        if (category === 'ransomware') {
            links.push(INTERNAL_LINKS.guide_ransomware);
        } else if (category === 'vulnerability' || category === 'zeroday') {
            links.push(INTERNAL_LINKS.guide_vulnerability);
        } else if (category === 'breach' || category === 'apt') {
            links.push(INTERNAL_LINKS.guide_threat);
        }

        return links;
    }

    // Get category display name
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

    // Get category icon
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

    // Escape HTML for safety
    function escapeHTML(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // Render featured card
    function renderFeaturedCard(item, index, type) {
        const category = detectCategory(item.title, item.content);
        const isAI = type === 'ai';

        // Use server-side relatedResources if available, otherwise fall back to category-based
        let relatedLinks = [];
        if (item.relatedResources && Array.isArray(item.relatedResources) && item.relatedResources.length > 0) {
            relatedLinks = item.relatedResources;
        } else {
            relatedLinks = getRelatedLinks(category);
        }

        const linksHTML = relatedLinks.map(link => `
            <a href="${link.url}" class="related-link" onclick="event.stopPropagation()">
                <i class="fas ${link.icon}"></i>
                ${link.label}
            </a>
        `).join('');

        return `
            <div class="threat-brief-featured ${isAI ? 'ai-featured' : ''}" data-index="${index}" data-type="${type}" onclick="openNewsModal(${index}, '${type}')">
                <div class="featured-badge">
                    <i class="fas ${getCategoryIcon(category)}"></i>
                    ${getCategoryDisplayName(category)}
                </div>
                
                <h3 class="threat-title">${escapeHTML(item.title)}</h3>
                <div class="threat-date">${escapeHTML(item.date)}</div>
                
                <div class="threat-content">
                    ${escapeHTML(item.content).substring(0, 300)}...
                </div>
                
                ${relatedLinks.length > 0 ? `
                <div class="related-resources">
                    <div class="related-resources-title">
                        <i class="fas fa-link"></i>
                        Related on TheHGTech
                    </div>
                    <div class="related-links" onclick="event.stopPropagation()">
                        ${linksHTML}
                    </div>
                </div>
                ` : ''}
                
                <div class="source-attribution">
                    <span>Source: ${escapeHTML(item.source)}</span>
                </div>
            </div>
        `;
    }

    // Render small intel card
    function renderIntelCard(item, index, type) {
        const category = detectCategory(item.title, item.content);

        // Use server-side relatedResources if available, otherwise fall back to category-based
        let relatedLinks = [];
        if (item.relatedResources && Array.isArray(item.relatedResources) && item.relatedResources.length > 0) {
            relatedLinks = item.relatedResources.slice(0, 2); // Max 2 links for small card
        } else {
            relatedLinks = getRelatedLinks(category).slice(0, 2);
        }

        const linksHTML = relatedLinks.map(link => `
            <a href="${link.url}" class="intel-related-link" onclick="event.stopPropagation()">
                <i class="fas ${link.icon}"></i>
                ${link.label}
            </a>
        `).join('');

        return `
            <div class="intel-card category-${category}" data-index="${index}" data-type="${type}" onclick="openNewsModal(${index}, '${type}')">
                <div class="category-badge">
                    <i class="fas ${getCategoryIcon(category)}"></i>
                    ${getCategoryDisplayName(category)}
                </div>
                
                <h4 class="intel-title">${escapeHTML(item.title)}</h4>
                <div class="intel-date">${escapeHTML(item.date)}</div>
                
                ${relatedLinks.length > 0 ? `
                <div class="intel-related">
                    ${linksHTML}
                </div>
                ` : ''}
                
                <div class="source-attribution">
                    <span>src: ${escapeHTML(item.source)}</span>
                </div>
            </div>
        `;
    }

    // Threat severity scoring for determining featured article
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

    // Calculate threat score for an item
    function calculateThreatScore(item) {
        const category = detectCategory(item.title, item.content);
        return THREAT_SCORES[category] || 2;
    }

    // Render the full premium news section
    function renderPremiumNews(containerId, items, type) {
        const container = document.getElementById(containerId);
        if (!container || !items || items.length === 0) return;

        const isAI = type === 'ai';
        const sectionClass = isAI ? 'ai-section' : '';
        const titleIcon = isAI ? 'fa-robot' : 'fa-shield-alt';
        const titleClass = isAI ? 'ai-intel' : '';
        const sectionTitle = isAI ? 'AI Security Intel' : 'Threat Intelligence';

        // Limit to 10 items max
        const displayItems = items.slice(0, 10);

        // Find the highest-scoring item for featured spot
        let featuredIndex = 0;
        let highestScore = 0;

        displayItems.forEach((item, idx) => {
            const score = calculateThreatScore(item);
            if (score > highestScore) {
                highestScore = score;
                featuredIndex = idx;
            }
        });

        // Get featured item and remaining grid items
        const featuredItem = displayItems[featuredIndex];
        const gridItems = displayItems.filter((_, idx) => idx !== featuredIndex);

        // Render featured card (highest threat score)
        const featuredHTML = renderFeaturedCard(featuredItem, featuredIndex, type);

        // Render grid cards (remaining items, up to 9)
        const gridHTML = gridItems.map((item, idx) => {
            const originalIndex = idx >= featuredIndex ? idx + 1 : idx;
            return renderIntelCard(item, originalIndex, type);
        }).join('');

        container.innerHTML = `
            <div class="intel-section ${sectionClass}">
                <div class="intel-section-header">
                    <h2 class="intel-section-title ${titleClass}">
                        <i class="fas ${titleIcon}"></i>
                        ${sectionTitle}
                    </h2>
                </div>
                
                <div class="intel-layout">
                    ${featuredHTML}
                    
                    <div class="intel-grid">
                        ${gridHTML}
                    </div>
                </div>
            </div>
        `;
    }

    // Initialize premium news display
    function initPremiumNews() {
        if (typeof websiteContent === 'undefined') {
            console.warn('websiteContent not loaded yet');
            return;
        }

        // Render Cyber news
        if (websiteContent.cyberShorts && websiteContent.cyberShorts.length > 0) {
            renderPremiumNews('cyberNewsPremium', websiteContent.cyberShorts, 'cyber');
        }

        // Render AI news
        if (websiteContent.aiShorts && websiteContent.aiShorts.length > 0) {
            renderPremiumNews('aiNewsPremium', websiteContent.aiShorts, 'ai');
        }

        console.log('✅ Premium news layout initialized');
    }

    // Expose to global scope
    window.initPremiumNews = initPremiumNews;
    window.renderPremiumNews = renderPremiumNews;
    window.detectNewsCategory = detectCategory;
    window.getNewsRelatedLinks = getRelatedLinks;

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            // Delay to ensure content.js is loaded
            setTimeout(initPremiumNews, 100);
        });
    } else {
        setTimeout(initPremiumNews, 100);
    }

})();
