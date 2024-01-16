// Write a function that prints all prime numbers up to a given number.

function showPrime(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) console.log(number)
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false
        }

        return true
    }
}

console.log(showPrime(10))