function convertToBinary() {
    const resultDisplay = document.getElementById('binaryResult');

    let decimalValue = document.getElementById('decimalInput').value.trim();

    if (!decimalValue || !isNumeric(decimalValue)) {
        resultDisplay.textContent = '';
        return;
    }

    const number = parseInt(decimalValue);

    if (isNaN(number)) {
        resultDisplay.textContent = "Veuillez entrer un nombre valide";
        return;
    }

    if (number < 0) {
        resultDisplay.textContent = "Veuillez entrer un nombre positif";
        return;
    }

    if (number === 0) {
        resultDisplay.textContent = "Résultat en binaire : 0";
        return;
    }

    let binaryDigits = [];
    let quotient = number;

    while (quotient > 0) {
        binaryDigits.unshift(quotient % 2);
        quotient = Math.floor(quotient / 2);
    }

    resultDisplay.textContent = `${number} en binaire : ${binaryDigits.join('')}`;
}

function isNumeric(str) {
    return /^\d+$/.test(str);
}