var array = [-10, -0.20, 0.30, -40, -50];
 
    var found = array.findIndex(function (element) {
        return element > 0;
    });
 
    console.log(found);