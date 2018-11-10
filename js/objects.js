/*
An object is a collection of properties.

A property is a key-value pair, where key is a string and value can be anything.

Unlike primitives, objects are stored and copied "by reference".
*/

let person = {
  name: 'John',
  age: 28,
};

/**
 * Dot notation
 */

// get a property's value
person.name;

// set a property's value
person.age = 29;

// create a new property
person.lastName = 'Doe';

// delete a property
delete person.lastName;

/**
 * Bracket notation
 */

// get a property's value
person['name'];

// set a property's value
person['age'] = 29;

// create a new property
person['lastName'] = 'Doe';

// delete a property
delete person['lastName'];

// keys may be calculated at run-time
let props = ['name', 'age'];
props.forEach(prop =>
  console.log(person[prop])
);
