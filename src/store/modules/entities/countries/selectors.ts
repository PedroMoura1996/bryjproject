import { createSelector } from "@reduxjs/toolkit";
import { TRootState } from "../../../";
import Etypes, { ICountry } from "./types";

const selectSelf = ({ [Etypes.SLICE_NAME]: Slice }: TRootState) => Slice;

export const getCountriesSelector = createSelector(
  selectSelf,
  ({ countries }): ICountry[] => countries
);

export const getLuckyCountry = createSelector(
  selectSelf,
  ({ luckyCountry }): ICountry => luckyCountry
);
