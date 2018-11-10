const values = [3, 5, 8, 10, 13];

/**
 * push()
 * Adds elements to the end and returns the new length
 */

console.log(values.push(8)) // 6

/**
 * pop()
 * Removes the last element and returns it
 */

console.log(values.pop()) // 8

/**
 * unshift()
 * Adds elements to the beginning and returns the new length
 */

console.log(values.unshift(1)); // 6

/**
 * shift()
 * Removes the first element and returns it
 */

console.log(values.shift()); // 1

/**
 * indexOf()
 * Returns the first index at which a given element can be found
 */

console.log(values.indexOf(5)) // 1

/**
 * lastIndexOf()
 * Returns the last index at which a given element can be found
 */

console.log(values.lastIndexOf(5)) // 1

/**
 * slice(firstIndexIncluded, lastIndexExcluded)
 */

console.log(values.slice(1, 3)); // [ 5, 8 ]

/**
 * splice(start, deleteCount, itemsToAdd)
 */

console.log(values.splice(1, 2, 4, 5)) // [ 5, 8 ]
console.log(values); // [ 3, 4, 5, 10, 13 ]

/**
 * find()
 * Returns the value of the first element that satisfies the provided testing function
 */

const greaterThanFive = (num) => num > 5;
console.log(values.find(greaterThanFive)); // 10

/**
 * findIndex()
 * Returns the index of the first element that satisfies the provided testing function
 */

console.log(values.findIndex(greaterThanFive)); // 3

/**
 * map()
 */

const timesTwo = (num) => num * 2;
const doubledNumbers = values.map(timesTwo);
console.log(doubledNumbers); // [ 6, 8, 10, 20, 26 ]

/**
 * filter()
 */

const isEven = (num) => num % 2 === 0;
const evenNumbers = values.filter(isEven);
console.log(evenNumbers); // [ 4, 10 ]

/**
 * forEach()
 */

const logValue = (num) => console.log(num);
values.forEach(logValue); // 3 // 4 // 5 // 10 // 13

/**
 * reduce(callback, initialResult)
 */

const addNumbers = (result, value) => (result + value);
const sum = values.reduce(addNumbers, 0);
console.log(sum); // 35
