import { onInitializeMainStore } from "./../../stores-commonstate";
import { createSlice } from "@reduxjs/toolkit";
import Etypes from "./types";

const initialState = { ...onInitializeMainStore() };

export default createSlice({
  initialState,
  name: Etypes.SLICE_NAME,
  reducers: {},
});
