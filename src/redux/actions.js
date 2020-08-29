/* TYPES */
export const ADDCONTACT = "contact/ADD";
export const DELETECONTACT = "contact/DEL";

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

export default { onAddContact, onDeleteContact };
