function guess_number(){
  var secret = 12;
  var guess;
  while(guess != secret){ 
    guess = prompt("Guess my favourite number, right now!");
   
    if(guess == secret){
       alert("Stop Cheating!!! >:(");
    }
    else if(guess < secret){
        alert("Come on, higher of course!");        
    }
    else if(guess > secret){
      alert("It's lower than that!");
    }
    else{
      alert("That's not a number silly!");
    }
  }
}

function centguess(){
var x = prompt("Type in any year, my website will tell you what century that year belongs to!");
var y =(x/100)
var z =(y + 1)
    alert("This year is in the" + " " + Math.floor(z) + "th Century")
}

function assignment(){
  var secret = "sarah";
  var guess;
  while(guess != secret){
    guess = prompt("What is your first name?");

    if (guess == secret){
      alert("Sorry Ms.Pais, this assignment is still under construction.");
    }
    else if(guess != secret){
      alert("Why are you trying to snoop my assignments? LEAVEEEEEEE!!!!!");
    }
    else{
      alert("That's not a name silly!");
    }
  }
}

function angle(){
var x = prompt("My website will tell you the value of an angle if you provide it with the other 2 angles! Enter the first angle value for a triangle!");
var y = prompt("Enter the second angle... ");
      alert(180 - x - y + " " + "degrees is the last angle of that triangle!");
}

const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) return;
  
  // If the `displayValue` does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand)  {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = performCalculation[operator](currentValue, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand
};

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});