import { 
  CommentsState, 
  CommentActionTypes,
  GET_ALL_SUCCESS,
} from "./types";

const initialState: CommentsState = {
  comments: []
};

export default function commentsReducer(
  state = initialState,
  action: CommentActionTypes,
): CommentsState {
  switch (action.type) {
    case GET_ALL_SUCCESS:
      return { ...state, comments: action.payload }
    default:
      return state;
  }
}
