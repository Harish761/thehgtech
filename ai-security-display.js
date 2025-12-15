/**
 * AI Security Display v2.0 - Unified Threat Intelligence Dashboard
 * ═══════════════════════════════════════════════════════════════════
 * Handles loading and rendering AI security data from:
 * - MITRE ATLAS (AI attack techniques)
 * - AI Incident Database (real-world AI incidents)
 * - OWASP LLM Top 10 (2025 vulnerabilities)
 * 
 * Features:
 * - Beautiful icons and emojis
 * - Clickable cards with external links
 * - Proper tab switching
 * - Category icons for incidents
 */

(function () {
    'use strict';

    // Configuration
    const AI_DATA_BASE = '/ioc-data';
    const AI_DATA_FILES = {
        atlas: 'mitre-atlas.json',
        aiid: 'aiid-incidents.json',
        owasp: 'owasp-llm-top10.json'
    };

    // Category Icons Map
    const CATEGORY_ICONS = {
        'deepfake': '🎭',
        'prompt_injection': '💉',
        'data_leak': '🔓',
        'misinformation': '📰',
        'bias': '⚖️',
        'autonomous_vehicle': '🚗',
        'content_moderation': '🛡️',
        'fraud': '💸',
        'other': '🤖'
    };

    // OWASP Vulnerability Icons
    const OWASP_ICONS = {
        'LLM01': '💉', // Prompt Injection
        'LLM02': '🔐', // Sensitive Info Disclosure
        'LLM03': '📦', // Supply Chain
        'LLM04': '☠️', // Data Poisoning
        'LLM05': '📤', // Improper Output
        'LLM06': '🤖', // Excessive Agency
        'LLM07': '🔍', // System Prompt Leakage
        'LLM08': '📊', // Vector Weaknesses
        'LLM09': '🗣️', // Misinformation
        'LLM10': '💰'  // Unbounded Consumption
    };

    // State
    let aiData = {
        atlas: null,
        aiid: null,
        owasp: null,
        loaded: false
    };

    // ══════════════════════════════════════════════════════════════════
    // Data Loading
    // ══════════════════════════════════════════════════════════════════
    async function loadAIData() {
        console.log('[AI Security] Loading AI data...');

        const loadPromises = Object.entries(AI_DATA_FILES).map(async ([key, filename]) => {
            try {
                const response = await fetch(`${AI_DATA_BASE}/${filename}`);
                if (response.ok) {
                    aiData[key] = await response.json();
                    console.log(`[AI Security] ✓ Loaded ${key}:`, aiData[key]);
                } else {
                    console.warn(`[AI Security] ✗ Failed to load ${filename}: ${response.status}`);
                }
            } catch (error) {
                console.error(`[AI Security] ✗ Error loading ${filename}:`, error);
            }
        });

        await Promise.all(loadPromises);
        aiData.loaded = true;

        // Render the dashboard
        renderAIDashboard();
    }

    // ══════════════════════════════════════════════════════════════════
    // Main Rendering
    // ══════════════════════════════════════════════════════════════════
    function renderAIDashboard() {
        console.log('[AI Security] Rendering dashboard...');

        // Render AI Stats Cards
        renderAIStats();

        // Render Top Threats
        renderTopThreats();

        // Render ATLAS section
        renderATLAS();

        // Render AIID section
        renderIncidents();

        // Render OWASP section
        renderOWASP();

        // Update tab badge counts
        updateTabBadges();

        // Initialize tab switching
        initAITabs();

        console.log('[AI Security] ✓ Dashboard render complete');
    }

    function updateTabBadges() {
        const atlasCount = document.getElementById('atlas-count');
        const incidentsCount = document.getElementById('incidents-count');

        if (atlasCount && aiData.atlas) {
            atlasCount.textContent = aiData.atlas.stats?.totalTechniques || 0;
        }
        if (incidentsCount && aiData.aiid) {
            incidentsCount.textContent = aiData.aiid.stats?.total || 0;
        }
    }

    // ══════════════════════════════════════════════════════════════════
    // Stats Cards
    // ══════════════════════════════════════════════════════════════════
    function renderAIStats() {
        const container = document.getElementById('ai-stats-container');
        if (!container) {
            console.warn('[AI Security] Stats container not found');
            return;
        }

        const stats = {
            techniques: aiData.atlas?.stats?.totalTechniques || 0,
            tactics: aiData.atlas?.stats?.totalTactics || 0,
            caseStudies: aiData.atlas?.stats?.totalCaseStudies || 0,
            incidents: aiData.aiid?.stats?.total || 0,
            incidentsRecent: aiData.aiid?.stats?.last7Days || 0,
            owaspCritical: aiData.owasp?.stats?.critical || 3
        };

        container.innerHTML = `
            <div class="ai-stat-card" onclick="document.querySelector('[data-tab=atlas]').click()">
                <div class="stat-icon atlas">
                    🎯
                </div>
                <div class="stat-value">${stats.techniques}</div>
                <div class="stat-label">AI Attack Techniques</div>
                <div class="stat-sublabel">MITRE ATLAS Framework</div>
            </div>
            
            <div class="ai-stat-card" onclick="document.querySelector('[data-tab=incidents]').click()">
                <div class="stat-icon aiid">
                    🤖
                </div>
                <div class="stat-value">${stats.incidents}</div>
                <div class="stat-label">AI Incidents</div>
                <div class="stat-sublabel">${stats.incidentsRecent} new in last 7 days</div>
            </div>
            
            <div class="ai-stat-card" onclick="document.querySelector('[data-tab=owasp]').click()">
                <div class="stat-icon owasp">
                    🛡️
                </div>
                <div class="stat-value">10</div>
                <div class="stat-label">OWASP LLM Top 10</div>
                <div class="stat-sublabel">${stats.owaspCritical} Critical vulnerabilities</div>
            </div>
            
            <div class="ai-stat-card">
                <div class="stat-icon correlation">
                    📊
                </div>
                <div class="stat-value">${stats.caseStudies}</div>
                <div class="stat-label">Case Studies</div>
                <div class="stat-sublabel">Real-world AI attacks</div>
            </div>
        `;
    }

    // ══════════════════════════════════════════════════════════════════
    // Top Threats Today
    // ══════════════════════════════════════════════════════════════════
    function renderTopThreats() {
        const container = document.getElementById('top-threats-container');
        if (!container) return;

        const threats = generateTopThreats();

        if (threats.length === 0) {
            container.innerHTML = '<div class="ai-empty">🛡️<p>No top threats to display</p></div>';
            return;
        }

        const html = threats.map((threat, index) => `
            <a href="${threat.url}" target="_blank" rel="noopener" class="threat-item" data-type="${threat.type}">
                <div class="threat-rank ${threat.severity}">${index + 1}</div>
                <div class="threat-icon ${threat.type}">
                    ${threat.emoji}
                </div>
                <div class="threat-info">
                    <div class="threat-name">${escapeHtml(threat.name)}</div>
                    <div class="threat-meta">
                        <span class="threat-source">
                            ${threat.sourceEmoji} ${threat.source}
                        </span>
                        <span>📅 ${threat.details}</span>
                    </div>
                </div>
                <div class="threat-arrow">→</div>
            </a>
        `).join('');

        container.innerHTML = html;
    }

    function generateTopThreats() {
        const threats = [];

        // Add top AI incidents
        if (aiData.aiid?.incidents) {
            aiData.aiid.incidents.slice(0, 3).forEach(incident => {
                const categoryIcon = CATEGORY_ICONS[incident.category] || CATEGORY_ICONS['other'];
                threats.push({
                    type: 'ai_incident',
                    name: incident.title,
                    source: 'AI Incident DB',
                    sourceEmoji: '📋',
                    details: incident.date,
                    severity: incident.severity || 'medium',
                    emoji: categoryIcon,
                    url: `https://incidentdatabase.ai/cite/${incident.incident_id}`,
                    score: incident.severity === 'critical' ? 150 : incident.severity === 'high' ? 100 : 50
                });
            });
        }

        // Add trending ATLAS technique
        if (aiData.atlas?.techniques) {
            const promptInjection = aiData.atlas.techniques.find(t =>
                t.name.toLowerCase().includes('prompt') || t.name.toLowerCase().includes('injection')
            );
            if (promptInjection) {
                threats.push({
                    type: 'ai_technique',
                    name: `${promptInjection.id}: ${promptInjection.name}`,
                    source: 'MITRE ATLAS',
                    sourceEmoji: '🎯',
                    details: 'Most exploited technique',
                    severity: 'critical',
                    emoji: '💉',
                    url: `https://atlas.mitre.org/techniques/${promptInjection.id}`,
                    score: 180
                });
            }
        }

        // Add top OWASP vulnerability
        if (aiData.owasp?.vulnerabilities) {
            const topVuln = aiData.owasp.vulnerabilities[0];
            if (topVuln) {
                threats.push({
                    type: 'ai_technique',
                    name: `${topVuln.id}: ${topVuln.name}`,
                    source: 'OWASP LLM',
                    sourceEmoji: '🛡️',
                    details: '2025 Top 10 #1',
                    severity: 'critical',
                    emoji: OWASP_ICONS[topVuln.id] || '🔒',
                    url: topVuln.sourceUrl || 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
                    score: 170
                });
            }
        }

        // Sort by score and return top 5
        return threats.sort((a, b) => b.score - a.score).slice(0, 5);
    }

    // ══════════════════════════════════════════════════════════════════
    // MITRE ATLAS Section
    // ══════════════════════════════════════════════════════════════════
    function renderATLAS() {
        const container = document.getElementById('atlas-container');
        if (!container) {
            console.warn('[AI Security] ATLAS container not found');
            return;
        }

        if (!aiData.atlas) {
            container.innerHTML = '<div class="ai-empty">🎯<p>Loading ATLAS techniques...</p></div>';
            return;
        }

        const techniques = aiData.atlas.techniques || [];

        if (techniques.length === 0) {
            container.innerHTML = '<div class="ai-empty">🎯<p>No ATLAS techniques loaded</p></div>';
            return;
        }

        // Show first 12 techniques, sorted by severity
        const sortedTechniques = [...techniques].sort((a, b) => {
            const severityOrder = { high: 0, medium: 1, low: 2 };
            return (severityOrder[a.severity] || 2) - (severityOrder[b.severity] || 2);
        }).slice(0, 12);

        const html = `
            <div class="atlas-grid">
                ${sortedTechniques.map(tech => `
                    <a href="https://atlas.mitre.org/techniques/${tech.id}" target="_blank" rel="noopener" 
                       class="atlas-card" data-id="${tech.id}">
                        <div class="atlas-card-header">
                            <span class="atlas-id">🎯 ${tech.id}</span>
                            <span class="atlas-severity ${tech.severity || 'low'}">${(tech.severity || 'low').toUpperCase()}</span>
                        </div>
                        <div class="atlas-name">${escapeHtml(tech.name)}</div>
                        <div class="atlas-desc">${escapeHtml(tech.description || 'Click to view details on MITRE ATLAS')}</div>
                        <div class="atlas-footer">
                            <span class="atlas-link">View Details →</span>
                        </div>
                    </a>
                `).join('')}
            </div>
            <div class="view-all-link">
                <a href="https://atlas.mitre.org/matrices/ATLAS" target="_blank" rel="noopener">
                    🎯 View all ${techniques.length} techniques on MITRE ATLAS →
                </a>
            </div>
        `;

        container.innerHTML = html;
    }

    // ══════════════════════════════════════════════════════════════════
    // AI Incidents Section
    // ══════════════════════════════════════════════════════════════════
    function renderIncidents() {
        const container = document.getElementById('incidents-container');
        if (!container) {
            console.warn('[AI Security] Incidents container not found');
            return;
        }

        if (!aiData.aiid) {
            container.innerHTML = '<div class="ai-empty">🤖<p>Loading AI incidents...</p></div>';
            return;
        }

        const incidents = aiData.aiid.incidents || [];

        if (incidents.length === 0) {
            container.innerHTML = '<div class="ai-empty">🤖<p>No AI incidents loaded</p></div>';
            return;
        }

        // Show first 15 incidents
        const html = `
            <div class="incidents-list">
                ${incidents.slice(0, 15).map(incident => {
            const categoryIcon = CATEGORY_ICONS[incident.category] || CATEGORY_ICONS['other'];
            return `
                    <a href="https://incidentdatabase.ai/cite/${incident.incident_id}" target="_blank" rel="noopener" class="incident-card">
                        <span class="incident-emoji">${categoryIcon}</span>
                        <div class="incident-content">
                            <div class="incident-id-badge">${incident.id}</div>
                            <div class="incident-title">${escapeHtml(incident.title)}</div>
                            <div class="incident-meta">
                                <span class="incident-category">
                                    🏷️ ${formatCategory(incident.category)}
                                </span>
                                <span class="incident-severity ${incident.severity}">${incident.severity.toUpperCase()}</span>
                                <span class="incident-date">📅 ${incident.date}</span>
                            </div>
                        </div>
                        <span class="incident-arrow">→</span>
                    </a>
                `}).join('')}
            </div>
            <div class="view-all-link">
                <a href="https://incidentdatabase.ai/apps/discover/" target="_blank" rel="noopener">
                    🤖 Explore all ${incidents.length} incidents on AI Incident Database →
                </a>
            </div>
        `;

        container.innerHTML = html;
    }

    // ══════════════════════════════════════════════════════════════════
    // OWASP LLM Top 10 Section
    // ══════════════════════════════════════════════════════════════════
    function renderOWASP() {
        const container = document.getElementById('owasp-container');
        if (!container) {
            console.warn('[AI Security] OWASP container not found');
            return;
        }

        if (!aiData.owasp) {
            container.innerHTML = '<div class="ai-empty">🛡️<p>Loading OWASP vulnerabilities...</p></div>';
            return;
        }

        const vulns = aiData.owasp.vulnerabilities || [];

        if (vulns.length === 0) {
            container.innerHTML = '<div class="ai-empty">🛡️<p>No OWASP vulnerabilities loaded</p></div>';
            return;
        }

        const html = `
            <div class="owasp-grid">
                ${vulns.map(vuln => {
            const icon = OWASP_ICONS[vuln.id] || '🔒';
            const linkUrl = vuln.sourceUrl || 'https://owasp.org/www-project-top-10-for-large-language-model-applications/';
            return `
                    <a href="${linkUrl}" target="_blank" rel="noopener" class="owasp-card">
                        <div class="owasp-emoji">${icon}</div>
                        <div class="owasp-rank-badge">#${vuln.rank}</div>
                        <div class="owasp-header">
                            <span class="owasp-id">${vuln.id}:2025</span>
                            <span class="owasp-severity ${vuln.severity}">${vuln.severity.toUpperCase()}</span>
                        </div>
                        <div class="owasp-name">${escapeHtml(vuln.name)}</div>
                        <div class="owasp-desc">${escapeHtml(vuln.description || 'Click to view details')}</div>
                        <div class="owasp-footer">
                            <span class="owasp-link">Learn More →</span>
                        </div>
                    </a>
                `}).join('')}
            </div>
            <div class="view-all-link owasp-link-color">
                <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/" target="_blank" rel="noopener">
                    🛡️ View Official OWASP LLM Top 10 Project →
                </a>
            </div>
        `;

        container.innerHTML = html;
    }

    // ══════════════════════════════════════════════════════════════════
    // Tab Navigation
    // ══════════════════════════════════════════════════════════════════
    function initAITabs() {
        const tabButtons = document.querySelectorAll('.ai-tab-btn');
        const tabContents = document.querySelectorAll('.ai-tab-content');

        console.log('[AI Security] Initializing tabs:', tabButtons.length, 'buttons,', tabContents.length, 'contents');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetTab = btn.getAttribute('data-tab');
                console.log('[AI Security] Tab clicked:', targetTab);

                // Update button states
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update content visibility
                tabContents.forEach(content => {
                    const contentTab = content.getAttribute('data-tab');
                    if (contentTab === targetTab) {
                        content.classList.add('active');
                        content.style.display = 'block';
                    } else {
                        content.classList.remove('active');
                        content.style.display = 'none';
                    }
                });
            });
        });

        // Ensure first tab content is visible
        if (tabContents.length > 0) {
            tabContents[0].classList.add('active');
            tabContents[0].style.display = 'block';
            for (let i = 1; i < tabContents.length; i++) {
                tabContents[i].classList.remove('active');
                tabContents[i].style.display = 'none';
            }
        }
    }

    // ══════════════════════════════════════════════════════════════════
    // Utility Functions
    // ══════════════════════════════════════════════════════════════════
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function formatCategory(category) {
        if (!category) return 'Other';
        return category
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // ══════════════════════════════════════════════════════════════════
    // Public API
    // ══════════════════════════════════════════════════════════════════
    window.AISecurityDisplay = {
        load: loadAIData,
        getData: () => aiData,
        refresh: () => {
            aiData = { atlas: null, aiid: null, owasp: null, loaded: false };
            loadAIData();
        }
    };

    // Auto-load when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAIData);
    } else {
        // Small delay to ensure all HTML elements are ready
        setTimeout(loadAIData, 100);
    }

})();
