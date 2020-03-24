import { combineReducers } from 'redux';

import categoriesReducer from './categories/reducers';
import isLoadingReducer from './isLoadingReducer';
import errorReducer from './errorReducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
})
