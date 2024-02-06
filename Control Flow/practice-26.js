let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomArray() {
    let randomChoice = Math.floor(Math.random() * 3)
    return hands[randomChoice]
}

console.log(randomArray())