/*
Principles of redux:

1. The whole state of the app is represented as a single JS object.

2. State is read-only.
The only way to change the state is to dispatch an action.
An action is a JS object that describes what happened.

3. Changes are made with pure functions.
To specify how the state tree is transformed by actions, you write reducers.
Reducers are pure functions that take the previous state and an action and return the new state.

-----------------------

The store:

- Holds the app's state object
- Allows access to state via getState()
- Lets you dispatch actions via dispatch(action)
- When an action is dispatched, it calls the reducer with the state and the action to get a new state.
- Registers listeners via subscribe(listener). Once the state is updated the listeners execute to update the UI.
*/

// action types
const ADD = 'ADD';
const MINUS = 'MINUS';
const RESET = 'RESET';

// action creators
const add = () => ({ type: ADD });
const minus = () => ({ type: MINUS });
const reset = () => ({ type: RESET });

// reducer
const reducer = (state = { count: 0, }, action) => {
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

// store
const store = Redux.createStore(reducer);

// event handlers
const addButton = document.getElementById('add');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

addButton.addEventListener(
  'click',
  () => store.dispatch(add())
);

minusButton.addEventListener(
  'click',
  () => store.dispatch(minus())
);

resetButton.addEventListener(
  'click',
  () => store.dispatch(reset())
);

// listeners
const counterEl = document.getElementById('counter');

const render = () => {
  const state = store.getState();
  counterEl.innerHTML = state.count.toString();
}

store.subscribe(render);

render();

/*
What's happening?

1. When the script is executed the store is created.
2. The store calls the reducer with a dummy action and the reducer initializes the state.
3. The render method is executed and the counter element renders 0
4. When a button is clicked an action is dispatched.
5. The store calls the reducer function, passing it the current state tree and the action that was dispatched.
6. The reducer returns a new state tree.
7. The store saves the complete state tree returned by the reducer.
8. Listeners registered with store.subscribe(listener) are invoked, they call store.getState() to get the new state and update the UI.
*/