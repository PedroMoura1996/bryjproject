import { createSelector } from "@reduxjs/toolkit";
import { TRootState } from "../../";
import Etypes from "./types";

const selectSelf = ({ [Etypes.SLICE_NAME]: Slice }: TRootState) => Slice;

export const isLoadingSelector = createSelector(
  selectSelf,
  ({ isLoading }): boolean => isLoading
);
export const hasExceptionSelector = createSelector(
  selectSelf,
  ({ exception }): boolean => exception
);
