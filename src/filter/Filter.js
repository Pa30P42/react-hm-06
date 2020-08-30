import React from "react";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import actions from "../redux/actions";

const Filter = ({ getFilterValue, filter }) => {
  return (
    <>
      <label className={styles.formWrapper}>
        <p className={styles.findContactTitle}>Find Contact by name</p>
        <input
          className={styles.formInput}
          value={filter}
          type="text"
          name="filter"
          onChange={(e) => getFilterValue(e)}
        />
      </label>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  getFilterValue: actions.filterValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
