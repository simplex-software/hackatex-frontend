import { 
  EventsState, 
  EventActionTypes,
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  GET_MOST_LIKED_REQUEST,
  GET_MOST_LIKED_SUCCESS,
  GET_REQUEST,
  GET_SUCCESS,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  LIKE_REQUEST,
  LIKE_SUCCESS,
  REQUEST_FAILURE
} from "./types";

const initialState: EventsState = {
  events: [],
  event: undefined
};

export default function eventsReducer(
  state = initialState,
  action: EventActionTypes,
): EventsState {
  switch (action.type) {
    case GET_ALL_SUCCESS:
      return { ...state, events: action.payload }
    case GET_MOST_LIKED_SUCCESS:
      return { ...state, events: action.payload }
    case GET_SUCCESS:
      return { ...state, event: action.payload }
    case SEARCH_SUCCESS:
      return { ...state, events: action.payload }
    case LIKE_SUCCESS:
      return { ...state,  event: action.payload }
    default:
      return state;
  }
}
