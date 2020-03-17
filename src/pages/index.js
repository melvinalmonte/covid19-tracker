import "../styles/styles.scss";
import { NavBar } from "../components/navbar";
import { Content } from "../components/content";
import { Dropdown } from "../components/dropdown";
import { useEffect } from "react";
import DropdownHandler from "../components/dropdown/helpers/DropdownHandler";
import { ContentHandler } from "../components/content/helpers";

const index = () => {
  const {
    country,
    countries,
    loadingCountries,
    countryHandler,
    fetchCountries
  } = DropdownHandler();
  const { data, loading, fetchCases } = ContentHandler();

  console.log(countries);
  useEffect(() => {
    fetchCases(country);
    fetchCountries();
  }, [country]);
  return (
    <div className="app">
      <NavBar />
      <Dropdown
        selectCountry={countryHandler}
        loading={loadingCountries}
        countries={countries}
      />
      <Content loading={loading} data={data} />
    </div>
  );
};

export default index;
