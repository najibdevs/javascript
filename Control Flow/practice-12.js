// Implement the FizzBuzz challenge: Print numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number, for multiples of 5 print "Buzz", and for numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(number) {
    if (typeof number !== "number") {
        return "Not a number";
    }

    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    }

    if (number % 3 === 0) {
        return "Fizz";
    }
    
    if (number % 5 === 0) {
        return "Buzz";
    }

    return number;
}



console.log(fizzBuzz("najib"))