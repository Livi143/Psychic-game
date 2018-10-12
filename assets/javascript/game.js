// These are the letters the computer and guesser can chose from
var letters= [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "y", "x", "z"
]

// this array will hold what letters we have guessed
var lettersGuessed=[];

// this will be assigned, randomly
// HOW??
var computerChoice= "";

// this will count down to 0, after each sucessive guess
var numGuessesLeft=3;

// this will count up, provided we win
var numWins=0;

// this will count up, provided we lose
var numLosses=0;

// Need to make: functions to assign computerChoice, store lettersGuessed, check if guess was correct, count guessesLeft, and store wins/losses
// Inititalize/define then call function

var numGuessesLeft = function() {
    // define the amount of numGuessesLeft from html div
    // needs to be displayed on site
    document.querySelector("#guesses-left").innerHTML = numGuessesLeft;
}









