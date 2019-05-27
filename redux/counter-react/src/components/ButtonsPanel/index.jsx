import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
// import { add, minus, reset } from '../../actions';
import * as actions from '../../actions';
import './style.css';

function ButtonsPanel({ add, minus, reset }) {
  return(
    <div className="buttons-panel">
      <Button
        color="green"
        onClick={add}
        text="Add"
      />
      <Button
        color="blue"
        onClick={minus}
        text="Minus"
      />
      <Button
        color="red"
        onClick={reset}
        text="Reset"
      />
    </div>
  );
}

/**
 * mapDispatchToProps
 */

// const mapDispatchToProps = (dispatch) => ({
//   add: () => dispatch(add()),
//   minus: () => dispatch(minus()),
//   reset: () => dispatch(reset()),
// });

// export default connect(null, mapDispatchToProps)(ButtonsPanel);

/**
 * Object shorthand
 */

// export default connect(null, {
//   add: add,
//   minus: minus,
//   reset: reset,
// })(ButtonsPanel);

/**
 * Another way to use the shorthand
 */

export default connect(null, actions)(ButtonsPanel);
