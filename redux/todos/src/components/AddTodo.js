// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Button from './Button';

// Actions
import { addTodo } from './../actions/index';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value,
    });
  }

  handleClick(e) {
    const { addTodo } = this.props;
    const { todo } = this.state;

    if (todo) {
      addTodo(todo);

      this.setState({
        todo: '',
      });
    }

    e.preventDefault();
  }

  render() {
    const { todo } = this.state;

    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            value={todo}
          />
          <Button onClick={this.handleClick} text="Add todo" />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addTodo }
)(AddTodo);
