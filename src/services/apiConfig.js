//Import axios
import axios from "axios";
import dotenv from 'dotenv'

dotenv.config();

const {
  BACKEND_LOCAL_PORT
} = process.env;

// Set API Variable
let apiUrl;
// Set URL link
const apiUrls = {
  // Need to change later on real link
  production: `https://http://localhost:${BACKEND_LOCAL_PORT}/`,
  development: `https://http://localhost:${BACKEND_LOCAL_PORT}/`,
};
// Determine if production or deployment
if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}
// Use Axios
const api = axios.create({
  baseURL: apiUrl,
});
// Export API
export default api;
