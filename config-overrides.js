const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = (config, env) => {
  config = rewireReactHotLoader(config, env);
  return config;
};
