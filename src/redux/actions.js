/* TYPES */
export const ADDCONTACT = "contact/ADD";
export const DELETECONTACT = "contact/DEL";
export const FILTERVALUE = "contact/FV";
export const GETFILTERVALUE = "contact/GETFV";

/* ACTIONS */
const onAddContact = (contact) => {
  return {
    type: ADDCONTACT,
    payload: { contact },
  };
};
const onDeleteContact = (id) => {
  return {
    type: DELETECONTACT,
    payload: { id },
  };
};

const filterValue = (e) => {
  return {
    type: FILTERVALUE,
    payload: { filter: e.target.value },
  };
};

// const getFilterData = () => {
//   return {
//     type: GETFILTERVALUE,
//     // payload: { filter: e.target.value },
//   };
// };

export default { onAddContact, onDeleteContact, filterValue };
