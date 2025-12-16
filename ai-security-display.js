/**
 * AI Security Display v3.0 - Unified Threat Intelligence Dashboard
 * ═══════════════════════════════════════════════════════════════════
 * Major restructure with main tabs separating Traditional IOCs and AI Security
 * 
 * Features:
 * - Main tab switching (Traditional IOCs vs AI Security)
 * - FontAwesome icons (NO emojis)
 * - Clickable cards with external links
 * - Proper sub-tab switching for AI section
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

    // Category Icons Map - FontAwesome classes
    const CATEGORY_ICONS = {
        'deepfake': 'fa-masks-theater',
        'prompt_injection': 'fa-syringe',
        'data_leak': 'fa-unlock',
        'misinformation': 'fa-newspaper',
        'bias': 'fa-balance-scale',
        'autonomous_vehicle': 'fa-car',
        'content_moderation': 'fa-shield-alt',
        'fraud': 'fa-money-bill-wave',
        'privacy': 'fa-user-secret',
        'discrimination': 'fa-ban',
        'other': 'fa-robot'
    };

    // OWASP Vulnerability Icons - FontAwesome classes
    const OWASP_ICONS = {
        'LLM01': 'fa-syringe',       // Prompt Injection
        'LLM02': 'fa-key',           // Sensitive Info Disclosure
        'LLM03': 'fa-boxes',         // Supply Chain
        'LLM04': 'fa-skull-crossbones', // Data Poisoning
        'LLM05': 'fa-file-export',   // Improper Output
        'LLM06': 'fa-robot',         // Excessive Agency
        'LLM07': 'fa-search',        // System Prompt Leakage
        'LLM08': 'fa-database',      // Vector Weaknesses
        'LLM09': 'fa-comment-slash', // Misinformation
        'LLM10': 'fa-coins'          // Unbounded Consumption
    };

    // State
    let aiData = {
        atlas: null,
        aiid: null,
        owasp: null,
        loaded: false
    };

    // ══════════════════════════════════════════════════════════════════
    // Main Tab Switching (Traditional IOCs vs AI Security)
    // ══════════════════════════════════════════════════════════════════
    function initMainTabs() {
        const tabButtons = document.querySelectorAll('.main-tab-btn');
        const iocContent = document.getElementById('ioc-tab-content');
        const aiContent = document.getElementById('ai-tab-content');

        if (!tabButtons.length) {
            console.warn('[AI Security] Main tab buttons not found');
            return;
        }

        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetTab = btn.getAttribute('data-main-tab');
                console.log('[AI Security] Main tab clicked:', targetTab);

                // Update button styles
                tabButtons.forEach(b => {
                    if (b.getAttribute('data-main-tab') === targetTab) {
                        b.style.background = targetTab === 'ioc'
                            ? 'linear-gradient(135deg, var(--accent-cyan), #0066ff)'
                            : 'linear-gradient(135deg, #9d4edd, #ff006e)';
                        b.style.color = 'white';
                        b.style.boxShadow = targetTab === 'ioc'
                            ? '0 4px 15px rgba(0, 217, 255, 0.3)'
                            : '0 4px 15px rgba(157, 78, 221, 0.3)';
                        b.classList.add('active');
                    } else {
                        b.style.background = 'transparent';
                        b.style.color = 'var(--text-secondary)';
                        b.style.boxShadow = 'none';
                        b.classList.remove('active');
                    }
                });

                // Show/hide content
                const iocExtended = document.querySelector('.ioc-extended-content');

                if (targetTab === 'ioc') {
                    if (iocContent) iocContent.style.display = 'block';
                    if (aiContent) aiContent.style.display = 'none';
                    if (iocExtended) iocExtended.style.display = 'block';
                } else {
                    if (iocContent) iocContent.style.display = 'none';
                    if (aiContent) aiContent.style.display = 'block';
                    if (iocExtended) iocExtended.style.display = 'none';
                }
            });
        });

        console.log('[AI Security] Main tabs initialized');
    }

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
                    console.log(`[AI Security] Loaded ${key}`);
                } else {
                    console.warn(`[AI Security] Failed to load ${filename}: ${response.status}`);
                }
            } catch (error) {
                console.error(`[AI Security] Error loading ${filename}:`, error);
            }
        });

        await Promise.all(loadPromises);
        aiData.loaded = true;

        // Initialize main tabs first
        initMainTabs();

        // Render the dashboard
        renderAIDashboard();

        // Update badge counts
        updateMainBadges();
    }

    // ══════════════════════════════════════════════════════════════════
    // Main Rendering
    // ══════════════════════════════════════════════════════════════════
    function renderAIDashboard() {
        console.log('[AI Security] Rendering dashboard...');

        // Render AI Stats Cards
        renderAIStats();

        // Render Top AI Threats (only AI threats now)
        renderTopAIThreats();

        // Render ATLAS section
        renderATLAS();

        // Render AIID section
        renderIncidents();

        // Render OWASP section
        renderOWASP();

        // Update tab badge counts
        updateTabBadges();

        // Initialize AI sub-tab switching
        initAITabs();

        console.log('[AI Security] Dashboard render complete');
    }

    function updateMainBadges() {
        const iocBadge = document.getElementById('ioc-total-badge');
        const aiBadge = document.getElementById('ai-total-badge');

        // Get IOC count from global threat data
        if (iocBadge) {
            // Try multiple sources for IOC count
            let iocCount = 0;

            // Source 1: window.threatIntelData.dailySummary.stats.totalIndicators
            if (window.threatIntelData?.dailySummary?.stats?.totalIndicators) {
                iocCount = window.threatIntelData.dailySummary.stats.totalIndicators;
            }
            // Source 2: Sum from vendors
            else if (window.threatIntelData?.vendors) {
                iocCount = Object.values(window.threatIntelData.vendors)
                    .reduce((sum, v) => sum + (v.iocCount || 0), 0);
            }
            // Source 3: Read from the Total IOCs stat card
            else {
                const totalIOCsElement = document.getElementById('totalIOCs');
                if (totalIOCsElement && totalIOCsElement.textContent !== '0') {
                    iocBadge.textContent = totalIOCsElement.textContent;
                    return;
                }
                // Retry after a delay if data isn't loaded yet
                setTimeout(updateMainBadges, 1000);
                return;
            }

            if (iocCount > 0) {
                iocBadge.textContent = iocCount.toLocaleString();
            }
        }

        // Calculate AI count
        if (aiBadge) {
            const aiCount = (aiData.atlas?.stats?.totalTechniques || 0) +
                (aiData.aiid?.stats?.total || 0) + 10; // 10 for OWASP
            aiBadge.textContent = aiCount;
        }
    }

    // Also expose a function to update IOC badge when data loads
    window.updateIOCBadge = function (count) {
        const iocBadge = document.getElementById('ioc-total-badge');
        if (iocBadge && count) {
            iocBadge.textContent = typeof count === 'number' ? count.toLocaleString() : count;
        }
    };

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
    // Stats Cards (with FontAwesome icons)
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
            <div class="ai-stat-card" onclick="document.querySelector('.ai-tab-btn[data-tab=atlas]').click()">
                <div class="stat-icon atlas">
                    <i class="fas fa-crosshairs" style="color: #9d4edd;"></i>
                </div>
                <div class="stat-value">${stats.techniques}</div>
                <div class="stat-label">AI Attack Techniques</div>
                <div class="stat-sublabel">MITRE ATLAS Framework</div>
            </div>
            
            <div class="ai-stat-card" onclick="document.querySelector('.ai-tab-btn[data-tab=incidents]').click()">
                <div class="stat-icon aiid">
                    <i class="fas fa-exclamation-triangle" style="color: #ff9500;"></i>
                </div>
                <div class="stat-value">${stats.incidents}</div>
                <div class="stat-label">AI Incidents</div>
                <div class="stat-sublabel">${stats.incidentsRecent} new in last 7 days</div>
            </div>
            
            <div class="ai-stat-card" onclick="document.querySelector('.ai-tab-btn[data-tab=owasp]').click()">
                <div class="stat-icon owasp">
                    <i class="fas fa-lock" style="color: #3a86ff;"></i>
                </div>
                <div class="stat-value">10</div>
                <div class="stat-label">OWASP LLM Top 10</div>
                <div class="stat-sublabel">${stats.owaspCritical} Critical vulnerabilities</div>
            </div>
            
            <div class="ai-stat-card">
                <div class="stat-icon correlation">
                    <i class="fas fa-project-diagram" style="color: #ff006e;"></i>
                </div>
                <div class="stat-value">${stats.caseStudies}</div>
                <div class="stat-label">Case Studies</div>
                <div class="stat-sublabel">Real-world AI attacks</div>
            </div>
        `;
    }

    // ══════════════════════════════════════════════════════════════════
    // Top AI Threats (Only AI-related now)
    // ══════════════════════════════════════════════════════════════════
    function renderTopAIThreats() {
        const container = document.getElementById('top-threats-container');
        if (!container) return;

        const aiThreats = generateAIThreats();

        if (aiThreats.length === 0) {
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-robot" style="font-size: 2rem; color: var(--text-muted);"></i><p>No AI threats detected</p></div>';
            return;
        }

        const html = aiThreats.map((threat, index) => `
            <a href="${threat.url}" target="_blank" rel="noopener" class="threat-item" data-type="${threat.type}">
                <div class="threat-rank ${threat.severity}">${index + 1}</div>
                <div class="threat-icon ${threat.type}">
                    <i class="fas ${threat.icon}" style="color: ${threat.iconColor};"></i>
                </div>
                <div class="threat-info">
                    <div class="threat-name">${escapeHtml(threat.name)}</div>
                    <div class="threat-meta">
                        <span class="threat-source">
                            <i class="fas ${threat.sourceIcon}" style="color: ${threat.iconColor};"></i> ${threat.source}
                        </span>
                        <span><i class="fas fa-calendar-alt"></i> ${threat.details}</span>
                    </div>
                </div>
                <div class="threat-arrow"><i class="fas fa-chevron-right"></i></div>
            </a>
        `).join('');

        container.innerHTML = html;
    }

    function generateAIThreats() {
        const threats = [];

        // Add top AI incidents
        if (aiData.aiid?.incidents) {
            aiData.aiid.incidents.slice(0, 3).forEach(incident => {
                const categoryIcon = CATEGORY_ICONS[incident.category] || CATEGORY_ICONS['other'];
                threats.push({
                    type: 'ai_incident',
                    name: incident.title,
                    source: 'AI Incident DB',
                    sourceIcon: 'fa-database',
                    details: incident.date,
                    severity: incident.severity || 'medium',
                    icon: categoryIcon,
                    iconColor: '#ff9500',
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
                    sourceIcon: 'fa-crosshairs',
                    details: 'Most exploited technique',
                    severity: 'critical',
                    icon: 'fa-syringe',
                    iconColor: '#9d4edd',
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
                    sourceIcon: 'fa-lock',
                    details: '2025 Top 10 #1',
                    severity: 'critical',
                    icon: OWASP_ICONS[topVuln.id] || 'fa-lock',
                    iconColor: '#3a86ff',
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
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-crosshairs" style="font-size: 2rem; color: var(--text-muted);"></i><p>Loading ATLAS techniques...</p></div>';
            return;
        }

        const techniques = aiData.atlas.techniques || [];

        if (techniques.length === 0) {
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-crosshairs" style="font-size: 2rem; color: var(--text-muted);"></i><p>No ATLAS techniques loaded</p></div>';
            return;
        }

        // Show first 12 techniques, sorted by severity
        const sortedTechniques = [...techniques].sort((a, b) => {
            const severityOrder = { high: 0, medium: 1, low: 2 };
            return (severityOrder[a.severity] || 2) - (severityOrder[b.severity] || 2);
        }).slice(0, 12);

        // Store techniques for modal access
        window._atlasData = {};
        sortedTechniques.forEach(tech => { window._atlasData[tech.id] = tech; });

        const html = `
            <div class="atlas-grid">
                ${sortedTechniques.map(tech => `
                    <div class="atlas-card clickable" data-type="atlas" data-id="${tech.id}" 
                         onclick="window.showAIModal('atlas', window._atlasData['${tech.id}'])">
                        <div class="atlas-card-header">
                            <span class="atlas-id"><i class="fas fa-crosshairs"></i> ${tech.id}</span>
                            <span class="atlas-severity ${tech.severity || 'low'}">${(tech.severity || 'low').toUpperCase()}</span>
                        </div>
                        <div class="atlas-name">${escapeHtml(tech.name)}</div>
                        <div class="atlas-desc">${escapeHtml(tech.description || 'Click to view full details')}</div>
                        <div class="atlas-footer">
                            <span class="atlas-link"><i class="fas fa-expand"></i> View Details</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="view-all-link">
                <a href="https://atlas.mitre.org/matrices/ATLAS" target="_blank" rel="noopener">
                    <i class="fas fa-crosshairs"></i> View all ${techniques.length} techniques on MITRE ATLAS <i class="fas fa-external-link-alt"></i>
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
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: var(--text-muted);"></i><p>Loading AI incidents...</p></div>';
            return;
        }

        const incidents = aiData.aiid.incidents || [];

        if (incidents.length === 0) {
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: var(--text-muted);"></i><p>No AI incidents loaded</p></div>';
            return;
        }

        // Store incidents for modal access
        window._incidentData = {};
        incidents.slice(0, 15).forEach(inc => { window._incidentData[inc.id] = inc; });

        // Show first 15 incidents
        const html = `
            <div class="incidents-list">
                ${incidents.slice(0, 15).map(incident => {
            const categoryIcon = CATEGORY_ICONS[incident.category] || CATEGORY_ICONS['other'];
            return `
                    <div class="incident-card clickable" data-type="incident" data-id="${incident.id}"
                         onclick="window.showAIModal('incident', window._incidentData['${incident.id}'])">
                        <span class="incident-icon"><i class="fas ${categoryIcon}" style="color: #ff9500;"></i></span>
                        <div class="incident-content">
                            <div class="incident-id-badge">${incident.id}</div>
                            <div class="incident-title">${escapeHtml(incident.title)}</div>
                            <div class="incident-meta">
                                <span class="incident-category">
                                    <i class="fas fa-tag"></i> ${formatCategory(incident.category)}
                                </span>
                                <span class="incident-severity ${incident.severity}">${incident.severity.toUpperCase()}</span>
                                <span class="incident-date"><i class="fas fa-calendar-alt"></i> ${incident.date}</span>
                            </div>
                        </div>
                        <span class="incident-arrow"><i class="fas fa-expand"></i></span>
                    </div>
                `}).join('')}
            </div>
            <div class="view-all-link">
                <a href="https://incidentdatabase.ai/apps/discover/" target="_blank" rel="noopener" style="color: #ff9500; background: rgba(255, 149, 0, 0.1); border-color: rgba(255, 149, 0, 0.2);">
                    <i class="fas fa-exclamation-triangle"></i> Explore all ${incidents.length} incidents on AI Incident Database <i class="fas fa-external-link-alt"></i>
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
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-lock" style="font-size: 2rem; color: var(--text-muted);"></i><p>Loading OWASP vulnerabilities...</p></div>';
            return;
        }

        const vulns = aiData.owasp.vulnerabilities || [];

        if (vulns.length === 0) {
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-lock" style="font-size: 2rem; color: var(--text-muted);"></i><p>No OWASP vulnerabilities loaded</p></div>';
            return;
        }

        // Store vulnerabilities for modal access
        window._owaspData = {};
        vulns.forEach(vuln => { window._owaspData[vuln.id] = vuln; });

        const html = `
            <div class="owasp-grid">
                ${vulns.map(vuln => {
            const icon = OWASP_ICONS[vuln.id] || 'fa-lock';
            return `
                    <div class="owasp-card clickable" data-type="owasp" data-id="${vuln.id}"
                         onclick="window.showAIModal('owasp', window._owaspData['${vuln.id}'])">
                        <div class="owasp-icon"><i class="fas ${icon}" style="color: #3a86ff;"></i></div>
                        <div class="owasp-rank-badge">#${vuln.rank}</div>
                        <div class="owasp-header">
                            <span class="owasp-id">${vuln.id}:2025</span>
                            <span class="owasp-severity ${vuln.severity}">${vuln.severity.toUpperCase()}</span>
                        </div>
                        <div class="owasp-name">${escapeHtml(vuln.name)}</div>
                        <div class="owasp-desc">${escapeHtml(vuln.description || 'Click to view details')}</div>
                        <div class="owasp-footer">
                            <span class="owasp-link"><i class="fas fa-expand"></i> View Details</span>
                        </div>
                    </div>
                `}).join('')}
            </div>
            <div class="view-all-link owasp-link-color">
                <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/" target="_blank" rel="noopener">
                    <i class="fas fa-lock"></i> View Official OWASP LLM Top 10 Project <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;

        container.innerHTML = html;
    }

    // ══════════════════════════════════════════════════════════════════
    // AI Sub-Tab Navigation
    // ══════════════════════════════════════════════════════════════════
    function initAITabs() {
        const tabButtons = document.querySelectorAll('.ai-tab-btn');
        const tabContents = document.querySelectorAll('.ai-tab-content');

        console.log('[AI Security] Initializing AI sub-tabs:', tabButtons.length, 'buttons,', tabContents.length, 'contents');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetTab = btn.getAttribute('data-tab');
                console.log('[AI Security] AI sub-tab clicked:', targetTab);

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
    // AI Security Modal System
    // ══════════════════════════════════════════════════════════════════

    // Create modal HTML if it doesn't exist
    function ensureModalExists() {
        if (document.getElementById('aiSecurityModal')) return;

        const modalHTML = `
            <div id="aiSecurityModal" class="ai-modal" style="display: none;">
                <div class="ai-modal-backdrop"></div>
                <div class="ai-modal-container">
                    <div class="ai-modal-header">
                        <div class="ai-modal-icon" id="aiModalIcon"></div>
                        <div class="ai-modal-title-area">
                            <span class="ai-modal-badge" id="aiModalBadge"></span>
                            <h2 id="aiModalTitle"></h2>
                        </div>
                        <button class="ai-modal-close" onclick="window.closeAIModal()">&times;</button>
                    </div>
                    <div class="ai-modal-body" id="aiModalBody"></div>
                    <div class="ai-modal-footer">
                        <button class="ai-modal-btn secondary" onclick="window.closeAIModal()">
                            <i class="fas fa-times"></i> Close
                        </button>
                        <a id="aiModalSourceLink" href="#" target="_blank" rel="noopener" class="ai-modal-btn primary">
                            <i class="fas fa-external-link-alt"></i> View Source
                        </a>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Close on backdrop click
        document.querySelector('.ai-modal-backdrop').addEventListener('click', window.closeAIModal);

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') window.closeAIModal();
        });
    }

    // Show modal with data
    window.showAIModal = function (type, data) {
        ensureModalExists();

        const modal = document.getElementById('aiSecurityModal');
        const icon = document.getElementById('aiModalIcon');
        const badge = document.getElementById('aiModalBadge');
        const title = document.getElementById('aiModalTitle');
        const body = document.getElementById('aiModalBody');
        const sourceLink = document.getElementById('aiModalSourceLink');

        let iconClass = 'fa-info-circle';
        let iconColor = '#9d4edd';
        let sourceUrl = '#';
        let bodyContent = '';

        if (type === 'atlas') {
            iconClass = 'fa-crosshairs';
            iconColor = '#9d4edd';
            sourceUrl = `https://atlas.mitre.org/techniques/${data.id}`;
            badge.textContent = data.id;
            badge.className = 'ai-modal-badge atlas';
            title.textContent = data.name;

            bodyContent = `
                <div class="ai-modal-section">
                    <div class="ai-modal-meta">
                        <span class="severity-badge ${data.severity || 'medium'}">${(data.severity || 'medium').toUpperCase()}</span>
                        ${data.tactic ? `<span class="tactic-badge"><i class="fas fa-chess"></i> ${data.tactic}</span>` : ''}
                    </div>
                </div>
                
                <div class="ai-modal-section">
                    <h3><i class="fas fa-align-left"></i> Description</h3>
                    <p>${escapeHtml(data.description) || 'No description available. Click "View Source" to see full details on MITRE ATLAS.'}</p>
                </div>
                
                ${data.examples ? `
                <div class="ai-modal-section">
                    <h3><i class="fas fa-flask"></i> Examples</h3>
                    <ul class="ai-modal-list">
                        ${data.examples.map(ex => `<li>${escapeHtml(ex)}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                ${data.mitigations ? `
                <div class="ai-modal-section">
                    <h3><i class="fas fa-shield-alt"></i> Mitigations</h3>
                    <ul class="ai-modal-list">
                        ${data.mitigations.map(m => `<li>${escapeHtml(m)}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                <div class="ai-modal-info">
                    <i class="fas fa-info-circle"></i> 
                    This technique is part of the MITRE ATLAS framework for AI security threats.
                </div>
            `;

        } else if (type === 'incident') {
            iconClass = CATEGORY_ICONS[data.category] || 'fa-exclamation-triangle';
            iconColor = '#ff9500';
            sourceUrl = `https://incidentdatabase.ai/cite/${data.incident_id}`;
            badge.textContent = data.id;
            badge.className = 'ai-modal-badge incident';
            title.textContent = data.title;

            bodyContent = `
                <div class="ai-modal-section">
                    <div class="ai-modal-meta">
                        <span class="severity-badge ${data.severity}">${data.severity.toUpperCase()}</span>
                        <span class="category-badge"><i class="fas fa-tag"></i> ${formatCategory(data.category)}</span>
                        <span class="date-badge"><i class="fas fa-calendar"></i> ${data.date}</span>
                    </div>
                </div>
                
                <div class="ai-modal-section">
                    <h3><i class="fas fa-align-left"></i> Incident Summary</h3>
                    <p>${escapeHtml(data.description) || 'This AI incident was reported to the AI Incident Database. Click "View Source" for full details, reports, and affected systems.'}</p>
                </div>
                
                ${data.deployers ? `
                <div class="ai-modal-section">
                    <h3><i class="fas fa-building"></i> Organizations Involved</h3>
                    <div class="ai-modal-tags">
                        ${data.deployers.map(d => `<span class="tag">${escapeHtml(d)}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
                
                ${data.harmedParties ? `
                <div class="ai-modal-section">
                    <h3><i class="fas fa-users"></i> Affected Parties</h3>
                    <div class="ai-modal-tags">
                        ${data.harmedParties.map(h => `<span class="tag harm">${escapeHtml(h)}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
                
                <div class="ai-modal-info incident">
                    <i class="fas fa-database"></i> 
                    Incident #${data.incident_id} from the AI Incident Database
                </div>
            `;

        } else if (type === 'owasp') {
            iconClass = OWASP_ICONS[data.id] || 'fa-lock';
            iconColor = '#3a86ff';
            sourceUrl = data.sourceUrl || 'https://owasp.org/www-project-top-10-for-large-language-model-applications/';
            badge.textContent = `${data.id}:2025`;
            badge.className = 'ai-modal-badge owasp';
            title.textContent = data.name;

            bodyContent = `
                <div class="ai-modal-section">
                    <div class="ai-modal-meta">
                        <span class="rank-badge"><i class="fas fa-trophy"></i> #${data.rank} in Top 10</span>
                        <span class="severity-badge ${data.severity}">${data.severity.toUpperCase()}</span>
                    </div>
                </div>
                
                <div class="ai-modal-section">
                    <h3><i class="fas fa-align-left"></i> Description</h3>
                    <p>${escapeHtml(data.description) || 'No description available.'}</p>
                </div>
                
                ${data.examples ? `
                <div class="ai-modal-section">
                    <h3><i class="fas fa-code"></i> Attack Examples</h3>
                    <ul class="ai-modal-list examples">
                        ${data.examples.map(ex => `<li>${escapeHtml(ex)}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                ${data.prevention ? `
                <div class="ai-modal-section">
                    <h3><i class="fas fa-shield-alt"></i> Prevention Strategies</h3>
                    <ul class="ai-modal-list prevention">
                        ${data.prevention.map(p => `<li>${escapeHtml(p)}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                <div class="ai-modal-info owasp">
                    <i class="fas fa-lock"></i> 
                    OWASP Top 10 for LLM Applications (2025 Edition)
                </div>
            `;
        }

        icon.innerHTML = `<i class="fas ${iconClass}" style="color: ${iconColor};"></i>`;
        body.innerHTML = bodyContent;
        sourceLink.href = sourceUrl;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    window.closeAIModal = function () {
        const modal = document.getElementById('aiSecurityModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    };

    // ══════════════════════════════════════════════════════════════════
    // Public API
    // ══════════════════════════════════════════════════════════════════
    window.AISecurityDisplay = {
        load: loadAIData,
        getData: () => aiData,
        refresh: () => {
            aiData = { atlas: null, aiid: null, owasp: null, loaded: false };
            loadAIData();
        },
        switchToAI: () => {
            const aiBtn = document.querySelector('.main-tab-btn[data-main-tab="ai"]');
            if (aiBtn) aiBtn.click();
        },
        switchToIOC: () => {
            const iocBtn = document.querySelector('.main-tab-btn[data-main-tab="ioc"]');
            if (iocBtn) iocBtn.click();
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
