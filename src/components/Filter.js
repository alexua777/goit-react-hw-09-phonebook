import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phoneActions from "../redux/phonebook/phoneActions";
import contactsSelectors from "../redux/phonebook/contactsSelectors";
import "../styles/FilterStyles.css";


const Filter = ({ value, filterChange }) => {
  return (
    <div >
      <h2>Find Contact By Name</h2>
      <input
        type="text"
        value={value}
        onChange={e => filterChange(e.target.value)}
        className="Filter-input  "
      />
    </div>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  filterChange: phoneActions.filterPhone
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
