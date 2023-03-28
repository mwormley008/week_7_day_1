console.log('Hello from the main.js file!')

// Basics of Javascript
// Comments using //

/*
Multi-line Comment in Javascript   

    -- Variable Declaration in Javascript --
    Primitive Data Types: String, Number, Boolean, Undefined, null
    Object Types: Objects, Arrays, Functions
    Pirimitive is data that is not an object and has no attributes or methods


  use 'var' to declare a globally-scoped or function-scoped variable
  optional value - use camelCase to name variables
*/

/*
var myName;

console.log(myName);
*/

var myName = 'Brian';

// console.log() is equivalent to python's print() function
console.log(myName);
console.log(typeof myName);

/*
Strings can be created using '', "", or ``. The tick marks (``) have a special 
behavior to format the string
Tick Marks + S{} is equivalent to f"{}"

*/
console.log("My name is ${myName}");
console.log('My name is ${myName}');
console.log(`My name is ${myName}`);

// NUMBER TYPES
// Integer

var myAge = 99;
console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14;
console.log(pi);
console.log(typeof pi);

// Boolean
var trueBool = true;
console.log(trueBool);
console.log(typeof trueBool);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);

// Undefined
var something;
console.log(something);
console.log(typeof something);

// Null
var someNull = null;
console.log(null)
console.log(typeof someNull)

var myCity;

console.log(myCity);
console.log(typeof myCity);

myCity = 'Chicago';
console.log(myCity);
console.log(typeof myCity);

// Object data types
var myObject = {};

console.log(myObject);
console.log(typeof myObject);

var anotherObject = {
    prop1: 'Hello world',
    abc: 123
};

console.log(anotherObject);
console.log(typeof anotherObject);

// Array
var firstArray = []
console.log(firstArray);
console.log(typeof firstArray);

var newArray = ['Brian', 'Michael', 'Danielle', 'Frank']
console.log(newArray);
console.log(typeof newArray);

// Function
function abc(){};

console.log(abc);
console.log(typeof abc);

// Accessing properties from an object
var person = {
    first: 'Emily',
    last: 'Murphy',
    languages: ['Javascript', 'Python']
};

console.log(person);

// Bracket Notation
console.log(person['first']);
// Dot Notation
console.log(person.last);

console.log(person.languages);

// When accessing properties in an arra(aka the indices), use bracket notation
console.log(person.languages[0])
console.log(person.languages[1])

// All Array objects also have a "length" property
console.log(person.languages.length);

// Clear the console
console.clear();

// Variable Hoisting
// Var declarations are processed before any thing else occurs

console.log(myNewVariable);

var myNewVariable = 'New Variable';

console.log(myNewVariable);

// let
// Decrlares a Block-Scoped local variable, optional value
// console.log(myCountry); // Uncaught ReferenceError: Cannot access 'myCountry before

let aCountry = "United States";

console.log(aCountry);

if (true){
    var aState = 'Illinios';
    let aCity = 'Chicago';
    console.log(aCity, aState, aCountry);
}

//console.log(aCity); // Uncaught ReferenceError: aCity is not defined
console.log(aState);
console.log(aCountry);


// const - similar to let (block-scoped)
// 2 differences: 1. Needs a value when declared. 2. Cannot be reassigned

const someConstVal = 'abc'
console.log(aCountry);

if (true){
    let myFavColor = 'blue';
    console.log(myFavColor);
    myFavColor = 'red';
    console.log(myFavColor);

    const myLastName = 'Stanton';
    console.log(myLastName);
    // myLastName = 'Lincoln'; Uncaught TypeError: Assignment to constant variable
    // console.log(myLastName);
}

// Be careful when using const with an object!
const cities = ['Chicago', 'New York'];
console.log(cities)

const president = {
    first: 'Abe',
    last: 'Lincoln'
};

//console.log(president);

