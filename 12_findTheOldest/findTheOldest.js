const findTheOldest = (people = []) => {
 const currentYear = new Date().getFullYear();

 for (const person of people) {
    /*
     * Subtracts the year of birth from the the year of death. If the object
     * doesn't have a year of death, then the current year will be used instead.
     */
    person.yearsLived = (person.yearOfDeath || currentYear) - person.yearOfBirth;
  }

  const oldestAge = Math.max(...people.map((n) => n.yearsLived));

  return people.find((n) => n.yearsLived === oldestAge);
};

// Do not edit below this line
module.exports = findTheOldest;
