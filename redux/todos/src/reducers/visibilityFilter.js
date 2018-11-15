// Actions
import { SET_VISIBILITY_FILTER } from './../actions/actionTypes';

// Constants
import { visibilityFilters } from './../utils/constants';

const visibilityFilter = (state = visibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
  
    default:
      return state;
  }
};

export default visibilityFilter;
