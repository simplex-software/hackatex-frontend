import { action } from 'typesafe-actions';
import { 
  Category, 
  CategoryActionTypes,
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  REQUEST_FAILURE
} from "./types";

export function getAllRequest(): CategoryActionTypes {
  return action(GET_ALL_REQUEST);
}

export function getAllSuccess(categories: Category[]): CategoryActionTypes {
  return action(GET_ALL_SUCCESS, categories);
}

export function requestFailure(message: string): CategoryActionTypes {
  return action(REQUEST_FAILURE, message);
}
