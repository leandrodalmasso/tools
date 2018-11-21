// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './style.css';

function DogImage({ dog }) {
  return (
    <img
      alt=""
      className="dog-image"
      src={dog}
    />
  );
}

DogImage.propTypes = {
  dog: PropTypes.string.isRequired,
}

export default DogImage;
