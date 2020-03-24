import { all, fork } from 'redux-saga/effects';

import categoriesSaga from './categories/sagas';
import eventsSaga from './events/sagas';

export function* rootSaga() {
  yield all([
    fork(categoriesSaga), 
    fork(eventsSaga),
  ])
}
