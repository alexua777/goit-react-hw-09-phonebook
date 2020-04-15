import { createReducer } from "@reduxjs/toolkit";
import phoneActions from "./phoneActions";

const onAddContact = (state, action) => [...state, action.payload];

const removeContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const contacts = createReducer([], {
  [phoneActions.fetchContactsSuccess]: (state, action) => action.payload,
  [phoneActions.addContactSuccess]: onAddContact,
  [phoneActions.removeContactSuccess]: removeContact,
});

const filter = createReducer("", {
  [phoneActions.filterPhone]: (state, action) => action.payload,
});

const error = createReducer(null, {
  [phoneActions.addContactError]: (state, action) => action.payload,
  [phoneActions.removeContactError]: (state, action) => action.payload,
  [phoneActions.fetchContactsError]: (state, action) => action.payload,
  [phoneActions.fetchContactsSuccess]: () => null,
  [phoneActions.addContactSuccess]: () => null,
  [phoneActions.filterPhone]: () => null,
});

export default { contacts, filter, error };
