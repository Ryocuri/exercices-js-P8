function pairNumbers(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return "Les paramètres doivent être des nombres";
    }

    firstNumber = Math.floor(firstNumber);
    secondNumber = Math.floor(secondNumber);

    if (firstNumber > secondNumber) {
        [firstNumber, secondNumber] = [secondNumber, firstNumber];
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