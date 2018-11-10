/*
Generators are functions that can be paused and resumed
*/

function* generatorFunction() {
  yield 'Hello';
  yield 'generators!';
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

// { value: 'Hello', done: false }
// { value: 'generators!', done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }
