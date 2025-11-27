// Tab Integration Script for Threat Intel Page
// This script adds dashboard tab functionality to the existing threat-intel.html

(function () {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Find the main container
        const mainContainer = document.querySelector('.main .container');
        if (!mainContainer) {
            console.error('Main container not found');
            return;
        }

        // Create tab navigation
        const tabNav = createTabNavigation();

        // Insert tab navigation after the 7-day retention notice
        const retentionNotice = mainContainer.querySelector('[style*="7-Day IOC"]')?.parentElement;
        if (retentionNotice) {
            retentionNotice.after(tabNav);
        } else {
            mainContainer.prepend(tabNav);
        }

        // Wrap existing content in "All Threats" tab
        const existingContent = Array.from(mainContainer.children).slice(
            Array.from(mainContainer.children).indexOf(tabNav) + 1
        );

        const threatsTab = document.createElement('div');
        threatsTab.id = 'threats-tab';
        threatsTab.className = 'tab-content';
        existingContent.forEach(el => threatsTab.appendChild(el));

        // Create dashboard tab
        const dashboardTab = createDashboardTab();

        // Create ransomware tab
        const ransomwareTab = createRansomwareTab();

        // Add tabs to container
        mainContainer.appendChild(dashboardTab);
        mainContainer.appendChild(ransomwareTab);
        mainContainer.appendChild(threatsTab);

        // Set initial active tab
        showTab('dashboard');

        // Load dashboard data
        loadDashboardData();

        // Load ransomware data
        loadRansomwareData();
    }

    function createTabNavigation() {
        const nav = document.createElement('div');
        nav.className = 'tab-navigation';
        nav.innerHTML = `
            <button class="tab-btn active" data-tab="dashboard">
                Dashboard
            </button>
            <button class="tab-btn" data-tab="threats">
                All Threats
            </button>
            <button class="tab-btn" data-tab="ransomware">
                🔐 Ransomware
            </button>
        `;

        // Add click handlers
        nav.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabName = btn.dataset.tab;
                showTab(tabName);
            });
        });

        return nav;
    }

    function showTab(tabName) {
        // Update buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        // Update content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === `${tabName}-tab`);
        });
    }

    function createDashboardTab() {
        const tab = document.createElement('div');
        tab.id = 'dashboard-tab';
        tab.className = 'tab-content active';
        tab.innerHTML = `
            <div class="dashboard-grid">
                <!-- Threat Leaderboard -->
                <div class="dashboard-card leaderboard-card">
                    <div class="card-header">
                        <h3>🏆 Top Threats</h3>
                        <span class="badge-live">LIVE</span>
                    </div>
                    <div id="threatLeaderboard" class="leaderboard">
                        <p style="text-align:center;color:var(--text-muted);">Loading...</p>
                    </div>
                </div>

                <!-- 7-Day Trend Chart -->
                <div class="dashboard-card chart-card">
                    <div class="card-header">
                        <h3>📈 7-Day Trend</h3>
                    </div>
                    <div style="position: relative; height: 300px;">
                        <canvas id="trendChart"></canvas>
                    </div>
                </div>

                <!-- Threat Distribution -->
                <div class="dashboard-card chart-card">
                    <div class="card-header">
                        <h3>🎯 Threat Types</h3>
                    </div>
                    <div style="position: relative; height: 300px;">
                        <canvas id="distributionChart"></canvas>
                    </div>
                </div>

                <!-- Vendor Contributions -->
                <div class="dashboard-card chart-card">
                    <div class="card-header">
                        <h3>📊 Data Sources</h3>
                    </div>
                    <div style="position: relative; height: 300px;">
                        <canvas id="vendorChart"></canvas>
                    </div>
                </div>
            </div>
        `;

        return tab;
    }

    function createRansomwareTab() {
        const tab = document.createElement('div');
        tab.id = 'ransomware-tab';
        tab.className = 'tab-content';
        tab.innerHTML = `
            <div class="section-header">
                <h2><span class="icon">🔒</span> Ransomware Tracker</h2>
                <p class="section-subtitle">Monitoring active ransomware campaigns from dark web leak sites (Last 7 Days). Data aggregated from Ransomware.live API & RSS feeds.</p>
            </div>
            <div class="ransomware-stats-bar">
                <div class="stat">
                    <span class="value" id="totalRansomwareGroups">-</span>
                    <span class="label">Active Groups</span>
                </div>
                <div class="stat">
                    <span class="value" id="totalRansomwareVictims">-</span>
                    <span class="label">Total Victims (7d)</span>
                </div>
            </div>
            
            <div class="ransomware-grid" id="ransomwareGrid">
                <div class="ransomware-loading">
                    <div class="spinner"></div>
                    <p>Loading ransomware data...</p>
                </div>
            </div>
        `;

        return tab;
    }

    async function loadDashboardData() {
        try {
            const dashboard = new ThreatDashboard();
            const stats = await dashboard.loadAllData();

            // Render leaderboard
            renderLeaderboard(stats.topMalware);

            // Initialize charts
            initializeCharts(stats, dashboard);

        } catch (error) {
            console.error('Failed to load dashboard data:', error);
        }
    }

    async function loadRansomwareData() {
        try {
            const response = await fetch('ransomware-data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            renderRansomwareData(data);

            console.log('✅ Ransomware data loaded:', data.total_groups, 'groups');
        } catch (error) {
            console.error('❌ Error loading ransomware data:', error);
            renderRansomwareError();
        }
    }

    function renderRansomwareData(data) {
        // Update stats
        const totalGroupsEl = document.getElementById('totalRansomwareGroups');
        const totalVictimsEl = document.getElementById('totalRansomwareVictims');

        if (totalGroupsEl) totalGroupsEl.textContent = data.total_groups || 0;
        if (totalVictimsEl) totalVictimsEl.textContent = data.total_victims || 0;

        // Render group cards
        const container = document.getElementById('ransomwareGrid');
        if (!container) return;

        container.innerHTML = '';

        if (!data.groups || data.groups.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.6);">No active ransomware campaigns in the last 7 days.</p>';
            return;
        }

        data.groups.forEach(group => {
            const card = createRansomwareCard(group);
            container.appendChild(card);
        });
    }

    function createRansomwareCard(group) {
        const card = document.createElement('div');
        card.className = 'ransomware-card';

        const trendIcon = group.trend === 'up' ? '↑' :
            group.trend === 'down' ? '↓' : '→';
        const trendClass = group.trend || 'stable';
        const trendText = group.trend === 'up' ? `+${group.trend_percentage}%` :
            group.trend === 'down' ? `${group.trend_percentage}%` :
                'Stable';

        const industriesHTML = group.industries && group.industries.length > 0
            ? `<div class="industries-list">
                 ${group.industries.map(ind =>
                `<span class="industry-tag">${escapeHtml(ind)}</span>`
            ).join('')}
               </div>`
            : '';

        card.innerHTML = `
            <div class="ransomware-header">
                <h3>${escapeHtml(group.name)}</h3>
                <div class="victim-count">
                    <span class="number">${group.count}</span>
                    <span class="label">Victims</span>
                </div>
            </div>
            
            <div class="ransomware-stats">
                <div class="ransomware-stat">
                    <span class="stat-label">Trend (7d)</span>
                    <span class="trend-indicator ${trendClass}">
                        ${trendIcon} ${trendText}
                    </span>
                </div>
                
                ${group.industries && group.industries.length > 0 ? `
                <div class="ransomware-stat">
                    <span class="stat-label">Target Industries</span>
                    <span class="stat-value">${group.industries.length}</span>
                </div>
                ` : ''}
                
                ${group.countries && group.countries.length > 0 ? `
                <div class="ransomware-stat">
                    <span class="stat-label">Countries</span>
                    <span class="stat-value">${group.countries.length}</span>
                </div>
                ` : ''}
            </div>
            
            ${industriesHTML}
            
            <button class="view-details-btn" data-group="${escapeHtml(group.name)}">
                View Victims & Details
            </button>
        `;

        // Add click handler for details button
        const detailsBtn = card.querySelector('.view-details-btn');
        detailsBtn.addEventListener('click', () => {
            showRansomwareModal(group);
        });

        return card;
    }

    function showRansomwareModal(group) {
        // Create modal if it doesn't exist
        let modal = document.getElementById('ransomwareModal');
        if (!modal) {
            modal = createRansomwareModal();
            document.body.appendChild(modal);
        }

        // Populate modal content
        const modalTitle = modal.querySelector('#ransomwareModalTitle');
        const modalContent = modal.querySelector('#ransomwareModalContent');

        modalTitle.textContent = `${group.name} Ransomware Group`;

        const victimsHTML = group.victims && group.victims.length > 0
            ? group.victims.slice(0, 10).map(v => `
                <div class="victim-item">
                    <div class="victim-name">${escapeHtml(v.name)}</div>
                    <div class="victim-date">${new Date(v.date).toLocaleDateString()}</div>
                </div>
              `).join('')
            : '<p style="color: var(--text-muted);">No victim details available</p>';

        modalContent.innerHTML = `
            <div class="modal-stats-grid">
                <div class="modal-stat">
                    <div class="modal-stat-label">Total Victims (7d)</div>
                    <div class="modal-stat-value">${group.count}</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-label">Trend</div>
                    <div class="modal-stat-value">${group.trend === 'up' ? '↑ Increasing' : group.trend === 'down' ? '↓ Decreasing' : '→ Stable'}</div>
                </div>
            </div>
            
            ${group.industries && group.industries.length > 0 ? `
            <div class="modal-section">
                <h4>🎯 Targeted Industries</h4>
                <div class="industries-list">
                    ${group.industries.map(i => `<span class="industry-tag">${escapeHtml(i)}</span>`).join('')}
                </div>
            </div>
            ` : ''}
            
            ${group.countries && group.countries.length > 0 ? `
            <div class="modal-section">
                <h4>🌍 Countries</h4>
                <div class="industries-list">
                    ${group.countries.map(c => `<span class="industry-tag">${escapeHtml(c)}</span>`).join('')}
                </div>
            </div>
            ` : ''}
            
            <div class="modal-section">
                <h4>📋 Recent Victims</h4>
                <div class="victims-list">
                    ${victimsHTML}
                </div>
                ${group.victims && group.victims.length > 10 ? `
                    <p style="color: var(--text-muted); margin-top: 1rem; text-align: center;">
                        ... and ${group.victims.length - 10} more victims
                    </p>
                ` : ''}
            </div>
        `;

        // Show modal
        modal.style.display = 'flex';
    }

    function createRansomwareModal() {
        const modal = document.createElement('div');
        modal.id = 'ransomwareModal';
        modal.className = 'ransomware-modal';
        modal.innerHTML = `
            <div class="ransomware-modal-content">
                <div class="ransomware-modal-header">
                    <h2 id="ransomwareModalTitle"></h2>
                    <button class="ransomware-modal-close">&times;</button>
                </div>
                <div class="ransomware-modal-body" id="ransomwareModalContent">
                </div>
            </div>
        `;

        // Close button handler
        const closeBtn = modal.querySelector('.ransomware-modal-close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        return modal;
    }

    function renderRansomwareError() {
        const container = document.getElementById('ransomwareGrid');
        if (!container) return;

        container.innerHTML = `
            <div class="ransomware-error">
                <h3>⚠️ Unable to Load Ransomware Data</h3>
                <p>Please try refreshing the page or check back later.</p>
            </div>
        `;
    }

    function renderLeaderboard(topMalware) {
        const container = document.getElementById('threatLeaderboard');
        if (!container || !topMalware || topMalware.length === 0) return;

        const maxCount = topMalware[0].count;

        container.innerHTML = topMalware.slice(0, 10).map((item, index) => {
            const percentage = (item.count / maxCount) * 100;
            const rankEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';

            return `
                <div class="leaderboard-item">
                    <div class="leaderboard-rank">${rankEmoji || (index + 1)}</div>
                    <div class="leaderboard-info">
                        <div class="leaderboard-name">${escapeHtml(item.name)}</div>
                        <div class="leaderboard-bar">
                            <div class="leaderboard-bar-fill" style="width: ${percentage}%"></div>
                        </div>
                    </div>
                    <div class="leaderboard-count">${item.count.toLocaleString()}</div>
                </div>
            `;
        }).join('');
    }

    function initializeCharts(stats, dashboard) {
        if (typeof Chart === 'undefined') {
            console.error('Chart.js not loaded');
            return;
        }

        // 7-Day Trend
        const trendData = dashboard.get7DayTrend();
        const trendCtx = document.getElementById('trendChart')?.getContext('2d');
        if (trendCtx) {
            new Chart(trendCtx, {
                type: 'line',
                data: {
                    labels: trendData.map(d => d.date),
                    datasets: [{
                        label: 'Total IOCs',
                        data: trendData.map(d => d.count),
                        borderColor: '#FF3D3D',
                        backgroundColor: 'rgba(255, 61, 61, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: 'rgba(255, 255, 255, 0.5)' } },
                        x: { grid: { display: false }, ticks: { color: 'rgba(255, 255, 255, 0.5)' } }
                    }
                }
            });
        }

        // Distribution Chart
        const distCtx = document.getElementById('distributionChart')?.getContext('2d');
        if (distCtx) {
            new Chart(distCtx, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(stats.byType),
                    datasets: [{
                        data: Object.values(stats.byType),
                        backgroundColor: ['#FF3D3D', '#00D9FF', '#10b981', '#f59e0b', '#ec4899']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom', labels: { color: 'rgba(255, 255, 255, 0.7)' } } }
                }
            });
        }

        // Vendor Chart
        const vendorData = Object.entries(stats.byVendor).sort((a, b) => b[1] - a[1]).slice(0, 8);
        const vendorCtx = document.getElementById('vendorChart')?.getContext('2d');
        if (vendorCtx) {
            new Chart(vendorCtx, {
                type: 'bar',
                data: {
                    labels: vendorData.map(v => v[0]),
                    datasets: [{
                        label: 'IOCs',
                        data: vendorData.map(v => v[1]),
                        backgroundColor: 'rgba(255, 61, 61, 0.8)',
                        borderColor: '#FF3D3D',
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: 'rgba(255, 255, 255, 0.5)' } },
                        y: { grid: { display: false }, ticks: { color: 'rgba(255, 255, 255, 0.5)' } }
                    }
                }
            });
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
})();
