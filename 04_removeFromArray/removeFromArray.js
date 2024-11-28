const removeFromArray = function(oriArray, ...args) {


    for(let i =0;i<args.length;i++){

        oriArray = oriArray.filter(ori => ori !== args[i]);

    }
    return oriArray;
};

// Do not edit below this line
module.exports = removeFromArray;
