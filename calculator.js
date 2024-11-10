window.onload =() => {

let numberOne = "";
let numberTwo = "";
let Operator = "";
let display = "";
let displayOp = display;
let displayCalculation = "";
let displayResult = "";

function operate (a, b, c) {
    if (b === "+"){return add(a,c)}
    if (b === "-"){return subtract(a,c)}
    if (b === "*"){return multiply(a,c)}
    if (b === "/"){return divide(a,c)}
}
    
Array.from(document.querySelectorAll(".num")).map((event) => {
    event.addEventListener("click", (event) => {
        if(Operator === ""){
            numberOne += event.srcElement.className[8]
            display = numberOne;
            document.querySelector(".results").innerHTML = display;
            console.log(numberOne)}
    })
});

Array.from(document.querySelectorAll(".op")).map((event) => {
    event.addEventListener("click", (event) => {
        Operator = event.srcElement.className[7]
        displayOp = display + Operator
        document.querySelector(".results").innerHTML = displayOp
        console.log(Operator)
    })
});

Array.from(document.querySelectorAll(".num")).map((event) => {
    event.addEventListener("click", (event) => {
        if(Operator !== ""){
            numberTwo += event.srcElement.className[8]
            displayCalculation = numberOne + Operator + numberTwo
            document.querySelector(".results").innerHTML = displayCalculation
            console.log(displayCalculation)}
    })
});

document.querySelector(".calculate").addEventListener("click", () => {
    displayResult = operate(numberOne, Operator, numberTwo);
    document.querySelector(".results").innerHTML = displayResult
})

document.querySelector(".clear").addEventListener("click", () => {
    numberOne = "";
    numberTwo = "";
    Operator = "";
    display = "";
    displayOp = display;
    displayCalculation = "";
    displayResult = "";
    document.querySelector(".results").innerHTML = display;
})

function add (a, b){return a + b};

function subtract(a, b){return a - b};

function multiply(a, b){return a * b};

function divide(a, b){return a / b};



}