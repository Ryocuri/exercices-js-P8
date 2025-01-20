const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        if (b === 0) {
            return "Division by zero is not allowed";
        }
        return a / b;
    }
};

function calculate(firstNumber, secondNumber, operator) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return "Invalid number input";
    }

    if (!Object.keys(operators).includes(operator)) {
        return "Invalid operator";
    }

    return operators[operator](firstNumber, secondNumber);
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate;