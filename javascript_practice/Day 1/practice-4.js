// // *Variables*
// // Declare a variable, assign it a boolean, and alert the value
let value = true
console.log(value)

// // Declare a variable, reassign it to your favorite color, and console log the value
let favouriteColor = "blue"
favouriteColor = "green"
console.log(favouriteColor)

// // *Functions*
// // Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function nums(num1, num2, num3, num4) {
    let firstthreesum = num1 + num2 + num3
    let total = firstthreesum / num4
    return total
}

let results = nums(1, 2, 3, 4)
console.log(results)


// // Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function numbers(sum1, sum2) {
    return sum1 ** sum2
}

let outcome = numbers(4, 2)
console.log(outcome)


// // *Conditionals*
// // Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function trueOrFalse(b, str) {
   b ? alert(b) : console.log(str)
}

let total = trueOrFalse(false, "najib")
console.log(total)


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number


function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("fizzbuzz")
        }
    
        else if (number % 3 === 0) {
            console.log("fizz")
        }
    
        else if (number % 5 === 0) {
            console.log("buzz")
        }

        else {
            console.log(i)
        }
    }

    
}