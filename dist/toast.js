/**
 * THEHGTECH TOAST NOTIFICATIONS
 * Beautiful feedback toasts for user actions
 * @version 1.0
 */

class ToastSystem {
    constructor() {
        this.container = null;
        this.queue = [];
        this.init();
    }

    init() {
        this.injectStyles();
        this.createContainer();
        console.log('[ToastSystem] ✓ Initialized');
    }

    injectStyles() {
        if (document.getElementById('toast-styles')) return;

        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            /* ========== TOAST CONTAINER ========== */
            .toast-container {
                position: fixed;
                bottom: 24px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                flex-direction: column;
                gap: 12px;
                z-index: 999999;
                pointer-events: none;
            }

            @media (max-width: 768px) {
                .toast-container {
                    bottom: 90px;
                    left: 16px;
                    right: 16px;
                    transform: none;
                }
            }

            /* ========== TOAST ITEM ========== */
            .toast {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 14px 20px;
                background: linear-gradient(135deg, rgba(30, 30, 35, 0.95) 0%, rgba(25, 25, 30, 0.95) 100%);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                pointer-events: auto;
                transform: translateY(100px);
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.32, 0.72, 0, 1);
                max-width: 400px;
            }

            .toast.show {
                transform: translateY(0);
                opacity: 1;
            }

            .toast.hide {
                transform: translateY(-20px);
                opacity: 0;
            }

            body.light-mode .toast {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 252, 0.95) 100%);
                border-color: rgba(0, 0, 0, 0.1);
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            }

            /* ========== TOAST ICON ========== */
            .toast__icon {
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                flex-shrink: 0;
                font-size: 0.9rem;
            }

            .toast--success .toast__icon {
                background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(10, 150, 100, 0.1) 100%);
                color: #10B981;
            }

            .toast--error .toast__icon {
                background: linear-gradient(135deg, rgba(255, 61, 61, 0.2) 0%, rgba(200, 50, 50, 0.1) 100%);
                color: #FF3D3D;
            }

            .toast--warning .toast__icon {
                background: linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.15) 100%);
                color: #FFC107;
            }

            .toast--info .toast__icon {
                background: linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(0, 180, 220, 0.1) 100%);
                color: #00D9FF;
            }

            /* ========== TOAST CONTENT ========== */
            .toast__content {
                flex: 1;
                min-width: 0;
            }

            .toast__message {
                font-size: 0.9rem;
                font-weight: 500;
                color: #fff;
                line-height: 1.4;
            }

            body.light-mode .toast__message {
                color: #1a1a2e;
            }

            .toast__submessage {
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.5);
                margin-top: 2px;
            }

            body.light-mode .toast__submessage {
                color: rgba(0, 0, 0, 0.5);
            }

            /* ========== TOAST CLOSE ========== */
            .toast__close {
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: transparent;
                border: none;
                border-radius: 6px;
                color: rgba(255, 255, 255, 0.4);
                cursor: pointer;
                transition: all 0.2s ease;
                flex-shrink: 0;
            }

            .toast__close:hover {
                background: rgba(255, 255, 255, 0.1);
                color: #fff;
            }

            body.light-mode .toast__close {
                color: rgba(0, 0, 0, 0.4);
            }

            body.light-mode .toast__close:hover {
                background: rgba(0, 0, 0, 0.1);
                color: #000;
            }

            /* ========== TOAST PROGRESS ========== */
            .toast__progress {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 3px;
                background: linear-gradient(90deg, #00D9FF 0%, #9333EA 100%);
                border-radius: 0 0 12px 12px;
                animation: toast-progress linear forwards;
            }

            .toast--success .toast__progress {
                background: linear-gradient(90deg, #10B981 0%, #34D399 100%);
            }

            .toast--error .toast__progress {
                background: linear-gradient(90deg, #FF3D3D 0%, #FF6B6B 100%);
            }

            .toast--warning .toast__progress {
                background: linear-gradient(90deg, #FFC107 0%, #FFBB33 100%);
            }

            @keyframes toast-progress {
                from { width: 100%; }
                to { width: 0%; }
            }

            /* ========== TOAST ACTIONS ========== */
            .toast__actions {
                display: flex;
                gap: 8px;
                margin-top: 10px;
            }

            .toast__action {
                padding: 6px 12px;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                border-radius: 6px;
                font-size: 0.8rem;
                font-weight: 500;
                color: #fff;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .toast__action:hover {
                background: rgba(255, 255, 255, 0.15);
            }

            .toast__action--primary {
                background: linear-gradient(135deg, #00D9FF 0%, #0099CC 100%);
                color: #000;
            }

            .toast__action--primary:hover {
                opacity: 0.9;
            }

            body.light-mode .toast__action {
                background: rgba(0, 0, 0, 0.1);
                color: #1a1a2e;
            }
        `;
        document.head.appendChild(style);
    }

    createContainer() {
        if (document.getElementById('toastContainer')) return;

        const container = document.createElement('div');
        container.className = 'toast-container';
        container.id = 'toastContainer';
        document.body.appendChild(container);
        this.container = container;
    }

    /**
     * Show a toast notification
     * @param {string} message - Main message
     * @param {string} type - 'success' | 'error' | 'warning' | 'info'
     * @param {string} icon - FontAwesome icon class (optional)
     * @param {object} options - { duration, submessage, actions }
     */
    show(message, type = 'info', icon = null, options = {}) {
        const {
            duration = 4000,
            submessage = null,
            actions = null,
            closeable = true
        } = options;

        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;

        const iconClass = icon || this.getDefaultIcon(type);

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="fas ${iconClass}"></i>
            </div>
            <div class="toast__content">
                <div class="toast__message">${message}</div>
                ${submessage ? `<div class="toast__submessage">${submessage}</div>` : ''}
                ${actions ? this.renderActions(actions) : ''}
            </div>
            ${closeable ? `
                <button class="toast__close" onclick="this.closest('.toast').remove()">
                    <i class="fas fa-times"></i>
                </button>
            ` : ''}
            ${duration > 0 ? `<div class="toast__progress" style="animation-duration: ${duration}ms;"></div>` : ''}
        `;

        this.container.appendChild(toast);

        // Trigger animation
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // Auto-remove
        if (duration > 0) {
            setTimeout(() => this.dismiss(toast), duration);
        }

        // Bind action handlers
        if (actions) {
            actions.forEach((action, i) => {
                const btn = toast.querySelectorAll('.toast__action')[i];
                if (btn && action.onClick) {
                    btn.addEventListener('click', () => {
                        action.onClick();
                        this.dismiss(toast);
                    });
                }
            });
        }

        return toast;
    }

    dismiss(toast) {
        if (!toast || !toast.parentNode) return;

        toast.classList.remove('show');
        toast.classList.add('hide');

        setTimeout(() => {
            toast.remove();
        }, 300);
    }

    getDefaultIcon(type) {
        const icons = {
            success: 'fa-check',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        return icons[type] || 'fa-info-circle';
    }

    renderActions(actions) {
        return `
            <div class="toast__actions">
                ${actions.map((a, i) => `
                    <button class="toast__action ${i === 0 ? 'toast__action--primary' : ''}">${a.label}</button>
                `).join('')}
            </div>
        `;
    }

    // Convenience methods
    success(message, options = {}) {
        return this.show(message, 'success', 'fa-check', options);
    }

    error(message, options = {}) {
        return this.show(message, 'error', 'fa-exclamation-circle', options);
    }

    warning(message, options = {}) {
        return this.show(message, 'warning', 'fa-exclamation-triangle', options);
    }

    info(message, options = {}) {
        return this.show(message, 'info', 'fa-info-circle', options);
    }
}

// Initialize
const toastSystem = new ToastSystem();
window.toastSystem = toastSystem;
