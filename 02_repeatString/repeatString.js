const repeatString = function(stringy,num) {
    let ans = "";
    if(num<0){
        return 'ERROR';
    }
    for(let i = 0;i<num;i++){
        ans += stringy;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
