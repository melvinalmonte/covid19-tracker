import { useEffect, useState } from "react";
import axios from "axios";

const DropdownHandler = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState({});
  const [loadingCountries, setLoadingCountries] = useState(true);

  const countryHandler = e => setCountry(e.target.value);

  const fetchCountries = async () => {
    const url = "https://covid19.mathdro.id/api/countries";

    await axios.get(url).then(response => {
      setLoadingCountries(false);
      setCountries(response.data.countries);
    });
  };

  return {
    country,
    countries,
    loadingCountries,
    countryHandler,
    fetchCountries
  };
};

export default DropdownHandler;
