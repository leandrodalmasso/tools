// Dependencies
import PropTypes from 'prop-types';
import React from 'react';

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
