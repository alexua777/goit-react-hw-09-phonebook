// import { createStore} from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./phonebook/phoneReducer";
import authReducer from "./auth/authReducers";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'


const defaultMiddleware = getDefaultMiddleware();

const persistConfig = {
  key: 'auth',
  storage,
  whitelist:['token'],
}

export const store = configureStore({
  reducer: {
    contacts: rootReducer.contacts,
    filter: rootReducer.filter,
    error: rootReducer.error,
    auth: persistReducer(persistConfig,authReducer)
  },
  middleware: [...defaultMiddleware],
});

export const persistor = persistStore(store);
