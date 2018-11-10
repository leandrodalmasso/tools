import React from 'react';

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topic}</h3>
    </div>
  );
}

export default Topic;
