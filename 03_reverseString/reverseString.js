const reverseString = function(stringy) {
    let ans = "";
    for(let i = stringy.length-1;i>=0;i--){
        ans += stringy[i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
