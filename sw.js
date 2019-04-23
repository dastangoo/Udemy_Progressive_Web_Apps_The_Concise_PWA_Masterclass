// Service Worker

self.addEventListener('message', (e) => {
    console.log(e);
    //if (e.data === "update_self") {
        //console.log('Service Worker Updating');    
        //self.skipWaiting(); 
    //}

    // Respond to all clients
    self.clients.matchAll().then((clients) => {
        //console.log(clients);
        clients.forEach((client) => {
            //client.postMessage("Hello from Service Worker");    
            if (e.source.id === client.id) {
                client.postMessage("Private Hello from Service Worker");    
            }
        });
        
        // Only respond to sending client
    })
})
