const C="fi-v2",F=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==C).map(n=>caches.delete(n)))).then(()=>clients.claim())));
self.addEventListener("fetch",e=>{const q=e.request,u=new URL(q.url);if(q.method!=="GET"||u.origin!==location.origin)return;
e.respondWith(fetch(q).then(r=>{if(r.ok&&r.type==="basic"){const k=r.clone();caches.open(C).then(c=>c.put(q,k))}return r}).catch(()=>caches.match(q,{ignoreSearch:true}).then(r=>r||(q.mode==="navigate"?caches.match("./index.html"):Response.error()))))});
