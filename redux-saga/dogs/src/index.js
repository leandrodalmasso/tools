// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';

// Reducers
import reducer from './components/App/reducer';

// Sagas
import watcherSaga from './components/App/sagas';

// Components
import App from './components/App';

const reduxDevTools = (
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const sagaMiddleware = createSagaMiddleware();

// Store
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

// run the watcherSaga, so that it can trigger the workerSaga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
