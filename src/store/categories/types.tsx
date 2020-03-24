export interface Category {
  id: number;
  name: string;
}

export interface CategoriesState {
  categories: Category[];
  category: Category;
}

export const GET_ALL_REQUEST = '@@categories/GET_ALL_REQUEST';
export const GET_ALL_SUCCESS = '@@categories/GET_ALL_SUCCESS';
export const SELECT = '@@categories/SELECT'
export const REQUEST_FAILURE = '@@categories/REQUEST_FAILURE';

interface GetAllCategoriesRequestAction {
  type: typeof GET_ALL_REQUEST;
}

interface GetAllCategoriesSuccessAction {
  type: typeof GET_ALL_SUCCESS;
  payload: Category[];
}

interface SelectCategorieSuccessAction {
  type: typeof SELECT;
  payload: Category;
}

interface CategoriesFailureAction {
  type: typeof REQUEST_FAILURE;
  payload: string;
}

export type CategoryActionTypes =
  | GetAllCategoriesRequestAction
  | GetAllCategoriesSuccessAction
  | SelectCategorieSuccessAction
  | CategoriesFailureAction;
