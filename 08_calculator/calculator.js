const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
  result = 0;
	for (let index = 0; index < array.length; index++) {
     result = result + array[index];    
  } return result;
};

const multiply = function(array) {
  result = 1;
	for (let index = 0; index < array.length; index++) {
     result = result * array[index];    
  } return result;
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n1) {
	if (n1 == 0) {  
    return 1;  
    }  
  else {  
    return n1 * factorial( n1 - 1 );  
    }  
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
