var price = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(price + 1);
    },300);
});

price.then(function(price){
    console.log(price);
});
