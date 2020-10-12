function isLong() {
   const str = prompt('isLong?')
   // Här tar jag ut antalet tecken på stringen, då får jag ut att varje tecken blir ett number
    const myString = str.length

    if (myString > 18) {
        return true
    } else {
        return false
    }
}