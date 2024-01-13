**BASICS**

**Variable**
A variable in JavaScript is like a labeled container that holds a value.
 - Cannot be a reserved keyword
 - Should be meaningful
 - Cannot start with a number (e.g., 1name)
 - Cannot contain a space or hyphen (e.g., name-space)
 - Are case-sensitive

let name = 'Najib';
console.log(name);

**Constants**
- Const is used to declare variables that should not change once they are set.
- It's generally good practice to use const by default to prevent accidental changes to         variables.
- Use let only if you know the variable needs to change.

const rent = 0.3;
rent = 1; 
console.log(rent);
- This line will cause an error because 'const' values cannot be changed

**Primitive Types**
- These types are immutable (meaning their values cannot be changed)
- They do not share or reference other values.
- When you manipulate a primitive type, you work directly on its value.

let personName = 'Najib'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null;

**Dynamic Typing**
- JavaScript is a dynamically typed language, meaning the data type of a variable
is determined at runtime and can change when the variable's value is reassigned.
- This allows for more flexibility but also requires careful handling to avoid type-related errors.

let data = "Hello, World!";
data = 100;

**Objects**
- An object is a collection of properties, where each property is a key-value pair.

let person = {
    name: 'Najib',
    age: 30
};

*Dot Notation*
person.name = 'John';

*Bracket Notation*
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

**Arrays**
- An array in JavaScript is a list of items, where each item can be any type of data, like numbers, strings, or even other arrays.
- You can think of it as a row of boxes, each holding an item.

let selectedColors = ['red', 'blue'];
console.log(selectedColors);

selectedColors[2] = 'green';
console.log(selectedColors);

console.log(selectedColors.length);

**Functions**
Functions in JavaScript are blocks of code designed to perform a particular task or calculate a value.

function greet() {
    console.log("Hello World");
}
greet();

function greetWithName(name) {
    console.log("Hello " + name);
}

greetWithName('John');
greetWithName('Mary');

function greetFull(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

greetFull('John', 'Smith');

*Calculating a value*
function square(number) {
    return number * number;
}

console.log(square(2));