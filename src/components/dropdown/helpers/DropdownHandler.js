import { useState } from "react";

const DropdownHandler = () => {
  const [country, setCountry] = useState("");

  const countryHandler = e => setCountry(e.target.value);

  return {
    country,
    countryHandler
  };
};

export default DropdownHandler;
