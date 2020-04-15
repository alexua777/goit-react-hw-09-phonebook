import authActions from "./authActions";

import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("/users/signup", credentials)
    .then((response) => {
      console.log(response.data);
      dispatch(authActions.registerSuccess(response.data));
    })

    .catch((error) => dispatch(authActions.registerError(error)));
};

const token = {
  set(token){
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(){
    axios.defaults.headers.common.Authorization = "";
  }
}

const login = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/users/login", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => authActions.logoutError(error));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.currentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.currentUserSuccess(data)))
    .catch(error => authActions.currentUserError(error));
};

export default { register, login, logout, getCurrentUser };
