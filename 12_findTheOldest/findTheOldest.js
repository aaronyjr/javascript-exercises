const findTheOldest = function(people) {
    let maxAge = 0;
    const listOfAges = []

    // iterate through people and calculate age, save max
    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = +(new Date().getFullYear())
        }

        const age = person.yearOfDeath - person.yearOfBirth
        listOfAges.push(age)
        maxAge = Math.max(maxAge, age)
    });

    for (let i = 0; i < listOfAges.length; i++) {
        if (maxAge == listOfAges[i]) {
            return people[i]
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
