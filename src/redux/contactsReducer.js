import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const addTask = (state, action) => {
  return [...state, action.payload];
};
const removeTast = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
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

// const items = (
//   state = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   { type, payload }
// ) => {
//   switch (type) {
//     case actions.onAddContact.type:
//       return [...state, payload];
//     case actions.onDeleteContact.type:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actions.filterValue.type:
      return (state = payload.filter);

    default:
      return state;
  }
};
const alert = (state = false, { type, payload }) => {
  switch (type) {
    case actions.switchAlert.type:
      return (state = !state);

    default:
      return state;
  }
};

export default combineReducers({ items, filter, alert });

// const { ADDCONTACT, DELETECONTACT, FILTERVALUE } = require("./actions");

// const contactsReducer = (
//   state = {
//     items: [
// { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
// { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
// { id: "id-3", name: "Eden Clements", number: "645-17-79" },
// { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   },
//   { type, payload }
// ) => {
//   switch (type) {
//     case ADDCONTACT:
//       return [...state.items, payload.contact];

//     case DELETECONTACT:
//       return state.filter((contact) => contact.id !== payload.id);
//     case FILTERVALUE:
//       return (state.filter = payload.filter);

//     default:
//       return state;
//   }
// };

// export default contactsReducer;
