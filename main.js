
// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
//if (navigator.serviceWorker) {

  // Register the SW
  //navigator.serviceWorker.register('./sw.js').then(function(registration){
  //}).catch(console.log);
//}
if (window.caches) {
    //caches.open('test1');
    //caches.open('test2');
    //caches.keys().then(console.log);
    //caches.has('test1').then(console.log);
    //caches.has('test3').then(console.log);
    //caches.delete('test1').then(console.log);
    caches.open('test2').then((cache) => {
            
    });
}
