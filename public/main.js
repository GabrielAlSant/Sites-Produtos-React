window.addEventListener('load', e => {
    postNews();
    "use strict";//restrito a funcionar em navegadores comES6 >
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}); 





const OFFLINE_VERSION = 1;
const CACHE_NAME = "offline";
// Customize this with a different URL if needed.
const OFFLINE_URL = "offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Setting {cache: 'reload'} in the new request will ensure that the
      // response isn't fulfilled from the HTTP cache; i.e., it will be from
      // the network.
      await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      // See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
 
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {

          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
         
          console.log("Fetch failed; returning offline page instead.", error);

          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
        }
      })()
    );
  }
});





let posicaoInicial
 const capturarLocalizacao = document.getElementById("localizacao")
 const  latitude = document.getElementById("latitude")
 const longitude = document.getElementById("longitude")

 const sucesso = (posicao) => {
    posicaoInicial = posicao
    latitude.innerHTML = posicaoInicial.coords.latitude
    longitude.innerHTML = posicaoInicial.coords.longitude
    const locations = document.getElementById("seila")
    locations.innerHTML = '<iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q='+ posicaoInicial.coords.latitude + posicaoInicial.coords.longitude +'&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
   
 }

 const erro = (erro) =>{
    let errorMessage;
    switch(erro.code){
        case 0:
            errorMessage = "Erro desconhecido"
            break;
            case 1:
                errorMessage = "Erro desconhecido"
                break;
                case 2:
                    errorMessage = "Erro desconhecido"
                    break;
                    case 3:
                    errorMessage = "Erro desconhecido"
                    break;
    }
     console.log("ocorreu um erro " + errorMessage)
 }


 capturarLocalizacao.addEventListener("click", ()=>{
   navigator.geolocation.getCurrentPosition(sucesso,erro)
 })