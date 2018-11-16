import React from 'react';

/*
A hoc is a function that takes a component and returns a new component.

It transforms a component into another component.
*/

/**
 * Add a prop
 */

const withName = (Component) => (props) => (
  <Component {...props} name="Mary Poppins" />
);

function Greeting(props) {
  return <h1>{`Hello ${props.name}!`}</h1>;
}

export const GreetingWithName = withName(Greeting);

/**
 * Add structure
 */

const divStyle = {
  border: '4px solid black',
  borderRadius: '4px',
  margin: '0 auto',
  maxWidth: '600px',
  padding: '20px',
};

const withCard = (Component) => (props) => (
  <div style={divStyle}>
    <Component {...props} />
  </div>
);

export const GreetingWithNameWithCard = withCard(GreetingWithName);

/**
 * Add functionality
 */
