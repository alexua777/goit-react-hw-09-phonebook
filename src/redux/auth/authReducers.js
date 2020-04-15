import { createReducer, combineReducers } from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialValueState = {name:null, email:null};

const user = createReducer(initialValueState, {
    [authActions.registerSuccess]:(_, {payload}) => payload.user,
    [authActions.loginSuccess]:(_, {payload}) => payload.user,
    [authActions.currentUserSuccess]:(_, {payload}) => payload,
    [authActions.logoutSuccess]:() => initialValueState,

});

const token = createReducer (null, {
    [authActions.registerSuccess]:(_,{payload}) => payload.token,
    [authActions.loginSuccess]:(_,{payload}) => payload.token,
    [authActions.logoutSuccess]: () => null,
});

const error = createReducer (null, {
    [authActions.registerError]:(_,{payload}) => payload,
    [authActions.loginError]:(_,{payload}) => payload,
    [authActions.currentUserError]:(_,{payload}) => payload,
    [authActions.logoutError]:(_,{payload}) => payload,
})

export default combineReducers ({user,token,error});