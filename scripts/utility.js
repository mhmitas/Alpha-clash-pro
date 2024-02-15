function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

// find the element(which is current number) and parseInt it. then return the value. 
function getElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText)
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText;
    return text;
}


function getARandomAlphabet() {
    // create an alphabet array
    const alphabetStrings = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetStrings.split('')
    // get random index between (1-25)
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)
    // get a random alphabet
    const alphabet = alphabets[index]
    return alphabet
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-amber-500')
}
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-amber-500')
}