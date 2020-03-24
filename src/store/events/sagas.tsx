import { all, call, fork, put, takeEvery, select } from 'redux-saga/effects';

import { callApi } from '../../utils/api';
import { 
  GET_ALL_REQUEST, 
  GET_MOST_LIKED_REQUEST,
  GET_REQUEST, 
  SEARCH_REQUEST, 
  CREATE_REQUEST, 
  LIKE_REQUEST
} from './types';
import { 
  getAllRequest,
  getAllSuccess, 
  getSuccess, 
  searchSuccess,
  requestFailure,
  likeSuccess,
  getMostLikedSuccess
} from './actions';
import { selectedCategoty } from '../categories/selectors';

function* handleGetAll(action) {
  try {
    const category = yield select(selectedCategoty)
    const res = yield call(callApi, 'get', `/categories/${category.id}/events?page=${action.payload}`)

    if (res.error) {
      yield put(requestFailure(res.error))
    } else {
      yield put(getAllSuccess(res.events))
    }
  } catch (err) {
    yield put(requestFailure(err.stack))
  }
}

function* handleGetMostLiked() {
  try {
    const res = yield call(callApi, 'get', `/events/mostliked`)

    if (res.error) {
      yield put(requestFailure(res.error))
    } else {
      yield put(getMostLikedSuccess(res.events))
    }
  } catch (err) {
    yield put(requestFailure(err.stack))
  }
}

function* handleGet() {
  try {
    const category = yield select(selectedCategoty)
    const res = yield call(callApi, 'get', `/events/${category.id}`)

    if (res.error) {
      yield put(requestFailure(res.error))
    } else {
      yield put(getSuccess(res))
    }
  } catch (err) {
    yield put(requestFailure(err.stack))
  }
}

function* handleSearch(action) {
  try {
    const res = yield call(callApi, 'get', `/events/search?keyword=${action.payload}`)

    if (res.error) {
      yield put(requestFailure(res.error))
    } else {
      yield put(searchSuccess(res))
    }
  } catch (err) {
    yield put(requestFailure(err.stack))
  }
}

function* handleCreate(action) {
  try {
    const category = yield select(selectedCategoty)
    const res = yield call(callApi, 'post', `/categories/${category.id}/events`, action.payload)

    if (res.error) {
      yield put(requestFailure(res.error))
    } else {
      yield put(getAllRequest())
    }
  } catch (err) {
    yield put(requestFailure(err.stack))
  }
}

function* handleLike() {
  try {
    const res = yield call(callApi, 'post', `/events/:ID/like`)

    if (res.error) {
      yield put(requestFailure(res.error))
    } else {
      yield put(likeSuccess(res))
    }
  } catch (err) {
    yield put(requestFailure(err.stack))
  }
}

function* watchGetAllRequest() {
  yield takeEvery(GET_ALL_REQUEST, handleGetAll)
}

function* watchGetMostLikedRequest() {
  yield takeEvery(GET_MOST_LIKED_REQUEST, handleGetMostLiked)
}

function* watchGetRequest() {
  yield takeEvery(GET_REQUEST, handleGet)
}

function* watchSearchRequest() {
  yield takeEvery(SEARCH_REQUEST, handleSearch)
}

function* watchCreateRequest() {
  yield takeEvery(CREATE_REQUEST, handleCreate)
}

function* watchLikeRequest() {
  yield takeEvery(LIKE_REQUEST, handleLike)
}

function* eventsSaga() {
  yield all([
    fork(watchGetAllRequest),
    fork(watchGetMostLikedRequest),
    fork(watchGetRequest),
    fork(watchSearchRequest),
    fork(watchCreateRequest),
    fork(watchLikeRequest)
  ])
}

export default eventsSaga;