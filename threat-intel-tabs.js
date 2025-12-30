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
        const mainContainer = document.querySelector('.main .container');

        if (!mainContainer) {
            console.error('Main container not found');
            return;
        }

        // Check if tabs already exist
        if (mainContainer.querySelector('.tab-navigation')) {
            return;
        }

        // 1. Create Top-Level Tab Navigation
        const tabNav = document.createElement('div');
        tabNav.className = 'tab-navigation';
        tabNav.innerHTML = `
            <button class="tab-btn active" data-tab="dashboard">Dashboard</button>
            <button class="tab-btn" data-tab="threats">Threat Intelligence</button>
            <button class="tab-btn" data-tab="ransomware">Ransomware</button>
        `;

        // Insert Top-Level Tabs at the very top of main container
        // (after dashboard controls/last updated)
        const dashboardControls = document.querySelector('.dashboard-controls');
        if (dashboardControls) {
            dashboardControls.after(tabNav);
        } else {
            mainContainer.prepend(tabNav);
        }

        // Add click handlers for the new top-level tabs
        tabNav.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabName = btn.dataset.tab;
                showTab(tabName);
            });
        });

        // 2. Create Content Containers
        const dashboardTab = createDashboardTab(); // Charts etc.
        const ransomwareTab = createRansomwareTab();

        // 3. Create 'Threat Intelligence' Tab Container
        const threatIntelTab = document.createElement('div');
        threatIntelTab.id = 'threats-tab';
        threatIntelTab.className = 'tab-content';

        // 4. FIND and MOVE existing Trad/AI structure into Threat Intel Tab
        // We find the sub-tab navigation and the content containers
        const subTabsNav = document.querySelector('.main-threat-tabs');
        const iocContent = document.getElementById('ioc-tab-content');
        const aiContent = document.getElementById('ai-tab-content');
        const iocExtended = document.querySelector('.ioc-extended-content');
        const staticSnapshot = document.getElementById('staticSnapshotContainer');
        const vendorStatus = document.getElementById('vendorStatusSection');

        // Append these elements into the Threat Intelligence Tab
        if (subTabsNav) threatIntelTab.appendChild(subTabsNav);
        if (iocContent) threatIntelTab.appendChild(iocContent);
        if (aiContent) threatIntelTab.appendChild(aiContent);

        // Ensure detached parts of IOC content are also moved into Threat Intel Tab (Defaulting to IOC view context)
        // These might be moved inside 'ioc-tab-content' dynamically or kept as siblings depending on structure
        // For now, appending them to threatIntelTab keeps them visible when Threat Intel tab is active.
        if (iocExtended) threatIntelTab.appendChild(iocExtended);
        if (staticSnapshot) threatIntelTab.appendChild(staticSnapshot);
        if (vendorStatus) threatIntelTab.appendChild(vendorStatus); // Note: vendorStatus might be inside iocExtended, if so it moved with it.

        // 5. Append Top-Level Tabs to Main Container
        // We place them in order
        mainContainer.appendChild(dashboardTab);
        mainContainer.appendChild(threatIntelTab);
        mainContainer.appendChild(ransomwareTab);

        // 6. Move Analytics Section (Charts) to Dashboard?
        // User said "Dashboard which has the charts"
        const analyticsSection = document.getElementById('analyticsSection');
        if (analyticsSection) {
            dashboardTab.querySelector('.dashboard-grid').appendChild(analyticsSection);
            analyticsSection.style.display = 'block';
            analyticsSection.style.gridColumn = '1 / -1';
        }

        // Set initial active tab
        showTab('dashboard');

        // Initialize dashboard charts after DOM is ready
        if (typeof ThreatDashboard !== 'undefined') {
            const dashboard = new ThreatDashboard();
            dashboard.loadAllData().then(stats => {
                // Render leaderboard
                const leaderboard = document.getElementById('threatLeaderboard');
                if (leaderboard && stats.topMalware) {
                    leaderboard.innerHTML = renderLeaderboard(stats.topMalware);
                }

                // Initialize charts
                initializeCharts(stats, dashboard);
            }).catch(err => {
                console.error('Failed to load dashboard data:', err);
            });
        }

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
                        <!-- Skeleton Loaders for Leaderboard -->
                        <div class="skeleton-card" style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem;">
                            <div class="skeleton-loader" style="width: 32px; height: 32px; border-radius: 50%;"></div>
                            <div style="flex: 1;"><div class="skeleton-loader skeleton-title" style="width: 60%; margin-bottom: 8px;"></div><div class="skeleton-loader skeleton-text" style="width: 80%;"></div></div>
                            <div class="skeleton-loader" style="width: 50px; height: 24px;"></div>
                        </div>
                        <div class="skeleton-card" style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem;">
                            <div class="skeleton-loader" style="width: 32px; height: 32px; border-radius: 50%;"></div>
                            <div style="flex: 1;"><div class="skeleton-loader skeleton-title" style="width: 55%; margin-bottom: 8px;"></div><div class="skeleton-loader skeleton-text" style="width: 70%;"></div></div>
                            <div class="skeleton-loader" style="width: 50px; height: 24px;"></div>
                        </div>
                        <div class="skeleton-card" style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem;">
                            <div class="skeleton-loader" style="width: 32px; height: 32px; border-radius: 50%;"></div>
                            <div style="flex: 1;"><div class="skeleton-loader skeleton-title" style="width: 50%; margin-bottom: 8px;"></div><div class="skeleton-loader skeleton-text" style="width: 65%;"></div></div>
                            <div class="skeleton-loader" style="width: 50px; height: 24px;"></div>
                        </div>
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

                <!-- Ransomware Widget (New) -->
                <div class="dashboard-card" id="ransomwareWidget" style="grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; background: var(--glass); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;">
                    <div style="flex: 1; min-width: 250px;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                            <span style="font-size: 1.5rem;">🔒</span>
                            <h4 style="margin: 0; font-size: 1.2rem; color: var(--text-primary);">Ransomware Activity</h4>
                        </div>
                        <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">
                            Real-time tracking of active ransomware groups and victims.
                        </p>
                    </div>

                    <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                        <div style="text-align: center;">
                            <div id="rw-active-groups" style="font-size: 1.5rem; font-weight: 700; color: var(--accent-red);">--</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Active Groups</div>
                        </div>
                        <div style="text-align: center;">
                            <div id="rw-victims-today" style="font-size: 1.5rem; font-weight: 700; color: var(--accent-cyan);">--</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Victims (24h)</div>
                        </div>
                    </div>

                    <div>
                        <button onclick="document.querySelector('[data-tab=\'ransomware\']').click()" style="
                            background: rgba(255, 61, 61, 0.1);
                            border: 1px solid var(--accent-red);
                            color: var(--accent-red);
                            padding: 0.6rem 1.2rem;
                            border-radius: 6px;
                            cursor: pointer;
                            font-weight: 600;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.background='var(--accent-red)'; this.style.color='white';"
                          onmouseout="this.style.background='rgba(255, 61, 61, 0.1)'; this.style.color='var(--accent-red)';">
                            View Full Tracker →
                        </button>
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
                <div style="background: rgba(255, 76, 76, 0.1); border-left: 4px solid #FF4C4C; padding: 1rem; border-radius: 8px; margin-top: 0.5rem; display: flex; align-items: center; gap: 0.75rem;">
                    <span style="font-size: 1.2rem;">ℹ️</span>
                    <p class="section-subtitle" style="margin: 0; color: var(--text-primary); font-size: 0.9rem;">
                        <strong>Live Intelligence:</strong> Monitoring active ransomware campaigns from dark web leak sites (Last 7 Days). Data aggregated from Ransomware.live API & RSS feeds.
                    </p>
                </div>
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
                <!-- Skeleton Loaders for Ransomware Cards -->
                <div class="skeleton-card" style="border-left: 4px solid rgba(255, 76, 76, 0.5); padding: 1.25rem;">
                    <div class="skeleton-loader skeleton-badge" style="width: 100px; margin-bottom: 1rem;"></div>
                    <div class="skeleton-loader skeleton-title" style="width: 75%; margin-bottom: 1rem;"></div>
                    <div class="skeleton-loader skeleton-text" style="width: 100%; margin-bottom: 0.5rem;"></div>
                    <div class="skeleton-loader skeleton-text" style="width: 60%;"></div>
                </div>
                <div class="skeleton-card" style="border-left: 4px solid rgba(255, 76, 76, 0.5); padding: 1.25rem;">
                    <div class="skeleton-loader skeleton-badge" style="width: 80px; margin-bottom: 1rem;"></div>
                    <div class="skeleton-loader skeleton-title" style="width: 65%; margin-bottom: 1rem;"></div>
                    <div class="skeleton-loader skeleton-text" style="width: 100%; margin-bottom: 0.5rem;"></div>
                    <div class="skeleton-loader skeleton-text" style="width: 45%;"></div>
                </div>
                <div class="skeleton-card" style="border-left: 4px solid rgba(255, 76, 76, 0.5); padding: 1.25rem;">
                    <div class="skeleton-loader skeleton-badge" style="width: 90px; margin-bottom: 1rem;"></div>
                    <div class="skeleton-loader skeleton-title" style="width: 70%; margin-bottom: 1rem;"></div>
                    <div class="skeleton-loader skeleton-text" style="width: 100%; margin-bottom: 0.5rem;"></div>
                    <div class="skeleton-loader skeleton-text" style="width: 55%;"></div>
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

            // Load Ransomware Widget
            if (window.loadRansomwareWidget) {
                window.loadRansomwareWidget();
            }

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

        // Use the LoadingStates utility if available
        if (typeof LoadingStates !== 'undefined' && LoadingStates.createError) {
            container.innerHTML = LoadingStates.createError(
                'Unable to load ransomware data. Please try again.',
                () => {
                    // Retry loading
                    container.innerHTML = `
                        <div class="loading-state">
                            <div class="loading-spinner"></div>
                            <div class="loading-text">Retrying...</div>
                        </div>
                    `;
                    loadRansomwareData();
                }
            );
        } else {
            // Fallback
            container.innerHTML = `
                <div class="error-state">
                    <div class="error-state__icon"><i class="fas fa-exclamation-circle"></i></div>
                    <div class="error-state__message">Unable to load ransomware data. Please try again.</div>
                    <button class="error-state__retry" onclick="location.reload()">
                        <i class="fas fa-redo"></i> Refresh Page
                    </button>
                </div>
            `;
        }
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
