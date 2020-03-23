export interface Category {
  id: number;
  name: string;
}

export interface CategoriesState {
  loading: boolean;
  categories: Category[];
  errors?: string;
}

export const GET_ALL_REQUEST = '@@categories/GET_ALL_REQUEST';
export const GET_ALL_SUCCESS = '@@categories/GET_ALL_SUCCESS';
export const REQUEST_ERROR = '@@categories/REQUEST_ERROR';

interface GetAllCategoriesRequestAction {
  type: typeof GET_ALL_REQUEST;
}

interface GetAllCategoriesSuccessAction {
  type: typeof GET_ALL_SUCCESS;
  payload: Category[];
}

interface CategoriesErrorAction {
  type: typeof REQUEST_ERROR;
  payload: string;
}

export type CategoryActionTypes =
  | GetAllCategoriesRequestAction
  | GetAllCategoriesSuccessAction
  | CategoriesErrorAction;
