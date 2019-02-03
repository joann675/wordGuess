// requiring our Classroom module exported from classroom.js
var Word = require("./Word.js");
var inquirer = require("inquirer");
var randomWords = require('random-words');


var saveWord;

var newWord;
var lettersUsed;
var guessesRemaining;

initGame();


function initGame() {

    saveWord = randomWords();

    newWord = new Word(saveWord);
    // display word with underscores for letters
    console.log(newWord.toString());
    //initialize lettersUsed array and guessRemaining
    lettersUsed = [];
    guessesRemaining = 10;
    //Use inquirer package to prompt user for a guess
    guessLetter();

}


function guessLetter() {
// Prompts user to guess a letter and main process logic for the guess
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter?"
        },
    ]).then(function (answers) {
        if (lettersUsed.includes(answers.guess)) {
            console.log("Letter already guessed");
            guessLetter();
        }
        else {
            lettersUsed[lettersUsed.length] = answers.guess;
            
            if (newWord.checkWord(answers.guess) == true) {
                console.log("Correct!")
                console.log(newWord.toString());
            }
            else {
                console.log("Incorrect!");
                guessesRemaining--;
                console.log("Guesses remaining: " + guessesRemaining);
                console.log(newWord.toString());

            }
            if (guessesRemaining == 0) {
                console.log("You lost the game");
                console.log("Word was " + saveWord);
                endGame();
            }

            else {

                if (newWord.isSolved() === false)
                    guessLetter();
                else {
                    console.log("You got it right!!!");
                    endGame();


                }

            }
        }
    });

}

function endGame() {

    // Prompts the user if they would like to play again. if yes, run playgame with a value of 0 being passed into it
    // Otherwise print the "come back again soon message" and exit
    inquirer
        .prompt({
            name: "again",
            type: "confirm",
            message: "Would you like to play another game?"
        })
        .then(function (answer) {
            if (answer.again === true) {

                initGame();
            } else {
                console.log("Come back again soon!");
            }
        });
}


