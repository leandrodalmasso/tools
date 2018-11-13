import React from 'react';

import './../styles/fancyBorder.css'

function FancyBorder({ children, color }) {
  return (
    <div className={`fancyBorder fancyBorder--${color}`}>
      {children}
    </div>
  );
}

export default FancyBorder;
