// Update IOC counts dynamically from threat-intel.js
document.addEventListener('DOMContentLoaded', () => {
    // Function to format IOC count
    function formatIocCount(count) {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M+';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(0) + 'K+';
        }
        return count.toString();
    }

    // Function to update all IOC count displays
    function updateIocCounts() {
        // Check if threat intel data is loaded
        if (typeof threatIntelData !== 'undefined' && threatIntelData.totalIOCs) {
            const formattedCount = formatIocCount(threatIntelData.totalIOCs);

            // Update hero section
            const heroCount = document.getElementById('heroIocCount');
            if (heroCount) {
                heroCount.textContent = formattedCount;
            }

            // Update snapshot section
            const snapshotCount = document.getElementById('snapshotIocCount');
            if (snapshotCount) {
                snapshotCount.textContent = formattedCount;
            }

            console.log(`Updated IOC counts to: ${formattedCount} (${threatIntelData.totalIOCs} total)`);
        } else {
            // Retry after threat-intel.js loads
            setTimeout(updateIocCounts, 100);
        }
    }

    // Start updating counts
    updateIocCounts();
});
