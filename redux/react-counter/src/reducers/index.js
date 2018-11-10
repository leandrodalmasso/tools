import {ADD, MINUS, RESET } from '../actions/actionTypes';

export default function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case ADD:
      return {
        count: state.count + 1,
      };

    case MINUS:
      return {
        count: state.count - 1,
      };

    case RESET:
      return {
        count: 0,
      };

    default:
      return state;
  }
}
