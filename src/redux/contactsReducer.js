import { combineReducers } from "redux";
import {
  ADDCONTACT,
  DELETECONTACT,
  FILTERVALUE,
  ALERTHANDLER,
} from "./actions";

const items = (
  state = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  { type, payload }
) => {
  switch (type) {
    case ADDCONTACT:
      return [...state, payload.contact];
    case DELETECONTACT:
      return state.filter((contact) => contact.id !== payload.id);

    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case FILTERVALUE:
      return (state = payload.filter);

    default:
      return state;
  }
};
const alert = (state = false, { type, payload }) => {
  switch (type) {
    case ALERTHANDLER:
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
