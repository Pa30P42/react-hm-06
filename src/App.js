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
    // contacts: [
    //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    // ],

    filter: "",
    alert: false,
  };

  alertSwitch = () => {
    this.setState((prevState) => ({ alert: !prevState.alert }));
  };

  deleteContact = (id) => {
    this.props.deleteContact("id-1");
    // const { contacts } = this.state;
    // this.setState({
    //   contacts: contacts.filter((contact) => contact.id !== id),
    // });
  };

  getFilterValue = (e) => {
    this.setState({ filter: e.target.value });
  };

  // getFilteredData = () => {
  //   return this.state.filter
  //     ? this.state.contacts.filter((contact) =>
  //         contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
  //       )
  //     : this.state.contacts;
  // };

  addContact = (contact) => {
    // console.log(this.props);
    this.props.addContact(contact);
    // this.props.addContact();
    // console.log(contact);
    // contactActions.onAddContact(contact);
  };
  // addContact = (contact) => {
  //   this.setState({ contacts: [...this.state.contacts, contact] });
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
        <Filter filter={filter} getFilterValue={this.getFilterValue} />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(contactActions.onAddContact(contact)),
    deleteContact: (id) => dispatch(contactActions.onDeleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
