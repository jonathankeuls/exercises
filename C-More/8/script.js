function fullNames(person1, person2) {
    person1 = {firstName: 'Johan', lastName: 'Petterson'}
    person2 = {firstName: 'Krister', lastName: 'Anderson'}

    return person1.firstName + ' ' + person1.lastName + ', ' + person2.firstName + ' ' + person2.lastName
}

console.log(fullNames())