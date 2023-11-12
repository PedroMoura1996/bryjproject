import EServicesUrl from "../../../../../enums/service-urls";
import httpClient from "../../../../httpclient";

export const retrieveCountriesService = () =>
  httpClient.get(EServicesUrl.ALL_COUNTRIES);
