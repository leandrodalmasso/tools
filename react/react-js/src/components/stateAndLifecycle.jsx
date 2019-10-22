import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };

    this.tick = this.tick.bind(this);
  }

  /*
  Note how we save the timer ID right on this.

  While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).
  */

  componentDidMount() {
    this.timer = setInterval(
      this.tick,
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h2>It is {this.state.date.toLocaleTimeString()}</h2>
    );
  }
}

export default Clock;
