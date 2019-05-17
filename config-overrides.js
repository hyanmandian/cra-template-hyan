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
    ...addBabelPlugins("emotion", "react-hot-loader/babel")
  ),
  jest: config => ({
    ...config,
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.js"],
    moduleNameMapper: { "#(.*)$": "<rootDir>/src/$1" },
    coverageDirectory: "<rootDir>/.coverage"
  })
};
