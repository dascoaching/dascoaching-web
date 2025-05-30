
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("das-cache").then((cache) =>
      cache.addAll(["/", "/index.html", "/dashboard.html", "/assets/styles.css"])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
