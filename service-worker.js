(()=>{let a=[],t="";a=["/tap-to-roll/index.html","/tap-to-roll/icons/512.png","/tap-to-roll/032.03fafadc.png","/tap-to-roll/taptoroll.webmanifest","/tap-to-roll/016.8fde062f.png","/tap-to-roll/064.03cb48cc.png","/tap-to-roll/096.7e948660.png","/tap-to-roll/128.0d0085fe.png","/tap-to-roll/168.266a6276.png","/tap-to-roll/192.d6484057.png","/tap-to-roll/256.044bb46b.png","/tap-to-roll/index.a28ab426.css","/tap-to-roll/index.45ccbcf5.css","/tap-to-roll/mr-eaves.c381e4a8.otf","/tap-to-roll/scaly-sans.3757d2ba.woff2","/tap-to-roll/scaly-sans-caps-bold.cd98d6a3.otf","/tap-to-roll/bookinsanity.81d8e59d.otf","/tap-to-roll/parchment.d1e52c21.png","/tap-to-roll/index.2a1be409.js"],t="12fb2856";const l=`taptoroll-${t}`;self.addEventListener("install",(t=>t.waitUntil((async()=>{const t=await caches.open(l);await t.addAll(a)})())));self.addEventListener("activate",(a=>a.waitUntil((async()=>{const a=await caches.keys();await Promise.all(a.map((a=>{if(a!==l)return caches.delete(a)})))})()))),self.addEventListener("fetch",(a=>{}))})();
//# sourceMappingURL=service-worker.js.map