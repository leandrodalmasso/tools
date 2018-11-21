// Action types
import {
  DOG_REQUEST,
  DOG_REQUEST_SUCCESS,
  DOG_REQUEST_FAILED,
} from './actionTypes';

const initialState = {
  fetching: false,
  dog: null,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case DOG_REQUEST:
      return {
        ...state,
        fetching: true,
        dog: null,
        error: null
      }

    case DOG_REQUEST_SUCCESS:
      return {
        ...state,
        fetching: false,
        dog: action.dog,
      }

    case DOG_REQUEST_FAILED:
      return {
        ...state,
        fetching: false,
        dog: null,
        error: action.error,
      }
  
    default:
      return state;
  }
}

export default reducer;
