// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Components
import App from './components/App';

// Reducer
import rootReducer from './reducers/rootReducer';

const reduxDevTools = (
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Store
const store = createStore(
  rootReducer,
  reduxDevTools
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
