import React from "react";
import styles from "./ContactItem.module.css";
import { connect } from "react-redux";
import actions from "../redux/actions";

const ContactItem = ({ contact, deleteContact, id }) => {
  return (
    <li className={styles.contactItem}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(actions.onDeleteContact(ownProps.id)),
});
const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);
  return {
    ...item,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
