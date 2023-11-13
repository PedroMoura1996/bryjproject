import Button from "@mui/material/Button";
import countries from "../../../store/modules/entities/countries";
import "./randomcountryselector.scss";
import { useAppDispatch, useAppSelector } from "../../../store/reduxTyping";

const RandomCountrySelector = () => {
  const countriesList = useAppSelector(
    countries.selectors.getCountriesSelector
  );
  const dispatch = useAppDispatch();
  const size = countriesList.length;
  const onRandomCountryHandler = () => {
    // clean Guesses
    dispatch(countries.actions.cleanGuesses());
    if (size < 1) return;
    // it will return a number between 0 and size-1
    const randomNumber = Math.floor(Math.random() * size);
    const defaultValue = {
      capital: [""],
      flag: "",
      name: "",
      population: 0,
      region: "",
      subregion: "",
    };
    const luckyCountry = countriesList.find(
      (_, index) => index === randomNumber
    );
    dispatch(
      countries.actions.updateLuckyCountry({
        ...(luckyCountry || defaultValue),
      })
    );
  };
  return (
    <div className="random-country-container">
      <h2>Lucky Country of the DAY</h2>
      <label>Click to get new Lucky Country</label>
      <Button
        variant="contained"
        className="random-country-button"
        onClick={onRandomCountryHandler}
      >
        Randomizer
      </Button>
    </div>
  );
};

export default RandomCountrySelector;
