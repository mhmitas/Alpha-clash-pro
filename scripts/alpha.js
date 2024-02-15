
function handleKeyPress(event) {
    const playerPressed = event.key;
    // get the expected to press - 
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlplabet = currentAlphabetElement.innerText.toLowerCase();
    console.log('playerPressed:', playerPressed, ' currentAlplabet:', currentAlplabet)
    // check matched or not
    if (playerPressed === currentAlplabet) {
        console.log('Wow it matched you have pressed:', currentAlplabet)
        // update score-->
        // // step 1: get the current score
        // let currentScoreElement = document.getElementById('current-score');
        // let currentScoreText = currentScoreElement.innerText;
        // let currentScore = parseInt(currentScoreText)
        // console.log('currentScore', currentScore)
        // // step 2: increase score by 1
        // let newScore = currentScore + 1;
        // console.log('new score:', newScore)
        // // step 3: show the update
        // currentScoreElement.innerText = newScore;
        // continue game --
        removeBackgroundColor(playerPressed)
        continueGame()
    } else {
        console.log('oh , dgurr mia ki koro')
        // step 1: get current life number
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        console.log(currentLife);
        //step 2: reduce the life number
        const newLife = currentLife - 1;
        // step 3: display the life number
        currentLifeElement.innerText = newLife;
    }
}
// capture key press 
document.addEventListener('keyup', handleKeyPress)


function continueGame() {
    // step-1: generate a random alphabet;
    const alphabet = getARandomAlphabet()
    console.log('my random alphabet:', alphabet)

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

