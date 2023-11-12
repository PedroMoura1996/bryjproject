import { onInitializeMainStore } from "./../../stores-commonstate";
import { createSlice } from "@reduxjs/toolkit";
import Etypes from "./types";
import { retrieveCountriesThunk } from "../entities/countries/thunks";

const initialState = { ...onInitializeMainStore() };

export default createSlice({
  initialState,
  name: Etypes.SLICE_NAME,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(retrieveCountriesThunk.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(retrieveCountriesThunk.rejected, (state) => {
        return { ...state, isLoading: false, exception: true };
      })
      .addCase(retrieveCountriesThunk.fulfilled, (state) => {
        return { ...state, isLoading: false, exception: false };
      }),
});
