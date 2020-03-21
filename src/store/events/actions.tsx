import { 
  Event, 
  EventActionTypes, 
  FETCH_EVENTS, 
  CREATE_EVENT, 
  UPDATE_EVENT, 
  DELETE_EVENT, 
  LIKE_EVENT,
  GET_EVENT
} from "./types";

export function fetchEvents(events: Event[]): EventActionTypes {
  return {
    type: FETCH_EVENTS,
    payload: events,
  };
}

export function createEvent(event: Event): EventActionTypes {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
}

export function getEvent(event: Event): EventActionTypes {
  return {
    type: GET_EVENT,
    payload: event,
  };
}

export function updateEvent(event: Event): EventActionTypes {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
}

export function removeEvent(id: number): EventActionTypes {
  return {
    type: DELETE_EVENT,
    payload: id,
  };
}

export function likeEvent(id: number): EventActionTypes {
  return {
    type: LIKE_EVENT,
    payload: id,
  };
}