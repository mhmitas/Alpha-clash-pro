
function handleKeyPress(event){
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed)

    // get the expected to press - 
    const CurrentAlphabetElement = document.getElementById('current-alphabet')
}
// capture key press 
document.addEventListener('keyup', handleKeyPress)


function continueGame(){
    // step-1: generate a random alphabet;
    const alphabet = getARandomAlphabet()
    console.log('my random alphabet:',alphabet)

    // set random alphabet to display
    document.getElementById('current-alphabet').innerText = alphabet;
    // set background color
    setBackgroundColor(alphabet)
}

function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}

