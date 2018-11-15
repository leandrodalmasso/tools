import { ADD, MINUS, RESET } from './actionTypes';

export function add() {
  return {
    type: ADD,
  };
}

export function minus() {
  return {
    type: MINUS,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
