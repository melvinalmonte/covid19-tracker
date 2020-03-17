import { NavBar } from "../components/navbar";
import { Content } from "../components/content";
import { useEffect } from "react";
import DropdownHandler from "../components/dropdown/helpers/DropdownHandler";
import { ContentHandler } from "../components/content/helpers";

const index = () => {
  const {
    country,
    countryHandler,
    loadingCountries,
    countries,
    fetchCountries
  } = DropdownHandler();
  const { data, loading, err, fetchCases } = ContentHandler();
  useEffect(() => {
    fetchCases(country);
    fetchCountries();
  }, [country]);

  return (
    <div>
      <NavBar />
      <div className="app columns is-vcentered">
        <div className="column is-12">
          <Content
            loading={loading}
            data={data}
            country={country}
            selectCountry={countryHandler}
            err={err}
            loadingCountries={loadingCountries}
            loadedCountries={countries}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
