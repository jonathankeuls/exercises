// const userInput = prompt('Less than hundred?')
// const num = parseInt(userInput)

function lessThanHundred(num) {     
    num = prompt('Less than hundred?')
    if (num < 100) {
    return true
} else if(num >= 100) {
    return false
} else {
    return alert('What?')
}
}

