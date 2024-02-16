// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favoriteFood = "pizza"
console.log(favoriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let str = "najib"
console.log(str[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function numbers(num, num1, num2) {
    let divide = num / num1
    let total = divide * num2
    return total
}

let result = number(5, 7, 9)
console.log(result)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function num(number) {
    let cubeRoot = Math.cbrt(number).toFixed(4)
    return cubeRoot
}

let outcome = num(10)
console.log(outcome)


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function month(month) {
    let month= month.toLowercase() 

    return (month === "june" || month === "july" || month === "august") ? "YAY" : "Booo"
}

let total = month("summer")
console.log(total)


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function multiply(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        }
    }
}
