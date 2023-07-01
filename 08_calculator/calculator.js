const add = function(a, b) {
	return a+b;

	
};

const subtract = function(a, b) {
	return a-b;
	
};

const sum = function(arr) {
	let sum = 0;
	arr.forEach(element => sum += element);
	return sum
	
};

const multiply = function(...nums) {
	let ans = 1;
	nums.forEach(element => ans *= element);
	return ans;

};

const power = function(a, b) {
	return Math.pow(a, b);
	
};

const factorial = function(a) {
	if (a == 0 || a == 1)
	{
		return 1;
	}
	else
	{
		return a * factorial(a-1);
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
