// Create an array of movies with at least three movies.0
// Using the array from above, store the first movie in a variable
// Get the length of the original array and store it in a new variable
// Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let movies = ["Don't Breathe", "Breaking Bad", "Attack on Titan"]

let firstMovie = movies[0]
console.log(firstMovie)

let movieLength = movies.length
console.log(movieLength)

let lastMovie = movies[movieLength - 1]
console.log(lastMovie)