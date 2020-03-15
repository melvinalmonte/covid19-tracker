import { NavBar } from "../components/navbar";
import { Content } from "../components/content";
import { Dropdown } from "../components/dropdown";
import { useEffect } from "react";
import DropdownHandler from "../components/dropdown/helpers/DropdownHandler";
import { ContentHandler } from "../components/content/helpers";

const index = () => {
  const { country, countryHandler } = DropdownHandler();
  const { data, loading, fetchCases } = ContentHandler();
  useEffect(() => {
    fetchCases(country);
  }, [country]);
  return (
    <div>
      <NavBar />
      <div className="app columns is-vcentered">
        <div className="column is-12">
        <Content loading={loading} data={data} selectCountry={countryHandler} />
        </div>
      </div>
    </div>
  );
};

export default index;
