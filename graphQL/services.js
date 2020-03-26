const axios = require("axios");

const fetchCases = () =>
  axios
    .get("https://covid19.mathdro.id/api/confirmed")
    .then(response => response.data);
const fetchCountries = () =>
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => response.data);
module.exports = { fetchCases, fetchCountries };
