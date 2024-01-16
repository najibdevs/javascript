// Write a function that takes a number and prints a pattern of stars in the console.

function showStars(rows) {
    let star = "*"

    for (let i = 0; i <= rows; i++){
        console.log(star)
        star += "*"
    }
}

console.log(showStars(10))