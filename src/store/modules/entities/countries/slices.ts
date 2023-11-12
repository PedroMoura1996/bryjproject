import { onInitializeCountryStore } from "./../../../stores-commonstate";
import { createSlice } from "@reduxjs/toolkit";
import Etypes from "./types";

const initialState = { ...onInitializeCountryStore() };

export default createSlice({
  initialState,
  name: Etypes.SLICE_NAME,
  reducers: {},
});
