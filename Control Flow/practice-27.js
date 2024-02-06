let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];

function challange() {
    let randomIndexOne = Math.floor(Math.random() * fighters.length);
    let randomIndexTwo = Math.floor(Math.random() * fighters.length);
    console.log(fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]);
}

// Call the function
challange();
