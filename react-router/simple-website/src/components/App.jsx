import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';

import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            activeClassName="active"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/topics">
            Topics
          </NavLink>
        </li>
      </ul>

      <hr/>

      <Route
        component={Home}
        exact 
        path="/"
      />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  );
}

export default App;
