import React, { Component } from "react";
// import Feedback from "./components/feedbacks/feedbacks";
// import TotalFeedback from "./components/totalFeedback/TotalFeedback";
// import RefactoredFeedback from "./components/RefactoredFeedback/RefactoredFeedback";
// import Notification from "./components/notification/notification";
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
  state = {
    // filter: "",
    alert: false,
  };

  alertSwitch = () => {
    this.setState((prevState) => ({ alert: !prevState.alert }));
  };

  getFilterValue = (e) => {
    this.props.filterValue(e);
    if (this.props.filter) {
      return this.props.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
      );
    } else {
      return this.props.contacts;
    }
    // this.props.getFilterValue();
    // return this.props.filter
    //   ? this.props.contacts.filter((contact) =>
    //       contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
    //     )
    //   : this.props.contacts;
    // you can't mutate you shoul use dispatch
  };

  getFilteredData = () => {
    console.log(this.props);
    // return this.props.filter
    //   ? this.props.contacts.filter((contact) =>
    //       contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
    //     )
    //   : this.props.contacts;
  };

  // addContact = (contact) => {
  //   this.props.addContact(contact);
  // };

  render() {
    const { contacts, filter, alert } = this.state;
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
        <Form
          alertSwitch={this.alertSwitch}
          alert={alert}
          contacts={contacts}
          addContact={this.props.addContact}
        />
        <h2 className={styles.phonebookTitle}>Contacts</h2>
        <Filter
          filter={this.props.filter}
          getFilterValue={this.getFilterValue}
        />
        <Contacts
          deleteContact={this.props.deleteContact}
          contacts={this.props.contacts}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(contactActions.onAddContact(contact)),
    deleteContact: (id) => dispatch(contactActions.onDeleteContact(id)),
    filterValue: (e) => dispatch(contactActions.filterValue(e)),
    getFilterValue: () => dispatch(contactActions.getFilterValue()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
