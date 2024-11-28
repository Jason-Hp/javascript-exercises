const add = function( a,b ) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total,current)=>{
    return total+current;
  },0)
};

const multiply = function(array) {
  return array.reduce((total,current)=>{
    return total*current;
  },1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	ans = 1;
  for(let i =1;i<=a;i++){
    ans = ans*i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
