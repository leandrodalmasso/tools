import React from 'react';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.type === 'checkbox' ?
      e.target.checked
    :
      e.target.value;

    this.setState({
      [e.target.name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            checked={this.state.isGoing}
            name="isGoing"
            onChange={this.handleChange}
            type="checkbox"
          />
        </label>
        <br/>
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            onChange={this.handleChange}
            type="number"
            value={this.state.numberOfGuests}
          />
        </label>
      </form>
    );
  }
}

export default Reservation;
