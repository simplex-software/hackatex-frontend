import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import eventsReducer from './events/reducers';
import categoriesReducer from './categories/reducers';
import commentsReducer from './comments/reducers';

const rootReducer = combineReducers({
  events: eventsReducer,
  categories: categoriesReducer,
  comments: commentsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );

  return store;
}