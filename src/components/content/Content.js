import { Dropdown } from "../dropdown";
import { countries } from "country-data";

const Content = (props) => {
  const {
    loading,
    data,
    err,
    selectCountry,
    country,
    loadingCountries,
    loadedCountries,
  } = props;
  return (
    <section className="hero is-info is-dark is-medium">
      <div className="hero-body">
        <div className="container">
          <nav className="level">
            <div className="level-item has-text-centered">
              <Dropdown
                selectCountry={selectCountry}
                loadingCountries={loadingCountries}
                countries={loadedCountries}
              />
            </div>
            {loading ? (
              <div className="level-item has-text-centered">
                Loading data...
              </div>
            ) : err ? (
              <div className="level-item has-text-centered">
                <div>
                  <p className="title has-text-warning">
                    "No COVID19 records found in {countries[country].name}."
                  </p>
                </div>
              </div>
            ) : (
              Object.entries(data).map(([location, cases]) => {
                return (
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">{location}</p>
                      <p className="title">{cases.toLocaleString()}</p>
                    </div>
                  </div>
                );
              })
            )}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Content;
