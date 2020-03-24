export interface Comment {
  id: number;
  user: string;
  comment: string;
  dateTime: Date
}

export interface CommentsState {
  comments: Comment[];
}

export const GET_ALL_REQUEST = '@@comments/GET_ALL_REQUEST';
export const GET_ALL_SUCCESS = '@@comments/GET_ALL_SUCCESS';
export const CREATE_REQUEST = '@@comments/CREATE_REQUEST';
export const CREATE_SUCCESS = '@@comments/CREATE_SUCCESS';
export const REQUEST_FAILURE = '@@comments/REQUEST_FAILURE';

interface GetAllCommentsRequestAction {
  type: typeof GET_ALL_REQUEST;
}

interface GetAllCommentsSuccessAction {
  type: typeof GET_ALL_SUCCESS;
  payload: Comment[];
}

interface CreateCommentRequestAction {
  type: typeof CREATE_REQUEST;
  payload: Comment;
}

interface CreateCommentSuccessAction {
  type: typeof CREATE_SUCCESS;
}

interface CommentFailureAction {
  type: typeof REQUEST_FAILURE;
  payload: string;
}

export type CommentActionTypes =
  | GetAllCommentsRequestAction
  | GetAllCommentsSuccessAction
  | CreateCommentRequestAction
  | CreateCommentSuccessAction
  | CommentFailureAction;
