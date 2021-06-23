let result = 0;

if (prompt("как будет кот на английском?").toLowerCase() == "cat") { result++ }
if (prompt("как будет собака на английском?").toLowerCase() == "dog") { result++ }
if (prompt("сколько будет 2+5?") == 7) { result++ }
if (prompt("сколько будет 5*2?") == 10) { result++ }
if (prompt("сколько будет 10/2?") == 5) { result++ }

alert(`ur result is ${result} out of 5`)


// // alert("test")

// var mathQueezQuestions = ["1/1", "1+1", "2+3", "3+2", "11*8"]; /*paste ur "math questions" here*/

// function scoreCheck(userAnswers, rightAnswers) {
//     var score = 0;
//     for (var i = 0; i < rightAnswers.length; i++) {
//         if (userAnswers[i] == rightAnswers[i]) { score++ }

//     }
//     return score
// };

// function askAnswers(questions) {
//     var answers = []
//     for (var i = 0; i < questions.length; i++) {
//         answers[i] = prompt("enter right answer \n" + questions[i] + "=?")
//     }
//     return answers
// };

// function rightAnswers(questions) {
//     var answers = []
//     for (var i = 0; i < questions.length; i++) {
//         answers[i] = eval(questions[i])
//     }
//     return answers
// };

// alert("ur score is " + scoreCheck(askAnswers(mathQueezQuestions), rightAnswers(mathQueezQuestions)));