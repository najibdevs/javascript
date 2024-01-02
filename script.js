// This is my first Javascript code
console.log("Hello World");
//Output: Hello World

// Variables
let name = 'Najib';
console.log(name);
// Output: Najib

// A variable in JavaScript is like a labeled container that holds a value.
// Cannot be a reserved keyword
// Should be meaningful 
// Cannot start with a number (1name)
// Cannot contain a space or hypen (-)
// Are case-sensitive


// Constants 
const rent = 0.3
rent = 1;
console.log(rent);
// Output: TypeError

// Const is used to declare variables that should not change once they are set.
// It's generally good practice to use const by default to prevent accidental changes to variables. Use let only if you know the variable needs to change.

// Primitive Types
let name = 'Najib'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null;

// These types are immutable (meaning their values cannot be changed), and they do not share or reference other values. When you manipulate a primitive type, you work directly on its value.


// Dynamic Typing
// You might declare a variable with a string: let data = "Hello, World!";
// Later, you can assign a number to the same variable: data = 100;
// Here, JavaScript automatically changes the data type from string to number.
// JavaScript is a dynamically typed language, meaning the data type of a variable is determined at runtime and can change when the variable's value is reassigned. This allows for more flexibility but also requires careful handling to avoid type-related errors.


//Objects
let name = 'Mosh';
let age = 30;

let person = {
    name: 'Najib'
    age: 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person['name'] = 'Mary';

console.log(person.name);
// Output: mary

// An object is a box of labeled items, where each label is a property (fact) or method (action) of the object.


// Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
// Output: ["red, "blue"]

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
// Output: ["red, "blue", "green"]

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);
// Output: 3

// An array in JavaScript is a list of items, where each item can be any type of data, like numbers, strings, or even other arrays. You can think of it as a row of boxes, each holding an item.

// Functions
function greet() {
    console.log("Hello World");
}
// Output: Hello World

function greet(name) {
    console.log("Hello " + name);
}

greet('John');
greet('Mary');
// Output: Hello John
// Output: Hello Mary

function greet(name, lastName) {
    console.log("Hello " + name);
}

greet('John');
greet('Mary');
// Output: Undefined

// Performing a task
function greet(name, lastName) {
    console.log("Hello " + name);
}

greet('John', 'Smith');
// Output: Hello John Smith

// Calculating a value
function square(number){
    return number * number;
}

console.log(square(2))
// Output: 4

// Functions in JavaScript are blocks of code designed to perform a particular task or calculate a value.