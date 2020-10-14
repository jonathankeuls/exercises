function isDivisibleByFive(num) {
    num = prompt('Is the number divisible by 5?')
    // Man använder === om man vill vet om ett tal är delbart med 5 i detta fall. == om man vill veta om ett tal är even eller odd
    if(num % 5 === 0) {
        return true
    } else {
        return false
    }

}