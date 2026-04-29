self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(e) {
    // Dieser leere Fetch-Befehl ist zwingend nötig, 
    // damit Chrome den "App Installieren" Button anzeigt!
});
