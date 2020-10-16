function myArray(fruits) {
    fruits = ['apple', 'banana', 'pear', 'watermelon']
    fruits[3] = 'virus'
    return fruits[3]
}

console.log(myArray())