//console.log('SW Ready');

// Import Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');


// Allow new SW to take over
workbox.skipWaiting();
workbox.clientsClaim();

// Cache .js files - cache first
//workbox.routing.registerRoute(/\.js$/, workbox.strategies.cacheFirst());
workbox.routing.registerRoute(/\.js$/, workbox.strategies.networkFirst());
