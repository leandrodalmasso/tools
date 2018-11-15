// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Todo from './Todo';

// Actions
import { toggleTodo } from './../actions/index';

// Constants
import { visibilityFilters } from './../utils/constants';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        completed={todo.completed}
        key={todo.id}
        onClick={() => toggleTodo(todo.id)}
        text={todo.text}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
  
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)

    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)

    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
};

const mapStatetoProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
})

export default connect(
  mapStatetoProps,
  { toggleTodo }
)(TodoList);
