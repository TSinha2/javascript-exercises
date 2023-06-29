const repeatString = function(toRepeat, num) {
	soln = "";
	if (num < 0)
	{
		return "ERROR";
	}

	for (let i = 0; i < num; i++)
	{
		soln += toRepeat;
	}
	return soln;

};

// Do not edit below this line
module.exports = repeatString;
