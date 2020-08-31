import React, { Component } from "react";
import Form from "./contactsForm/Form";
import Contacts from "./contacts/Contacts";
import Filter from "./filter/Filter";
import styles from "./App.module.css";
import stylesAlert from "./alert/Alert.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Alert from "./alert/Alert";
import { connect } from "react-redux";
import contactActions from "./redux/actions";

class App extends Component {
  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      JSON.parse(persistedContacts).map((contact) =>
        this.props.addContact(contact)
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts.items !== this.props.contacts.items) {
      localStorage.setItem(
        "contacts",
        JSON.stringify(this.props.contacts.items)
      );
    }
  }

  alertSwitch = () => {
    this.props.switchAlert();
  };

  render() {
    const { alert } = this.props.contacts;
    return (
      <>
        <TransitionGroup className={styles.titleWrapper}>
          <CSSTransition
            classNames={styles}
            in={true}
            appear={true}
            timeout={1500}
            unmountOnExit
          >
            <h2 className={styles.phonebookTitle}> Phonebook</h2>
          </CSSTransition>
          {alert && (
            <CSSTransition
              classNames={stylesAlert}
              in={true}
              appear={true}
              timeout={1500}
              unmountOnExit
            >
              <Alert alertSwitch={this.alertSwitch} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <Form addContact={this.props.addContact} />
        <h2 className={styles.phonebookTitle}>Contacts</h2>
        <Filter />
        <Contacts contacts={this.props.contacts} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    alert: state.alert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(contactActions.onAddContact(contact)),
    switchAlert: () => dispatch(contactActions.switchAlert()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
