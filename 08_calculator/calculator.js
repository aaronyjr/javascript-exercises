const add = function(a, b) {
	return (a + b)
};

const subtract = function(a, b) {
	return (a - b)
};

const sum = function(arr) {
	let res = 0
  arr.forEach(element => {
    res += element
  });
  return res
};

const multiply = function(arr) {
  let res = 1
  arr.forEach(element => {
    res *= element
  });
  return res
};

const power = function(a, b) {
	return (a**b)
};

const factorial = function(num) {
  if (num < 0) {
    return -1;
  }

  else if (num == 0) {
    return 1;
  } 

  else {
      return (num * factorial(num - 1))
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
