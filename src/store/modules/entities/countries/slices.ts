import { onInitializeCountryStore } from "./../../../stores-commonstate";
import { createSlice } from "@reduxjs/toolkit";
import Etypes, { ICountry, TRegion } from "./types";
import { retrieveCountriesThunk } from "./thunks";
import {
  onDefault,
  onException,
  onRequest,
  onSuccessGenericArray,
} from "../../../thunks-lyfecycle";

const initialState = onDefault([Etypes.THUNK_COUNTRIES])({
  ...onInitializeCountryStore(),
});

export default createSlice({
  initialState,
  name: Etypes.SLICE_NAME,
  reducers: {
    updateLuckyCountry: (state, { payload }: { payload: ICountry }) => {
      return {
        ...state,
        luckyCountry: { ...payload },
      };
    },
    updateGuessCapital: (state, { payload }: { payload: string }) => {
      return { ...state, guessCapital: payload };
    },
    updateGuessCountry: (state, { payload }: { payload: string }) => {
      return { ...state, guessCountry: payload };
    },
    cleanGuesses: (state) => {
      return { ...state, guessCountry: "", guessCapital: "" };
    },
    updateSearchCountry: (state, { payload }: { payload: string }) => {
      return { ...state, searchCountry: payload };
    },
    updateSearchRegion: (state, { payload }: { payload: TRegion }) => {
      return { ...state, searchRegion: payload };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(
        retrieveCountriesThunk.pending,
        onRequest(Etypes.THUNK_COUNTRIES)
      )
      .addCase(
        retrieveCountriesThunk.rejected,
        onException(Etypes.THUNK_COUNTRIES)
      )
      .addCase(
        retrieveCountriesThunk.fulfilled,
        onSuccessGenericArray(Etypes.THUNK_COUNTRIES, "countries")
      ),
});
