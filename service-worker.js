self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pwa-cache').then((cache) => {
            return cache.addAll([
                '/H4waks/index.html',
                '/H4waks/styles.css',
                '/H4waks/script.js',
                '/H4waks/1_FuZKkoKArJebU6zLNuxrgA.png',
                '/H4waks/6_Resilient_Reporting-and-Dashboards.png',
                '/H4waks/1730834734427.jpg',
                '/H4waks/CATS-blocks-image.png',
                '/H4waks/icons/manifest-icon-192.maskable.png',
                '/H4waks/icons/manifest-icon-512.maskable.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        // Try to serve cached resources first
        caches.match(event.request).then((cachedResponse) => {
            // If found in cache, return cached response
            if (cachedResponse) {
                return cachedResponse;
            }
            
            // Not in cache? Try network request
            return fetch(event.request).catch(error => {
                // Network failed: Check if it's a navigation request
                if (event.request.mode === 'navigate') {
                    // Serve app shell (index.html) for all navigation requests
                    return caches.match('/H4waks/index.html');
                }
                // Re-throw error for non-navigation requests (images, CSS, etc.)
                throw error;
            });
        })
    );
});
