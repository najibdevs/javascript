// Define a recursive function isEven corresponding to this description. 
// The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

function isEven(num) {
    if (num % 2 == 0) 
        return true
    return false
}

let results = isEven(-1)
console.log(results)