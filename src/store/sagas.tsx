import { all, fork } from 'redux-saga/effects';
import categoriesSaga from './categories/sagas';

export function* rootSaga() {
  yield all([
    fork(categoriesSaga)
  ])
}