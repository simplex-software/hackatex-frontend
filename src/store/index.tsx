import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import eventsReducer from './events/reducers';
import categoriesReducer from './categories/reducers';
import commentsReducer from './comments/reducers';
import { rootSaga } from './sagas';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  events: eventsReducer,
  comments: commentsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}