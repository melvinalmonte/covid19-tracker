const { fetchCases, fetchCountries } = require("./services");
const axios = require("axios");

const resolvers = {
  Query: {
    cases: () => fetchCases(),
    countries: () => fetchCountries()
  }
};

module.exports = { resolvers };
