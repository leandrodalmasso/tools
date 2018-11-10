/*
There are 7 data types in JS:

- number
- string
- boolean
- undefined (unassigned values)
- null (unknown values)
- object
- symbol (unique identifiers for objects)
*/

console.log(typeof 8); // number
console.log(typeof 3.14159); // number
console.log(typeof 2.998e8); // number
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number
console.log(typeof NaN); // number

console.log(typeof "Hello world!"); // string
console.log(typeof 'Hello world!'); // string
let name = 'Mary';
console.log(typeof `Hello ${name}!`); // string

console.log(typeof true); // boolean
console.log(typeof false); // boolean

let something;
console.log(typeof something);  // undefined

something = null;
console.log(something); // null

let person = {
  name: 'Mary',
  lastName: 'Poppins'
};
console.log(typeof person); // object

const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol
