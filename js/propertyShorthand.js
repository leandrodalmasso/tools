function createPerson(age, name) {
  return {
    age,
    name,
    sayHi() {
      console.log('hi!');
    },
  };
}

const person = createPerson(29, 'Mary');
console.log(person); // { age : 29, name: 'Mary' }
person.sayHi(); // hi!
