//Create an array of movie titles. Loop through the array and add each element to the h2.
//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
//Find the average of all the numbers from question two

// let movie = ["Naruto", "One piece", "Bleach", "Erased"]

// for (let i = 0; i < movie.length; i++) {
//     document.querySelector("h2").innerText += movies[i] 
// }


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] += 3
// }

// console.log(numbers)

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum / numbers.length)