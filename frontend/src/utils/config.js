// constants
import {
  REACT_APP_DEVELOPMENT_API_URL,
  REACT_APP_PRODUCTION_API_URL,
} from "./constants";

// Backend API
export const API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? REACT_APP_PRODUCTION_API_URL
    : REACT_APP_DEVELOPMENT_API_URL;
