const path = require("path");
const {
  override,
  addBabelPlugin,
  addWebpackAlias,
  addBundleVisualizer
} = require("customize-cra");

module.exports = {
  webpack: override(
    addBabelPlugin("react-hot-loader/babel"),
    addWebpackAlias({
      "#": path.resolve(__dirname, "../src"),
      "react-dom": "@hot-loader/react-dom"
    }),
    addBundleVisualizer({}, true)
  ),
  jest: config => ({
    ...config,
    moduleNameMapper: {
      "#(.*)$": "<rootDir>/src/$1",
      "^.+\\.scss$": "identity-obj-proxy"
    },
    coverageDirectory: "<rootDir>/.internal/coverage",
    setupFilesAfterEnv: ["<rootDir>/.internal/jest.js"]
  }),
  paths: paths => {
    paths.appBuild = path.resolve(
      __dirname,
      "../",
      process.env.REACT_APP_OUTPUT_PATH || "build"
    );

    return paths;
  }
};
