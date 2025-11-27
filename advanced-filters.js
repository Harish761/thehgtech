// Advanced Filters for Threat Intel Dashboard
// Provides powerful filtering and search capabilities for IOCs

(function () {
    'use strict';

    class ThreatIntelFilter {
        constructor() {
            this.allIOCs = [];
            this.filteredIOCs = [];
            this.activeFilters = {};
            this.searchDebounceTimer = null;
            this.initialized = false;
        }

        initialize() {
            if (this.initialized) return;

            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.setup());
            } else {
                this.setup();
            }
        }

        setup() {
            this.createFilterPanel();
            this.attachEventListeners();
            this.initialized = true;
            console.log('✅ Advanced filters initialized');
        }

        createFilterPanel() {
            // Find insertion point (before vendor tabs)
            const vendorTabs = document.querySelector('.vendor-tabs');
            if (!vendorTabs) {
                console.warn('Vendor tabs not found, skipping filter panel');
                return;
            }

            // Create filter panel HTML
            const filterPanel = document.createElement('div');
            filterPanel.className = 'filter-panel';
            filterPanel.id = 'filterPanel';
            filterPanel.innerHTML = `
                <div class="filter-header">
                    <h3 class="filter-title">
                        🔍 Advanced Filters
                    </h3>
                    <button class="filter-toggle" id="toggleFilters">
                        Hide Filters
                    </button>
                </div>
                
                <div class="filter-content" id="filterContent">
                    <div class="filter-search">
                        <input type="text" 
                               id="iocSearch" 
                               placeholder="Search IOCs (IP, domain, hash, CVE...)"
                               autocomplete="off">
                        <button class="search-btn" id="searchBtn">🔍</button>
                    </div>
                    
                    <div class="filter-controls">
                        <div class="filter-group">
                            <label class="filter-label" for="filterType">Type</label>
                            <select id="filterType">
                                <option value="all">All Types</option>
                                <option value="ip">IP Address</option>
                                <option value="domain">Domain</option>
                                <option value="url">URL</option>
                                <option value="hash">File Hash</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                        
                        <div class="filter-group">
                            <label class="filter-label" for="filterVendor">Vendor</label>
                            <select id="filterVendor">
                                <option value="all">All Vendors</option>
                                <option value="openphish">OpenPhish</option>
                                <option value="urlhaus">URLhaus</option>
                                <option value="threatfox">ThreatFox</option>
                                <option value="feodo">Feodo Tracker</option>
                                <option value="blocklist">Blocklist.de</option>
                                <option value="sslbl">SSL Blacklist</option>
                            </select>
                        </div>
                        
                        <div class="filter-group">
                            <label class="filter-label" for="filterDate">Date Range</label>
                            <select id="filterDate">
                                <option value="all">All Time</option>
                                <option value="today">Today</option>
                                <option value="7d">Last 7 Days</option>
                                <option value="30d">Last 30 Days</option>
                            </select>
                        </div>
                        
                        <div class="filter-group">
                            <label class="filter-label" for="filterThreat">Threat Type</label>
                            <select id="filterThreat">
                                <option value="all">All Threats</option>
                                <option value="phishing">Phishing</option>
                                <option value="malware">Malware</option>
                                <option value="c2">C2/Botnet</option>
                                <option value="exploit">Exploit</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="active-filters" id="activeFilters"></div>
                    
                    <div class="filter-actions">
                        <div class="filter-results">
                            <span class="result-count" id="resultCount">-</span>
                            <span class="result-label">IOCs found</span>
                        </div>
                        <button class="clear-filters-btn" id="clearFilters">
                            Clear All Filters
                        </button>
                    </div>
                </div>
            `;

            // Insert before vendor tabs
            vendorTabs.parentNode.insertBefore(filterPanel, vendorTabs);
        }

        attachEventListeners() {
            // Search input with debounce
            const searchInput = document.getElementById('iocSearch');
            if (searchInput) {
                searchInput.addEventListener('input', () => {
                    clearTimeout(this.searchDebounceTimer);
                    this.searchDebounceTimer = setTimeout(() => {
                        this.applyFilters();
                    }, 300);
                });

                // Enter key triggers immediate search
                searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        clearTimeout(this.searchDebounceTimer);
                        this.applyFilters();
                    }
                });
            }

            // Search button
            const searchBtn = document.getElementById('searchBtn');
            if (searchBtn) {
                searchBtn.addEventListener('click', () => this.applyFilters());
            }

            // Filter dropdowns
            ['filterType', 'filterVendor', 'filterDate', 'filterThreat'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener('change', () => this.applyFilters());
                }
            });

            // Clear filters button
            const clearBtn = document.getElementById('clearFilters');
            if (clearBtn) {
                clearBtn.addEventListener('click', () => this.clearAllFilters());
            }

            // Toggle filters visibility
            const toggleBtn = document.getElementById('toggleFilters');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', () => this.toggleFilters());
            }
        }

        loadIOCs(iocs) {
            this.allIOCs = iocs || [];
            this.filteredIOCs = [...this.allIOCs];
            this.updateResultCount();
        }

        applyFilters() {
            const search = document.getElementById('iocSearch')?.value.toLowerCase().trim() || '';
            const type = document.getElementById('filterType')?.value || 'all';
            const vendor = document.getElementById('filterVendor')?.value || 'all';
            const date = document.getElementById('filterDate')?.value || 'all';
            const threat = document.getElementById('filterThreat')?.value || 'all';

            // Store active filters
            this.activeFilters = {
                search,
                type: type !== 'all' ? type : null,
                vendor: vendor !== 'all' ? vendor : null,
                date: date !== 'all' ? date : null,
                threat: threat !== 'all' ? threat : null
            };

            // Apply filters
            this.filteredIOCs = this.allIOCs.filter(ioc => {
                // Search filter
                if (search && !this.matchesSearch(ioc, search)) {
                    return false;
                }

                // Type filter
                if (type !== 'all' && !this.matchesType(ioc, type)) {
                    return false;
                }

                // Vendor filter
                if (vendor !== 'all' && !this.matchesVendor(ioc, vendor)) {
                    return false;
                }

                // Date filter
                if (date !== 'all' && !this.matchesDate(ioc, date)) {
                    return false;
                }

                // Threat filter
                if (threat !== 'all' && !this.matchesThreat(ioc, threat)) {
                    return false;
                }

                return true;
            });

            this.updateDisplay();
            this.updateActiveFilterBadges();
        }

        matchesSearch(ioc, search) {
            const searchableFields = [
                ioc.indicator,
                ioc.type,
                ioc.vendor,
                ioc.description,
                ioc.tags?.join(' ')
            ].filter(Boolean).join(' ').toLowerCase();

            return searchableFields.includes(search);
        }

        matchesType(ioc, type) {
            if (!ioc.type) return false;
            return ioc.type.toLowerCase() === type.toLowerCase();
        }

        matchesVendor(ioc, vendor) {
            if (!ioc.vendor) return false;
            return ioc.vendor.toLowerCase().includes(vendor.toLowerCase());
        }

        matchesDate(ioc, dateRange) {
            if (!ioc.timestamp) return true; // Include if no timestamp

            const iocDate = new Date(ioc.timestamp);
            const now = new Date();
            const daysDiff = (now - iocDate) / (1000 * 60 * 60 * 24);

            switch (dateRange) {
                case 'today':
                    return daysDiff <= 1;
                case '7d':
                    return daysDiff <= 7;
                case '30d':
                    return daysDiff <= 30;
                default:
                    return true;
            }
        }

        matchesThreat(ioc, threat) {
            const description = (ioc.description || '').toLowerCase();
            const tags = (ioc.tags || []).join(' ').toLowerCase();
            const searchText = description + ' ' + tags;

            switch (threat) {
                case 'phishing':
                    return searchText.includes('phish');
                case 'malware':
                    return searchText.includes('malware') || searchText.includes('trojan') || searchText.includes('virus');
                case 'c2':
                    return searchText.includes('c2') || searchText.includes('botnet') || searchText.includes('command');
                case 'exploit':
                    return searchText.includes('exploit') || searchText.includes('cve');
                default:
                    return true;
            }
        }

        updateDisplay() {
            this.updateResultCount();

            // Trigger custom event for other components to listen to
            const event = new CustomEvent('iocFiltered', {
                detail: {
                    filtered: this.filteredIOCs,
                    total: this.allIOCs.length,
                    filters: this.activeFilters
                }
            });
            document.dispatchEvent(event);
        }

        updateResultCount() {
            const countElement = document.getElementById('resultCount');
            if (countElement) {
                countElement.textContent = this.filteredIOCs.length.toLocaleString();
            }
        }

        updateActiveFilterBadges() {
            const container = document.getElementById('activeFilters');
            if (!container) return;

            container.innerHTML = '';

            const badges = [];

            if (this.activeFilters.search) {
                badges.push(this.createBadge('Search', this.activeFilters.search, 'search'));
            }
            if (this.activeFilters.type) {
                badges.push(this.createBadge('Type', this.activeFilters.type, 'type'));
            }
            if (this.activeFilters.vendor) {
                badges.push(this.createBadge('Vendor', this.activeFilters.vendor, 'vendor'));
            }
            if (this.activeFilters.date) {
                badges.push(this.createBadge('Date', this.activeFilters.date, 'date'));
            }
            if (this.activeFilters.threat) {
                badges.push(this.createBadge('Threat', this.activeFilters.threat, 'threat'));
            }

            badges.forEach(badge => container.appendChild(badge));
        }

        createBadge(label, value, filterKey) {
            const badge = document.createElement('div');
            badge.className = 'filter-badge';
            badge.innerHTML = `
                <span>${label}: ${value}</span>
                <button class="filter-badge-remove" data-filter="${filterKey}">×</button>
            `;

            badge.querySelector('.filter-badge-remove').addEventListener('click', () => {
                this.removeFilter(filterKey);
            });

            return badge;
        }

        removeFilter(filterKey) {
            switch (filterKey) {
                case 'search':
                    document.getElementById('iocSearch').value = '';
                    break;
                case 'type':
                    document.getElementById('filterType').value = 'all';
                    break;
                case 'vendor':
                    document.getElementById('filterVendor').value = 'all';
                    break;
                case 'date':
                    document.getElementById('filterDate').value = 'all';
                    break;
                case 'threat':
                    document.getElementById('filterThreat').value = 'all';
                    break;
            }
            this.applyFilters();
        }

        clearAllFilters() {
            document.getElementById('iocSearch').value = '';
            document.getElementById('filterType').value = 'all';
            document.getElementById('filterVendor').value = 'all';
            document.getElementById('filterDate').value = 'all';
            document.getElementById('filterThreat').value = 'all';

            this.activeFilters = {};
            this.applyFilters();
        }

        toggleFilters() {
            const content = document.getElementById('filterContent');
            const toggleBtn = document.getElementById('toggleFilters');

            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggleBtn.textContent = 'Hide Filters';
            } else {
                content.style.display = 'none';
                toggleBtn.textContent = 'Show Filters';
            }
        }

        getFilteredIOCs() {
            return this.filteredIOCs;
        }
    }

    // Create global instance
    window.threatIntelFilter = new ThreatIntelFilter();
    window.threatIntelFilter.initialize();

})();
