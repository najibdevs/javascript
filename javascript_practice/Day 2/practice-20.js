// Write a function that takes two numbers, start and end, as arguments and returns an array containing all the numbers from start to end, inclusive.

function startToEnd(start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }

    return arr
}

let results = startToEnd(1, 17)
console.log(results)
