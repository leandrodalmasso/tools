// A function can be called with any number of arguments, no matter how it is defined.

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 3

/*
The rest parameters can be mentioned in a function definition with three dots.

They literally mean “gather the remaining parameters into an array”.
*/

function sumAll(a, b, ...numbers) {
  console.log(numbers);

  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return a + b + sum;
}

console.log(sumAll(1, 2)); // [] // 3
console.log(sumAll(1, 2, 3, 4, 5)); // [ 3, 4, 5 ] // 15
