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
    // Update last updated timestamp - use pre-formatted IST time
    const timeElement = document.getElementById('lastUpdatedTime') || document.getElementById('lastUpdated');
    if (timeElement && stats.lastUpdatedFormatted) {
        // Use pre-formatted timestamp to avoid timezone conversion
        timeElement.textContent = stats.lastUpdatedFormatted;
    }

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
    // Update counters
    const totalIOCs = document.getElementById('totalIOCs');
    if (totalIOCs) totalIOCs.textContent = formatNumber(stats.totalIOCs);

    const totalURLs = document.getElementById('totalURLs');
    if (totalURLs) totalURLs.textContent = formatNumber(stats.byType.url || 0);

    const totalHashes = document.getElementById('totalHashes');
    if (totalHashes) totalHashes.textContent = formatNumber(stats.byType.hash || 0);

    const totalIPs = document.getElementById('totalIPs');
    if (totalIPs) totalIPs.textContent = formatNumber(stats.byType.ip || 0);

    // Update timestamp
    const lastUpdated = new Date(stats.lastUpdated);
    const timeElement = document.getElementById('lastUpdatedTime') || document.getElementById('lastUpdated');
    if (timeElement) {
        timeElement.textContent = lastUpdated.toLocaleString();
    }

    // Update charts
    updateCharts(stats);
}

// Animate number counter
function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (!element) return; // Safety check

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
        if (element) {
            element.textContent = formatNumber(Math.floor(current));
        }
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
    const colors = getThemeColors();

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
                    backgroundColor: colors.tooltipBg,
                    titleColor: colors.tooltipText,
                    bodyColor: colors.tooltipText,
                    borderColor: colors.tooltipBorder,
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: colors.grid },
                    ticks: { color: colors.text }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: colors.text }
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
                    position: 'right',
                    labels: { color: colors.text, padding: 20, font: { size: 12 } }
                },
                tooltip: {
                    backgroundColor: colors.tooltipBg,
                    titleColor: colors.tooltipText,
                    bodyColor: colors.tooltipText,
                    borderColor: colors.tooltipBorder,
                    borderWidth: 1
                }
            }
        }
    });

    // Vendor Chart
    const vendorCtx = document.getElementById('vendorChart').getContext('2d');
    charts.vendor = new Chart(vendorCtx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'IOCs Contributed',
                data: [],
                backgroundColor: 'rgba(0, 217, 255, 0.2)',
                borderColor: '#00D9FF',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: colors.tooltipBg,
                    titleColor: colors.tooltipText,
                    bodyColor: colors.tooltipText,
                    borderColor: colors.tooltipBorder,
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: colors.grid },
                    ticks: { color: colors.text }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: colors.text }
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

// Dynamic Theme Colors (Matches threat-intel.html)
function getThemeColors() {
    const isLight = document.body.classList.contains('light-mode');
    return {
        text: '#777', // Universal gray that works in both light and dark modes
        grid: isLight ? '#ddd' : 'rgba(255, 255, 255, 0.1)',
        tooltipBg: isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.8)',
        tooltipText: isLight ? '#333' : 'rgba(255, 255, 255, 0.9)',
        tooltipBorder: isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'
    };
}

// Update charts when theme changes (Global function called by toggleTheme)
window.updateDashboardChartsTheme = function () {
    const colors = getThemeColors();

    Object.values(charts).forEach(chart => {
        if (!chart) return;

        if (chart.options.scales.y) {
            chart.options.scales.y.grid.color = colors.grid;
            chart.options.scales.y.ticks.color = colors.text;
        }
        if (chart.options.scales.x) {
            chart.options.scales.x.ticks.color = colors.text;
        }
        if (chart.options.plugins.tooltip) {
            chart.options.plugins.tooltip.backgroundColor = colors.tooltipBg;
            chart.options.plugins.tooltip.titleColor = colors.tooltipText;
            chart.options.plugins.tooltip.bodyColor = colors.tooltipText;
            chart.options.plugins.tooltip.borderColor = colors.tooltipBorder;
        }
        if (chart.options.plugins.legend && chart.options.plugins.legend.labels) {
            chart.options.plugins.legend.labels.color = colors.text;
        }
        chart.update('none');
    });
};

// Load Ransomware Widget Data
window.loadRansomwareWidget = async function () {
    try {
        const response = await fetch('ransomware-data.json');
        if (!response.ok) throw new Error('Failed to load ransomware data');

        const data = await response.json();
        if (!data || !data.groups) return;

        // Calculate stats
        const groups = data.groups.length;

        // Count victims in last 24 hours
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
        let victimsToday = 0;

        data.groups.forEach(group => {
            if (group.victims) {
                victimsToday += group.victims.filter(victim => {
                    const date = new Date(victim.discovered_date || victim.date);
                    return date >= oneDayAgo;
                }).length;
            }
        });

        // Update DOM
        const groupsEl = document.getElementById('rw-active-groups');
        const victimsEl = document.getElementById('rw-victims-today');

        if (groupsEl) groupsEl.textContent = groups;
        if (victimsEl) victimsEl.textContent = victimsToday;

    } catch (error) {
        console.error('Error loading ransomware widget:', error);
    }
};

// Call widget load when dashboard initializes
document.addEventListener('DOMContentLoaded', () => {
    if (window.loadRansomwareWidget) {
        window.loadRansomwareWidget();
    }
});
