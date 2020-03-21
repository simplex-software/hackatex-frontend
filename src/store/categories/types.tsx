export interface Category {
  id: number;
  name: string;
}

export interface CategoriesState {
  categories: Category[];
}

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

interface FetchCategoriesAction {
  type: typeof FETCH_CATEGORIES;
  payload: Category[];
}

export type CategoryActionTypes =
  | FetchCategoriesAction;
