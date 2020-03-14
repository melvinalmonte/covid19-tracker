import { useState } from "react";
import axios from "axios";

const ContentHandler = country => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchCases = async country => {
    const url =
      country === "all" || country === ""
        ? "https://covid19.mathdro.id/api/"
        : `https://covid19.mathdro.id/api/countries/${country}`;
    await axios
      .get(url)
      .then(response => {
        setLoading(false);
        setData(response.data);
      })
      .catch(() => {
        setData({
          confirmed: {
            value: 0
          },
          recovered: {
            value: 0
          },
          deaths: {
            value: 0
          }
        });
      });
  };
  return {
    data,
    loading,
    fetchCases
  };
};

export default ContentHandler;
