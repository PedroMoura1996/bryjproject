import { ICountry, ICountryAPI } from "../types";

export const modelCountriesData = ({
  data,
}: {
  data: ICountryAPI[];
}): ICountry[] => {
  return data.map((item) => {
    return {
      name: item.name.common,
      capital: item.capital,
      region: item.region,
      subregion: item.subregion,
      flag: item.flags.svg,
      population: item.population,
    };
  });
};
