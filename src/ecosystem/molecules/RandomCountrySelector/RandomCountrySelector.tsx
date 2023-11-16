import Button from "@mui/material/Button";
import countries from "../../../store/modules/entities/countries";
import "./randomcountryselector.scss";
import { useAppDispatch, useAppSelector } from "../../../store/reduxTyping";
import { pickRandomFromArray } from "../../../utils/util";
import { useTranslation } from "react-i18next";

const RandomCountrySelector = () => {
  const countriesList = useAppSelector(
    countries.selectors.getCountriesSelector
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const onRandomCountryHandler = () => {
    // clean Guesses
    dispatch(countries.actions.cleanGuesses());
    const defaultValue = {
      capital: "",
      flag: "",
      name: "",
      population: 0,
      region: "",
      subregion: "",
    };
    const luckyCountry = pickRandomFromArray(countriesList);
    dispatch(
      countries.actions.updateLuckyCountry({
        ...(luckyCountry ?? defaultValue),
      })
    );
  };
  return (
    <div className="random-country-container">
      <h2>{t("luckyCountry")}</h2>
      <label>{t("newLuckyCountry")}</label>
      <Button
        variant="contained"
        className="random-country-button"
        onClick={onRandomCountryHandler}
      >
        {t("randomizer")}
      </Button>
    </div>
  );
};

export default RandomCountrySelector;
