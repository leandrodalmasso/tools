import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppWithModal,
  GreetingWithName,
  GreetingWithNameWithCard
} from './components/hoc';

ReactDOM.render(
  <GreetingWithNameWithCard />,
  document.getElementById('root')
);
