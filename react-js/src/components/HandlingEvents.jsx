import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /*
  Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

  To fix it, use a second form of setState() that accepts a function rather than an object:

  this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
  }));
  */

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;
