const Dropdown = props => {
  const { selectCountry, loading, countries } = props;

  return (
    <div className="container">
      <div className="columns is-centered drop-col">
        <div className="column is-3">
          <div className="select">
            <select id="countries" name="countries" onChange={selectCountry}>
              <option value="all">All Countries</option>
              {loading ? (
                <option value="loading">Loading Countries</option>
              ) : (
                Object.entries(countries).map(([k, v]) => {
                  return <option value={v}>{k}</option>;
                })
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
