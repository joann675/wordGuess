function Letter(character, guessed) {
    this.character = character;
    this.guessed = guessed;
    this.toString = function() {
        if (this.guessed === true) 
            return this.character+" ";
        else    
            return ("_ ");

    }
    this.checkChar = function(guessChar) {
        if (this.character.toUpperCase() === guessChar.toUpperCase()) {
            this.guessed = true;
            return true;
        }
        else
            return false;
    }
}

module.exports = Letter;