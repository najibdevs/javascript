// // Write a Function to Check if a Number is Prime

function isPrime(num) {
    if (num < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

console.log(isPrime(10));
console.log(isPrime(11));