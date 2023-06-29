const convertToCelsius = function(fahrenheit) {
	ans = ((fahrenheit -32) * (5/9))
	return Math.round(ans * 10) / 10;

};

const convertToFahrenheit = function(celsius) {
	ans = ( (celsius* (9/5)) + 32)
	return Math.round(ans * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
