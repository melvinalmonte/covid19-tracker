import { Dropdown } from "../dropdown";

const Content = props => {
  const { loading, data, selectCountry } = props;
  return (
    <section class="hero is-info is-dark is-medium">
      <div class="hero-body">
        <div class="container">
          <nav class="level">
            <div className="level-item has-text-centered">
              <Dropdown selectCountry={selectCountry} />
            </div>
            {loading ? (
              <div className="level-item has-text-centered">
                Loading data...
              </div>
            ) : (
              Object.entries(data)
                .slice(0, 3)
                .map(([k, v]) => {
                  return (
                    <div class="level-item has-text-centered">
                      <div>
                        <p class="heading">{k}</p>
                        <p class="title">{v.value}</p>
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
