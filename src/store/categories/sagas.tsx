import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

import { requestError, getAllSuccess } from './actions'
import { callApi, API_ENDPOINT } from '../../utils/api'
import { GET_ALL_REQUEST } from './types'

function* handleGetAll() {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, '/categories')

    if (res.error) {
      yield put(requestError(res.error))
    } else {
      yield put(getAllSuccess(res.categories))
    }
  } catch (err) {
    yield put(requestError(err.stack))
  }
}

function* watchGetAllRequest() {
  yield takeEvery(GET_ALL_REQUEST, handleGetAll)
}

function* categoriesSaga() {
  yield all([fork(watchGetAllRequest)])
}

export default categoriesSaga;