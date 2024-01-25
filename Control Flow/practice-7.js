// Write a for...in loop that prints all the keys in a given object.

const person = {
    name: "najib",
    age: 21,
    nationality: "British"
}

for (key in person) {
    console.log(key, person[key])
}