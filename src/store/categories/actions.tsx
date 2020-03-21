import { 
  Category, 
  CategoryActionTypes,
  FETCH_CATEGORIES
} from "./types";

export function fetchCategories(categories: Category[]): CategoryActionTypes {
  return {
    type: FETCH_CATEGORIES,
    payload: categories,
  };
}
