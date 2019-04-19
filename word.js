//* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object
//  representing the current word the user is attempting to guess. That means the constructor should define:

var Letter = require("./letter.js");

function Word(word) {
    
    this.arr = [];
    this.wrongGuesses = [];
    
    //* An array of `new` Letter objects representing the letters of the underlying word
    this.letters = function () {
        var letters = word.split('');
        for (var i=0; i < letters.length; i++) {
            this.arr.push(new Letter(letters[i]));
        }
    }
    this.letters();
    //* A function that returns a string representing the word. This should call the function on each letter object
    //  (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.wordString = function() {   
        var theWord = "";
        for (var i = 0; i < this.arr.length; i++) {
            theWord += this.arr[i].toString();
        }
        //console.log(this.arr);
        return theWord;
    }
    
    
    
    this.guesses = 9;
    //* A function that takes a character as an argument and calls the guess function on each letter object
    //  (the second function defined in `Letter.js`)
    this.userGuess = function(charArg) {
        var before = this.wordString();
        for (var i = 0; i < this.arr.length; i++) {
            this.arr[i].guess(charArg);
        }
        var after = this.wordString();
        if (before === after) {
            console.log("The price is wrong! Guess again.")
            this.guesses--;
            this.wrongGuesses.push(charArg);
            console.log("Incorrect guesses so far: " + this.wrongGuesses);
        } else {
            console.log("Good job, guess again!");
            if (this.guesses <= 8) {
                console.log("Incorrect guesses so far: " + this.wrongGuesses);
            }
        }
        console.log("You have " + this.guesses + " wrong guesses left!");
        return this.wordString();
    }
}

//var testWord = new Word("tim");
//console.log(testWord.letters());
//console.log(testWord.wordString());
//console.log(testWord.userGuess("i"));
//console.log(testWord.userGuess("m"));
module.exports = Word;