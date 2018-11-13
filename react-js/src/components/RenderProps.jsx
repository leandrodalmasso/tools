import React from 'react';
import cat from './../images/cat.png';

function Cat({ mouse }) {
  return (
    <img
      src={cat}
      style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
    />
  );
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ minHeight: '600px' }} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the 'render' prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

function MouseTracker() {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse
        render={mouse => <Cat mouse={mouse} />}
      />
    </div>
  );
}

export default MouseTracker;
