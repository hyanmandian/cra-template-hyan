const path = require('path');

module.exports = (config) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ],
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve('./src'),
  };

  return config;
};
