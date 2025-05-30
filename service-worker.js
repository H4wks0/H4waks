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
  'H4waks/icons/manifest-icon-192.maskable.png',
  'H4waks/icons/manifest-icon-512.maskable.png'

 ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});