class Calculator {
    constructor(n = 0) {
        this.n = n;
    }

    add(n2) { return this.n += n2 }
    sub(n2) { return this.n -= n2 }
    mult(n2) { return this.n *= n2 }
    div(n2) { return this.n /= n2 }
};

class ExCalculator extends Calculator {
    constructor(n = 0) {
        super();
        this.n = n;
    }

    sqrt() { return Math.sqrt(this.n) }
    bsqrt() { return 1/this.n }
};
