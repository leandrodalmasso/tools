import React from 'react';

function Greeting({ name }) {
  return (
    <h1>Hello, {name}!</h1>
  );
}

Greeting.defaultProps = {
  name: 'User',
};

export default Greeting;