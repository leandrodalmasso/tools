// Dependencies
import { combineReducers } from 'redux';

// Reducers
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter
});
