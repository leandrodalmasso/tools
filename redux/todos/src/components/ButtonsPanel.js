// Dependencies
import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';

// Actions
import { setVisibilityFilter } from './../actions/index';

// Constants
import { visibilityFilters } from  './../utils/constants';

const ButtonsPanel = ({ setVisibilityFilter }) => (
  <div>
    <span>Show:</span>
    <Button
      onClick={() =>
        setVisibilityFilter(visibilityFilters.SHOW_ALL
      )}
      text="All"
    />
    <Button
      onClick={() =>
        setVisibilityFilter(visibilityFilters.SHOW_ACTIVE
      )}
      text="Active"
    />
    <Button
      onClick={() =>
        setVisibilityFilter(visibilityFilters.SHOW_COMPLETED
      )}
      text="Completed"
    />
  </div>
);

export default connect(
  null,
  { setVisibilityFilter }
)(ButtonsPanel);
