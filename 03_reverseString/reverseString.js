const reverseString = function(string) {
	let soln = "";
	for (let i = 0; i < string.length; i++)
	{
		soln += string[string.length -1 -i];
	}
	return soln;


};

// Do not edit below this line
module.exports = reverseString;
