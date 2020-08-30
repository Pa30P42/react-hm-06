import React, { Component } from "react";
import ContactItem from "./ContactItem";
import styles from "./Contact.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

class Contacts extends Component {
  getFilteredContacs = () => {
    return this.props.filter
      ? this.props.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
        )
      : this.props.contacts;
  };
  render() {
    return (
      <>
        <TransitionGroup className={styles.contacts}>
          {this.getFilteredContacs().map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={1000}
              classNames={styles}
              unmountOnExit
            >
              <ContactItem
                deleteContact={this.props.deleteContact}
                key={contact.id}
                contact={contact}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(Contacts);
