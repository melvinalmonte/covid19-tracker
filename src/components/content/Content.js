import { Dropdown } from "../dropdown";
import {countries} from 'country-data';

const Content = props => {
  const { loading, data, err, selectCountry, country } = props;
  return (
    <section className="hero is-info is-dark is-medium">
      <div className="hero-body">
        <div className="container">
          <nav className="level">
            <div className="level-item has-text-centered">
              <Dropdown selectCountry={selectCountry} />
            </div>
            {loading ? (
              <div className="level-item has-text-centered">
                Loading data...
              </div>
            ) : err ? (
              <div className="level-item has-text-centered">
                <div>
                  {console.log(country)}
                  <p className="title">"No COVID19 records found for {countries[country].name}"</p>
                </div>
              </div>
            ) : (
              Object.entries(data)
                .slice(0, 3)
                .map(([k, v]) => {
                  return (
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">{k}</p>
                        <p className="title">{v.value}</p>
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
