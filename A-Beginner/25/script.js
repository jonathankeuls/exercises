// Alternativ 1
function isLagom(x) {
    x = prompt('isLagom?')
    if (x > 16) {
        return false
    } else if (x < 8) {
        return false
    } else {
        return true
    }
}

// Alternativ 2
function isLagom(x) {
    return x > 8 && x < 16
}



console.log(isLagom(7))
console.log(isLagom(12))
console.log(isLagom(25))