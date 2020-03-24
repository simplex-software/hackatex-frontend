export interface Event {
  id: number;
  name: string;
  description: string;
  image?: string;
  start_date: Date;
  duration?: number;
  link?: string;
  category: number;
  rating: number;
}

export interface EventsState {
  events: Event[];
  event: Event;
}

export const GET_ALL_REQUEST = '@@events/GET_ALL_REQUEST';
export const GET_ALL_SUCCESS = '@@events/GET_ALL_SUCCESS';
export const GET_MOST_LIKED_REQUEST = '@@events/GET_MOST_LIKED_REQUEST';
export const GET_MOST_LIKED_SUCCESS = '@@events/GET_MOST_LIKED_SUCCESS';
export const GET_REQUEST = '@@events/GET_REQUEST';
export const GET_SUCCESS = '@@events/GET_SUCCESS';
export const SEARCH_REQUEST = '@@events/SEARCH_REQUEST';
export const SEARCH_SUCCESS = '@@events/SEARCH_SUCCESS';
export const CREATE_REQUEST = '@@events/CREATE_REQUEST';
export const CREATE_SUCCESS = '@@events/CREATE_SUCCESS';
export const LIKE_REQUEST = '@@events/LIKE_REQUEST';
export const LIKE_SUCCESS = '@@events/LIKE_SUCCESS';
export const REQUEST_FAILURE = '@@events/REQUEST_FAILURE';

interface GetAllEventsRequestAction {
  type: typeof GET_ALL_REQUEST;
}

interface GetAllEventsSuccessAction {
  type: typeof GET_ALL_SUCCESS;
  payload: Event[];
}

interface GetMostLikedEventsRequestAction {
  type: typeof GET_MOST_LIKED_REQUEST;
}

interface GetMostLikedEventsSuccessAction {
  type: typeof GET_MOST_LIKED_SUCCESS;
  payload: Event[];
}

interface GetEventRequestAction {
  type: typeof GET_REQUEST;
}

interface GetEventSuccessAction {
  type: typeof GET_SUCCESS;
  payload: Event;
}

interface SearchEventsRequestAction {
  type: typeof SEARCH_REQUEST;
  payload: string
}

interface SearchEventsSuccessAction {
  type: typeof SEARCH_SUCCESS;
  payload: Event[];
}

interface CreateEventRequestAction {
  type: typeof CREATE_REQUEST;
  payload: Event;
}

interface CreateEventSuccessAction {
  type: typeof CREATE_SUCCESS;
}

interface LikeEventRequestAction {
  type: typeof LIKE_REQUEST;
}

interface LikeEventSuccessAction {
  type: typeof LIKE_SUCCESS;
  payload: Event;
}

interface EventFailureAction {
  type: typeof REQUEST_FAILURE;
  payload: string;
}

export type EventActionTypes =
  | GetAllEventsRequestAction
  | GetAllEventsSuccessAction
  | GetMostLikedEventsRequestAction
  | GetMostLikedEventsSuccessAction
  | GetEventRequestAction
  | GetEventSuccessAction
  | SearchEventsRequestAction
  | SearchEventsSuccessAction
  | CreateEventRequestAction
  | CreateEventSuccessAction
  | LikeEventRequestAction
  | LikeEventSuccessAction
  | EventFailureAction;
