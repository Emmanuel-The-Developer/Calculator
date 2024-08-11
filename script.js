// Variable to store the current calculation
let calculation = '';
// Variable to store the result of calculations
let result = '';

// Function to add a value to the calculation variable
function addValue(value) {
    calculation += value;
}

// Function to display the current calculation on the screen
function displayText() {     
    document.querySelector('.calc__screen .screen').innerText = calculation || '0';
}

// Function to update the screen display with a specified value
function updateDisplay(value) {     
    document.querySelector('.calc__screen .screen').innerText = value;
}

// Function to update the result display with a specified value
function updateResult(value) {     
    document.getElementById('result').innerText = value;
}

// Function to clear the calculation variable or set it to '0' if it's empty
function clearCalculation() {
    if (calculation === "" || calculation === "0") {
        calculation = "0"; 
    } else {
        calculation = "";
    }
    
    displayText();
}

// Function to evaluate the calculation and display the result
function calculateResult() {
    try {
        let result = eval(calculation);
        document.getElementById('result').innerText = result;
        clearCalculation();

        if (result === Infinity || result === -Infinity || Number.isNaN(result)) {
            throw new Error("Invalid Operation");
        }

        localStorage.setItem('previousCalculation', result);
        updateDisplay(result);
    } catch (error) {
        updateDisplay("Error");
    }
}

// Function to load the previous calculation from local storage and add it to the current calculation
function loadPreviousCalculation() {
    let storedResult = localStorage.getItem('previousCalculation');

    if (storedResult !== null) {
        calculation += storedResult;
        displayText();
    } else {
        displayText("No previous result");
    }
}

// Function to add an arithmetic operator to the calculation variable
function addOperator(operator) {
    if (false) {
        return;
    } else {
        calculation += operator;
        operator = true;
    }
}

// Function to remove the last character from the calculation variable
function removeLastCharacter() {
    calculation = calculation.slice(0, -1);
    displayText();
}

// Function to add the value of pi (up to 3 decimal places) to the calculation variable
function appendPi() {
    let piValue = Math.PI.toFixed(3); // "3.142"
    calculation += piValue;
    displayText();
}

// Function to raise the current display value to a specified power
function raiseToPower() {
    let currentDisplay = parseFloat(document.querySelector('.calc__screen .screen').innerText);

    if (isNaN(currentDisplay)) {
        updateDisplay("Error");
        return;
    }

    let power = prompt("Enter the power to raise to:");
    power = parseFloat(power);

    if (isNaN(power)) {
        updateDisplay("Error");
        return;
    }

    let result = Math.pow(currentDisplay, power);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the logarithm (base 10) of the current display value
function calculateLog() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay) || currentDisplay <= 0) {
        updateDisplay("Error");
        return;
    }

    let result = Math.log10(currentDisplay);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the natural logarithm (base e) of the current display value
function calculateLn() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay) || currentDisplay <= 0) {
        updateDisplay("Error");
        return;
    }

    let result = Math.log(currentDisplay);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the square root of the current display value
function calculateSquareRoot() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay) || currentDisplay < 0) {
        updateDisplay("Error");
        return;
    }

    let result = Math.sqrt(currentDisplay);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the factorial of the current display value
function calculateFactorial() {
    let currentDisplay = parseInt(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay) || currentDisplay < 0) {
        updateDisplay("Error");
        return;
    }

    let result = factorial(currentDisplay);
    updateResult(result);
    calculation = result.toString();
}

// Recursive function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to calculate the square of the current display value
function calculateSquare() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay)) {
        updateDisplay("Error");
        return;
    }

    let result = Math.pow(currentDisplay, 2);
    updateResult(result);
    calculation = result.toString();
}

// Function to calculate the sine of the current display value (in degrees)
function calculateSine() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay)) {
        updateDisplay("Error");
        return;
    }

    let radians = currentDisplay * (Math.PI / 180);
    let result = Math.sin(radians);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the cosine of the current display value (in degrees)
function calculateCosine() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay)) {
        updateDisplay("Error");
        return;
    }

    let radians = currentDisplay * (Math.PI / 180);
    let result = Math.cos(radians);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the tangent of the current display value (in degrees)
function calculateTangent() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay)) {
        updateDisplay("Error");
        return;
    }

    let radians = currentDisplay * (Math.PI / 180);
    let result = Math.tan(radians);

    if (!isFinite(result)) {
        updateDisplay("Error");
        return;
    }

    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the arcsine (inverse sine) of the current display value
function calculateArcsine() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay) || currentDisplay < -1 || currentDisplay > 1) {
        updateDisplay("Error");
        return;
    }

    let result = Math.asin(currentDisplay);
    result = result * (180 / Math.PI);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the arccosine (inverse cosine) of the current display value
function calculateArccosine() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay) || currentDisplay < -1 || currentDisplay > 1) {
        updateDisplay("Error");
        return;
    }

    let result = Math.acos(currentDisplay);
    result = result * (180 / Math.PI);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the arctangent (inverse tangent) of the current display value
function calculateArctangent() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay)) {
        updateDisplay("Error");
        return;
    }

    let result = Math.atan(currentDisplay);
    result = result * (180 / Math.PI);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the hyperbolic sine of the current display value
function calculateSinh() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay)) {
        updateDisplay("Error");
        return;
    }

    let result = Math.sinh(currentDisplay);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the hyperbolic cosine of the current display value
function calculateCosh() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay)) {
        updateDisplay("Error");
        return;
    }

    let result = Math.cosh(currentDisplay);
    updateDisplay(result);
    calculation = result.toString();
}

// Function to calculate the hyperbolic tangent of the current display value
function calculateTanh() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay)) {
        updateDisplay("Error");
        return;
    }

    let result = Math.tanh(currentDisplay);
    updateDisplay(result);
    calculation = result.toString();
}
// Function to calculate the inverse (reciprocal) of the current display value
function calculateInverse() {
    let currentDisplay = parseFloat(document.querySelector(".calc__screen .screen").innerText);

    if (isNaN(currentDisplay)) {
        updateDisplay("Error");
        return;
    }

    if (currentDisplay === 0) {
        updateDisplay("Error");
        return;
    }

    let result = 1 / currentDisplay;
    updateDisplay(result);
    calculation = result.toString();
}

// Function to add a left parenthesis to the current calculation
function addLeftParenthesis() {
    let currentCalculation = document.querySelector(".calc__screen .screen").innerText;

    if (currentCalculation === "" || /[+\-*/^]$/.test(currentCalculation)) {
        currentCalculation += "(";
    } else {
        currentCalculation += "(";
    }

    updateDisplay(currentCalculation);
    calculation = currentCalculation;
}

// Function to add a right parenthesis to the current calculation
function addRightParenthesis() {
    let currentCalculation = document.querySelector(".calc__screen .screen").innerText;

    if ((currentCalculation.match(/\(/g) || []).length > (currentCalculation.match(/\)/g) || []).length && !/[+\-*/^]$/.test(currentCalculation)) {
        currentCalculation += ")";
        updateDisplay(currentCalculation);
    } else {
        updateDisplay("Error");
    }

    calculation = currentCalculation;
}