import { 
  CategoriesState, 
  CategoryActionTypes,
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  REQUEST_ERROR
} from "./types";

const initialState: CategoriesState = {
  loading: false,
  categories: [],
  errors: undefined
};

export default function categoriesReducer(
  state = initialState,
  action: CategoryActionTypes,
): CategoriesState {
  switch (action.type) {
    case GET_ALL_REQUEST:
      return { ...state, loading: true }
    case GET_ALL_SUCCESS:
      return { ...state, loading: false, categories: action.payload }
    case REQUEST_ERROR:
      return { ...state, loading: false, errors: action.payload }
    default:
      return state;
  }
}
