//Create a function that takes a string as an argument and returns the string in reverse order.

function reverseString(str) {
    return str.split("").reverse("").join("")
}

let sentence = "Najib" 
let results = reverseString(sentence)
console.log(results)