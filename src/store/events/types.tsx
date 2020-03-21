export interface Event {
  id: number;
  name: string;
  description: string;
  image?: string;
  dateTime: Date;
  duration?: number;
  link?: string;
  category: number;
  audience: string;
}

export interface EventsState {
  events: Event[];
}

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const GET_EVENT = 'GET_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const LIKE_EVENT = 'LIKE_EVENT';

interface FetchEventsAction {
  type: typeof FETCH_EVENTS;
  payload: Event[];
}

interface GetEventsAction {
  type: typeof GET_EVENT;
  payload: Event;
}

interface CreateEventAction {
  type: typeof CREATE_EVENT;
  payload: Event;
}

interface UpdateEventAction {
  type: typeof UPDATE_EVENT;
  payload: Event;
}

interface DeleteEventAction {
  type: typeof DELETE_EVENT;
  payload: number;
}

interface LikeEventAction {
  type: typeof LIKE_EVENT;
  payload: number;
}

export type EventActionTypes =
  | FetchEventsAction
  | GetEventsAction
  | CreateEventAction
  | UpdateEventAction
  | DeleteEventAction
  | LikeEventAction;
