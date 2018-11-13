import React from 'react';

function Dialog({ title, message }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

class LogInDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn,
    }));
  }

  render() {
    return (
      this.state.loggedIn ?
        <div>
          <Dialog
            title="Welcome!"
            message="Press the button to logout."
          />
          <button onClick={this.handleClick}>
            Logout
          </button>
        </div>
      :
        <div>
          <Dialog
            title="Thank you for visiting our site!"
            message="Press the button to login."
          />
          <button onClick={this.handleClick}>
            Login
          </button>
        </div>
    );
  }
}

export default LogInDialog;
