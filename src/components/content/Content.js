import { Dropdown } from "../dropdown";

const Content = props => {
  const { loading, data } = props;
  return (
    <div className="container">
      <div className="columns is-centered cases-content">
        {loading ? (
          <h1 className="title">Loading Data</h1>
        ) : (
          <div className="column is-3 has-text-centered">
            {Object.entries(data)
              .slice(0, 3)
              .map(([k, v]) => {
                switch (k) {
                  case "confirmed":
                    return (
                      <div className="notification is-warning">
                        {k} : {v.value}
                      </div>
                    );
                  case "recovered":
                    return (
                      <div className="notification is-success">
                        {k} : {v.value}
                      </div>
                    );
                  case "deaths":
                    return (
                      <div className="notification is-danger">
                        {k} : {v.value}
                      </div>
                    );
                  default:
                    return <div>Action not supported</div>;
                }
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
