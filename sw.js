const CACHE_NAME = 'komoot-gpx-v3.3-pro';

// Sofort aktivieren
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Beim Aktivieren ALLE alten Caches restlos löschen
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Lösche alten Cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Netzwerk IMMER bevorzugen (Network-First)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
