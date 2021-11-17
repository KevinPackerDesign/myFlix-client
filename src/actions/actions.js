export const SET_MOVIES = "SET_MOVIES";
export const SET_FILTER = "SET_FLITER";
export const SET_USERS = "SET_USERS";
export const UPDATE_USER = "UPDATE_USERS";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_BIRTHDAY = "UPDATE_BIRTHDAY";
export const DELETE_USER = "DELETE_USER";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export function setUsers(value) {
  return { type: SET_USERS, value };
}

export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function updateUsername(value) {
  return { type: UPDATE_USER, value };
}

export function updatePassword(value) {
  return { type: UPDATE_PASSWORD, value };
}

export function updateEmail(value) {
  return { type: UPDATE_EMAIL, value };
}

export function updateBirthday(value) {
  return { type: UPDATE_BIRTHDAY, value };
}

export function deleteUser(value) {
  return { type: DELETE_USER, value };
}

export function addFav(value) {
  return { type: ADD_FAV, value };
}
export function remFav(value) {
  return { type: REMOVE_FAV, value };
}
