import React, { Component } from "react";
import { connect } from "react-redux";
import PhoneBook from "../components/PhoneBook";
import ContactList from "../components/ContactList";
import { authSelectors } from "../redux/auth";
import contactOperations from "../redux/phonebook/contactOperations";

class ContactView extends Component {
  componentDidMount() {
    if (!this.props.isAuthorized) {
      this.props.history.replace("/login");
      return;
    }
    this.props.onFetchContacts();
  }

  componentDidUpdate (){
    if (!this.props.isAuthorized) {
      this.props.history.replace("/login");
      return;
    }
  }

  render() {
    return (
      <>
        <PhoneBook></PhoneBook>
        <ContactList></ContactList>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: authSelectors.isAuthorized(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactView);
