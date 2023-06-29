const sumAll = function(start, end) {
	sum = 0;
	if (start < -1 || end < -1)
	{
		return "ERROR";
	}
	if (!(typeof start === "number" && typeof end === "number"))
	{
		return "ERROR";
	}
	if (end > start)
	{
		first = start;
		last = end;
	}
	else
	{
		first = end;
		last = start;
	}

	for (let i = first; i < last; i++)
	{
		sum += i;
	}
	return sum+last;

};

// Do not edit below this line
module.exports = sumAll;
