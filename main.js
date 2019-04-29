
// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
//if (navigator.serviceWorker) {

  // Register the SW
  //navigator.serviceWorker.register('./sw.js').then(function(registration){
  //}).catch(console.log);
//}
if (window.caches) {
    caches.open('pwa-v1.1').then((cache) => {
        //cache.put('index.html', new Response('My own HTML'));
        //cache.match('/index.html').then((res) => {
            //res.text().then(console.log);
        //})
        cache.keys().then(console.log);
    });
}
