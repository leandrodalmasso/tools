// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a - b
const sub = (a, b) => a - b

// these are just to simulate an async function
const sumAsync = (...args) => Promise.resolve(sum(...args))
const subAsync = (...args) => Promise.resolve(sub(...args))

module.exports = {sum, sub, sumAsync, subAsync}