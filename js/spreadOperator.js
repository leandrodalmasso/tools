/**
 * Function calls
 */

let numbers = [4, 8, 15, 16, 23, 42];
let maxValue = Math.max(...numbers);

/**
 * Arrays
 */

let array = [2, 3, 4];
let anotherArray = [1, ...array, 5];

/**
 * Objects
 */

let props = {
  height: 200,
  width: 300,
};

// clone
let anotherProps = {...props};

// override
let newWidth = {
  width: 400,
};
props = {...props, ...newWidth};

// merge
let otherProps = {
  color: 'blue',
};
let newProps = {...props, ...otherProps};

/**
 * Nested objects
 */

let user = {
  stats: {
    active: true,
    posts: 3018,
  },
  username: 'johndoe',
}

let clone = {...user};
console.log(user.stats === clone.stats) // true

clone = {
  ...user,
  stats: {
    ...user.stats,
  },
}

console.log(user.stats === clone.stats) // false
