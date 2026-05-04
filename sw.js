const cacheName = 'l-bots-v1';
const assets = [
  '/',
  '/shop.html',
  // أضف أي ملفات أخرى هنا مثل الصور أو ملفات CSS الخارجية
];

// تثبيت السيرفس وركر وحفظ الملفات في الكاش
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// تشغيل المتجر من الكاش في حال عدم وجود إنترنت
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
