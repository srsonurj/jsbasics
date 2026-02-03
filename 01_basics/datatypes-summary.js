//***********NOTES***********

// Data types in JavaScript can be categorized into two main types:
// 1. Primitive Data Types
// 2. Non-Primitive Data Types (Objects)

//***********PRIMITIVE DATA TYPES***********

// 7 types

// 1.string: represents textual data, enclosed in single quotes, double quotes, or backticks.
let name = "Sonu";

// 2.number: represents both integer and floating-point numbers.
let age = 25;

// 3.boolean: represents a logical entity and can have two values: true or false.
let isLoggedIn = true;

// 4.undefined: a variable that has been declared but not assigned a value.
let address;

// 5.null: represents the intentional absence of any object value.
let phoneNumber = null;

// 6.symbol: a unique and immutable primitive value, often used as object property identifiers.
let sym = Symbol("uniqueIdentifier");

// 7.bigint: represents integers with arbitrary precision, allowing for the representation of very large numbers.
let bigIntNum = 9007199254741991n;

//***********NON-PRIMITIVE/REFERENCE DATA TYPES (OBJECTS)***********

// 1.object: a collection of properties, where each property is defined as a key-value pair.

let myObj = {
    name: "Sonu",
    age: 25,
    isEmployed: true
}

// 2.array: a special type of object used to store ordered collections of values.

    const heroes = ["ironman", "hulk", "spiderman", "thor"];

// 3.function: a block of code designed to perform a particular task, which can be invoked when needed.

const myFunc = function(){
    console.log("Hello, World!");
}



