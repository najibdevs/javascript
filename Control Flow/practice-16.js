//  Write a function that takes an object and prints the value of all string properties in the object.

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            console.log(key, obj[key]) 
        }
    }
}

const movie = {
    title: "a",
    releaseYear: 2018,
    rating: 4.6,
    director: "b"
}

showProperties(movie)

