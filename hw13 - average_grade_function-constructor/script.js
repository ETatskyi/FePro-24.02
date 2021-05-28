class Student {
    constructor(name, marks = []) {
        this.name = name;
        this.marks = marks;
    }
    average() {
        let sum = 0;

        for (let i = 0; i < this.marks.length; i++) {
            sum+=this.marks[i]
        }

        return sum / this.marks.length
    }
}


// let a = new Student("dfg", [5, 6, 1, 2, 5, 7, 1, 3])

// console.log(a)