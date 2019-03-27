const path = require("path");
const {
  override,
  addWebpackAlias,
  addBabelPlugins,
  addBundleVisualizer
} = require("customize-cra");

module.exports = {
  webpack: override(
    addWebpackAlias({
      "#": path.resolve(__dirname, "./src"),
      "react-dom": "@hot-loader/react-dom"
    }),
    addBundleVisualizer({}, true),
    ...addBabelPlugins(
      "emotion",
      "react-hot-loader/babel",
      "@babel/proposal-optional-chaining"
    )
  ),
  jest: config => {
    config.setupTestFrameworkScriptFile = "<rootDir>/test/jest.setup.js";
    config.moduleNameMapper["#(.*)$"] = "<rootDir>/src/$1";

    return config;
  }
};
