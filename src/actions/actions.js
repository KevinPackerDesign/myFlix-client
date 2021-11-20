export const SET_MOVIES = "SET_MOVIES";
export const SET_FILTER = "SET_FLITER";
export const SET_USERS = "SET_USERS";

export function setUsers(value) {
  return { type: SET_USERS, value };
}

export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}
