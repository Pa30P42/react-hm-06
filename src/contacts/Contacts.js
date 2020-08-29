import React, { Component } from "react";
import ContactItem from "./ContactItem";
import styles from "./Contact.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

class Contacts extends Component {
  render() {
    return (
      <>
        <TransitionGroup className={styles.contacts}>
          {this.props.contacts.map((contact) => (
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
  };
};

export default connect(mapStateToProps)(Contacts);
