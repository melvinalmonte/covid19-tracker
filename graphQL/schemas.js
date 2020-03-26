const { gql } = require("apollo-server");

const typeDefs = gql(
  `
    type Cases
    {
        countryRegion: String,
        iso2: String,
        iso3: String,
        confirmed: Int,
        active: Int,
        recovered: Int,
        deaths: Int,
        lastUpdate: Int
    }

    type Countries
    {
        name: String,
        alpha2Code: String,
        alpha3Code: String
    }

    type Query
    {   
        cases: [Cases],
        countries: [Countries]
    }

    `
);

module.exports = { typeDefs };
