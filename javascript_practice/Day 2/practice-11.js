// The previous chapter introduced the standard function Math.min that returns its smallest argument. 
// We can build something like that now. 
// Write a function min that takes two arguments and returns their minimum.

function minMax(num1, num2) {
    return num1 > num2 ? num1 : num2
}

let results = minMax(2, 4)
console.log(results)
