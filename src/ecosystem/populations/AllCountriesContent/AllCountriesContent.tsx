import "./allcountriescontent.scss";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import countries from "../../../store/modules/entities/countries";
import { useAppDispatch, useAppSelector } from "../../../store/reduxTyping";
import { CountryListItem } from "../../molecules/CountryListItem";
import withExceptionHandler from "../../wrappers/ExceptionHandler/ExceptionHandler";
import { useTranslation } from "react-i18next";

const AllCountriesContent = () => {
  const { t } = useTranslation();
  const searchCountry = useAppSelector(countries.selectors.getSeacrhCountry);
  const filteredCountries = useAppSelector(
    countries.selectors.getFilteredCountriesSelector(searchCountry)
  );
  const dispatch = useAppDispatch();
  const onChangeName = (event: any) => {
    dispatch(countries.actions.updateSearchCountry(event.target.value));
  };
  return (
    <div
      className="all-countries-container"
      style={{ height: `${window.innerHeight / 2}px` }}
    >
      <TextField
        id="input-filter-id"
        variant="outlined"
        label={t("filterInput")}
        value={searchCountry}
        onChange={onChangeName}
      />
      <Grid
        container
        className="all-countries-list"
        id="countries-container-id"
      >
        {filteredCountries.map((country) => {
          return (
            <Grid
              id={`itemId${country.name}-${country.capital}`}
              item
              xs={12}
              sm={6}
              md={4}
              key={`${country.name}-${country.capital}`}
            >
              <CountryListItem country={country} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withExceptionHandler(AllCountriesContent);
