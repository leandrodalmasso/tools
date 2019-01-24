import React from 'react';
import './../styles/modal.css';

/*
A hoc is a function that takes a component and returns a new component.

It transforms a component into another component.
*/

/**
 * Re-use data
 */

function Greeting(props) {
  return <h1>{`Hello ${props.name}!`}</h1>;
}

const withInjectedProps = (Component, injectedProps) => () => (
  <Component {...injectedProps}/>
);

export const GreetingWithName = withInjectedProps(Greeting, { name: 'Mary Poppins' });

/**
 * Re-use structure
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
 * Re-use functionality
 */

const withModal = (Component) => ({ handleClose, show }) => (
  show && (
    <div className="modal">
      <div className="modal__content">
        <Component />
        <button className="modal__button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  )
);

const GreetingWithNameWithModal = withModal(GreetingWithName);
const GreetingWithNameWithCardWithModal = withModal(GreetingWithNameWithCard);

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  hideModal() {
    this.setState({
      showModal: false,
    });
  }

  showModal() {
    this.setState({
      showModal: true,
    });
  }

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button onClick={this.showModal} type="button">
          Open Modal
        </button>

        <GreetingWithNameWithCardWithModal
          handleClose={this.hideModal}
          show={showModal}
        />
      </div>
    );
  }
}
