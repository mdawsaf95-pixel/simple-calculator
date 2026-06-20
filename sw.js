const cacheName = 'calc-v1';
const assets = ['index.html', 'style.css', 'script.js', 'manifest.json', 'icon.png'];

// অ্যাপটি ডিভাইসে ইনস্টল করার সময় ফাইলগুলো ক্যাশ করা
self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

// অফলাইনে ফাইলগুলো লোড করা
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});