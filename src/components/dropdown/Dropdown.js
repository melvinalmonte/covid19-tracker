const Dropdown = props => {
  const { selectCountry, loadingCountries, countries } = props;

  return (
    <div className="select">
      <select id="countries" name="countries" onChange={selectCountry}>
        <option value="all">All Countries</option>
        {loadingCountries ? (
          <option value="loading">Loading Countries</option>
        ) : (
          Object.entries(countries).map(([k, v]) => {
            return <option value={v.iso2}>{v.name}</option>;
          })
        )}
      </select>
    </div>
  );
};

export default Dropdown;
