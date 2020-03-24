import { 
  CategoriesState, 
  CategoryActionTypes,
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  SELECT
} from "./types";

const initialState: CategoriesState = {
  categories: [],
  category: undefined
};

export default function categoriesReducer(
  state = initialState,
  action: CategoryActionTypes,
): CategoriesState {
  switch (action.type) {
    case GET_ALL_REQUEST:
      return { ...state, category: undefined }
    case GET_ALL_SUCCESS:
      return { ...state, categories: action.payload }
    case SELECT:
      return { ...state, category: action.payload }
    default:
      return state;
  }
}
