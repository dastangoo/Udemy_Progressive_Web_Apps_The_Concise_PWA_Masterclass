
// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {

  // Convert key to Unit8Array
  function urlBase64ToUnit8Array (base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
  }
  // Register the SW
  navigator.serviceWorker.register('./sw.js').then(function(registration){
      // Server public key  
      let pubKey = 'BI2aS6OoUaEXJwayEggXPftVSC6DcZtaFuNkNgKRUGO7v92VO3s-iVhPsGJRwNMiyIn9WDut3n5c8N7IN01L_FM';

      registration.pushManager.getSubscription().then((sub) => {
          // If subscription found, return
          if (sub) return sub;

          let applicationServerKey = urlBase64ToUnit8Array(pubKey);

          // Subscribe
          return registration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey});
      }).then( sub => sub.toJSON() )
        .then(console.log)
        .catch(console.log);
  }).catch(console.log);
}

