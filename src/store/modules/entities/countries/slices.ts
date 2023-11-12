import { onInitializeCountryStore } from "./../../../stores-commonstate";
import { createSlice } from "@reduxjs/toolkit";
import Etypes from "./types";
import { retrieveCountriesThunk } from "./thunks";

const initialState = { ...onInitializeCountryStore() };

export default createSlice({
  initialState,
  name: Etypes.SLICE_NAME,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(retrieveCountriesThunk.fulfilled, (state, { payload }) => {
      return {
        ...state,
        countries: { ...state.countries, ...payload },
      };
    }),
});
