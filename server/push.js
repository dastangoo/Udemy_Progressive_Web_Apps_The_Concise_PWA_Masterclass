// Modules
const webpush = require('web-push');
const urlsafeBase64 = require('urlsafe-base64');
const Storage = require('node-storage');

// Vapid keys
const vapid = require('./vapid.json');

// Subscriptions
const store = new Storage(`${__dirname}/db`);
let subscriptions = store.get('subscriptions') || [];
console.log(subscriptions);

// Create URL safe vapid public key
//module.exports.getKey = () => {
    //return urlsafeBase64.decode(vapid.publicKey);
//};

// ES2015 Short Syntax
module.exports.getKey = () => urlsafeBase64.decode(vapid.publicKey);

module.exports.addSubscription = (subscription) => {
    
    // Add to subscriptions array
    subscriptions.push(subscription);

    //console.log(subscriptions);

    // Persist subscriptions
    store.put('subscriptions', subscriptions);
}
