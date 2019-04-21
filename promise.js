// JS Promises

// Classic callback
function addExtra (price, callback) {
    if (price > 2) {
        callback(false, "Price cannot exceeed 3");
        return;
    }

    setTimeout(function(){
        callback(price + 1);
    },300);
}

//console.log(addExtra(1));
addExtra(1, function(newPrice, error){
    if (error) {
        console.log(error);
        return;
    }
    addExtra(newPrice, function(newPrice2, error){
        if (error) {
            console.log(error);
            return;
        }
        addExtra(newPrice2, function(newPrice3, error){
            if (error) {
                console.log(error);
                return;
            }
            console.log(newPrice3);
        });
    });
});
