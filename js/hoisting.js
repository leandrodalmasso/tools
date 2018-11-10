/*
Variable and function declarations are put into memory before code execution
*/

sayHiTo('Mary'); // Hi Mary!

function sayHiTo(name) {
  console.log(`Hi ${name}!`);
}

/*
In function expressions, only declaration is put into memory before code execution
*/

try {
  console.log(returnTwo());
} catch (error) {
  const msg = `${error.name}: ${error.message}`
  console.log(msg); // ReferenceError: returnTwo is not defined
}

const returnTwo = function() {
  return 2;
}
