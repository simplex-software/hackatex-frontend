export interface Comment {
  id: number;
  user: string;
  comment: string;
  dateTime: Date
}

export interface CommentsState {
  comments: Comment[];
}

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

interface FetchCommentsAction {
  type: typeof FETCH_COMMENTS;
  payload: Comment[];
}

interface CreateCommentAction {
  type: typeof CREATE_COMMENT;
  payload: Comment;
}

interface UpdateCommentAction {
  type: typeof UPDATE_COMMENT;
  payload: Comment;
}

interface DeleteCommentAction {
  type: typeof DELETE_COMMENT;
  payload: number;
}

export type CommentActionTypes =
  | FetchCommentsAction
  | CreateCommentAction
  | UpdateCommentAction
  | DeleteCommentAction;
