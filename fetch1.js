// JS Fetch

fetch('./template.html')
    .then(function(response){
        return response.text();
    })
    .then(function(html){
            //console.log(html);
            document.getElementByd('body').innerHTML = html;
    })
    .catch(function(error){
        console.log('Fetch Error');
        console.log(error);
    })
