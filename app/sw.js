/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "Classes/Camera.js",
    "revision": "473de2d0709c0e68b99e6c7d829d7bdd"
  },
  {
    "url": "Classes/Message.js",
    "revision": "1b1b09235037cfc72d6f30fc003fb2e7"
  },
  {
    "url": "index.html",
    "revision": "fc8562fd55196320937d6092e7d9ba39"
  },
  {
    "url": "main.js",
    "revision": "c551e2e54ea5779a078202451b596c3d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(css|js)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.fontawesome\.com.*/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"fontawesome", plugins: [] }), 'GET');
