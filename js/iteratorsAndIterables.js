/**
 * Iterator
 */

function createIterator(array) {
  let index = 0;

  const iterator = {
    next() {
      return (index < array.length) ? (
        { value: array[index++], done: false }
      ) : (
        { done: true }
      );
    }
  };

  return iterator;
}

const myArray = [1, 2, 3];
const myIterator = createIterator(myArray);
console.log(myIterator.next()); // { value: 1, done: false }
console.log(myIterator.next()); // { value: 2, done: false }
console.log(myIterator.next()); // { value: 3, done: false }
console.log(myIterator.next()); // { done: true }
console.log(myIterator.next()); // { done: true }

/**
 * Iterable
 */

const myFavouriteAuthors = {
  fiction: [
    'Michel Houellebecq',
    'Jorge Luis Borges',
  ],
  philosophy: [
    'Walter Benjamin',
  ],

  [Symbol.iterator]() {
    let index = 0;
    const authors = [...this.fiction, ...this.philosophy];

    const iterator = {
      next() {
        return (index < authors.length) ? (
          { value: authors[index++], done: false }
        ) : (
          { done: true }
        )
      }
    };

    return iterator;
  }
};

for (author of myFavouriteAuthors) {
  console.log(author);
}

// Michel Houellebecq
// Jorge Luis Borges
// Walter Benjamin
