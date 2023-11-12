export interface ICountry {
  name: string;
  capital: string;
  region: string;
  subregion: string;
  flag: string;
  population: number;
}

export interface ICountryState {
  countries: ICountry[];
}

enum Etypes {
  SLICE_NAME = "countries",
}

export default Etypes;
