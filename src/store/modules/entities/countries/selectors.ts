import { createSelector } from "@reduxjs/toolkit";
import { TRootState } from "../../../";
import Etypes, { ICountry } from "./types";
import { isNull } from "../../../../utils/util";

const selectSelf = ({ [Etypes.SLICE_NAME]: Slice }: TRootState) => Slice;

export const getCountriesSelector = createSelector(
  selectSelf,
  ({ countries }): ICountry[] => countries
);

export const getFilteredCountriesSelector = (searchTerm: string) =>
  createSelector(selectSelf, ({ countries }): ICountry[] => {
    if (isNull(searchTerm)) return countries;
    return countries.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  });

export const getLuckyCountry = createSelector(
  selectSelf,
  ({ luckyCountry }): ICountry => luckyCountry
);

export const getGuessValues = createSelector(
  selectSelf,
  ({ guessCapital, guessCountry }) => ({
    guessCapital,
    guessCountry,
  })
);

export const getSeacrhCountry = createSelector(
  selectSelf,
  ({ searchCountry }) => searchCountry
);
