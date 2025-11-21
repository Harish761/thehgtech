// Vendor Modal Functions for Threat Intelligence Dashboard

// Open vendor modal with IOCs
function openVendorModal(vendorName) {
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

    const vendorData = window.threatIntelData.vendors[vendorName];
    const iocs = vendorData.iocs || [];

    // Render IOCs
    let html = '';
    iocs.forEach((ioc) => {
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
    countDiv.textContent = `Showing ${iocs.length} IOCs`;
    modal.style.display = 'block';
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
        console.log(`Vendor: ${vendor}, CountId: ${countId}, IOCs: ${(data.iocs || []).length}`);
        if (countId) {
            const element = document.getElementById(countId);
            if (element) {
                const count = (data.iocs || []).length;
                element.textContent = count;
                console.log(`Updated ${countId} to ${count}`);
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
