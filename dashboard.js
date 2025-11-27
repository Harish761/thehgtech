// Dashboard Main Script
// Handles animations, chart rendering, and live updates

let dashboard;
let charts = {};

// Initialize dashboard on page load
document.addEventListener('DOMContentLoaded', async () => {
    dashboard = new ThreatDashboard();

    try {
        const stats = await dashboard.loadAllData();
        renderDashboard(stats);
        initializeCharts(stats);

        // Auto-refresh every 30 seconds
        setInterval(async () => {
            const newStats = await dashboard.loadAllData();
            updateDashboard(newStats);
        }, 30000);

    } catch (error) {
        console.error('Failed to load dashboard data:', error);
    }
});

// Render initial dashboard
function renderDashboard(stats) {
    // Update last updated timestamp
    const lastUpdated = new Date(stats.lastUpdated);
    document.getElementById('lastUpdated').textContent = lastUpdated.toLocaleString();

    // Animate stat counters
    animateCounter('totalIOCs', stats.totalIOCs);
    animateCounter('totalURLs', stats.byType.url || 0);
    animateCounter('totalHashes', stats.byType.hash || 0);
    animateCounter('totalIPs', stats.byType.ip || 0);

    // Render threat leaderboard
    renderLeaderboard(stats.topMalware);

    // Render activity feed
    renderActivityFeed(stats.recentIOCs);
}

// Update dashboard with new data
function updateDashboard(stats) {
    // Update counters
    document.getElementById('totalIOCs').textContent = formatNumber(stats.totalIOCs);
    document.getElementById('totalURLs').textContent = formatNumber(stats.byType.url || 0);
    document.getElementById('totalHashes').textContent = formatNumber(stats.byType.hash || 0);
    document.getElementById('totalIPs').textContent = formatNumber(stats.byType.ip || 0);

    // Update timestamp
    const lastUpdated = new Date(stats.lastUpdated);
    document.getElementById('lastUpdated').textContent = lastUpdated.toLocaleString();

    // Update charts
    updateCharts(stats);
}

// Animate number counter
function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = formatNumber(Math.floor(current));
    }, 16);
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Render threat leaderboard
function renderLeaderboard(topMalware) {
    const container = document.getElementById('threatLeaderboard');

    if (!topMalware || topMalware.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--text-muted);">No data available</p>';
        return;
    }

    const maxCount = topMalware[0].count;

    container.innerHTML = topMalware.slice(0, 10).map((item, index) => {
        const percentage = (item.count / maxCount) * 100;
        const severity = dashboard.getThreatScore(item.name);
        const rankEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';

        return `
      <div class="leaderboard-item" style="animation-delay: ${index * 0.1}s">
        <div class="leaderboard-rank">${rankEmoji || (index + 1)}</div>
        <div class="leaderboard-info">
          <div class="leaderboard-name">${escapeHtml(item.name)}</div>
          <div class="leaderboard-bar">
            <div class="leaderboard-bar-fill" style="width: ${percentage}%"></div>
          </div>
        </div>
        <div class="leaderboard-count">${formatNumber(item.count)}</div>
      </div>
    `;
    }).join('');
}

// Render activity feed
function renderActivityFeed(recentIOCs) {
    const container = document.getElementById('activityFeed');

    if (!recentIOCs || recentIOCs.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--text-muted);">No recent activity</p>';
        return;
    }

    container.innerHTML = recentIOCs.map((ioc, index) => {
        const timeAgo = ioc.hoursAgo === 0 ? 'Just now' :
            ioc.hoursAgo === 1 ? '1 hour ago' :
                `${ioc.hoursAgo} hours ago`;

        return `
      <div class="activity-item type-${ioc.type}" style="animation-delay: ${index * 0.05}s">
        <div class="activity-header">
          <span class="activity-type">${ioc.type.toUpperCase()}</span>
          <span class="activity-time">${timeAgo}</span>
        </div>
        <div class="activity-indicator">${escapeHtml(ioc.indicator)}</div>
      </div>
    `;
    }).join('');
}

// Initialize Chart.js charts
function initializeCharts(stats) {
    // 7-Day Trend Chart
    const trendData = dashboard.get7DayTrend();
    const trendCtx = document.getElementById('trendChart').getContext('2d');
    charts.trend = new Chart(trendCtx, {
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
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(21, 25, 50, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: 'rgba(255, 255, 255, 0.5)' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: 'rgba(255, 255, 255, 0.5)' }
                }
            }
        }
    });

    // Threat Distribution Donut Chart
    const distributionCtx = document.getElementById('distributionChart').getContext('2d');
    charts.distribution = new Chart(distributionCtx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(stats.byType),
            datasets: [{
                data: Object.values(stats.byType),
                backgroundColor: [
                    '#FF3D3D',
                    '#00D9FF',
                    '#10b981',
                    '#f59e0b',
                    '#ec4899'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: 'rgba(255, 255, 255, 0.7)', padding: 15 }
                },
                tooltip: {
                    backgroundColor: 'rgba(21, 25, 50, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12
                }
            }
        }
    });

    // Vendor Contribution Bar Chart
    const vendorCtx = document.getElementById('vendorChart').getContext('2d');
    const vendorData = Object.entries(stats.byVendor)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);

    charts.vendor = new Chart(vendorCtx, {
        type: 'bar',
        data: {
            labels: vendorData.map(v => v[0]),
            datasets: [{
                label: 'IOCs',
                data: vendorData.map(v => v[1]),
                backgroundColor: 'rgba(255, 61, 61, 0.8)',
                borderColor: '#FF3D3D',
                borderWidth: 1,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(21, 25, 50, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: 'rgba(255, 255, 255, 0.5)' }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: 'rgba(255, 255, 255, 0.5)' }
                }
            }
        }
    });
}

// Update charts with new data
function updateCharts(stats) {
    // Update trend chart
    const trendData = dashboard.get7DayTrend();
    charts.trend.data.labels = trendData.map(d => d.date);
    charts.trend.data.datasets[0].data = trendData.map(d => d.count);
    charts.trend.update('none');

    // Update distribution chart
    charts.distribution.data.labels = Object.keys(stats.byType);
    charts.distribution.data.datasets[0].data = Object.values(stats.byType);
    charts.distribution.update('none');

    // Update vendor chart
    const vendorData = Object.entries(stats.byVendor)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);
    charts.vendor.data.labels = vendorData.map(v => v[0]);
    charts.vendor.data.datasets[0].data = vendorData.map(v => v[1]);
    charts.vendor.update('none');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
