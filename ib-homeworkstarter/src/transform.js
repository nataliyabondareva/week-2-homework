const groupAdultsByAgeRange = (people) => {

    return people
        .filter((person) => person.age >= 18)
        .reduce((categories, person) => {
            if (person.age > 50) {
                categories["51 and older"] = [].concat(
                    categories["51 and older"]
                        ? categories["51 and older"]
                        : [],
                    person
                )
                return categories
            } else if (person.age > 40) {
                categories["41-50"] = [].concat(
                    categories["41-50"] ? categories["41-50"] : [],
                    person
                )
                return categories
            } else if (person.age > 30) {
                categories["31-40"] = [].concat(
                    categories["31-40"] ? categories["31-40"] : [],
                    person
                )
                return categories
            } else if (person.age > 20) {
                categories["21-30"] = [].concat(
                    categories["21-30"] ? categories["21-30"] : [],
                    person
                )
                return categories
            } else {
                categories["20 and younger"] = [].concat(
                    categories["20 and younger"]
                        ? categories["20 and younger"]
                        : [],
                    person
                )
                return categories
            }
        }, {})
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;