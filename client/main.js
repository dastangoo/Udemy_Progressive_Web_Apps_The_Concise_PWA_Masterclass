// Service Worker Registration
let swReg;

// Push Server URL
const serverUrl = 'http://localhost:3333';

// Update UI for subscribed status
const setSubscribeStatus = (state) => {
    if (state) {
        document.getElementById('subscribe').className = 'hidden'
        document.getElementById('unsubscribe').className = '';
    } else {
        document.getElementById('subscribe').className = '';
        document.getElementById('unsubscribe').className = 'hidden';
    }
}

// Register Service Worker
navigator.serviceWorker.register('sw.js').then(registration => {
    // Reference registration 
    swReg = registration;

    // Check if a subscription exists, and if so, update the UI
    //swReg.pushManager.getSubscription().then(subscription or null)
    swReg.pushManager.getSubscription().then(setSubscribeStatus);
// Log errors
}).catch(console.error);

// Get public key form server
const getApplicationServerKey = () => {
    // Parse response body as arrayBuffer
    return fetch(`${serverUrl}/key`)
        // Parse response body as arrayBuffer
        .then(res => res.arrayBuffer())

        // Return arrayBuffer as new Uint8Array
        .then(key => new Uint8Array(key))
}
// Subscribe for push Notifications
const subscribe = () => {
    //console.log('Subscribing');
    
    // Check registration is available
    if (!swReg) return console.error('Service Worker Registration Not Found');
    
    // Get applicationServerKey from push server
    getApplicationServerKey().then(key => {
        //swReg.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: publicKey});
    });
    

}
