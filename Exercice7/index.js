function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput');
    const resultDisplay = document.getElementById('binaryResult');

    let decimalValue = decimalInput.value.trim();

    if (!decimalValue) {
        resultDisplay.textContent = "Veuillez entrer un nombre";
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
        const remainder = quotient % 2;
        binaryDigits.unshift(remainder);
        quotient = Math.floor(quotient / 2);
    }

    const binaryResult = binaryDigits.join('');

    resultDisplay.textContent = `${number} en binaire : ${binaryResult}`;
}