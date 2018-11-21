// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// Styles
import './style.css';

function Message({ error, text }) {
  return (
    <p
      className={cn(
        'message',
        { 'message--error': error },
      )}
    >
      {text}
    </p>
  );
}

Message.propTypes = {
  error: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Message;
