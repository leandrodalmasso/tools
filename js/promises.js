/*
We have:

1. A 'producing code' that does something that takes time.
2. A 'consuming code' that wants the result of the 'producing code'.

A promise is a special JS object that links the 'producing code' and the 'consuming code' together.
*/

/**
 * Create a promise
 */

let promise = new Promise(
  // executor
  function(resolve, reject) {
    // producing code
  }
);

/*
The resulting promise object has internal properties:

1. state (pending, fulfilled or rejected)
2. result (a value, initially undefined)

When the executor finishes execution, it calls one of the functions that it gets as arguments:

resolve(value)
Sets state to 'fullfilled' and result to value

reject(error)
Sets state to 'rejected' and result to error
*/

let promiseThatResolves = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('done!'), 1000);
});

let promiseThatIsRejected = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('oops!')), 1000);
});

/*
Consuming functions will receive the result or an error.

They can be registered (subscribed) using the methods .then and .catch
*/

promiseThatResolves.then(
  result => console.log(result),
  error => console.log(error)
);

// promise.catch(f) is the same as promise.then(null, f)
promiseThatIsRejected.catch(
  error => console.log(error.message)
);
