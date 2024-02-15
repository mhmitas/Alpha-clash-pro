
function handleKeyPress(event) {
    const playerPressed = event.key;
    console.log('Player Pressed',playerPressed)
    // stop the game if pressed Esc
    if(playerPressed === 'Escape'){
        gameOver()
    }
    // get the expected to press - 
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlplabet = currentAlphabetElement.innerText.toLowerCase();
    // console.log('playerPressed:', playerPressed, ' currentAlplabet:', currentAlplabet)
    // check matched or not
    if (playerPressed === currentAlplabet) {
        // update score-->
        // step 1: get the current score
        const currentScore = getElementValueById('current-score')
        // step 2: increase score by 1
        const updatedScore = currentScore + 1;
        // step 3: show the update
        setTextElementValueById('current-score', updatedScore)


        // --------------------------------
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
        console.log('uhh! dgurr mia ki koro')
        // step 1: get current life number
        const currentLife = getElementValueById('current-life')
        //step 2: reduce the life number
        const updatedLife = currentLife - 1;
        // step 3: display the life number
        setTextElementValueById('current-life', updatedLife)
        if (updatedLife === 0) {
            gameOver()
        }


        // step 1: get current life number
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);
        // //step 2: reduce the life number
        // const newLife = currentLife - 1;
        // // step 3: display the life number
        // currentLifeElement.innerText = newLife;
    }
}
// capture key press 
document.addEventListener('keyup', handleKeyPress)


function continueGame() {
    // step-1: generate a random alphabet;
    const alphabet = getARandomAlphabet()
    // console.log('my random alphabet:', alphabet)
    // set random alphabet to display
    document.getElementById('current-alphabet').innerText = alphabet;
    // set background color(parameter hisabe alphabet ke pathai)
    setBackgroundColor(alphabet)
}

function play() {
    // hide everything and show only playground
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    // reset score and life
    setTextElementValueById('current-life', 3)
    setTextElementValueById('current-score', 0)

    continueGame()
}

function gameOver() {
    hideElementById('play-ground')
    showElementById('final-score')
    // show the last score
    const lastScore = getElementValueById('current-score')
    // console.log(lastScore)
    setTextElementValueById('last-score', lastScore)

    // clear the last selected alphabets bg
    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColor(currentAlphabet)
}