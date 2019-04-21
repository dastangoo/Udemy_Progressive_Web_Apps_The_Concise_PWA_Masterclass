var price = new Promise(function(resolve, reject){
    setTimeout(function(){
        //resolve(99.99);
        reject("Could not retrieve Price on fast promise");
    },300);
});

var slowprice = new Promise(function(resolve, reject){
   setTimeout(function(){
       //resolve(99.99);
       reject("Could not retrieve Price");
   }, 800);
});

function greet () {
    return "Hello";
}
var promises = [price, slowprice, 200, greet()];
//Promise.all([price, slowprice])
Promise.all(promises)
    .then(function(resolvedPromises){
        console.log(resolvedPromises);
    })
    .catch(function(error){
        console.log(error);
    });
