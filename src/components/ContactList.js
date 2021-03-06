import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactsSelectors from "../redux/phonebook/contactsSelectors";
import phoneOperations from "../redux/phonebook/contactOperations";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "../styles/ContactList.module.css";
import ListTransition from "../styles/TransitioStyle.module.css";
import "../styles/FormStyle.css";

class ContactList extends Component {
  render() {
    return (
      <>
        <TransitionGroup className={styles.list}>
          {this.props.contacts.map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={250}
              classNames={ListTransition}
            >
              <li key={contact.id} className={styles.item}>
                <p> {contact.name}</p>
                <p>{contact.number} </p>
                <button
                  type="submit"
                  onClick={() => this.props.onRemoveContact(contact.id)}
                >
                  X
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = {
  onRemoveContact: phoneOperations.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
