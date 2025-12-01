// Vendor Modal Functions for Threat Intelligence Dashboard

// Cache for loaded vendor data
const vendorDataCache = {};

// Load vendor IOCs from GitHub Pages
async function loadVendorIOCs(vendorName) {
    if (vendorDataCache[vendorName]) {
        console.log(`✓ Using cached data for ${vendorName}`);
        return vendorDataCache[vendorName];
    }

    const vendorMeta = window.threatIntelData.vendors[vendorName];
    if (!vendorMeta || !vendorMeta.iocDataUrl) {
        console.error(`No URL for ${vendorName}`);
        return null;
    }

    try {
        console.log(`Fetching ${vendorName} IOCs from GitHub Pages...`);
        const response = await fetch(vendorMeta.iocDataUrl + '?t=' + Date.now());
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        vendorDataCache[vendorName] = data;  // Cache full response with metadata
        console.log(`✓ Loaded ${data.displayedCount || data.iocs.length} IOCs for ${vendorName}`);
        return data;
    } catch (error) {
        console.error(`Failed to load ${vendorName} IOCs:`, error);
        return null;
    }
}

// Open vendor modal with IOCs (loads from R2 on-demand)
async function openVendorModal(vendorName) {
    const modal = document.getElementById('vendorModal');
    const title = document.getElementById('vendorModalTitle');
    const content = document.getElementById('vendorModalContent');
    const countDiv = document.getElementById('vendorModalCount');
    const searchInput = document.getElementById('vendorModalSearch');

    title.textContent = vendorName;
    searchInput.value = '';

    if (!window.threatIntelData || !window.threatIntelData.vendors || !window.threatIntelData.vendors[vendorName]) {
        content.innerHTML = '<p style="color: var(--text-muted);">No data available for this vendor</p>';
        countDiv.textContent = 'No IOCs';
        modal.style.display = 'block';
        return;
    }

    const vendorMeta = window.threatIntelData.vendors[vendorName];

    // Show loading state
    content.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
            <div class="loading-spinner"></div>
            <p style="margin-top: 1rem;">Loading ${vendorMeta.iocCount.toLocaleString()} IOCs from GitHub Pages...</p>
        </div>
    `;
    countDiv.textContent = `${vendorMeta.iocCount.toLocaleString()} IOCs`;
    modal.style.display = 'block';

    // Load IOCs from GitHub Pages
    const data = await loadVendorIOCs(vendorName);
    if (!data || !data.iocs || data.iocs.length === 0) {
        content.innerHTML = '<p style="color: var(--accent-red);">Failed to load IOCs. Please try again.</p>';
        return;
    }

    // Show capping notice if data is filtered
    let cappingNotice = '';
    if (data.isCapped) {
        cappingNotice = `
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-left: 4px solid #ffd700; padding: 15px; margin-bottom: 20px; border-radius: 8px; display: flex; align-items: center; gap: 12px;">
                <div style="font-size: 24px;">ℹ️</div>
                <div style="flex: 1; color: #fff;">
                    <strong style="display: block; margin-bottom: 4px;">Showing ${data.displayedCount.toLocaleString()} most critical IOCs</strong>
                    <span style="opacity: 0.9;">${data.totalCount.toLocaleString()} total indicators tracked</span>
                    <br>
                    <small style="opacity: 0.9;">Displaying ${data.cappingStrategy || 'most recent and high-priority threats'} for optimal performance</small>
                </div>
            </div>
        `;
    }

    // Extract unique types and tags from IOCs for filter dropdowns
    const uniqueTypes = [...new Set(data.iocs.map(ioc => ioc.type))].sort();
    const allTags = data.iocs.flatMap(ioc => ioc.tags || []);
    const uniqueTags = [...new Set(allTags)].sort();

    // Add advanced filter controls (removed Tags - not useful)
    const filterControls = `
        <div style="background: rgba(255, 255, 255, 0.03); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem; border: 1px solid rgba(0, 217, 255, 0.1);">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                <div>
                    <label style="display: block; color: var(--accent-cyan); font-size: 0.85rem; margin-bottom: 0.5rem; font-weight: 600;">⏰ Time Range</label>
                    <select id="timeFilter" onchange="applyVendorFilters()" style="width: 100%; padding: 0.6rem; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(0, 217, 255, 0.3); border-radius: 6px; color: var(--text-primary); font-size: 0.9rem; cursor: pointer;">
                        <option value="all">All time</option>
                        <option value="1h">Last hour</option>
                        <option value="6h">Last 6 hours</option>
                        <option value="24h">Last 24 hours</option>
                        <option value="3d">Last 3 days</option>
                        <option value="7d">Last 7 days</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; color: var(--accent-cyan); font-size: 0.85rem; margin-bottom: 0.5rem; font-weight: 600;">🔍 IOC Type</label>
                    <select id="typeFilter" onchange="applyVendorFilters()" style="width: 100%; padding: 0.6rem; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(0, 217, 255, 0.3); border-radius: 6px; color: var(--text-primary); font-size: 0.9rem; cursor: pointer;">
                        <option value="all">All types</option>
                        ${uniqueTypes.map(type => `<option value="${type}">${type}</option>`).join('')}
                    </select>
                </div>
            </div>
            <button onclick="clearVendorFilters()" style="padding: 0.6rem 1.2rem; background: rgba(255, 59, 48, 0.1); border: 1px solid rgba(255, 59, 48, 0.3); border-radius: 6px; color: #ff3b30; font-weight: 600; cursor: pointer; font-size: 0.85rem; transition: all 0.2s; display: flex; align-items: center; gap: 0.5rem;" onmouseover="this.style.background='rgba(255, 59, 48, 0.2)'" onmouseout="this.style.background='rgba(255, 59, 48, 0.1)'">
                <span>✕</span> Clear Filters
            </button>
        </div>
    `;


    // Add export buttons (All + Filtered)
    const exportButtons = `
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1.5rem; padding: 0 0.5rem; flex-wrap: wrap;">
            <div style="display: flex; gap: 0.75rem;">
                <button onclick="exportVendorDataFromModal('${vendorName}', 'csv', false)" 
                    style="padding: 0.6rem 1.2rem; background: linear-gradient(135deg, #667eea, #764ba2); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer; font-size: 0.9rem; transition: all 0.3s; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3); display: flex; align-items: center; gap: 0.5rem;"
                    onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.4)';"
                    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.3)';">
                    <span>📥</span> Export All CSV
                </button>
                <button onclick="exportVendorDataFromModal('${vendorName}', 'json', false)" 
                    style="padding: 0.6rem 1.2rem; background: rgba(102, 126, 234, 0.1); border: 1px solid rgba(102, 126, 234, 0.3); border-radius: 8px; color: var(--accent-purple); font-weight: 600; cursor: pointer; font-size: 0.9rem; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;"
                    onmouseover="this.style.background='rgba(102, 126, 234, 0.2)'; this.style.borderColor='rgba(102, 126, 234, 0.5)';"
                    onmouseout="this.style.background='rgba(102, 126, 234, 0.1)'; this.style.borderColor='rgba(102, 126, 234, 0.3)';">
                    <span>📥</span> Export All JSON
                </button>
            </div>
            <div style="display: flex; gap: 0.75rem;">
                <button onclick="exportVendorDataFromModal('${vendorName}', 'csv', true)" 
                    style="padding: 0.6rem 1.2rem; background: linear-gradient(135deg, #00D9FF, #0099cc); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer; font-size: 0.9rem; transition: all 0.3s; box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3); display: flex; align-items: center; gap: 0.5rem;"
                    onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0, 217, 255, 0.4)';"
                    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0, 217, 255, 0.3)';">
                    <span>🔍</span> Export Filtered CSV
                </button>
                <button onclick="exportVendorDataFromModal('${vendorName}', 'json', true)" 
                    style="padding: 0.6rem 1.2rem; background: rgba(0, 217, 255, 0.1); border: 1px solid rgba(0, 217, 255, 0.3); border-radius: 8px; color: var(--accent-cyan); font-weight: 600; cursor: pointer; font-size: 0.9rem; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;"
                    onmouseover="this.style.background='rgba(0, 217, 255, 0.15)'; this.style.borderColor='rgba(0, 217, 255, 0.5)';"
                    onmouseout="this.style.background='rgba(0, 217, 255, 0.1)'; this.style.borderColor='rgba(0, 217, 255, 0.3)';">
                    <span>🔍</span> Export Filtered JSON
                </button>
            </div>
        </div>
    `;


    let html = cappingNotice + filterControls + exportButtons;
    data.iocs.forEach((ioc) => {
        // Format timestamp - use addedAt if available, otherwise timestamp
        const timeStr = ioc.addedAt || ioc.timestamp;
        let displayTime = 'Unknown';

        if (timeStr && timeStr !== 'just now' && timeStr !== 'Unknown') {
            try {
                const iocDate = new Date(timeStr);
                const now = new Date();
                const diffMs = now - iocDate;
                const diffMins = Math.floor(diffMs / 60000);
                const diffHours = Math.floor(diffMs / 3600000);
                const diffDays = Math.floor(diffMs / 86400000);

                if (diffMins < 1) {
                    displayTime = 'just now';
                } else if (diffMins < 60) {
                    displayTime = `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
                } else if (diffHours < 24) {
                    displayTime = `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
                } else if (diffDays < 7) {
                    displayTime = `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
                } else {
                    displayTime = iocDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                }
            } catch (e) {
                displayTime = timeStr;
            }
        } else if (timeStr === 'just now') {
            displayTime = 'just now';
        }

        // Store filter data as data attributes
        const tagsStr = (ioc.tags || []).join(',');
        const addedAtStr = ioc.addedAt || ioc.timestamp || '';

        html += `<div class="modal-stat-item vendor-ioc-item" 
            data-indicator="${ioc.indicator}" 
            data-type="${ioc.type}"
            data-tags="${tagsStr}"
            data-added-at="${addedAtStr}"
            style="padding: 1rem; background: rgba(255, 255, 255, 0.02); border-radius: 8px; margin-bottom: 0.75rem; cursor: pointer; transition: all 0.2s ease; border-left: 3px solid var(--accent-cyan);"
            onmouseover="this.style.background='rgba(0, 217, 255, 0.1)'" 
            onmouseout="this.style.background='rgba(255, 255, 255, 0.02)'"
            onclick="openIOCFromVendor('${vendorName}', '${ioc.indicator}')">
            <div style="color: var(--text-primary); font-weight: 500; font-family: monospace; word-break: break-all; margin-bottom: 0.5rem;">${ioc.indicator}</div>
            <div style="color: var(--text-muted); font-size: 0.85rem;">
                <span style="color: var(--accent-cyan);">Type:</span> ${ioc.type} | 
                <span style="color: var(--accent-cyan);">Added:</span> ${displayTime}
                ${tagsStr ? ` | <span style="color: var(--accent-cyan);">Tags:</span> ${tagsStr}` : ''}
            </div>
        </div>`;
    });

    content.innerHTML = html || '<p style="color: var(--text-muted);">No IOCs available</p>';
    countDiv.textContent = data.isCapped
        ? `Showing ${data.displayedCount.toLocaleString()} of ${data.totalCount.toLocaleString()} IOCs`
        : `Showing ${data.iocs.length.toLocaleString()} IOCs`;
}

// Close vendor modal
function closeVendorModal() {
    document.getElementById('vendorModal').style.display = 'none';
}

// Filter vendor modal IOCs
function filterVendorModal() {
    const searchInput = document.getElementById('vendorModalSearch');
    const content = document.getElementById('vendorModalContent');
    const countDiv = document.getElementById('vendorModalCount');
    const searchTerm = searchInput.value.toLowerCase();

    const items = content.querySelectorAll('.vendor-ioc-item');
    const totalCount = items.length;
    let visibleCount = 0;

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    if (searchTerm) {
        countDiv.textContent = `Found ${visibleCount} of ${totalCount} IOCs`;
    } else {
        countDiv.textContent = `Showing ${totalCount} IOCs`;
    }
}

// Apply advanced filters (Time + Type + Search) with AND logic
function applyVendorFilters() {
    const timeFilter = document.getElementById('timeFilter')?.value || 'all';
    const typeFilter = document.getElementById('typeFilter')?.value || 'all';
    const searchInput = document.getElementById('vendorModalSearch');
    const searchTerm = searchInput?.value.toLowerCase() || '';

    const content = document.getElementById('vendorModalContent');
    const countDiv = document.getElementById('vendorModalCount');
    const items = content.querySelectorAll('.vendor-ioc-item');
    const totalCount = items.length;
    let visibleCount = 0;

    // Calculate time threshold
    let timeThreshold = null;
    if (timeFilter !== 'all') {
        const now = new Date();
        const thresholds = {
            '1h': 60 * 60 * 1000,
            '6h': 6 * 60 * 60 * 1000,
            '24h': 24 * 60 * 60 * 1000,
            '3d': 3 * 24 * 60 * 60 * 1000,
            '7d': 7 * 24 * 60 * 60 * 1000
        };
        timeThreshold = new Date(now - thresholds[timeFilter]);
    }

    items.forEach(item => {
        let show = true;

        // Search filter
        if (searchTerm && !item.textContent.toLowerCase().includes(searchTerm)) {
            show = false;
        }

        // Time filter
        if (show && timeThreshold) {
            const addedAt = item.dataset.addedAt;
            if (addedAt && addedAt !== 'just now' && addedAt !== 'Unknown') {
                try {
                    const iocDate = new Date(addedAt);
                    if (iocDate < timeThreshold) {
                        show = false;
                    }
                } catch (e) {
                    show = false;
                }
            }
        }

        // Type filter
        if (show && typeFilter !== 'all') {
            if (item.dataset.type !== typeFilter) {
                show = false;
            }
        }

        item.style.display = show ? 'block' : 'none';
        if (show) visibleCount++;
    });

    // Update count display
    const activeFilters = [];
    if (timeFilter !== 'all') activeFilters.push(document.getElementById('timeFilter').options[document.getElementById('timeFilter').selectedIndex].text);
    if (typeFilter !== 'all') activeFilters.push(typeFilter);

    if (activeFilters.length > 0 || searchTerm) {
        countDiv.textContent = `Showing ${visibleCount} of ${totalCount} IOCs (filtered)`;
    } else {
        countDiv.textContent = `Showing ${totalCount} IOCs`;
    }
}

// Clear all filters
function clearVendorFilters() {
    // Reset filter dropdowns
    const timeFilter = document.getElementById('timeFilter');
    const typeFilter = document.getElementById('typeFilter');
    const searchInput = document.getElementById('vendorModalSearch');

    if (timeFilter) timeFilter.value = 'all';
    if (typeFilter) typeFilter.value = 'all';
    if (searchInput) searchInput.value = '';

    // Reapply filters (which will show all)
    applyVendorFilters();
}

// Open IOC details from vendor modal
function openIOCFromVendor(vendorName, indicator) {
    if (!window.threatIntelData || !window.threatIntelData.vendors || !window.threatIntelData.vendors[vendorName]) {
        return;
    }

    const vendorData = window.threatIntelData.vendors[vendorName];
    const ioc = vendorData.iocs.find(i => i.indicator === indicator);

    if (ioc && typeof showIOCDetails === 'function') {
        closeVendorModal();
        setTimeout(() => {
            showIOCDetails(ioc);
        }, 200);
    }
}

// Update vendor tile counts
function updateVendorTileCounts() {
    console.log('updateVendorTileCounts called');
    console.log('window.threatIntelData:', window.threatIntelData);

    if (!window.threatIntelData || !window.threatIntelData.vendors) {
        console.log('No threat data available yet');
        return;
    }

    const vendorCountMap = {
        'OpenPhish': 'openPhishCount',
        'Malware Bazaar': 'malwareBazaarCount',
        'Spamhaus DROP': 'spamhausDROPCount',
        'CINS Army': 'cINSArmyCount',
        'Blocklist.de': 'blocklistDeCount',
        'Phishing Database': 'phishingDatabaseCount'
    };

    console.log('Vendors in data:', Object.keys(window.threatIntelData.vendors));

    Object.entries(window.threatIntelData.vendors).forEach(([vendor, data]) => {
        const countId = vendorCountMap[vendor];
        console.log(`Vendor: ${vendor}, CountId: ${countId}, IOCs: ${data.iocCount || 0}`);
        if (countId) {
            const element = document.getElementById(countId);
            if (element) {
                const count = data.iocCount || 0;  // Use iocCount from metadata
                element.textContent = count.toLocaleString();
                console.log(`Updated ${countId} to ${count.toLocaleString()}`);
            } else {
                console.log(`Element ${countId} not found!`);
            }
        }
    });
}

// Also call on window load as a backup
window.addEventListener('load', function () {
    console.log('Window loaded, calling updateVendorTileCounts');
    setTimeout(updateVendorTileCounts, 1000);
});


// Close vendor modal when clicking outside
window.addEventListener('click', function (event) {
    const vendorModal = document.getElementById('vendorModal');
    if (event.target === vendorModal) {
        closeVendorModal();
    }
});

// Export vendor data from modal (works with cached data and filters)
function exportVendorDataFromModal(vendorName, format, applyFilters = true) {
    const data = vendorDataCache[vendorName];
    if (!data || !data.iocs) {
        alert('No data available for export. Please open the vendor modal first.');
        return;
    }

    let filteredIOCs;

    if (applyFilters) {
        // Export Filtered - Get only visible IOCs (filtered)
        const content = document.getElementById('vendorModalContent');
        const allItems = content.querySelectorAll('.vendor-ioc-item');

        // Filter to only visible items (check both inline style and computed style)
        const visibleItems = Array.from(allItems).filter(item => {
            const display = item.style.display;
            // Item is visible if display is not explicitly set to 'none'
            // Empty string or undefined means visible (default state)
            return display !== 'none';
        });

        console.log(`Total IOC items: ${allItems.length}, Visible items: ${visibleItems.length}`);

        // Extract indicators from visible items
        const visibleIndicators = visibleItems.map(item => item.dataset.indicator);

        // Filter IOCs to only include visible ones
        filteredIOCs = data.iocs.filter(ioc => visibleIndicators.includes(ioc.indicator));

        console.log(`Filtered IOCs to export: ${filteredIOCs.length}`);

        if (filteredIOCs.length === 0) {
            alert('No IOCs match the current filter. Please adjust your filters or use "Export All" to download all data.');
            return;
        }
    } else {
        // Export All - Use all IOCs (ignore filters)
        filteredIOCs = data.iocs;
    }

    const timestamp = new Date().toISOString().split('T')[0];
    const filterSuffix = applyFilters ? '_filtered' : '_all';
    const filename = `${vendorName}_IOCs_${timestamp}${filterSuffix}`;

    if (format === 'csv') {
        const headers = ['Type', 'Indicator', 'Description', 'Timestamp', 'Source', 'Tags', 'Campaign'];
        const rows = filteredIOCs.map(ioc => [
            ioc.type || '',
            ioc.indicator || '',
            (ioc.description || '').replace(/,/g, ';'),
            ioc.addedAt || ioc.timestamp || '',
            ioc.source || '',
            (ioc.tags || []).join(';'),
            ioc.campaign || ''
        ]);
        const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
        downloadFile(csv, `${filename}.csv`, 'text/csv');

        // Show success message
        const message = applyFilters
            ? `Exported ${filteredIOCs.length} filtered IOCs to CSV`
            : `Exported ${filteredIOCs.length} IOCs to CSV (all data)`;
        alert(message);
    } else if (format === 'json') {
        const json = JSON.stringify(filteredIOCs, null, 2);
        downloadFile(json, `${filename}.json`, 'application/json');

        // Show success message
        const message = applyFilters
            ? `Exported ${filteredIOCs.length} filtered IOCs to JSON`
            : `Exported ${filteredIOCs.length} IOCs to JSON (all data)`;
        alert(message);
    }
}

// Helper function to trigger file download
function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
