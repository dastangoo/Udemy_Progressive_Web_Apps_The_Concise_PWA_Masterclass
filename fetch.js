// JS Fetch

fetch('https://api.github.com/users/google/repossss')
    .then(function(response){
        if (response.ok) {
            //console.log(response);
            var responseClone = response.clone();
            response.json();
            responseClone.json().then(function(json){
                console.log(json);
            });
        } else {

        }
    })
    .catch(function(error){
        console.log('Fetch Error');
        console.log(error);
    })
