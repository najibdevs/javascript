// Write a function that takes an array and returns the count of truthy elements in the array.


function checkTruthy(array) {
    let count = 0
    for (let element of array){
        if(element) {
            count++
        }
    }
    return count
}

const result = ["", 2, "hello", 345, false, undefined]
const anotherResult = checkTruthy(result)
console.log(anotherResult)