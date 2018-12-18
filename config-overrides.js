const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = (config, env) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve('./src'),
  };

  injectBabelPlugin('emotion/babel', config);

  return config;
};
