// Implement a function that takes an array of numbers and returns the largest number in the array.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function largestNumber(numbers) {
    return Math.max(...numbers)
}

let results = largestNumber(numbers)
console.log(results)