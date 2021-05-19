function Robot(name, step = 1) {
    let total = 0;

    this.who = () => {return name}
    this.step = () => {total+=step}
    this.total = () => {return total}

}

let newRob = new Robot("robotName", 5);

newRob.who();