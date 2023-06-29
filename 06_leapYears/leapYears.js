const leapYears = function(year) {
	if ( (year % 4 === 0 && !(year % 100 === 0) || (year % 100 === 0 && year % 400 === 0)))
	{
		console.log(year % 400)
		return true;
	}
	else
	{
		return false;
	}


};

// Do not edit below this line
module.exports = leapYears;
