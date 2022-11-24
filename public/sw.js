let cacheName = "noticias-app";
let filesToCache = ["/", "/index.html", 
                , "/main.js", "https://fonts.googleapis.com/css?family=Poppins&display=swap",
                "/pages/fallback.html"];

/* inicializando a service worker e fazendo o 
download do conteúdo da aplicação */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* disponibilizando o conteudo quando estiver offline */
self.addEventListener("fetch", (e) => {
    const req = e.request;
    const url = new URL(req.url);
    if(url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
      }else {
        e.respondWith(networkFirst(req));
      }
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
  }
  
  async function networkFirst(req) {
    const cache = await caches.open('noticias-app');
    try {
      const res = await fetch(req);
      cache.put(req, res.clone());
      return res;
    } catch(error) {
      return await cache.match(req);
    }
  }
