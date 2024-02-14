
function continueGame(){
    // step-1: generate a random alphabet;
    const alphabet = getARandomAlphabet()
    console.log('my random alphabet:',alphabet)

    // set random alphabet to display
    document.getElementById('alphabet-display').innerText = alphabet;
}

function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}
