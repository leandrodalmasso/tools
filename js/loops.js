let i = 0;

/**
 * while
 */

while (i <= 4) {
  console.log(i);
  i++;
}

/**
 * do while
 */

do {
  console.log(i);
} while (i < 4);

/**
 * for
 */

for (i; i >= 0; i--) {
  console.log(i);
}

/**
 * for...of
 */

const numbers = [4, 8, 15, 16, 23, 42];

for (let number of numbers) {
  console.log(number);
}

/**
 * for...in
 */

let person = {
  admin: false,
  age: 30,
  firstName: 'John',
  lastName: 'Doe',
};

for (let property in person) {
  console.log(person[property]);
}
