class Letter {
    constructor(letter){
        this.character = letter.toLowerCase();
        this.visible = !(letter.match(/^[a-z]$/i));
    }

    toString(){
        if(this.character.match(/^[a-z]$/i)){
            
            return this.visible?this.character:"_";
        } else {
            return this.character;
        }
    }

    guess(letter){
        if(letter.toLowerCase() === this.character){
            this.visible = true;
            return true
        } else {
            return false;
        }
    }

    getSolution(){
        return this.character;
    }
}

module.exports = Letter;