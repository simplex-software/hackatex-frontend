import { 
  CommentsState, 
  CommentActionTypes, 
  FETCH_COMMENTS, 
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from "./types";

const initialState: CommentsState = {
  comments: [],
};

export default function commentsReducer(
  state = initialState,
  action: CommentActionTypes,
): CommentsState {
  switch (action.type) {
    case FETCH_COMMENTS:
      
    case CREATE_COMMENT:

    case UPDATE_COMMENT:

    case DELETE_COMMENT:

    default:
      return state;
  }
}
