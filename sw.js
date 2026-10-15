// Service Worker pentru Calculator IMC (TekiDeki)
// Strategie: cache-first pentru shell-ul aplicației, cu fallback la rețea.
// SPDX-License-Identifier: Apache-2.0

const CACHE_NAME = 'calculator-imc-v6';
const CACHE_PREFIX = 'calculator-imc-v';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './LICENSE',
  './manifest.json',
  './og-image.png',
  './favicon.ico',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './icon.svg'
];

// Instalare: pre-cache fișierele esențiale ale aplicației
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activare: curăță cache-urile vechi din versiunile anterioare.
// Dacă exista o versiune veche, anunță paginile deschise să ofere reîncărcarea.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      const oldCaches = keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME);
      return Promise.all(oldCaches.map((key) => caches.delete(key))).then(() => {
        if (oldCaches.length === 0) return undefined;
        return self.clients.matchAll({ type: 'window' }).then((clients) => {
          clients.forEach((client) => client.postMessage({ type: 'SW_UPDATED', cache: CACHE_NAME }));
        });
      });
    }).then(() => self.clients.claim())
  );
});

// Fetch: cache-first, cu fallback la rețea și apoi la pagina principală (offline)
self.addEventListener('fetch', (event) => {
  const licenseUrl = new URL('./LICENSE', self.registration.scope).href;
  if (event.request.method === 'GET' && event.request.url === licenseUrl) {
    event.respondWith(caches.open(CACHE_NAME).then(cache => cache.match(event.request)).then(cached => cached || fetch(event.request)));
    return;
  }
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((networkResponse) => {
          // Salvează în cache răspunsurile valide, same-origin
          if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith(self.location.origin)) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
