// Write a function that accepts a number and prints all the even and odd numbers from 0 to that number.

function evenNumber(number) {
    for (let i = 0; i <= number; i++) {
        const message = (i % 2 === 0) ? "EVEN" : "ODD"
        console.log(i, message)
    }

}

console.log(evenNumber(11))

