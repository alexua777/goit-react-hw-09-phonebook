import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');


const removeContactRequest = createAction("contact/removeRequest");
const removeContactSuccess = createAction("contact/removeSuccess");
const removeContactError = createAction("contact/removeError");

const filterPhone = createAction("contact/filter");

const contactCheck = createAction("contact/check");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  contactCheck,
  filterPhone,
};
