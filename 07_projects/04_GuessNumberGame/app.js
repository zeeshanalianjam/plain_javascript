const randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);

const submitBtn = document.querySelector('#btnSub');
const userInput = document.querySelector('#userInput');
const resultPara = document.querySelector('.resultPara');
const prevGuesses = document.querySelector('.prevGuesses');
const remainGuesses = document.querySelector('.remainGuesses');
const lowOrHigh = document.querySelector('.lowOrHigh');

let p = document.createElement('p');
let previousGuess = [];
let guessNumber = 1;
let playGame = true;

if (playGame) {
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuesses(guess)
    })
}


function validateGuesses(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number!');
    } else if (guess < 1) {
        alert('Please enter a number More than 1');

    } else if (guess > 100) {
        alert('Please enter a number Less than 100');

    } else {
        previousGuess.push(guess)
        if (guessNumber === 11) {
            displayGuesses(guess)
            displayMessage(`Game Over. Random Number Was : ${randomNumber}`)
            endGame();
        } else {
            displayGuesses(guess)
            checkGuesses(guess)
        }
    }
}

function checkGuesses(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number in ${guessNumber} guesses`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Your guess is too low');
    } else if (guess > randomNumber) {
        displayMessage('Your guess is too high');
    }
}

function displayGuesses(guess) {
    userInput.value = '';
    prevGuesses.innerHTML += `${guess} , `;
    guessNumber++;
    remainGuesses.innerHTML = `${11 - guessNumber}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h3>${message} </h3>`
}

function endGame(guess) {
    userInput.value = ''
    userInput.disabled = true;
    prevGuesses.innerHTML = '';
    p.className = "button";
    p.innerHTML = `<button id="newGame" style="cursor: pointer;
    width: 280px;
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    margin-top: 10px;">Start New Game</button>`;
    resultPara.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(guess) {
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', (e) => {
        location.reload();
    })
}





