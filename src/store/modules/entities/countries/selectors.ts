import { createSelector } from "@reduxjs/toolkit";
import { TRootState } from "../../../";
import Etypes, { ICountry } from "./types";
import { isNull } from "../../../../utils/util";
import { regions } from "../../../../assets/contants";
import { hasExceptionThunk, isLoadingThunk } from "../../../thunks-lyfecycle";

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

export const getFilteredCountriesByRegionSelector = (searchRegion: string) =>
  createSelector(selectSelf, ({ countries }): ICountry[] => {
    if (isNull(searchRegion)) return countries;
    if (searchRegion === "-1") return countries;
    const [regionSelected] = regions.filter(
      (region) => region.id === searchRegion
    );
    return countries.filter((item) => {
      return (
        item.region.toLocaleLowerCase() ===
        regionSelected.value.toLocaleLowerCase()
      );
    });
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
export const getSeacrhRegion = createSelector(
  selectSelf,
  ({ searchRegion }) => searchRegion
);

export const isLoadingCountries = createSelector(
  selectSelf,
  isLoadingThunk(Etypes.THUNK_COUNTRIES)
);
export const hasExceptionCountries = createSelector(
  selectSelf,
  hasExceptionThunk(Etypes.THUNK_COUNTRIES)
);
