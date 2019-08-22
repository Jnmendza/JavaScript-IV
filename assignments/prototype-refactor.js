/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/**********************CHARACTER STATS ************************/
// JS III CODE

function CharacterStats(charAtt){
    GameObject.call(this, charAtt);
    this.healthPoints = charAtt.healthPoints
    this.name = charAtt.name
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage.`;
  }
  // JS IV CODE

class CharacterStats extends GameObject{
    constructor(charAtt){
        super(charAtt);
        this.healthPoints = charAtt.healthPoints,
        this.name = charAtt.name
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
}

/**********************CHARACTER STATS ************************/
// JS III CODE
function Humanoid(humAtt){
    CharacterStats.call(this, humAtt);
    this.team = humAtt.team,
    this.weapons = humAtt.weapons,
    this.language = humAtt.language
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}`;
  }

// JS IV CODE
class Humanoid extends CharacterStats {
    constructor(humAtt){
        super(humAtt);
        this.team = humAtt.team,
        this.weapons = humAtt.weapons,
        this.language = humAtt.language
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`
    }
}