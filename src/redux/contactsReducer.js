import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const addTask = (state, action) => {
  return [...state, action.payload];
};
const removeTast = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};
const filterValue = (state, action) => {
  return (state = action.payload.filter);
};
const alertSwitch = (state, action) => {
  return (state = !state);
};
const items = createReducer([], {
  [actions.onAddContact]: addTask,
  [actions.onDeleteContact]: removeTast,
});

const filter = createReducer("", {
  [actions.filterValue]: filterValue,
});

const alert = createReducer(false, {
  [actions.switchAlert]: alertSwitch,
});

export default combineReducers({ items, filter, alert });
