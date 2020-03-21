import { 
  EventsState, 
  EventActionTypes, 
  FETCH_EVENTS, 
  CREATE_EVENT, 
  UPDATE_EVENT, 
  DELETE_EVENT, 
  LIKE_EVENT,
  GET_EVENT
} from "./types";

const initialState: EventsState = {
  events: [],
};

export default function eventsReducer(
  state = initialState,
  action: EventActionTypes,
): EventsState {
  switch (action.type) {
    case FETCH_EVENTS:

    case CREATE_EVENT:

    case GET_EVENT:

    case UPDATE_EVENT:

    case DELETE_EVENT:
      
    case LIKE_EVENT:
      
    default:
      return state;
  }
}
