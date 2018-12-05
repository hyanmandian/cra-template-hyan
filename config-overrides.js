const path = require('path');

module.exports = (config, env) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve('./src'),
  };

  return config;
};
