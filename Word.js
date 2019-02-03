// requiring our Letter module exported from Letter.js
var Letter = require("./letter.js");


function Word(word) {
    this.letters = [];
    for (var j = 0; j < word.length; j++) {
        var currentLetter = new Letter(word[j], false);
        this.letters.push(currentLetter);
    }
    
    this.toString = function() {
        var wordToReturn = "";
        for (var i = 0; i < this.letters.length; i++) {
            wordToReturn = wordToReturn + this.letters[i].toString();
        }
        return wordToReturn;

    }
    this.checkWord = function(guessChar) {
        var found = false;
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].checkChar(guessChar) === true)
                found = true;
        }
        return found;
        
    }

    this.isSolved = function() {
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guessed === false)
                return false;
        }
        return true;
    }
  };
  
  // exporting our Word constructor. We will require it in index
  module.exports = Word;