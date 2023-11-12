import axios from "axios";

const httpClient = axios.create({
  baseURL: String(window._env_.REACT_APP_API_BACKEND),
  headers: {
    "Content-Type": "application/json",
    // Add any other default headers you need
  },
});

export default httpClient;
