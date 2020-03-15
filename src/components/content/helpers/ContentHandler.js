import { useState } from "react";
import axios from "axios";

const ContentHandler = country => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  const fetchCases = async country => {
    const url =
      country === "all" || country === ""
        ? "https://covid19.mathdro.id/api/"
        : `https://covid19.mathdro.id/api/countries/${country}`;
    await axios
      .get(url)
      .then(response => {
        setLoading(false);
        setErr(false)
        setData(response.data);
      })
      .catch(() => {
        setErr(true);
      });
  };
  return {
    data,
    loading,
    err,
    fetchCases
  };
};

export default ContentHandler;
