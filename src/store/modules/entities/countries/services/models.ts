import { isNull } from "../../../../../utils/util";
import { ICountry, ICountryAPI } from "../types";

export const modelCountriesData = ({
  data,
}: {
  data: ICountryAPI[];
}): ICountry[] => {
  return data.map((item) => {
    let firstCapital = "";
    if (!isNull(item.capital)) {
      const [capital = ""] = [...item.capital];
      firstCapital = capital;
    }
    return {
      name: item.name.common,
      capital: firstCapital,
      region: item.region,
      subregion: item.subregion,
      flag: item.flags.svg,
      population: item.population,
    };
  });
};
