import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import modules from "./modules";

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

const store = configureStore({
  reducer: combineReducers({ ...modules }),
  devTools: isDev,
});

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export default store;
