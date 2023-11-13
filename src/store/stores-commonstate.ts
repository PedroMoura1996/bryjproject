import { ICountryState } from "./modules/entities/countries/types";
import { IMainState } from "./modules/main/types";

export const onInitializeMainStore = (
  initialState: IMainState = { isLoading: false, exception: false }
): IMainState => {
  const tempState: IMainState = {
    isLoading: false,
    exception: false,
  };
  return { ...initialState, ...tempState };
};
export const onInitializeCountryStore = (
  initialState: ICountryState = {
    countries: [],
    luckyCountry: {
      name: "",
      capital: [],
      region: "",
      subregion: "",
      flag: "",
      population: 0,
    },
  }
): ICountryState => {
  const tempState: ICountryState = {
    countries: [],
    luckyCountry: {
      name: "",
      capital: [],
      region: "",
      subregion: "",
      flag: "",
      population: 0,
    },
  };
  return { ...initialState, ...tempState };
};
