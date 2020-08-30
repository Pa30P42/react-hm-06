import { createAction } from "@reduxjs/toolkit";
/* TYPES */
export const ADDCONTACT = "contact/ADD";
export const DELETECONTACT = "contact/DEL";
export const FILTERVALUE = "contact/FV";
export const GETFILTERVALUE = "contact/GETFV";
export const ALERTHANDLER = "contact/ALERT";

/* ACTIONS */

const onAddContact = createAction("contact/ADD");
const onDeleteContact = createAction("contact/DEL");
const filterValue = createAction("contact/FV", (e) => ({
  payload: {
    filter: e.target.value,
  },
}));
const switchAlert = createAction("contact/ALERT");

export default { onAddContact, onDeleteContact, filterValue, switchAlert };
