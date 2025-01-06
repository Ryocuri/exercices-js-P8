// Créez votre fonction ici

function calculateAverage(numbers) {
    if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    const validNumbers = numbers.filter(num => typeof num === 'number' && !isNaN(num));

    if (validNumbers.length === 0) {
        return "No valid numbers to calculate average";
    }

    const sum = validNumbers.reduce((acc, current) => acc + current, 0);

    return Number((sum / validNumbers.length).toFixed(2));
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
