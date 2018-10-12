// These are the letters the computer and guesser can chose from
var letters= [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "y", "x", "z"
]

// this array will hold what letters we have guessed
var LettersGuessed=[];

// this will be assigned, randomly
// HOW??
var ComputerChoice= letters[Math.floor(Math.random()*letters.length)];
console.log(ComputerChoice);

// this will count down to 0, after each sucessive guess
var NumGuessesLeft=3;

// this will count up, provided we win
var NumWins=0;

// this will count up, provided we lose
var NumLosses=0;

// Need to make: functions to assign computerChoice, store lettersGuessed, check if guess was correct, count guessesLeft, and store wins/losses
// Inititalize/define then call function



var changeLettersGuessed = function() {
    // post the guesses so far
    // document.querySelector is a predefined method 
    document.querySelector("#Your-Guesses-So-Far:").innerHTML = LettersGuessed.join(" , ");
};

//capture keyboard inputs 
// document.onkeydown a method
document.onkeydown = function(event){
    // decrement guesses by one
    document.getElementById("numGuessesLeft").textContent=NumGuessesLeft;
    document.getElementById("numWins").textContent=NumWins;
    document.getElementById("numLosses").textContent=NumLosses;

    var userGuess=event.key;
    console.log(userGuess);
    if (NumGuessesLeft <= 0){
        NumLosses++;
        console.log("Numlosses = " + NumLosses); 
        resetGame();    
    }
    else {
            
        if (userGuess === ComputerChoice) {
            NumWins++;  
            console.log("NumWins =  " + NumWins);    
        } else {
            NumGuessesLeft--;
            console.log("NumGuessesLeft = " + NumGuessesLeft);
            LettersGuessed.push(userGuess);
            console.log("letters guessed " + LettersGuessed);
        };
    };

};

function resetGame() {
    NumGuessesLeft=3;
    ComputerChoice= letters[Math.floor(Math.random()*letters.length)];
    console.log(ComputerChoice);
}


// Execute functions
changeComputerChoice();
changeNumGuessesLeft();

// submit the guess to the LettersGuessed array
LettersGuessed.push(letter);

// refresh the guessesLeft, and guessedLetters






