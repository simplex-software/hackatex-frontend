import { all, call, fork, put, takeEvery, select } from 'redux-saga/effects';

import { callApi } from '../../utils/api';
import { GET_ALL_REQUEST, CREATE_REQUEST } from './types';
import { 
  getAllRequest,
  getAllSuccess, 
  requestFailure
} from './actions';
import { selectedEvent } from '../events/selectors';

function* handleGetAll() {
  try {
    const event = yield select(selectedEvent)
    const res = yield call(callApi, 'get', `/events/${event.id}/comments`)

    if (res.error) {
      yield put(requestFailure(res.error))
    } else {
      yield put(getAllSuccess(res))
    }
  } catch (err) {
    yield put(requestFailure(err.stack))
  }
}

function* handleCreate(action) {
  try {
    const event = yield select(selectedEvent)
    const res = yield call(callApi, 'post', `/events/${event.id}/comments`, action.payload)

    if (res.error) {
      yield put(requestFailure(res.error))
    } else {
      yield put(getAllRequest())
    }
  } catch (err) {
    yield put(requestFailure(err.stack))
  }
}

function* watchGetAllRequest() {  
  yield takeEvery(GET_ALL_REQUEST, handleGetAll)
}

function* watchCreateRequest() {
  yield takeEvery(CREATE_REQUEST, handleCreate)
}

function* commentsSaga() {
  yield all([
    fork(watchGetAllRequest),
    fork(watchCreateRequest)
  ])
}

export default commentsSaga;
