// Implement a Function to Calculate the Sum of All Even Numbers in a List

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evenNumbers(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i]
        }
    }
    return sum
}

let results = evenNumbers(numbers)
console.log(results)

// function evenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         sum += arr[i];
//       }
//     }
//     return sum; 
//   }
  
//   // Example usage:
//   var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(sumOfEvens(numbers)); // Output: 30