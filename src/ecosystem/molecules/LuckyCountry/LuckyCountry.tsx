import "./luckycountry.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import countries from "../../../store/modules/entities/countries";
import { useAppDispatch, useAppSelector } from "../../../store/reduxTyping";
import { convertToLowerCase, isNull } from "../../../utils/util";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const LuckyCountry = () => {
  const { darkMode } = useTheme();
  const dispatch = useAppDispatch();
  const luckyCountry = useAppSelector(countries.selectors.getLuckyCountry);
  const { guessCapital, guessCountry } = useAppSelector(
    countries.selectors.getGuessValues
  );

  const onChangeCapital = (event: any) => {
    dispatch(countries.actions.updateGuessCapital(event.target.value));
  };
  const onChangeName = (event: any) => {
    dispatch(countries.actions.updateGuessCountry(event.target.value));
  };

  const revealHandler = () => {
    dispatch(countries.actions.updateGuessCountry(luckyCountry.name));
    dispatch(countries.actions.updateGuessCapital(luckyCountry.capital[0]));
  };

  return (
    <div
      className={`${
        darkMode ? "primary-dark-text" : "primary-light-text"
      } lucky-country-container`}
    >
      <div className="lucky-country-flag">
        {luckyCountry.flag ? (
          <img src={luckyCountry.flag} alt="country flag"></img>
        ) : null}
      </div>
      <h3 className="lucky-country-guess-text grid-item">Try to guess</h3>
      <TextField
        className="lucky-country-guess-name grid-item"
        variant="outlined"
        label="Country's Name"
        value={guessCountry}
        error={
          convertToLowerCase(guessCountry) !==
          convertToLowerCase(luckyCountry.name)
        }
        onChange={onChangeName}
      />
      {/* some countries do not bring a capital */}
      {isNull(luckyCountry.capital) ? null : (
        <TextField
          className="lucky-country-guess-capital grid-item"
          variant="outlined"
          label="Country's Capital"
          value={guessCapital}
          onChange={onChangeCapital}
          error={
            convertToLowerCase(guessCapital) !==
            convertToLowerCase(luckyCountry.capital)
          }
        />
      )}
      <Button
        className="lucky-country-guess-button grid-item"
        variant="contained"
        onClick={revealHandler}
      >
        Reveal Answer
      </Button>
    </div>
  );
};

export default LuckyCountry;
