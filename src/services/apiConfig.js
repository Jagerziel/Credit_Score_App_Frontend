//Import axios
import axios from "axios";
// Set API Variable
let apiUrl;
// Set URL link
const apiUrls = {
  // Need to change later on real link
  production: "TBC",
  development: "TBC",
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
