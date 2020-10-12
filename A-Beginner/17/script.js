function isTanja() {
const myPrompt = prompt('isTanja')

// Tre stycken "=" därför att jag bara vill jämföra strings och om man bara använder en "=" så funkar det inte eftersom att myPrompt redan är en "assigned" variable
if (myPrompt === 'Tanja') {
    return true
} else {
    return false
}
}