import * as ACTION_TYPES from './actionTypes';

let todoId = 0;

export const addTodo = text => ({
  type: ACTION_TYPES.ADD_TODO,
  id: todoId++,
  text
});

export const toggleTodo = id => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  id
});

export const setVisibilityFilter = filter => ({
  type: ACTION_TYPES.SET_VISIBILITY_FILTER,
  filter
});
