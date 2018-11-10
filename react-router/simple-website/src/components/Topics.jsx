import React from 'react';
import { Link, Route } from 'react-router-dom';
import Topic from './Topic';

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/react`}>React</Link>
        </li>
        <li>
          <Link to={`${match.url}/router`}>Router</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topic`} component={Topic} />
    </div>
  );
}

export default Topics;
