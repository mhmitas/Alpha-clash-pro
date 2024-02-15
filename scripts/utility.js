function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function getARandomAlphabet() {
    // create an alphabet array
    const alphabetStrings = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetStrings.split('')
    // get random index between (1-25)
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    return alphabet
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-amber-500')
}
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-amber-500')
}