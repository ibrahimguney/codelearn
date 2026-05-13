// CodeLearn AI - Service Worker
const CACHE_NAME = 'codelearn-v1';
const CORE_FILES = [
  './',
  './index.html',
  './manifest.json'
];

// Install: temel dosyalari cache'le
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_FILES))
      .then(() => self.skipWaiting())
  );
});

// Activate: eski cache'leri temizle
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first stratejisi (her zaman guncel icerik, offline fallback)
self.addEventListener('fetch', e => {
  // API isteklerini cache'leme (worker.dev, piston, anthropic)
  const url = e.request.url;
  if (url.includes('workers.dev') || url.includes('piston') || url.includes('anthropic')) {
    return; // Tarayicinin normal davranisi
  }

  // Sadece GET istekleri
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Basarili cevabi cache'e koy
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request)) // Offline ise cache'ten
  );
});
