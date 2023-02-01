let currentValue = ''
let previousValue = ''

document.addEventListener("DOMContentLoaded", function (){
// assign listener to buttons
const number = document.querySelectorAll('[data-number]')
const operators = document.querySelectorAll('[data-operator]')
const equal = document.querySelector(".equals");
const decimal = document.querySelector(".decimal");
const current = document.querySelector(".current");
const previous = document.querySelector(".previous")
const clear = document.querySelector("#clear")

number.forEach((number) =>
number.addEventListener('click', function (e) {
    handleNumber(e.target.textContent)
    if (currentValue.length <= 6) {
    current.textContent = currentValue}
}));

// assign function to operator buttons
operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperator(e.target.textContent)
    previous.textContent = previousValue + " " + operator
    current.textContent = currentValue
}));


decimal.addEventListener('click', function(){
    addDecimal()
});

equal.addEventListener('click', function(){
    calculate()
    previous.textContent = " "
    current.textContent = previousValue
})

clear.addEventListener('click', function(e){
    currentValue = " "
    previousValue = " "
    operator = " "
    previous.textContent = previousValue
    current.textContent = currentValue
})

})

function handleNumber(num) {
    currentValue += num
}
function handleOperator(op){
console.log(op)
    operator = op
    previousValue = currentValue
    currentValue = ''
}

function addDecimal(){
    if(!currentValue.includes (".")) {
        currentValue += "."
    }
}

function calculate(){
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)
    if (operator === "+") {
        previousValue += currentValue
    }
    else if (operator === "-") {
        previousValue -= currentValue
    }
    else if (operator === "x") {
        previousValue *= currentValue
    }
    else {
        previousValue /= currentValue
    }
}
