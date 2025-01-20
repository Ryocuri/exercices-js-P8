let displayValue = '';

function appendToDisplay(value) {
    const lastChar = displayValue[displayValue.length - 1];
    const isOperator = isNaN(value) && value !== '.';
    const isLastCharOperator = isNaN(lastChar) && lastChar !== '.';

    if (isOperator && isLastCharOperator) {
        displayValue = displayValue.slice(0, -1) + value;
    } else {
        displayValue += value;
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const lastChar = displayValue[displayValue.length - 1];
        if (isNaN(lastChar) && lastChar !== '.') {
            displayValue = displayValue.slice(0, -1);
        }

        const result = eval(displayValue);

        if (!isFinite(result)) {
            throw new Error('Division by zero is not allowed');
        }

        displayValue = parseFloat(result.toFixed(2)).toString();
        updateDisplay();
    } catch (error) {
        displayValue = error.message;
        updateDisplay();
    }
}