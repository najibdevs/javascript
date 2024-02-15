/*FizzBuzz
Write a program that shows all numbers between 1 and 100 with the following exceptions:
It shows "Fizz" instead if the number is divisible by 3.
It shows "Buzz" instead if the number is divisible by 5 and not by 3.*/

let numbers = 100

for (let i = 1; i <= numbers; i++) {
    if (i % 3 === 0) {
        console.log("fizz")
    }

    else if (i % 5 === 0) {
        console.log("Buzz")
    }

    else {
        console.log(i)
    }
}

/*When it's done, improve it so that the program shows 
"FizzBuzz" instead for numbers divisible both by 3 and by 5.*/

for (let i = 1; i <= numbers; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    if (i % 3 === 0) {
        console.log("fizz")
    }

    else if (i % 5 === 0) {
        console.log("Buzz")
    }

    else {
        console.log(i)
    }
}

