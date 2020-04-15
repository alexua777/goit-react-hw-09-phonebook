import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts;
const getFilter = (state) => state.filter;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
});

export default { getFilter, getContacts, getVisibleContacts };
