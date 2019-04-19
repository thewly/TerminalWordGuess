// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

var Word = require("./word.js");
var inquirer = require("inquirer");

//* Randomly selects a word and uses the `Word` constructor to store it

var wordList = ["jose", "charles", "brandy", "dustin", "cole", "joshua"];

var randomNumber = Math.floor(Math.random() * wordList.length);
var randomWord = wordList[randomNumber];

var wordHolder = new Word(randomWord);
var endGamePrompt = function() {
  inquirer.prompt([
    {
      type: "list",
      name: "playAgain",
      choices: ["Yes", "No"]
    }
  ]).then(function (playAgainResults) {
    if (playAgainResults.playAgain === "Yes") {
      reset();
    } else {
      console.log("Thanks for playing!");
      return;
    }
  })
}

var reset = function () {
  randomNumber = Math.floor(Math.random() * wordList.length);
  randomWord = wordList[randomNumber];
  wordHolder = new Word(randomWord);
  console.log("\n\n\nREREREREEEEEEEEEEEEE-MATCH!!!!!\nGuess a letter!");
  askForLetter()
}

var askForLetter = function () {
  //console.log(randomWord);
  //console.log("working" + Word.this.guesses);
  console.log(wordHolder.wordString());
  inquirer.prompt([

    {
      type: "input",
      name: "userGuess",
      message: "Guess a letter you think is in this word"
    }

  ]).then(function (inquirerResults) {
    console.log("----------------------------------\n\n");
    //console.log("-------------------------------");
    //console.log("randomWord: " + randomWord + " Their guess: " + wordHolder.wordString());
    //console.log("-------------------------------");
    
    if (wordHolder.wordString() === randomWord){
      console.log("You Win! \n Would you like to play again?")
      endGamePrompt();

    } else {
      wordHolder.userGuess(inquirerResults.userGuess);
      askForLetter();
    }
    //console.log(wordHolder.wordString());
  });

}

askForLetter();