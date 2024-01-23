// Write a function that takes a number as an argument and returns "Even" if the number is even and "Odd" if the number is odd.

function isEven(num) {
    if (num % 2 === 0)
    return "Even"

    else {
        return "Odd"
    }
}   

console.log(isEven(10))