// Copy-to-Clipboard Utility
// Adds professional copy functionality to IOCs across the site

(function () {
    'use strict';

    // Toast notification system
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `copy-toast copy-toast-${type}`;
        toast.textContent = message;

        // Style the toast
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: type === 'success' ? 'rgba(0, 255, 136, 0.95)' : 'rgba(255, 76, 76, 0.95)',
            color: '#000',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '0.9rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            zIndex: '10000',
            animation: 'slideInUp 0.3s ease',
            backdropFilter: 'blur(10px)'
        });

        document.body.appendChild(toast);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.animation = 'slideOutDown 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Copy text to clipboard
    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            showToast('✓ Copied to clipboard!', 'success');
            return true;
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();

            try {
                document.execCommand('copy');
                showToast('✓ Copied to clipboard!', 'success');
                return true;
            } catch (err) {
                showToast('✗ Failed to copy', 'error');
                return false;
            } finally {
                document.body.removeChild(textArea);
            }
        }
    }

    // Add copy button to an element
    function addCopyButton(element, textToCopy) {
        // Don't add if already has copy button
        if (element.querySelector('.copy-btn')) return;

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '📋';
        copyBtn.title = 'Copy to clipboard';
        copyBtn.setAttribute('aria-label', 'Copy to clipboard');

        // Style the button
        Object.assign(copyBtn.style, {
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid rgba(0, 217, 255, 0.3)',
            color: '#00D9FF',
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            marginLeft: '0.5rem',
            transition: 'all 0.2s ease',
            verticalAlign: 'middle'
        });

        // Hover effect
        copyBtn.addEventListener('mouseenter', () => {
            copyBtn.style.background = 'rgba(0, 217, 255, 0.2)';
            copyBtn.style.borderColor = '#00D9FF';
            copyBtn.style.transform = 'scale(1.05)';
        });

        copyBtn.addEventListener('mouseleave', () => {
            copyBtn.style.background = 'rgba(0, 217, 255, 0.1)';
            copyBtn.style.borderColor = 'rgba(0, 217, 255, 0.3)';
            copyBtn.style.transform = 'scale(1)';
        });

        // Copy on click
        copyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            copyToClipboard(textToCopy);

            // Visual feedback
            copyBtn.innerHTML = '✓';
            copyBtn.style.background = 'rgba(0, 255, 136, 0.2)';
            copyBtn.style.borderColor = '#22C55E';
            copyBtn.style.color = '#22C55E';

            setTimeout(() => {
                copyBtn.innerHTML = '📋';
                copyBtn.style.background = 'rgba(0, 217, 255, 0.1)';
                copyBtn.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                copyBtn.style.color = '#00D9FF';
            }, 1500);
        });

        element.appendChild(copyBtn);
    }

    // Auto-detect and add copy buttons to IOCs
    function enhanceIOCs() {
        // IOC indicators (threat intel dashboard)
        document.querySelectorAll('.ioc-indicator').forEach(element => {
            const text = element.textContent.trim();
            if (text && !element.querySelector('.copy-btn')) {
                addCopyButton(element, text);
            }
        });

        // CVE IDs
        document.querySelectorAll('.cve-id').forEach(element => {
            const text = element.textContent.trim();
            if (text && !element.querySelector('.copy-btn')) {
                addCopyButton(element, text);
            }
        });

        // Monospace code blocks (likely IOCs)
        document.querySelectorAll('code, pre').forEach(element => {
            const text = element.textContent.trim();
            // Only add if looks like an IOC (IP, domain, hash, etc.)
            if (text && (
                /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(text) || // IP
                /^[a-f0-9]{32,64}$/i.test(text) || // Hash
                /^[a-z0-9-]+\.[a-z]{2,}$/i.test(text) || // Domain
                /^CVE-\d{4}-\d{4,}$/i.test(text) // CVE
            )) {
                if (!element.querySelector('.copy-btn')) {
                    addCopyButton(element, text);
                }
            }
        });
    }

    // Bulk copy functionality
    function addBulkCopyButton() {
        // Check if we're on threat intel page
        const iocGrid = document.querySelector('.ioc-grid');
        if (!iocGrid) return;

        const bulkCopyBtn = document.createElement('button');
        bulkCopyBtn.className = 'bulk-copy-btn';
        bulkCopyBtn.innerHTML = '📋 Copy All IOCs';
        bulkCopyBtn.title = 'Copy all visible IOCs to clipboard';

        Object.assign(bulkCopyBtn.style, {
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid rgba(0, 217, 255, 0.3)',
            color: '#00D9FF',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
            transition: 'all 0.2s ease',
            marginBottom: '1rem'
        });

        bulkCopyBtn.addEventListener('click', () => {
            const iocs = Array.from(document.querySelectorAll('.ioc-indicator'))
                .map(el => el.textContent.trim())
                .filter(text => text.length > 0)
                .join('\n');

            if (iocs) {
                copyToClipboard(iocs);
                showToast(`✓ Copied ${iocs.split('\n').length} IOCs!`, 'success');
            } else {
                showToast('No IOCs found', 'error');
            }
        });

        // Insert before IOC grid
        iocGrid.parentNode.insertBefore(bulkCopyBtn, iocGrid);
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideOutDown {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(20px);
            }
        }
        
        .copy-btn:active {
            transform: scale(0.95) !important;
        }
    `;
    document.head.appendChild(style);

    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            enhanceIOCs();
            addBulkCopyButton();
        });
    } else {
        enhanceIOCs();
        addBulkCopyButton();
    }

    // Re-enhance when new content is added (for dynamic loading)
    const observer = new MutationObserver(() => {
        enhanceIOCs();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Expose to global scope for manual use
    window.copyToClipboard = copyToClipboard;
})();
