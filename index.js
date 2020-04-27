const Word = require("./lib/Word");
const inquirer = require("inquirer");
const movieArr = require("./lib/movie_names");

const promptPlayer = () => {
    console.log("Your clue is:\n");
    console.log(word.toString());
    
    inquirer.prompt([
        {
            message:"Enter a letter to guess?",
            name: "letter",
            validate: (input) => input.match(/^[a-z]$/i)?true:"Please only enter one letter character"
        }
    ]).then(({letter}) => {
        const guessRes = word.guessLetter(letter);
        if(word.guessedCorrectly()){
            //Game finished
            console.log(word.toString()+ "\n\n");
            console.log("\n\nWell done, you guessed the movie! Game will now end.\n\n");
        } else if(guessRes){
            console.log("\n\nWell done, you guessed a letter correctly\n\n");
            promptPlayer();
        } else if(!guessRes){
            console.log("\n\nYou didn't get a letter corectly. =(\n\n");
            if(word.wrong_guesses_left <= 0){
                console.log("\n\nI'm sorry, you have no guesses left\n\nYour movie was " + word.word);
            } else {
                console.log(`\n\nYou have ${word.wrong_guesses_left} wrong guesses left before game over\n\n`);
                promptPlayer();
            }
        }

    })
}

//Gen a word
const word = new Word(movieArr[Math.floor(Math.random() * movieArr.length)]);

console.log(`Welcome to the movie guessing game\n\n`);
promptPlayer();