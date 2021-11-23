import {
  SET_FILTER,
  SET_MOVIES,
  SET_USERS,
  UPDATE_USER,
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  UPDATE_BIRTHDAY,
  DELETE_USER,
  ADD_FAV,
  REMOVE_FAV,
} from "../actions/actions";
import { combineReducers } from "redux";

function visibilityFilter(state = "", action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function users(state = null, action) {
  switch (action.type) {
    case SET_USERS:
      return action.value;
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  users,
});

export default moviesApp;
