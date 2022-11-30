var STATIC_CACHE_NAME = "gfg-pwa";
var DYNAMIC_CACHE_NAME = "dynamic-gfg-pwa";
  
// Add Routes and pages using React Browser Router
var urlsToCache = ["/", "/search", "/aboutus", "/profile"];
  
// Install a service worker
self.addEventListener("install", (event) => {
  
  // Perform install steps
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
  
// Cache and return requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
  
      // If the file is not present in STATIC_CACHE,
      // it will be searched in DYNAMIC_CACHE
      return (
        cacheRes ||
        fetch(event.request).then((fetchRes) => {
          return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(event.request.url, fetchRes.clone());
            return fetchRes;
          });
        })
      );
    })
  );
});
  
// Update a service worker
self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["gfg-pwa"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

