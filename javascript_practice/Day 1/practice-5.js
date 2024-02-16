// *Variables*
// Create a variable and console log the value
let num = 10
console.log(10)

// Create a variable, add 10 to it, and alert the value
let number = 10
let total = number + 10
console.log(total)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(num1, num2, num3, num4) {
    return num1 - num2 - num3 - num4
}

let result = subtract(1, 3, 5, 7)
console.log(result)

// Create a function that divides one number by another and returns the remainder
function divide(num, num1) {
    return num % num1 
}

let outcome = divide(5, 4)
console.log(outcome)


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNumbers(num1, num2) {
    let sum = num1 + num2
    if (sum > 50) {
        console.log(Jumanji)
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(num1, num2, num3) {
    let multiply = num1 * num2 * num3
    if (multiply % 3 === 0) {
        console.log("ZEBRA")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function word(str, num) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i] * num)
    }
}

let routcome = word("najib")
console.log(word)