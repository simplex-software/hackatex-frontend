import { action } from 'typesafe-actions';
import { 
  Event, 
  EventActionTypes,
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  GET_MOST_LIKED_REQUEST,
  GET_MOST_LIKED_SUCCESS,
  GET_REQUEST,
  GET_SUCCESS,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  LIKE_REQUEST,
  LIKE_SUCCESS,
  REQUEST_FAILURE
} from "./types";

export function getAllRequest(): EventActionTypes {
  return action(GET_ALL_REQUEST);
}

export function getAllSuccess(events: Event[]): EventActionTypes {
  return action(GET_ALL_SUCCESS, events);
}

export function getMostLikedRequest(): EventActionTypes {
  return action(GET_MOST_LIKED_REQUEST);
}

export function getMostLikedSuccess(events: Event[]): EventActionTypes {
  return action(GET_MOST_LIKED_SUCCESS, events);
}

export function getRequest(): EventActionTypes {
  return action(GET_REQUEST);
}

export function getSuccess(event: Event): EventActionTypes {
  return action(GET_SUCCESS, event);
}

export function searchRequest(searchBy: string): EventActionTypes {
  return action(SEARCH_REQUEST, searchBy);
}

export function searchSuccess(events: Event[]): EventActionTypes {
  return action(SEARCH_SUCCESS, events);
}

export function createRequest(event: Event): EventActionTypes {
  return action(CREATE_REQUEST, event);
}

export function createSuccess(): EventActionTypes {
  return action(CREATE_SUCCESS);
}

export function likeRequest(): EventActionTypes {
  return action(LIKE_REQUEST);
}

export function likeSuccess(event: Event): EventActionTypes {
  return action(LIKE_SUCCESS, event);
}

export function requestFailure(message: string): EventActionTypes {
  return action(REQUEST_FAILURE, message);
}
