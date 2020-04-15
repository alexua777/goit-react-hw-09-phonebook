import phoneActions from "./phoneActions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThmMjZjYjQxY2JjYjAwMTdmZTFlZmMiLCJpYXQiOjE1ODY0Mzk4ODN9.sIDHu1-CUt9cgFnHT2fz_jG6zmYHLR1GZ0SvgEW8G_o';

const addContact = (name, number) => (dispatch) => {
  dispatch(phoneActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(phoneActions.addContactSuccess(data)))
    .catch((error) => dispatch(phoneActions.addContactError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(phoneActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(phoneActions.removeContactSuccess(id)))
    .catch((error) => dispatch(phoneActions.removeContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(phoneActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(phoneActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(phoneActions.fetchContactsError(error)));
};

export default { addContact, removeContact, fetchContacts };
