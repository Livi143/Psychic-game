// These are the letters the computer and guesser can chose from
var letters= [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "y", "x", "z"
]

// this array will hold what letters we have guessed
var LettersGuessed=[];

// this will be assigned, randomly
// HOW??
var ComputerChoice= "";

// this will count down to 0, after each sucessive guess
var NumGuessesLeft=3;

// this will count up, provided we win
var NumWins=0;

// this will count up, provided we lose
var NumLosses=0;

// Need to make: functions to assign computerChoice, store lettersGuessed, check if guess was correct, count guessesLeft, and store wins/losses
// Inititalize/define then call function

var changeNumGuessesLeft = function() {
    // define the amount of numGuessesLeft from html div
    // needs to be displayed on site
    // this targets the <p> element "Guesses Left" on index.html line 26
    document.querySelector("#Guesses-Left:").innerHTML = numGuessesLeft;
};

var changeComputerChoice = function() {
    // assign a random number for the guesser to guess
    // random number generator
    // math.random is a random number generator, between 0 and 1
    // math.floor makes it an integer
    // letters.length allows us to access numbers between [0,25] which is the whole alphabet
    ComputerChoice = letters[Math.floor(Math.random()*letters.length)];
};

var changeLettersGuessed = function() {
    // post the guesses so far
    // document.querySelector is a predefined method 
    document.querySelector("#Your-Guesses-So-Far:")
}







