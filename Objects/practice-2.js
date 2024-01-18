// Write two different functions, one is a factory function, the other is a constructor function, to initalize an address object

// Factory Function 
function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}

let address = createAddress("Baker Street", "London", "NW1 6XE")
console.log(address)

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

let anotherAdress = new Address("Baker Street", "London", "NW1 6XE")