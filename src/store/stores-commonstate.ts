import { ICountryState } from "./modules/entities/countries/types";
import { IMainState } from "./modules/main/types";

export const onInitializeMainStore = (
  initialState: IMainState = { isLoading: false, excepttion: false }
): IMainState => {
  const tempState: IMainState = {
    isLoading: false,
    excepttion: false,
  };
  return { ...initialState, ...tempState };
};
export const onInitializeCountryStore = (
  initialState: ICountryState = { countries: [] }
): ICountryState => {
  const tempState: ICountryState = { countries: [] };
  return { ...initialState, ...tempState };
};
