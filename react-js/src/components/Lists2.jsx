import React from 'react';

export const numbers = [4, 8, 15, 16, 23, 42];

function ListItem({ item }) {
  return (
    // Correct! There is no need to specify the key here:
    <li>{item}</li>
  );
}

function NumbersList({ numbers }) {
  const listItems = numbers.map(
    // Correct! Key should be specified inside the array.
    number => <ListItem item={number} key={number.toString()} />
  )

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default NumbersList;
