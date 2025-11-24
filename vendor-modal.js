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
    if (!vendorMeta || !vendorMeta.r2Url) {
        console.error(`No URL for ${vendorName}`);
        return null;
    }

    try {
        console.log(`Fetching ${vendorName} IOCs from GitHub Pages...`);
        const response = await fetch(vendorMeta.r2Url + '?t=' + Date.now());
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

    // Render IOCs

    // Add export buttons
    const exportButtons = `
        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-bottom: 1.5rem; padding: 0 0.5rem;">
            <button onclick="exportVendorDataFromModal('${vendorName}', 'csv')" 
                style="padding: 0.6rem 1.2rem; background: linear-gradient(135deg, #00D9FF, #0099cc); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer; font-size: 0.9rem; transition: all 0.3s; box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3); display: flex; align-items: center; gap: 0.5rem;"
                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0, 217, 255, 0.4)';"
                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0, 217, 255, 0.3)';">
                <span>📥</span> Export CSV
            </button>
            <button onclick="exportVendorDataFromModal('${vendorName}', 'json')" 
                style="padding: 0.6rem 1.2rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(0, 217, 255, 0.3); border-radius: 8px; color: var(--text-primary); font-weight: 600; cursor: pointer; font-size: 0.9rem; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;"
                onmouseover="this.style.background='rgba(0, 217, 255, 0.1)'; this.style.borderColor='rgba(0, 217, 255, 0.5)';"
                onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'; this.style.borderColor='rgba(0, 217, 255, 0.3)';">
                <span>📥</span> Export JSON
            </button>
        </div>
    `;
    let html = cappingNotice + exportButtons;
    data.iocs.forEach((ioc) => {
        html += `<div class="modal-stat-item vendor-ioc-item" data-indicator="${ioc.indicator}" data-type="${ioc.type}"
            style="padding: 1rem; background: rgba(255, 255, 255, 0.02); border-radius: 8px; margin-bottom: 0.75rem; cursor: pointer; transition: all 0.2s ease; border-left: 3px solid var(--accent-cyan);"
            onmouseover="this.style.background='rgba(0, 217, 255, 0.1)'" 
            onmouseout="this.style.background='rgba(255, 255, 255, 0.02)'"
            onclick="openIOCFromVendor('${vendorName}', '${ioc.indicator}')">
            <div style="color: var(--text-primary); font-weight: 500; font-family: monospace; word-break: break-all; margin-bottom: 0.5rem;">${ioc.indicator}</div>
            <div style="color: var(--text-muted); font-size: 0.85rem;">
                <span style="color: var(--accent-cyan);">Type:</span> ${ioc.type} | 
                <span style="color: var(--accent-cyan);">Added:</span> ${ioc.timestamp || 'Unknown'}
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

// Export vendor data from modal (works with cached data)
function exportVendorDataFromModal(vendorName, format) {
    const data = vendorDataCache[vendorName];
    if (!data || !data.iocs) {
        alert('No data available for export. Please open the vendor modal first.');
        return;
    }

    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `${vendorName}_IOCs_${timestamp}`;

    if (format === 'csv') {
        const headers = ['Type', 'Indicator', 'Description', 'Timestamp', 'Source', 'Tags', 'Campaign'];
        const rows = data.iocs.map(ioc => [
            ioc.type || '',
            ioc.indicator || '',
            (ioc.description || '').replace(/,/g, ';'),
            ioc.timestamp || '',
            ioc.source || '',
            (ioc.tags || []).join(';'),
            ioc.campaign || ''
        ]);
        const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
        downloadFile(csv, `${filename}.csv`, 'text/csv');
    } else if (format === 'json') {
        const json = JSON.stringify(data.iocs, null, 2);
        downloadFile(json, `${filename}.json`, 'application/json');
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
