const withSass = require("@zeit/next-sass");

module.exports = {
  ...withSass(),
  target: "serverless",
  webpack: config => {
    config.node = {
      fs: "empty"
    };
    return config;
  }
};
