
// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {

  // Register the SW
  navigator.serviceWorker.register('./sw.js').then(function(registration){
    //registration.onupdatefound = () => {
        //let newSW = registration.installing;
         ////Prompt User for update
        //if (confirm("App update found. Do you want to update now?")) {
            //newSW.postMessage('update_self');
        //}
    //}

    if (registration.active) {
        registration.active.postMessage('respond to this');
    }

    
  }).catch(console.log);
  navigator.serviceWorker.addEventListener('message', (e) => {
      console.log(e.data);
  })
}

