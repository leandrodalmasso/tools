// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = { marginLeft: '4px' };

const Button = ({ onClick, text }) => (
  <button onClick={onClick} style={buttonStyle} >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
