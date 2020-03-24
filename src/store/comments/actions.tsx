import { action } from "typesafe-actions";
import { 
  Comment, 
  CommentActionTypes,
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  REQUEST_FAILURE
} from "./types";

export function getAllRequest(): CommentActionTypes {
  return action(GET_ALL_REQUEST);
}

export function getAllSuccess(comments: Comment[]): CommentActionTypes {
  return action(GET_ALL_SUCCESS, comments);
}

export function createRequest(comment: Comment): CommentActionTypes {
  return action(CREATE_REQUEST, comment);
}

export function createSuccess(): CommentActionTypes {
  return action(CREATE_SUCCESS);
}

export function requestFailure(message: string): CommentActionTypes {
  return action(REQUEST_FAILURE, message);
}
