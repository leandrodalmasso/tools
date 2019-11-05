const { sum, sub } = require('../math');

/*
a test is code that throws an error when the actual result
of something does not match an expected output
*/

let result = 0;
let expected = 0;

result = sum(3, 7);
expected = 10;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = sub(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}