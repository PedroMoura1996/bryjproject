import { createAsyncThunk } from "@reduxjs/toolkit";
import Etypes from "./types";
import httpClient from "../../../httpclient";
import EServicesUrl from "../../../../enums/service-urls";

export const retrieveCountriesThunk = createAsyncThunk(
  Etypes.THUNK_COUNTRIES,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.get(EServicesUrl.ALL_COUNTRIES);
      console.log(data);
      return { data };
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
