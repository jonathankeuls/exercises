const paragraph = document.getElementById("paragraph")
const paragraph2 = document.getElementById("paragraph2")
const myButton = document.getElementById("myButton")



paragraph.addEventListener("click", changeColor)

paragraph2.addEventListener("click", changeColor2)

myButton.addEventListener("click", changeAllColors)
myButton.addEventListener("mouseover", backToBlack)




function changeColor() {
paragraph.style.color = "blue"
}

function changeColor2() {
    paragraph2.style.color = "green"
}

function changeAllColors() {
    paragraph.style.color = "red"
    paragraph2.style.color = "red"
    myButton.style.color = "red"
}

function backToBlack() {
    myButton.style.color = "black "
}


