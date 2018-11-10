/*
Every function or code block can access the variables of its outer scopes.
*/

let x = 100;
let y;

function fun() {
  let x = 50;
  y = 100;
}

fun();

console.log(x); // 100
console.log(y); // 100

/*
A closure is a function that references local variables from its outer scope.
*/

function outer() {
  const outerVariable = 'something';

  function inner() {
    console.log(outerVariable);
  }

  return inner;
}

const myFunction = outer();
myFunction(); // something
