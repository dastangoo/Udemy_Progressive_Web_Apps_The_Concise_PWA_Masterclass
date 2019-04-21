function addExtra (price) {
    return new Promise(function(resolve, reject){
        console.log(price);
        if (price > 2) reject("Price cannot exceeed 3");
        setTimeout(function(){
            resolve(price + 1);
        },300);
    });
}
addExtra(1)
    .then(addExtra)
    .then(addExtra)
    .then(addExtra)
    .then(function(newPrice){
        console.log(newPrice);
    })
    .catch(function(error){
        console.log(error);
    });

