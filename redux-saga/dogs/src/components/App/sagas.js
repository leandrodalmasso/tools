// Dependencies
import { takeLatest, call, put } from "redux-saga/effects";

// Api
import { fetchDog } from './api';

// Action types
import {
  DOG_REQUEST,
  DOG_REQUEST_SUCCESS,
  DOG_REQUEST_FAILED,
} from './actionTypes';

export function* watcherSaga() {
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
