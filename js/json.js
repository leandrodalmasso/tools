/**
 * JSON.stringify()
 * Converts object into JSON
 */

let student = {
  name: 'John',
  age: 30,
  courses: [
    'html',
    'css',
    'js'
  ],
};

let json = JSON.stringify(student);

/**
 * JSON.parse()
 * Converts JSON into object
 */

let obj = JSON.parse(json);
