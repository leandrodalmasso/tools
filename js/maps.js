/*
A Map is a collection of keyed data items, just like an object, but the main difference is that it allows keys of any type.
*/

/**
 * Create
 */

const myMap = new Map();
console.log(myMap); // Map {}

/**
 * map.set(key, value)
 * Stores the value by the key
 */

myMap.set('1', 'hello');
myMap.set(1, 8);
myMap.set(true, 3.14159);
console.log(myMap); // Map { '1' => 'hello', 1 => 8, true => 3.14159 }

/**
 * map.get(key)
 * Returns the value by the key, undefined if key doesn’t exist
 */

console.log(myMap.get('1')); // hello
console.log(myMap.get(true)); // 3.14159
console.log(myMap.get(false)); // undefined

/**
 * map.has(key)
 * Returns true if the key exists, false otherwise
 */

console.log(myMap.has('1')); // true
console.log(myMap.has('10')); // false

/**
 * map.delete(key)
 * Removes a value and the key
 */

myMap.delete('1');
console.log(myMap); // Map { 1 => 8, true => 3.14159 }

/**
 * map.size
 * Returns the current element count
 */

console.log(myMap.size); // 2

/**
 * map.clear()
 * Clears the map
 */

myMap.clear();
console.log(myMap); // Map {}
