Fish.prototype = new Animal;
Bird.prototype = new Animal;
Duck.prototype = new Bird;

function Animal() {
    this.legs = 4; // количество ног
    this.canRun = true; // может бежать
    this.canBreath = true; // может дышать воздухом
}

function Fish() {
    this.legs = null;
    this.canSwim = true;
    this.canRun = false;
}

function Bird() {
    this.legs = 2;
    this.canFly = true;
}

function Duck() {
    this.canSwim = true;
}


//---------------
let a = new Fish() // рыба 
let b = new Bird() // птица
let c = new Duck() // утка