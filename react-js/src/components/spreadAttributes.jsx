import React from 'react';

function Greeting({ name, ...restProps }) {
  return (
    <div {...restProps} >
      <h1>{`Hello ${name}!`}</h1>
    </div>
  );
}

export default Greeting;

/*
We can use spread attributes to separate component-specific props from DOM/platform-specific attributes

ReactDOM.render(
  <Greeting name="Harry" id="user-greeting" />,
  document.getElementById('root')
);
*/
