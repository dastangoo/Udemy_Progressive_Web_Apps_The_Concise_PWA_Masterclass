
// Web-push Module
const webpush = require('web-push');
const vapid = require('./vapid.json');

// Configure keys
webpush.setVapidDetails(
    'mailto:jack@mail.com',
    vapid.publicKey,
    vapid.privateKey
);

const pushSubscription = {
    endpoint: '',
    keys: {
        auth: '',
        p256dh: ''
    }
}

webpush.sendNotification(pushSubscription, 'A notification from the push server');
console.log('Push sent to client');
