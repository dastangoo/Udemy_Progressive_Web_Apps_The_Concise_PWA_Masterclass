// Modules
const http = require('http');
const push = require('./push');

// Create HTTP Server
http.createServer((request, response) => {
    // Enable CORS
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.end('Hello fro m HTTP server - Updated');

    // Get request vars
    const { url, method } = request;
    console.log(url);
    // Start the server

    // Subscribe
    if (method === 'POST' && url.match(/^\/subscribe\/?/)) {
        //Get POST body
        let body = [];

        //Read body stream
        request.on('data', chunk => body.push(chunk)).on('end', () => {
            // Parse subscription body to object
            let subscription = JSON.parse(body.toString());
            //console.log(subscription);

            // Store subscription for push notifications
            push.addSubscription(subscription)
            
            // Respond
            response.end('Subscribe');
        });

        // Public Key
    } else if (url.match(/^\/key\/?/)){
        //Respond with public key from push module
        response.end(push.getKey());

        //Push Notification
    } else if (method === 'POST' && url.match(/^\/push\/?/)){

        //Get POST body
        let body = [];

        //Read body stream
        request.on('data', chunk => body.push(chunk)).on('end', () => {
            response.end('Push sent');
        });

        //Not found
    } else {
        response.status = 404;
        response.end('Error: Unknown Request');
    }
}).listen(3333, () => {
    console.log('Server Running');
});
