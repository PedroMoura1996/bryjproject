export interface ICountryAPI {
  name: { common: string };
  capital: string[];
  region: string;
  subregion: string;
  flags: {
    svg: string;
  };
  population: number;
}

export interface ICountry {
  name: string;
  capital: string;
  region: string;
  subregion: string;
  flag: string;
  population: number;
}

export type TRegion = "1" | "2" | "3" | "4" | "5" | "-1";

export interface ICountryState {
  searchRegion: TRegion;
  luckyCountry: ICountry;
  countries: ICountry[];
  guessCapital: string;
  guessCountry: string;
  searchCountry: string;
}

enum Etypes {
  SLICE_NAME = "countries",
  THUNK_COUNTRIES = "Country/getlistas",
}

export default Etypes;
