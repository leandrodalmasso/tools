let suffix = 'name';

let person = {
  ['first' + suffix]: 'John',
  ['last' + suffix]: 'Doe',
};

console.log(person); // { firstname: 'John', lastname: 'Doe' }
