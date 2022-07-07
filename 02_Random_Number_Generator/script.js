let button = document.querySelector(".button")
let counter = document.querySelector(".counter")
button.addEventListener("click", () => {
    let number = getRandomNumber()
    change(counter, number)

})



function getRandomNumber(max=10){
    let random = Math.floor(Math.random(max) * max)
    return random
}

function change(element, string){
    element.textContent = string
}

