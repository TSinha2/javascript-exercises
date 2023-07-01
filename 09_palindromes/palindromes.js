const palindromes = function (inputStr) {
	// Make string all lowercase
	inputStr = inputStr.toLowerCase();

	// Remove punctuation
	inputStr = inputStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

	// Remove all spaces
	toCheck = '';
	inputStr.split(" ").forEach(element => toCheck += element);
	console.log("Filtered String: " + toCheck);

	for (let i = 0; i < toCheck.length; i++)
	{
		if (toCheck[i] != toCheck[toCheck.length -1 -i])
		{
			return false;
		}
	}
	return true; 


	

};

// Do not edit below this line
module.exports = palindromes;
