// Nosh Stash offline support: the app itself opens without a connection; recipes come from the last saved copy.
const CACHE = 'noshstash-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png', './favicon-32.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

function keep(req, res) {
  if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
  return res;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // The page itself: always try for the newest version first, fall back to the saved one offline.
    if (req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html')) {
      e.respondWith(fetch(req).then((res) => keep(req, res)).catch(() => caches.match(req).then((m) => m || caches.match('./index.html'))));
      return;
    }
    e.respondWith(caches.match(req).then((m) => m || fetch(req).then((res) => keep(req, res))));
    return;
  }
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then((m) => m || fetch(req).then((res) => keep(req, res))));
  }
});
