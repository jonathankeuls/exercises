function makePerson(firstName, lastName) {
    return {
        firstname: 'firstName',
        lastName: 'lastName',
        isHuman: true
    }
}

const person1 = makePerson('Kalle', 'Johansson')
const person2 = makePerson('Linn', 'Persson')

console.log(person1)
console.log(person2)