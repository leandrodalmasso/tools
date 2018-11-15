import React from 'react';
import { connect } from 'react-redux';
import ButtonsPanel from '../ButtonsPanel';
import './style.css';

function Counter({ count }) {
  return(
    <div className="counter">
      <h1 className="counter__indicator">{count}</h1>
      <ButtonsPanel />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(Counter);
