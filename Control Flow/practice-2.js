// Write a function that takes a grade (A, B, C, D, F) and returns the corresponding description ("Excellent", "Good", "Average", "Below Average", "Poor").

function finalGrade(grade) {
    switch (grade) {
        case  "A":
            return "Excellent"
    
        case "B":
            return "Good"
    
        case "C":
            return "Average"
    
        case "D":
            return "Below Average"
    
        case "F":
            return "Poor"
    }
}

console.log(finalGrade("B"))
