const CACHE_NAME = 'thehgtech-cache-v7';
const URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/design-system.min.css',
    '/cve-display.min.css',
    '/m-core.min.css',
    '/m-layout.min.css',
    '/m-components.min.css',
    '/theme-toggle.js',
    '/m-app.min.js',
    '/news-timeline.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

self.addEventListener('fetch', event => {
    // Network-First for interaction-bar and index.html to prevent stale content
    if (event.request.url.includes('interaction-bar') || event.request.url.endsWith('index.html') || event.request.url.endsWith('/')) {
        event.respondWith(
            fetch(event.request).then(response => {
                let responseClone = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(() => caches.match(event.request))
        );
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(
                    function(response) {
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        var responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    }
                );
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
