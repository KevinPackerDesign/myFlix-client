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

function users(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.value;
    default:
      return state;
  }
}

function updateUsername(state = [], action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.value;
    default:
      return state;
  }
}

function updatePassword(state = [], action) {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return action.value;
    default:
      return state;
  }
}

function updateEmail(state = [], action) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return action.value;
    default:
      return state;
  }
}

function updateBirthday(state = [], action) {
  switch (action.type) {
    case UPDATE_BIRTHDAY:
      return action.value;
    default:
      return state;
  }
}

function delUser(state = [], action) {
  switch (action.type) {
    case DELETE_USER:
      return action.value;
    default:
      return state;
  }
}

function addFav(state = [], action) {
  switch (action.type) {
    case ADD_FAV:
      return action.value;
    default:
      return state;
  }
}
function remFav(state = [], action) {
  switch (action.type) {
    case REMOVE_FAV:
      return action.value;
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  users,
  updateUsername,
  updatePassword,
  updateEmail,
  updateBirthday,
  delUser,
  addFav,
  remFav,
});

export default moviesApp;
