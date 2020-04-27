const Letter = require("./Letter.js");

class Word {
    constructor(word) {

        this.word = word;
        this.wrong_guesses_left = 5;
        this.word_array = word.split('').map(letter => new Letter(letter));

    }

    guessLetter(letter) {
        const isInWord = this.word_array.map(letterObj => letterObj.guess(letter)).includes(true);

        if(!isInWord){
            this.wrong_guesses_left--;
            return false
        }

        return true

    }

    toString(){
        const wordStr = this.word_array.map(letterObj => letterObj.toString()).join(' ');
        return wordStr;
    }
    
    guessedCorrectly(){
        return !(this.word_array.map(letObj => letObj.visible).includes(false));
    }


}

module.exports = Word;