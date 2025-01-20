function pairNumbers(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    firstNumber = Math.floor(firstNumber);
    secondNumber = Math.floor(secondNumber);

    if (firstNumber > secondNumber) {
        return '';
    }

    let result = [];

    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }

    return result.join(',');
}

export default pairNumbers

console.log(pairNumbers(1, 10));