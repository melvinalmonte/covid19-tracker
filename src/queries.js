import gql from "graphql-tag";

export const GET_COUNTRIES = gql`
  {
    cases {
      iso2
      countryRegion
    }
  }
`;

export const GET_CASES = gql`
  {
    cases {
      countryRegion
      confirmed
      recovered
      deaths
    }
  }
`;
