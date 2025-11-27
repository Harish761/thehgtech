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

        // Add tabs to container
        mainContainer.appendChild(dashboardTab);
        mainContainer.appendChild(threatsTab);

        // Set initial active tab
        showTab('dashboard');

        // Load dashboard data
        loadDashboardData();
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
