const path = require("path");
const {
  override,
  useBabelRc,
  addWebpackAlias,
  addBundleVisualizer
} = require("customize-cra");

module.exports = {
  webpack: override(
    useBabelRc(),
    addWebpackAlias({
      "#": path.resolve(__dirname, "../src"),
      "react-dom": "@hot-loader/react-dom"
    }),
    addBundleVisualizer({}, true)
  ),
  paths: paths => {
    paths.appBuild = path.resolve(
      __dirname,
      "../",
      process.env.REACT_APP_OUTPUT_PATH || "build"
    );

    return paths;
  }
};
