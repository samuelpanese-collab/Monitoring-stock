/* =====================================================
   STOCK MONITORING CUSTOMER
   SERVICE WORKER
===================================================== */

const CACHE_NAME = "stock-monitoring-v8";


const APP_FILES = [

    "./",

    "./index.html",

    "./style.css",

    "./app.js",

    "./data.js",

    "./manifest.json",

    "./icon-192.png",

    "./icon-512.png",

    "./firebase-config.js"

];


/* =====================================================
   INSTALL
===================================================== */

self.addEventListener(
    "install",
    event => {

        event.waitUntil(

            caches
                .open(CACHE_NAME)
                .then(cache => {

                    return cache.addAll(
                        APP_FILES
                    );

                })

        );

        self.skipWaiting();

    }
);


/* =====================================================
   ACTIVATE
===================================================== */

self.addEventListener(
    "activate",
    event => {

        event.waitUntil(

            caches
                .keys()
                .then(cacheNames => {

                    return Promise.all(

                        cacheNames
                            .filter(
                                cacheName =>
                                    cacheName !==
                                    CACHE_NAME
                            )
                            .map(
                                cacheName =>
                                    caches.delete(
                                        cacheName
                                    )
                            )

                    );

                })

        );

        self.clients.claim();

    }
);


/* =====================================================
   FETCH
===================================================== */

self.addEventListener(
    "fetch",
    event => {

        event.respondWith(

            caches
                .match(event.request)
                .then(cachedResponse => {

                    if (cachedResponse) {

                        return cachedResponse;

                    }


                    return fetch(
                        event.request
                    );

                })
                .catch(() => {

                    return caches.match(
                        "./index.html"
                    );

                })

        );

    }
);
