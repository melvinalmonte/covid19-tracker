const Footer = props => {
  const { lastUpdated } = props;
  const date = new Date(lastUpdated)
  const lastUpdate = date.toString()
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Built with data from <strong>mathdroid </strong>{" "}
          <a href="https://github.com/mathdroid/covid-19-api" target="_blank">
            COVID-19 API
          </a>
        </p>
        <p>
          Data presented as of <code>{lastUpdate}</code>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
