const removeFromArray = function(array, ...numToRemove) {
	for (const num of numToRemove)
	{
		console.log(num)
		index = array.indexOf(num);
		if (index > -1) 
		{
			array.splice(index, 1);
		}
	}
	return array;
	
};

// Do not edit below this line
module.exports = removeFromArray;
