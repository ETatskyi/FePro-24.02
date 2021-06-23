let buttons = document.querySelectorAll("button");
let out = document.querySelector("#display");
out.maxLength = 9;  /*setting max length of calculator input field. should be always positive*/

const calculator = {
    first: 0,
    second: 0,
    operator: "",
    result: 0,

    reset: function () {/**/
        this.first = 0;
        this.second = 0;
        this.operator = "";
        this.result = 0;
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click);
}

function click(e) {
    /*show "error" while owerfill*/
    if (e.target.classList.contains("num") && out.value.length >= out.maxLength) {
        showError();
    }

    /*if clicking on numpad*/
    if (e.target.classList.contains("num") && out.value.length < out.maxLength) {
        /*if click at num and result already was calculated*/
        if (calculator.result) {
            calculator.first = calculator.result;
            calculator.result = 0;
            out.value = "";
        }

        out.value += e.target.innerText;

        if (calculator.first || (!calculator.first && calculator.operator)) {
            calculator.second = +out.value;
        }
    }
    /*if clicking on dot separator*/
    if (e.target.classList.contains("dot") && !out.value.includes(".") && out.value.length < out.maxLength) {
        /*adding zero while click on dot and no digits entered*/
        if (!out.value) {
            out.value += "0";
        }
        out.value += e.target.innerText;
    }
    /*if clicking on C*/
    if (e.target.classList.contains("clear")) {
        calculator.reset();
        out.value = "";
    }
    /*if clicking on operator*/
    if (e.target.classList.contains("operator")) {

        /*click on "√" or "1/x" */
        if (e.target.classList.contains("modified")) {
            calculateExt(e.target);
        } else operateValues(e.target);
    }


    /*click on "=" botton*/
    if (e.target.classList.contains("calculate")) {
        calculate();
    }

}

function calculate() {
    /*if we have two numbers and operator*/
    if (calculator.first && calculator.second && calculator.operator) {
        switch (calculator.operator) {
            case "+": calculator.result = calculator.first + calculator.second;
                break
            case "-": calculator.result = calculator.first - calculator.second;
                break
            case "*": calculator.result = calculator.first * calculator.second;
                break
            case "÷": calculator.result = calculator.first / calculator.second;
                break
        }
        out.value = calculator.result;

    }

    /*if dont have second operand*/
    if (calculator.first && calculator.operator && !calculator.second) {
        out.value = calculator.first;
    }


}

function calculateExt(toDo) {

    /*if number entered*/
    if (out.value) {
        if(toDo.innerText == "√"){
            out.value = Math.sqrt(out.value);
        }
        if(toDo.innerText == "1/x"){
            out.value = 1/out.value;
        }
    }

    /*if dont have any number entered*/
    if (!calculator.first && !calculator.result && !out.value) {
        showError();
    }

    console.log("ext")
}


function operateValues(operateButton) {
    /*if click on operator first time*/
    if (!calculator.first) {
        calculator.operator = operateButton.innerText;
        calculator.first = +out.value;
        out.value = "";
    }

    /*if clicking second time*/
    if (calculator.first && calculator.operator && calculator.second) {
        if (!calculator.result) {
            calculate();
        }

        calculator.operator = operateButton.innerText;
        calculator.first = calculator.result;
        calculator.result = 0;
        calculator.second = 0;
        out.value = "";
    }
    /*if clicking on operator some times without clicking numbers*/
    if (calculator.first && calculator.operator && !calculator.second) {
        calculator.operator = operateButton.innerText;
    }

    // /* if clicking operator without entering any number*/
    // if(calculator.first === 0){

    // }

}

function showError() {
    out.classList.add('error');
    setTimeout(() => out.classList.remove('error'), 500);
}