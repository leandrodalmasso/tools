import React from 'react';
import './../styles/modal.css';

/*
A hoc is a function that takes a component and returns a new component.

It transforms a component into another component.
*/

/**
 * Re-use data
 */

const withInjectedProps = (Component, injectedProps) => (props) => (
  <Component {...injectedProps}/>
);

const withInjectedProps2 = (injectedProps) => (Component) => (props) => (
  <Component {...injectedProps}/>
);

function Greeting(props) {
  return <h1>{`Hello ${props.name}!`}</h1>;
}

export const GreetingWithName = withInjectedProps(Greeting, { name: 'Mary Poppins' });
export const GreetingWithName2 = withInjectedProps2({ name: 'Mary Poppins' })(Greeting);

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

const Modal = ({ children, handleClose, show }) => (
  show && (
    <div className="modal">
      <div className="modal__content">
        {children}
        <button className="modal__button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  )
);

const withShowModal = (Component) => (
  class ShowModal extends React.Component {
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
        <React.Fragment>
          <Component openModal={this.showModal} />
          <Modal handleClose={this.hideModal} show={showModal}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Modal>
        </React.Fragment>
      );
    }
  }
);

const App = ({ openModal }) => (
  <button onClick={openModal} type="button">
    Open Modal
  </button>
);

export const AppWithShowModal = withShowModal(App);
