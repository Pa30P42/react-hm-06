import { connect } from "react-redux";

const { FILTERVALUE } = require("./actions");

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case FILTERVALUE:
      return (state = payload.filter);
    // case GETFILTERVALUE:
    //   // return console.log(this.props);
    //   return this.props.filter
    //     ? this.props.contacts.filter((contact) =>
    //         contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
    //       )
    //     : this.props.contacts;

    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

export default filterReducer;
