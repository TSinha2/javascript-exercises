const fibonacci = function(num) {
	// Make sure type is number 
	num = Number(num);
	if (num < 0)
	{
		return "OOPS";
	}

	fib_nums = [1, 1];
	if (num < 3)
	{
		return fib_nums[num -1];
	}
	while (fib_nums.length != num)
	{
		fib_nums.push(fib_nums[fib_nums.length -1] + fib_nums[fib_nums.length -2]);
	}
	console.log(fib_nums)
	return fib_nums[num -1];


};

// Do not edit below this line
module.exports = fibonacci;
