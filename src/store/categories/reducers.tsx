import { 
  CategoriesState, 
  CategoryActionTypes, 
  FETCH_CATEGORIES 
} from "./types";

const initialState: CategoriesState = {
  categories: [],
};

export default function categoriesReducer(
  state = initialState,
  action: CategoryActionTypes,
): CategoriesState {
  switch (action.type) {
    case FETCH_CATEGORIES:
      
    default:
      return state;
  }
}
