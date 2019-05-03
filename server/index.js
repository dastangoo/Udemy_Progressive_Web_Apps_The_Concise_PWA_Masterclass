// Modules
const http = require('http');

// Create HTTP Server
http.createServer((request, response) => {
   // Enable CORS
   response.setHeader('Access-Control-Allow-Origin', '*');

   response.end('Hello fro m HTTP server - Updated');
// Start the server
}).listen(3333, () => {
    console.log('Server Running');
});
