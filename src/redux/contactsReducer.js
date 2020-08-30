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
const items = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [actions.onAddContact]: addTask,
    [actions.onDeleteContact]: removeTast,
  }
);

const filter = createReducer("", {
  [actions.filterValue]: filterValue,
});

const alert = createReducer(false, {
  [actions.switchAlert]: alertSwitch,
});

export default combineReducers({ items, filter, alert });
