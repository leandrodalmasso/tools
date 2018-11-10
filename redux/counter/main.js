// Action types

const ADD = 'ADD';
const MINUS = 'MINUS';
const RESET = 'RESET';

// Action creators

function add() {
  return {
    type: ADD,
  };
}

function minus() {
  return {
    type: MINUS,
  };
}

function reset() {
  return {
    type: RESET,
  }
}

// Reducer

function reducer(state = { count: 0, }, action) {
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

// Store

let store = Redux.createStore(reducer);

// Event handlers that dispatch actions

const addButton = document.getElementById('add');
addButton.addEventListener(
  'click',
  () => store.dispatch(add())
);

const minusButton = document.getElementById('minus');
minusButton.addEventListener(
  'click',
  () => store.dispatch(minus())
);

const resetButton = document.getElementById('reset');
resetButton.addEventListener(
  'click',
  () => store.dispatch(reset())
);

// Listeners

const counterEl = document.getElementById('counter');
let state;

function render() {
  state = store.getState();
  counterEl.innerHTML = state.count.toString();
}

store.subscribe(render);

render();

/*
Data Flow

1. When the script is executed the store is created.

2. The store calls the reducer and the reducer initializes the state.

3. The render method is executed and the counter element renders 0

4. When a button is clicked an action is dispatched.

5. The store calls the reducer function, passing it the current state tree and the action that was dispatched.

6. The Reducer returns a new state tree.

7. The store saves the complete state tree returned by the reducer.

8. Listeners registered with store.subscribe(listener) are invoked, they call store.getState() to get the new state and update the UI.
*/
