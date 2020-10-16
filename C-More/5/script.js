function filterOdds(myArray) {
    myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Här lägger jag in en annan function som bara returner tal som är jämna    
    return myArray.filter(filterOdds2) 
}

function filterOdds2(x) {
    return x % 2 == 0
}


console.log(filterOdds())