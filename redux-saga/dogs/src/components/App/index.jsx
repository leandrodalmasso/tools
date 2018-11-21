// Dependencies
import React from 'react';
import { connect } from "react-redux";

// Components
import Button from '../Button';
import DogImage from '../DogImage';
import Message from '../Message';

// Style
import './style.css';

// Actions
import { requestDog } from './actions';

function App({ dog, error, fetching, requestDog }) {
  return (
    <div className="app">
      <Button
        color="purple"
        onClick={requestDog}
        text="Dog picture!"
      />
      {dog && 
        <DogImage
          dog={dog}
        />
      }
      {fetching &&
        <Message
          error={false}
          text="Loading..."
        />
      }
      {error &&
        <Message
          error={true}
          text={`${error.message}. Please, try again!`}
        />
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error,
  };
}

export default connect(
  mapStateToProps,
  { requestDog },
)(App);
