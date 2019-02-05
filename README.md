# wordGuess

### Overview

wordGuess is a command line application that can be run under node.js
Letter.js is the constructor for a letter object that represents each character in a word. The letter object has 2 attributes, char and guessed and methods toString() and checkChar().

Word.js is the constructor for a word object. The word object has an array of letter objects and toString(), checkWord(), and isSolved() methods.

index.js is the main script. When a game is started, a random word is selected and a word object is created. The toString() method is called to display the word with all letters shown as the underscore character. The user is then prompted through the inquirer package to guess a letter. The checkWord() method is called which loops through all of the letter objects and calls checkChar() looking for matches to the user's input. Checkchar() sets the guessed attribute for the letter object to true.
After each guess, the isSolved() method is called on the word object. This method returns true if all of the letter objects have guessed = true. 

### Dependencies

package.json lists the dependencies that will need to be installed prior to executing wordGuess. This includes inquirer and random-words.


### Video

Screen recording can be found at https://drive.google.com/file/d/1t5oJ5Dwv44y9fOGpYfA_lJNokx2gQaVn/view