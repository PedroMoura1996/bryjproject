import { createSelector } from "@reduxjs/toolkit";
import { TRootState } from "../../";
import Etypes from "./types";
import {
  hasExceptionCountries,
  isLoadingCountries,
} from "../entities/countries/selectors";

const selectSelf = ({ [Etypes.SLICE_NAME]: Slice }: TRootState) => Slice;

export const isLoadingSelector = createSelector(
  selectSelf,
  isLoadingCountries,
  ({ isLoading }, loadingCountries): boolean => isLoading || loadingCountries
);
export const hasExceptionSelector = createSelector(
  selectSelf,
  hasExceptionCountries,
  ({ exception }, exceptionCountries): boolean =>
    exception || exceptionCountries
);
