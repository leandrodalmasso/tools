import React from 'react';

export const numbers = [4, 8, 15, 16, 23, 42];

function NumbersList({ numbers }) {
  const listItems = numbers.map(
    number => <li key={number.toString()}>{number}</li>
  );

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default NumbersList;
