self.addEventListener("install",e=>{
 e.waitUntil(
  caches.open("raju-grocery").then(c=>{
   return c.addAll(["./","./index.html","./manifest.json"]);
  })
 );
});

self.addEventListener("fetch",e=>{
 e.respondWith(
  caches.match(e.request).then(r=>r||fetch(e.request))
 );
});
