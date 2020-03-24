import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

import { requestFailure, getAllSuccess } from './actions'
import { callApi } from '../../utils/api'
import { GET_ALL_REQUEST } from './types'

function* handleGetAll() {
  try {
    const res = yield call(callApi, 'get', '/categories')

    if (res.error) {
      yield put(requestFailure(res.error))
    } else {
      yield put(getAllSuccess(res.categories))
    }
  } catch (err) {
    yield put(requestFailure(err.stack))
  }
}

function* watchGetAllRequest() {
  yield takeEvery(GET_ALL_REQUEST, handleGetAll)
}

function* categoriesSaga() {
  yield all([fork(watchGetAllRequest)])
}

export default categoriesSaga;