/**
 * Service Worker for TheHGTech
 * Provides offline support and performance caching
 */

const CACHE_VERSION = 'thehgtech-v3.0.0-20260203'; // Bumped to force refresh on mobile Safari
const CACHE_STATIC = `${CACHE_VERSION}-static`;
const CACHE_DYNAMIC = `${CACHE_VERSION}-dynamic`;
const CACHE_IMAGES = `${CACHE_VERSION}-images`;

// Static assets to cache immediately - using minified versions
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/m-core.min.css',
    '/m-layout.min.css',
    '/m-components.min.css',
    '/m-app.js',
    '/content.js',
    '/offline.html' // Fallback page
];

// Maximum cache sizes
const MAX_DYNAMIC_CACHE = 50;
const MAX_IMAGE_CACHE = 100;

// ========== INSTALL EVENT ==========
self.addEventListener('install', (event) => {
    console.log('[SW] Installing Service Worker...');

    event.waitUntil(
        caches.open(CACHE_STATIC)
            .then(cache => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .catch(err => {
                console.error('[SW] Failed to cache static assets:', err);
            })
    );

    // Force activation
    self.skipWaiting();
});

// ========== ACTIVATE EVENT ==========
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating Service Worker...');

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        // Delete old caches
                        if (!cacheName.startsWith(CACHE_VERSION)) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
    );

    // Take control immediately
    return self.clients.claim();
});

// ========== FETCH EVENT ==========
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Skip external requests (except fonts and analytics)
    if (url.origin !== location.origin &&
        !url.host.includes('fonts.googleapis.com') &&
        !url.host.includes('fonts.gstatic.com')) {
        return;
    }

    // Handle different types of requests
    if (request.destination === 'image') {
        event.respondWith(handleImageRequest(request));
    } else if (url.pathname.endsWith('.json')) {
        event.respondWith(handleDataRequest(request));
    } else {
        event.respondWith(handleStaticRequest(request));
    }
});

// ========== REQUEST HANDLERS ==========

// Static assets: Stale-while-revalidate for HTML, cache-first for others
async function handleStaticRequest(request) {
    try {
        const url = new URL(request.url);
        const isHTML = request.mode === 'navigate' ||
            url.pathname.endsWith('.html') ||
            url.pathname === '/' ||
            url.pathname === '';

        if (isHTML) {
            // NETWORK-FIRST for HTML pages (fixes Safari mobile caching)
            try {
                const networkResponse = await fetch(request);

                if (networkResponse.ok) {
                    const cache = await caches.open(CACHE_STATIC);
                    cache.put(request, networkResponse.clone());
                }

                return networkResponse;
            } catch (error) {
                // Fallback to cache if network fails
                const cachedResponse = await caches.match(request);
                if (cachedResponse) {
                    return cachedResponse;
                }
                return caches.match('/offline.html');
            }
        }

        // Cache-first for other static assets (CSS, JS, fonts)
        const cachedResponse = await caches.match(request);

        if (cachedResponse) {
            // Return cached version
            return cachedResponse;
        }

        // Fetch from network
        const networkResponse = await fetch(request);

        // Cache successful responses
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_STATIC);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;

    } catch (error) {
        console.error('[SW] Static request failed:', error);

        // Return offline page for navigation requests
        if (request.mode === 'navigate') {
            return caches.match('/offline.html');
        }

        throw error;
    }
}

// Images: Cache first, network fallback
async function handleImageRequest(request) {
    try {
        const cachedImage = await caches.match(request);

        if (cachedImage) {
            return cachedImage;
        }

        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_IMAGES);

            // Limit cache size
            const keys = await cache.keys();
            if (keys.length >= MAX_IMAGE_CACHE) {
                await cache.delete(keys[0]);
            }

            cache.put(request, networkResponse.clone());
        }

        return networkResponse;

    } catch (error) {
        console.error('[SW] Image request failed:', error);

        // Return placeholder image
        return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="#1a1a1a" width="400" height="300"/><text fill="#666" x="50%" y="50%" text-anchor="middle">Image unavailable</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
        );
    }
}

// Data (JSON): Network first, cache fallback
async function handleDataRequest(request) {
    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_DYNAMIC);

            // Limit cache size
            const keys = await cache.keys();
            if (keys.length >= MAX_DYNAMIC_CACHE) {
                await cache.delete(keys[0]);
            }

            cache.put(request, networkResponse.clone());
        }

        return networkResponse;

    } catch (error) {
        console.error('[SW] Data request failed, using cache:', error);

        const cachedResponse = await caches.match(request);

        if (cachedResponse) {
            return cachedResponse;
        }

        // Return empty data
        return new Response('{}', {
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// ========== BACKGROUND SYNC ==========
self.addEventListener('sync', (event) => {
    console.log('[SW] Background sync:', event.tag);

    if (event.tag === 'sync-data') {
        event.waitUntil(syncData());
    }
});

async function syncData() {
    try {
        // Sync threat intel data
        const response = await fetch('/threat-intel-history.json');

        if (response.ok) {
            const cache = await caches.open(CACHE_DYNAMIC);
            await cache.put('/threat-intel-history.json', response);
            console.log('[SW] Data synced successfully');
        }
    } catch (error) {
        console.error('[SW] Sync failed:', error);
    }
}

// ========== PUSH NOTIFICATIONS ==========
self.addEventListener('push', (event) => {
    console.log('[SW] Push notification received');

    const options = {
        body: event.data ? event.data.text() : 'New threat intelligence available',
        icon: '/favicon-192x192.png',
        badge: '/badge-72x72.png',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'View Details',
                icon: '/icons/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/icons/xmark.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('TheHGTech', options)
    );
});

self.addEventListener('notificationclick', (event) => {
    console.log('[SW] Notification clicked:', event.action);

    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// ========== MESSAGE HANDLER ==========
self.addEventListener('message', (event) => {
    console.log('[SW] Message received:', event.data);

    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }

    if (event.data.action === 'clearCache') {
        event.waitUntil(
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => caches.delete(cacheName))
                );
            })
        );
    }
});

// ========== UTILITY FUNCTIONS ==========
function cleanupCache(cacheName, maxItems) {
    return caches.open(cacheName).then(cache => {
        return cache.keys().then(keys => {
            if (keys.length > maxItems) {
                return cache.delete(keys[0]).then(() => {
                    return cleanupCache(cacheName, maxItems);
                });
            }
        });
    });
}

console.log('[SW] Service Worker loaded');
