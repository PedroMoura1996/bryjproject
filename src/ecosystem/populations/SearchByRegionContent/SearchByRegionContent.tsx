import "./searchbyregion.scss";
import { Grid } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import countries from "../../../store/modules/entities/countries";
import { useAppDispatch, useAppSelector } from "../../../store/reduxTyping";
import { CountryListItem } from "../../molecules/CountryListItem";
import { regions } from "../../../assets/contants";
import { TRegion } from "../../../store/modules/entities/countries/types";
import withExceptionHandler from "../../wrappers/ExceptionHandler/ExceptionHandler";

const SearchByRegionContent = () => {
  const searchRegion = useAppSelector(countries.selectors.getSeacrhRegion);
  const filteredCountries = useAppSelector(
    countries.selectors.getFilteredCountriesByRegionSelector(searchRegion)
  );
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    dispatch(
      countries.actions.updateSearchRegion(event.target.value as TRegion)
    );
  };
  return (
    <div
      className="search-region-container"
      style={{ height: `${window.innerHeight / 2}px` }}
    >
      <Select
        labelId="Pick your Region"
        id="dropdown-filter-id"
        value={searchRegion}
        label="Age"
        onChange={handleChange}
      >
        {regions.map((region) => {
          return (
            <MenuItem key={region.value} id={region.value} value={region.id}>
              {region.value}
            </MenuItem>
          );
        })}
      </Select>
      <Grid container className="search-region-list" id="countries-byregion-id">
        {filteredCountries.map((country) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={`${country.name}-${country.capital}`}
              id={`region${country.name}-${country.capital}`}
            >
              <CountryListItem country={country} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withExceptionHandler(SearchByRegionContent);
