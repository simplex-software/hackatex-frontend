import { combineReducers } from 'redux';

import categoriesReducer from './categories/reducers';
import eventsReducer from './events/reducers';
import commentsReducer from './comments/reducers';
import isLoadingReducer from './isLoadingReducer';
import errorReducer from './errorReducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  events: eventsReducer,
  comments: commentsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
})
