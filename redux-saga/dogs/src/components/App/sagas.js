// Dependencies
import { takeLatest, call, put } from "redux-saga/effects";

// Action types
import {
  DOG_REQUEST,
  DOG_REQUEST_SUCCESS,
  DOG_REQUEST_FAILED,
} from './actionTypes';

// Api
import { fetchDog } from './api';

function* watcherSaga() {
  yield takeLatest(DOG_REQUEST, workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    yield put({ type: DOG_REQUEST_SUCCESS, dog });
  } catch (error) {
    yield put({ type: DOG_REQUEST_FAILED, error });
  }
}

export default watcherSaga;
