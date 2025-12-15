/**
 * AI Security Display - Unified Threat Intelligence Dashboard
 * Handles loading and rendering AI security data from:
 * - MITRE ATLAS (AI attack techniques)
 * - AI Incident Database (real-world AI incidents)
 * - OWASP LLM Top 10 (2025 vulnerabilities)
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

    // State
    let aiData = {
        atlas: null,
        aiid: null,
        owasp: null,
        loaded: false
    };

    // ──────────────────────────────────────────────────────────────
    // Data Loading
    // ──────────────────────────────────────────────────────────────
    async function loadAIData() {
        console.log('[AI Security] Loading AI data...');

        const loadPromises = Object.entries(AI_DATA_FILES).map(async ([key, filename]) => {
            try {
                const response = await fetch(`${AI_DATA_BASE}/${filename}`);
                if (response.ok) {
                    aiData[key] = await response.json();
                    console.log(`[AI Security] Loaded ${key}:`, aiData[key]);
                } else {
                    console.warn(`[AI Security] Failed to load ${filename}: ${response.status}`);
                }
            } catch (error) {
                console.error(`[AI Security] Error loading ${filename}:`, error);
            }
        });

        await Promise.all(loadPromises);
        aiData.loaded = true;

        // Render the dashboard
        renderAIDashboard();
    }

    // ──────────────────────────────────────────────────────────────
    // Rendering Functions
    // ──────────────────────────────────────────────────────────────
    function renderAIDashboard() {
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

    function renderAIStats() {
        const container = document.getElementById('ai-stats-container');
        if (!container) return;

        const stats = {
            techniques: aiData.atlas?.stats?.totalTechniques || 0,
            tactics: aiData.atlas?.stats?.totalTactics || 0,
            incidents: aiData.aiid?.stats?.total || 0,
            incidentsRecent: aiData.aiid?.stats?.last7Days || 0,
            owaspVersion: aiData.owasp?.version || 'N/A'
        };

        container.innerHTML = `
            <div class="ai-stat-card">
                <div class="stat-icon atlas">
                    <i class="fas fa-crosshairs"></i>
                </div>
                <div class="stat-value">${stats.techniques}</div>
                <div class="stat-label">AI Attack Techniques</div>
                <div class="stat-sublabel">MITRE ATLAS v${aiData.atlas?.version || '5.1'}</div>
            </div>
            
            <div class="ai-stat-card">
                <div class="stat-icon aiid">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="stat-value">${stats.incidents}</div>
                <div class="stat-label">AI Incidents (90 days)</div>
                <div class="stat-sublabel">${stats.incidentsRecent} in last 7 days</div>
            </div>
            
            <div class="ai-stat-card">
                <div class="stat-icon owasp">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <div class="stat-value">10</div>
                <div class="stat-label">OWASP LLM Top 10</div>
                <div class="stat-sublabel">Version ${stats.owaspVersion} (2025)</div>
            </div>
            
            <div class="ai-stat-card">
                <div class="stat-icon correlation">
                    <i class="fas fa-link"></i>
                </div>
                <div class="stat-value">${stats.tactics}</div>
                <div class="stat-label">Attack Tactics</div>
                <div class="stat-sublabel">AI + Traditional vectors</div>
            </div>
        `;
    }

    function renderTopThreats() {
        const container = document.getElementById('top-threats-container');
        if (!container) return;

        // Generate top threats from available data
        const threats = generateTopThreats();

        if (threats.length === 0) {
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-shield-check"></i><p>No top threats to display</p></div>';
            return;
        }

        const html = threats.map((threat, index) => `
            <div class="threat-item" data-type="${threat.type}">
                <div class="threat-rank ${threat.severity}">${index + 1}</div>
                <div class="threat-icon ${threat.type}">
                    <i class="fas fa-${threat.icon}"></i>
                </div>
                <div class="threat-info">
                    <div class="threat-name">${escapeHtml(threat.name)}</div>
                    <div class="threat-meta">
                        <span class="threat-source">
                            <i class="fas fa-database"></i> ${threat.source}
                        </span>
                        <span>${threat.details}</span>
                    </div>
                </div>
            </div>
        `).join('');

        container.innerHTML = html;
    }

    function generateTopThreats() {
        const threats = [];

        // Add top AI incidents
        if (aiData.aiid?.incidents) {
            aiData.aiid.incidents.slice(0, 3).forEach(incident => {
                threats.push({
                    type: 'ai_incident',
                    name: incident.title,
                    source: 'AI Incident DB',
                    details: incident.date,
                    severity: incident.severity || 'medium',
                    icon: 'robot',
                    score: incident.severity === 'critical' ? 150 : incident.severity === 'high' ? 100 : 50
                });
            });
        }

        // Add trending ATLAS technique (Prompt Injection always relevant)
        if (aiData.atlas?.techniques) {
            const promptInjection = aiData.atlas.techniques.find(t =>
                t.name.toLowerCase().includes('prompt') || t.name.toLowerCase().includes('injection')
            );
            if (promptInjection) {
                threats.push({
                    type: 'ai_technique',
                    name: `${promptInjection.id}: ${promptInjection.name}`,
                    source: 'MITRE ATLAS',
                    details: 'Most exploited AI technique',
                    severity: 'critical',
                    icon: 'crosshairs',
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
                    details: '2025 Top 10 #1',
                    severity: 'critical',
                    icon: 'shield-alt',
                    score: 170
                });
            }
        }

        // Sort by score and return top 5
        return threats.sort((a, b) => b.score - a.score).slice(0, 5);
    }

    function renderATLAS() {
        const container = document.getElementById('atlas-container');
        if (!container || !aiData.atlas) return;

        const techniques = aiData.atlas.techniques || [];

        if (techniques.length === 0) {
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-crosshairs"></i><p>No ATLAS techniques loaded</p></div>';
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
                    <div class="atlas-card" data-id="${tech.id}">
                        <div class="atlas-card-header">
                            <span class="atlas-id">${tech.id}</span>
                            <span class="atlas-severity ${tech.severity || 'low'}">${tech.severity || 'low'}</span>
                        </div>
                        <div class="atlas-name">${escapeHtml(tech.name)}</div>
                        <div class="atlas-desc">${escapeHtml(tech.description || 'No description available')}</div>
                    </div>
                `).join('')}
            </div>
            <div style="text-align: center; margin-top: 1rem;">
                <a href="https://atlas.mitre.org/matrices/ATLAS" target="_blank" rel="noopener" 
                   style="color: var(--ai-purple); text-decoration: none; font-size: 0.9rem;">
                    View all ${techniques.length} techniques on MITRE ATLAS →
                </a>
            </div>
        `;

        container.innerHTML = html;
    }

    function renderIncidents() {
        const container = document.getElementById('incidents-container');
        if (!container || !aiData.aiid) return;

        const incidents = aiData.aiid.incidents || [];

        if (incidents.length === 0) {
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-robot"></i><p>No AI incidents loaded</p></div>';
            return;
        }

        // Show first 20 incidents
        const html = `
            <div class="incidents-list">
                ${incidents.slice(0, 20).map(incident => `
                    <a href="https://incidentdatabase.ai/cite/${incident.incident_id}" target="_blank" rel="noopener" class="incident-card">
                        <span class="incident-id">${incident.id}</span>
                        <div class="incident-content">
                            <div class="incident-title">${escapeHtml(incident.title)}</div>
                            <div class="incident-meta">
                                <span class="incident-category">
                                    <i class="fas fa-tag"></i> ${formatCategory(incident.category)}
                                </span>
                                <span class="incident-severity ${incident.severity}">${incident.severity}</span>
                                <span><i class="fas fa-calendar"></i> ${incident.date}</span>
                            </div>
                        </div>
                    </a>
                `).join('')}
            </div>
            <div style="text-align: center; margin-top: 1rem;">
                <a href="https://incidentdatabase.ai/apps/discover/" target="_blank" rel="noopener" 
                   style="color: var(--ai-orange); text-decoration: none; font-size: 0.9rem;">
                    Explore all ${incidents.length} incidents on AIID →
                </a>
            </div>
        `;

        container.innerHTML = html;
    }

    function renderOWASP() {
        const container = document.getElementById('owasp-container');
        if (!container || !aiData.owasp) return;

        const vulns = aiData.owasp.vulnerabilities || [];

        if (vulns.length === 0) {
            container.innerHTML = '<div class="ai-empty"><i class="fas fa-shield-alt"></i><p>No OWASP vulnerabilities loaded</p></div>';
            return;
        }

        const html = `
            <div class="owasp-grid">
                ${vulns.map(vuln => `
                    <div class="owasp-card">
                        <span class="owasp-rank">#${vuln.rank}</span>
                        <div class="owasp-header">
                            <span class="owasp-id">${vuln.id}:2025</span>
                            <span class="owasp-severity ${vuln.severity}">${vuln.severity}</span>
                        </div>
                        <div class="owasp-name">${escapeHtml(vuln.name)}</div>
                        <div class="owasp-desc">${escapeHtml(vuln.description || 'No description available')}</div>
                        ${vuln.sourceUrl ? `
                            <a href="${vuln.sourceUrl}" target="_blank" rel="noopener" class="owasp-link">
                                <i class="fas fa-external-link-alt"></i> Learn more
                            </a>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `;

        container.innerHTML = html;
    }

    // ──────────────────────────────────────────────────────────────
    // Tab Navigation
    // ──────────────────────────────────────────────────────────────
    function initAITabs() {
        const tabButtons = document.querySelectorAll('.ai-tab-btn');
        const tabContents = document.querySelectorAll('.ai-tab-content');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');

                // Update button states
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update content visibility
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.getAttribute('data-tab') === targetTab) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }

    // ──────────────────────────────────────────────────────────────
    // Utility Functions
    // ──────────────────────────────────────────────────────────────
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

    // ──────────────────────────────────────────────────────────────
    // Public API
    // ──────────────────────────────────────────────────────────────
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
        loadAIData();
    }

})();
