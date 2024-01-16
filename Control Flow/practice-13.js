// Write a function that calculates demerit points. For every 5km/hr above the speedlimit (say 70 km/hr), 1 demerit point is incurred. If points go above 12, the function should return "License suspended" and if speedlimit is less that 70 return Ok.

function checkSpeed(speed) {
    const speedLimit = 70
    const KmPerPoint = 5

    if (speed < speedLimit + KmPerPoint) {
        return "Ok"
    }
    
    else {
        const points = Math.floor((speed - speedLimit) / KmPerPoint)
        if (points >= 12)
        return "License Suspended"
    return "Points:", points
    }
}

console.log(checkSpeed(70))