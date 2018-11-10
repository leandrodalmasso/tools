/*
Variables and constants that are defined outside of a function or block have global scope.
*/

let globalVariable = 1;
const globalConstant = 2;
var varGlobalVariable = 3;

function outer() {
  console.log(globalVariable, globalConstant, varGlobalVariable);

  function inner() {
    console.log(globalVariable, globalConstant, varGlobalVariable);
  }

  inner();
}

outer();

/*
Variables declared with let and constants have block scope.
Variables declared with var have function scope.
*/

if (true) {
  let blockScopedVariable = 4;
  const blockScopedConstant = 5;
  var functionScopedVariable = 6;
}

console.log(functionScopedVariable);
// console.log(blockScopedVariable);
// console.log(blockScopedConstant);

function fun() {
  let anotherBlockScopedVariable = 7;
  const anotherBlockScopedConstant = 8;
  var anotherFunctionScopedVariable = 9;
}

// console.log(anotherBlockScopedVariable);
// console.log(anotherBlockScopedConstant);
// console.log(anotherFunctionScopedVariable);
