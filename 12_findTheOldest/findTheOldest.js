const age = function(person)
{
	let currentYear = Number(Date().split(" ")[3]);
	if (person.yearOfDeath === undefined)
	{
		return currentYear-person.yearOfBirth;
	}
	else
	{
		return person.yearOfDeath - person.yearOfBirth;
	}
}

const findTheOldest = function(people) {

	oldestPerson = people[0];
	oldestAge = age(people[0]);
	for (let i = 0; i < people.length; i++)
	{
		console.log("NAME: " + people[i].name); 
		console.log("AGE: " + age(people[i]));
		if (age(people[i]) > oldestAge)
		{
			oldestPerson = people[i];	
			oldestAge = age(people[i]);
		}
	}
	return oldestPerson;

	

};

// Do not edit below this line
module.exports = findTheOldest;
