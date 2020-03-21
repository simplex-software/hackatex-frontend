import { 
  Comment, 
  CommentActionTypes,
  FETCH_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from "./types";

export function fetchComments(comments: Comment[]): CommentActionTypes {
  return {
    type: FETCH_COMMENTS,
    payload: comments,
  };
}

export function createEvent(comments: Comment): CommentActionTypes {
  return {
    type: CREATE_COMMENT,
    payload: comments,
  };
}

export function updateEvent(comments: Comment): CommentActionTypes {
  return {
    type: UPDATE_COMMENT,
    payload: comments,
  };
}

export function removeEvent(id: number): CommentActionTypes {
  return {
    type: DELETE_COMMENT,
    payload: id,
  };
}
