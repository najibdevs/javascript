// Write a function that counts the number of vowels in a given string and returns the count.

function vowels(str) {
    let count = 0
    let vowels = "aeiouAEIOU"

    for (let char of str){
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}

const myString = "YOOOO, I hope you have a great day!."
const vowelCount = vowels(myString);
console.log(vowelCount);