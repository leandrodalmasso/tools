import React from 'react';

import './Composition2.css';

function FancyBorder({ children, color }) {
  return (
    <div className={`fancyBorder fancyBorder--${color}`}>
      {children}
    </div>
  );
}

export default FancyBorder;
