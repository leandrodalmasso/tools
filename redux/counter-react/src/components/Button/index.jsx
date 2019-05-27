import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Button({ color, onClick, text }) {
  return(
    <button
      className={`button button--${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button;
