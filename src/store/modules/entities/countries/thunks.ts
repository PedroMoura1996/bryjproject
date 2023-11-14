import { createAsyncThunk } from "@reduxjs/toolkit";
import Etypes from "./types";
import { retrieveCountriesService } from "./services/request";
import { modelCountriesData } from "./services/models";
import countries from "./";
import { pickRandomFromArray } from "../../../../utils/util";

export const retrieveCountriesThunk = createAsyncThunk(
  Etypes.THUNK_COUNTRIES,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await retrieveCountriesService();
      const modelData = modelCountriesData(response);
      // generate an initial lucky country
      const luckyCountry = pickRandomFromArray(modelData);
      dispatch(
        countries.actions.updateLuckyCountry({
          ...(luckyCountry ?? {
            capital: "",
            flag: "",
            name: "",
            population: 0,
            region: "",
            subregion: "",
          }),
        })
      );
      return modelData;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
