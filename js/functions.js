/**
 * Function declaration
 */

function isLess(a, b) {
  return a < b;
}

/**
 * Function expression
 */

const makeNoise = function() {
  console.log('Pling!');
};

/**
 * Arrow functions
 */

const isEqual = (a, b) => {
  return a === b;
};

const square = x => x * x;

const horn = () => console.log('Toot');
