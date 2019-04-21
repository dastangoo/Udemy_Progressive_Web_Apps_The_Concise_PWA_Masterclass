// Ajax

// Class XHR
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else if (window.ActiveXObject){ // IE
    try { 
        request = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (err) {
        try { 
            request = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (err) {
            
        }
    }        
}

// Open, send
request.open('GET', 'https://api.github.com/users/google/repos', true);
request.send(null);

request.onreadystatechange = function(state){
    if (request.readyState == 4) {
        console.log(JSON.parse(request.response));
    };
}
