const convertToCelsius = function(farenheit) {
  let res = ((farenheit - 32) * (5/9))
  if (!Number.isInteger(res)) {
    res = res.toFixed(1)
  }
  return +res
};

const convertToFahrenheit = function(celsius) {
  let res = ((celsius * (9/5)) + 32)
  if (!Number.isInteger(res)) {
    res = res.toFixed(1)
  }
  return +res
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
