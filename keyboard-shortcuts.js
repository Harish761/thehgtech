/**
 * THEHGTECH KEYBOARD SHORTCUTS
 * Accessibility and power user keyboard navigation
 * @version 1.0
 */

(function () {
    'use strict';

    class KeyboardShortcuts {
        constructor() {
            this.shortcuts = [];
            this.helpModalOpen = false;
            this.init();
        }

        init() {
            this.registerShortcuts();
            this.bindEvents();
            this.injectStyles();
            this.createHelpModal();
            console.log('[KeyboardShortcuts] ✓ Initialized');
        }

        registerShortcuts() {
            // Navigation shortcuts
            this.shortcuts = [
                { keys: ['g', 'h'], desc: 'Go to Homepage', action: () => window.location.href = '/' },
                { keys: ['g', 'c'], desc: 'Go to CVE Tracker', action: () => window.location.href = '/cve-tracker.html' },
                { keys: ['g', 't'], desc: 'Go to Threat Intel', action: () => window.location.href = '/threat-intel.html' },
                { keys: ['g', 'a'], desc: 'Go to Articles', action: () => window.location.href = '/articles.html' },
                { keys: ['g', 'g'], desc: 'Go to Guides', action: () => window.location.href = '/guides/' },
                { keys: ['g', 'm'], desc: 'Go to Comparisons', action: () => window.location.href = '/comparisons/' },

                // Actions
                { keys: ['/'], desc: 'Focus Search / Open Command Palette', action: () => this.openSearch() },
                { keys: ['?'], desc: 'Show Keyboard Shortcuts', action: () => this.toggleHelpModal() },
                { keys: ['b'], desc: 'Toggle Bookmarks Panel', action: () => this.toggleBookmarks() },
                { keys: ['d'], desc: 'Toggle Dark/Light Mode', action: () => this.toggleTheme() },
                { keys: ['Escape'], desc: 'Close Modal / Panel', action: () => this.closeAll(), hidden: true },

                // Scroll
                { keys: ['j'], desc: 'Scroll Down', action: () => window.scrollBy({ top: 300, behavior: 'smooth' }) },
                { keys: ['k'], desc: 'Scroll Up', action: () => window.scrollBy({ top: -300, behavior: 'smooth' }) },
                { keys: ['Home'], desc: 'Go to Top', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { keys: ['End'], desc: 'Go to Bottom', action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) },
            ];
        }

        bindEvents() {
            let keySequence = [];
            let sequenceTimeout = null;

            document.addEventListener('keydown', (e) => {
                // Ignore if in input/textarea
                if (this.isTyping(e)) return;

                // Handle single key shortcuts
                const key = e.key;

                // Build sequence for multi-key shortcuts
                clearTimeout(sequenceTimeout);
                keySequence.push(key.toLowerCase());

                sequenceTimeout = setTimeout(() => {
                    keySequence = [];
                }, 1000);

                // Check for matching shortcut
                for (const shortcut of this.shortcuts) {
                    if (this.matchSequence(keySequence, shortcut.keys)) {
                        e.preventDefault();
                        shortcut.action();
                        keySequence = [];
                        return;
                    }
                }
            });
        }

        matchSequence(sequence, target) {
            if (sequence.length < target.length) return false;

            const recent = sequence.slice(-target.length);
            return recent.every((key, i) => key === target[i].toLowerCase());
        }

        isTyping(e) {
            const target = e.target;
            const tagName = target.tagName.toLowerCase();

            return (
                tagName === 'input' ||
                tagName === 'textarea' ||
                tagName === 'select' ||
                target.isContentEditable ||
                target.closest('.cmd-palette-overlay.active')
            );
        }

        // ========== ACTIONS ==========

        openSearch() {
            // Try command palette first
            if (window.commandPalette) {
                window.commandPalette.open();
            } else if (window.searchEngine) {
                window.searchEngine.open();
            } else {
                // Focus any search input on page
                const searchInput = document.querySelector('input[type="search"], .search-input, #searchInput');
                if (searchInput) searchInput.focus();
            }
        }

        toggleBookmarks() {
            if (window.bookmarkSystem) {
                const panel = document.getElementById('bookmarksPanel');
                if (panel?.classList.contains('open')) {
                    window.bookmarkSystem.closePanel();
                } else {
                    window.bookmarkSystem.openPanel();
                }
            }
        }

        toggleTheme() {
            if (typeof toggleTheme === 'function') {
                toggleTheme();
            } else {
                document.body.classList.toggle('light-mode');
            }
        }

        closeAll() {
            // Close command palette
            if (window.commandPalette?.isOpen) {
                window.commandPalette.close();
                return;
            }

            // Close bookmarks
            const bookmarksPanel = document.getElementById('bookmarksPanel');
            if (bookmarksPanel?.classList.contains('open')) {
                window.bookmarkSystem?.closePanel();
                return;
            }

            // Close help modal
            if (this.helpModalOpen) {
                this.toggleHelpModal();
                return;
            }
        }

        // ========== HELP MODAL ==========

        injectStyles() {
            if (document.getElementById('keyboard-shortcuts-styles')) return;

            const style = document.createElement('style');
            style.id = 'keyboard-shortcuts-styles';
            style.textContent = `
                /* ========== SHORTCUTS HELP MODAL ========== */
                .shortcuts-modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    z-index: 99999;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .shortcuts-modal-overlay.open {
                    opacity: 1;
                    visibility: visible;
                }

                .shortcuts-modal {
                    background: linear-gradient(180deg, rgba(30, 30, 35, 0.98) 0%, rgba(25, 25, 30, 0.98) 100%);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 16px;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
                    max-width: 600px;
                    width: 100%;
                    max-height: 80vh;
                    overflow: hidden;
                    transform: scale(0.95);
                    transition: transform 0.2s ease;
                }

                .shortcuts-modal-overlay.open .shortcuts-modal {
                    transform: scale(1);
                }

                body.light-mode .shortcuts-modal {
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 252, 0.98) 100%);
                    border-color: rgba(0, 0, 0, 0.1);
                }

                .shortcuts-modal__header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px 24px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                body.light-mode .shortcuts-modal__header {
                    border-color: rgba(0, 0, 0, 0.08);
                }

                .shortcuts-modal__title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                body.light-mode .shortcuts-modal__title {
                    color: #1a1a2e;
                }

                .shortcuts-modal__title i {
                    color: #00D9FF;
                }

                .shortcuts-modal__close {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.05);
                    border: none;
                    border-radius: 8px;
                    color: rgba(255, 255, 255, 0.6);
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .shortcuts-modal__close:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                }

                .shortcuts-modal__content {
                    padding: 20px 24px;
                    max-height: 60vh;
                    overflow-y: auto;
                }

                .shortcuts-section {
                    margin-bottom: 24px;
                }

                .shortcuts-section:last-child {
                    margin-bottom: 0;
                }

                .shortcuts-section__title {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255, 255, 255, 0.4);
                    margin-bottom: 12px;
                }

                body.light-mode .shortcuts-section__title {
                    color: rgba(0, 0, 0, 0.4);
                }

                .shortcut-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .shortcut-item:last-child {
                    border-bottom: none;
                }

                body.light-mode .shortcut-item {
                    border-color: rgba(0, 0, 0, 0.05);
                }

                .shortcut-item__desc {
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.8);
                }

                body.light-mode .shortcut-item__desc {
                    color: rgba(0, 0, 0, 0.8);
                }

                .shortcut-item__keys {
                    display: flex;
                    gap: 4px;
                }

                .shortcut-key {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 28px;
                    padding: 4px 8px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 6px;
                    font-size: 0.75rem;
                    font-weight: 500;
                    font-family: 'SF Mono', Monaco, monospace;
                    color: rgba(255, 255, 255, 0.9);
                }

                body.light-mode .shortcut-key {
                    background: rgba(0, 0, 0, 0.06);
                    border-color: rgba(0, 0, 0, 0.1);
                    color: rgba(0, 0, 0, 0.8);
                }

                .shortcut-key + .shortcut-key::before {
                    display: none;
                }

                .shortcut-then {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.3);
                    margin: 0 2px;
                }

                body.light-mode .shortcut-then {
                    color: rgba(0, 0, 0, 0.3);
                }
            `;
            document.head.appendChild(style);
        }

        createHelpModal() {
            const modal = document.createElement('div');
            modal.className = 'shortcuts-modal-overlay';
            modal.id = 'shortcutsModal';
            modal.innerHTML = `
                <div class="shortcuts-modal" onclick="event.stopPropagation()">
                    <div class="shortcuts-modal__header">
                        <h3 class="shortcuts-modal__title">
                            <i class="fas fa-keyboard"></i>
                            Keyboard Shortcuts
                        </h3>
                        <button class="shortcuts-modal__close" onclick="keyboardShortcuts.toggleHelpModal()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="shortcuts-modal__content">
                        ${this.renderShortcutsList()}
                    </div>
                </div>
            `;

            document.body.appendChild(modal);
            this.helpModal = modal;

            // Close on overlay click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.toggleHelpModal();
            });
        }

        renderShortcutsList() {
            const groups = {
                'Navigation': this.shortcuts.filter(s => s.keys[0] === 'g'),
                'Actions': this.shortcuts.filter(s => !s.hidden && s.keys[0] !== 'g' && !['j', 'k', 'Home', 'End'].includes(s.keys[0])),
                'Scrolling': this.shortcuts.filter(s => ['j', 'k', 'Home', 'End'].includes(s.keys[0]))
            };

            return Object.entries(groups).map(([title, items]) => `
                <div class="shortcuts-section">
                    <div class="shortcuts-section__title">${title}</div>
                    ${items.map(s => `
                        <div class="shortcut-item">
                            <span class="shortcut-item__desc">${s.desc}</span>
                            <div class="shortcut-item__keys">
                                ${s.keys.map((key, i) => `
                                    ${i > 0 ? '<span class="shortcut-then">then</span>' : ''}
                                    <kbd class="shortcut-key">${this.formatKey(key)}</kbd>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('');
        }

        formatKey(key) {
            const special = {
                '/': '/',
                '?': '?',
                'Escape': 'Esc',
                'Home': '↖',
                'End': '↘'
            };
            return special[key] || key.toUpperCase();
        }

        toggleHelpModal() {
            this.helpModalOpen = !this.helpModalOpen;
            this.helpModal?.classList.toggle('open', this.helpModalOpen);
            document.body.style.overflow = this.helpModalOpen ? 'hidden' : '';
        }
    }

    // Initialize
    const keyboardShortcuts = new KeyboardShortcuts();
    window.keyboardShortcuts = keyboardShortcuts;

})();
