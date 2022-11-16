const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelector('.number');

const operatorsButtons = document.querySelector('.operator');


const equalsButton = document.querySelector('.equals');


const clearButton = document.querySelector('.clear');


const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.history-btn');

let result = '';














function displayNumbers () {

   if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
   if(this.textContent === '.' && currentNumber.innerHTML === '') return
   currentNumber.innerHTML = '.0'
currentNumber.innerHTML =+ this.textContent;
}

function operate () {
    
}

function showResult () {

}

function clearScreen () {

}

function clearHisotry () {


}

















// nasłuchiwanie przycisków

operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

historyBtn.addEventListener('click', clearHistory);
