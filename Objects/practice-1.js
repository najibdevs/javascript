// Create an address object with three properties, (street, city and zipCode)
// Create a function called showAddress that takes an address as an object and displays all these objects along with their value

const address = {
    street: "Baker Street",
    city: "London",
    zipCode: "NW1 6XE"
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key])
    }
}

showAddress(address)