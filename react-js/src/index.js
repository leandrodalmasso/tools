import React from 'react';
import ReactDOM from 'react-dom';
import {
  GreetingWithName,
  GreetingWithNameWithCard
} from './components/hoc';

ReactDOM.render(
  <GreetingWithNameWithCard />,
  document.getElementById('root')
);
