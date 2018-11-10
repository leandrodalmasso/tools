/*
Default function parameters allow formal parameters to be initialized with default values if no value or undefined is passed as an argument.
*/

function power(base, exponent = 2) {
  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
}

console.log(power(4)); // 16
console.log(power(4, 3)); // 64
