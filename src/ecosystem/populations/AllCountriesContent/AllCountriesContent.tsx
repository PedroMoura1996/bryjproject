import "./allcountriescontent.scss";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import countries from "../../../store/modules/entities/countries";
import { useAppDispatch, useAppSelector } from "../../../store/reduxTyping";
import { CountryListItem } from "../../molecules/CountryListItem";

const AllCountriesContent = () => {
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
        variant="outlined"
        label="Filter by name"
        value={searchCountry}
        onChange={onChangeName}
      />
      <Grid container className="all-countries-list">
        {filteredCountries.map((country) => {
          return (
            <Grid
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

export default AllCountriesContent;
