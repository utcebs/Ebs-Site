const CACHE_NAME = 'ebs-tracker-v2';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Never cache HTML documents or Supabase API calls — always fetch fresh
  const isHTML = e.request.mode === 'navigate' || e.request.destination === 'document';
  const isSupabase = url.hostname.includes('supabase.co');

  if (isHTML || isSupabase) {
    e.respondWith(fetch(e.request, { cache: 'no-store' }));
    return;
  }

  // Everything else — network first, fall back to cache if offline
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
