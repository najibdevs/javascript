// Write a function that takes an array of test scores (numbers) and returns the average grade. Use a grading scale (A, B, C, D, F).

function finalGrades(marks) {
    let sum = 0

    for (let mark of marks){
        sum += mark
    }

    let average = sum / marks.length

    if (average < 60) {
        return "A"
    }

    else if (average < 60) {
        return "A"
    }

    else if (average < 60) {
        return "A"
    }

    else if (average < 60) {
        return "A"
    }

    else {
        return "A"
    }
}

const scores = [90, 90, 90, 90, 98]
const finalScores = finalGrades(scores)
console.log(finalScores)