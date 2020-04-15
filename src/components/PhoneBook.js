import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/FormStyle.css";
import contactOperations from "../redux/phonebook/contactOperations";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../LogoAppear.css";
import AlertTransisiton from "../styles/AlertTransisiton.module.css";
import FilterTransition from "../styles/FilterTransition.module.css"
import contactsSelectors from "../redux/phonebook/contactsSelectors";
import Alert from "./Alert";
import Filter from "./Filter";

class PhoneBook extends Component {
  state = {
    name: "",
    number: "",
    isExist: false,
  };

  checkIfContactExist = (name) =>
    this.props.contacts.some((contact) => contact.name === name);

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.checkIfContactExist(this.state.name)) {
      this.setState({ isExist: true });
      return;
    }
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { isExist, showFilter } = this.state;

    return (
      <>
        <div className="Container">
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="Logo"
          >
            <h1 className="ContactList-title">Phonebook</h1>
          </CSSTransition>
          <CSSTransition
            in={isExist}
            timeout={1000}
            classNames={AlertTransisiton}
            onEntered={() => this.setState({ isExist: false })}
            unmountOnExit
          >
            <Alert />
          </CSSTransition>
          <form onSubmit={this.handleSubmit} className="ContactList-form">
            <label className="ContactList-label">
              Name <br />
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                className="ContactList-input"
              />
            </label>

            <label>
              Phone Number
              <br />
              <input
                type="number"
                value={this.state.number}
                onChange={this.handleChange}
                name="number"
                className="ContactList-input"
              />
            </label>
            <button type="submit" className="ContactList-button">
              {" "}
              Add contact
            </button>
          </form>
          <CSSTransition
            in={this.props.contacts.length > 0}
            timeout={1000}
            classNames={FilterTransition}
            onEntered={() => this.setState({ isExist: false })}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});
const mapDispatchToProps = {
  onAddContact: contactOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
