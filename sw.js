const CACHE_NAME = 'adega-erp-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o robô e guarda os arquivos básicos na memória do celular
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta as requisições para o app carregar mais rápido
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
