let display = document.getElementById("display");
let currentInput = "0";
let operator = "";
let previousInput = "";

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(num) {
  if (currentInput === "0" && num !== ".") {
    currentInput = num;
  } else if (num === "." && currentInput.includes(".")) {
    return;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator) calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  if (!operator || currentInput === "") return;
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Error" : a / b;
      break;
  }

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay();
}

function clearDisplay() {
  currentInput = "0";
  operator = "";
  previousInput = "";
  updateDisplay();
}

function toggleSign() {
  if (currentInput !== "0") {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
}

function percent() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}
