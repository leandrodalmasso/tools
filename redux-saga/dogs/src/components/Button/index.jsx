// Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Styles
import './style.css';

function Button({ className, onClick, text }) {
  return(
    <button className={className} onClick={onClick} >
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button;
