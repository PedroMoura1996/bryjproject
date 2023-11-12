import { createAsyncThunk } from "@reduxjs/toolkit";
import Etypes from "./types";
import { retrieveCountriesService } from "./services/request";
import { modelCountriesData } from "./services/models";

export const retrieveCountriesThunk = createAsyncThunk(
  Etypes.THUNK_COUNTRIES,
  async (_, { rejectWithValue }) => {
    try {
      const response = await retrieveCountriesService();
      return modelCountriesData(response);
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
