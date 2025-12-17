self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("raju-grocery").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./raju.jpg",
        "./atta.jpg",
        "./rice.jpg",
        "./oil.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
