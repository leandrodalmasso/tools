import React from 'react';
import PropTypes from 'prop-types';

function NumberAndString({ num, str }) {
  return (
    <div>
      <h1>{num}</h1>
      <h1>{str}</h1>
    </div>
  );
}

NumberAndString.propTypes = {
  num: PropTypes.number.isRequired,
  str: PropTypes.string.isRequired,
};

export default NumberAndString;
