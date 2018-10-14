var numWins = 0;
var numLosses = 0;
var numGuessesLeft = 3;
var lettersGuessed = [];
//var guessesAvailable=5;
var computerChoice = "";
var letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "y", "x", "z"
]

function reset() {
    numGuessesLeft = 3;
    lettersGuessed = [];
    computerChoice = letters[Math.floor(Math.random() * letters.length)]
    document.getElementById("Wins").textContent = numWins;
    document.getElementById("Losses").textContent = numLosses;
    document.getElementById("GuessesLeft").textContent = numGuessesLeft;
    document.getElementById("GuessSoFar").textContent = lettersGuessed.join(", ");
};

document.onkeyup = function (event) {
    var guess = event.key.toLowerCase();
    console.log("user guess " + guess);
    console.log("computer guess: " + computerChoice);

    // Sarah helped me with a regex!!! 
    if (!guess.match(/[a-z]/) || guess.length>1) {
        return false;
    }

    if (guess === computerChoice) {
        numWins++;
        alert("you won!");
        reset();
    }   else if (numGuessesLeft ===1) {
        numLosses++;
        alert("you lose!");
        reset();

    } else {
        numGuessesLeft--;
        document.getElementById("GuessesLeft").textContent = numGuessesLeft;
        lettersGuessed.push(guess);
        document.getElementById("GuessSoFar").textContent = lettersGuessed.join(", ");
    }

    // compare user guess to actual computer choice

};

reset();
