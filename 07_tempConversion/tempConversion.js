const convertToCelsius = function(temp) {
  let converted = (temp - 32) * 5/9;
  return parseFloat(converted.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let converted = (temp * 9/5) + 32;
  return parseFloat(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
