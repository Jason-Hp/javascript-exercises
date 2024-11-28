const sumAll = function(...args) {
    if(!args.every(arg => Number.isInteger(arg))){
        return 'ERROR';
    }
    if(args.some(arg => arg<0)){
        return 'ERROR';
    }
    let first = args[0];
    let sec = args[1];
    let ans = 0;
    if(first>sec){
        for(let i = sec;i<=first;i++){
            ans += i;
        }
    }
    else{
        for(let i = first;i<=sec;i++){
            ans += i;
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
