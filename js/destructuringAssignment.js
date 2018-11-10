/**
 * Objects
 */

const user = {
  admin: false,
  firstName: 'John',
  lastName: 'Doe',
  info: {
    active: true,
    posts: 3018,
  },
  username: 'johndoe',
};

// let firstName = user.firstName;
let { firstName } = user;

// alias
let { firstName: name } = user;

// default values
let { admin = false } = user;

// go deeper
let { info: { posts } } = user;

/**
 * Arrays
 */

let interests = ['javascript', 'music', 'books'];

// let first = interests[0];
// let second = interests[1];
// let third = interests[2];
let [first, second, third] = interests;

// skip items
[first, , third] = interests;

// swap without aux
[first, third] = [third, first];
