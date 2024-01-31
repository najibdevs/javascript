// Write a function that calculates the sum of all numbers up to a limit that are multiples of 3 or 5.

function sum(limit) {
    let sum = 0

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) 
            sum += i
        }

    return sum
}

console.log(sum(11))