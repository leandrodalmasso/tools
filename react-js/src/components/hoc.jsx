import React from 'react';

function withName(WrappedComponent) {
  class ModifiedComponent extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          name="Mary Poppins"
        />
      );
    }
  }

  return ModifiedComponent;
}

function Greeting(props) {
  return <h1>{`Hello ${props.name}!`}</h1>;
}

export const GreetingWithName = withName(Greeting);

const divStyle = {
  border: '4px solid black',
  borderRadius: '4px',
  margin: '0 auto',
  maxWidth: '600px',
  padding: '20px',
};

function withCard(Component) {
  return function ComponentWithCard(props) {
    return (
      <div style={divStyle}>
        <Component {...props} />
      </div>
    );
  }
}

export const GreetingWithNameWithCard = withCard(GreetingWithName);
