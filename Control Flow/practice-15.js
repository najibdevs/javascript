// Write a function that takes an array and returns the count of truthy elements in the array.


function countTruthy(array) {
    let count = 0
    for (let value of array) {
        if (value)
        count++
    return count
    }
}