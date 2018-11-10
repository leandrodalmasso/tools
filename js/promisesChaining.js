/*
A call to promise.then returns a promise, so we can chain another .then on it.

When a value is returned, it becomes the result of that promise.

When a promise rejects, the control jumps to the closest rejection handler down the chain.
*/

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  console.log(result); // 1
  return result * 2;

}).then(function(result) {

  console.log(result); // 2
  return result * 2;

}).then(function(result) {

  console.log(result); // 4

}).catch(function(error) {

  console.log(error.message);

});
