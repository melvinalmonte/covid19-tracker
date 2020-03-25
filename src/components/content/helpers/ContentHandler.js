import { useState } from "react";
import axios from "axios";

const ContentHandler = country => {
  const [data, setData] = useState({
    confirmed: null,
    recovered: null,
    deaths: null
  });
  const [updated, setUpdated] = useState("")
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
        const res = response.data;
        console.log(res)
        setLoading(false);
        setErr(false);
        setData({
          confirmed: res.confirmed.value,
          recovered: res.recovered.value,
          deaths: res.deaths.value,
        });
        setUpdated(res.lastUpdate)
      })
      .catch(() => {
        setErr(true);
      });
  };
  return {
    data,
    updated,
    loading,
    err,
    fetchCases
  };
};

export default ContentHandler;
