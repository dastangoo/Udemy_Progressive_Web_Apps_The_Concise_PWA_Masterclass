// Modules
const webpush = require('web-push');
const urlsafeBase64 = require('urlsafe-base64');

// Vapid keys
const vapid = require('./vapid.json');

// Subscriptions
let subscriptons = [];

// Create URL safe vapid public key
//module.exports.getKey = () => {
    //return urlsafeBase64.decode(vapid.publicKey);
//};

// ES2015 Short Syntax
module.exports.getKey = () => urlsafeBase64.decode(vapid.publicKey);

module.exports.addSubscription = (subscription) => {
    
    // Add to subscriptions array
    subscriptions.push(subscription);

    console.log(subscriptions);
}
