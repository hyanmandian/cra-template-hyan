const path = require('path');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireSVGR = require('react-app-rewire-svgr');

module.exports = config => {
  config = rewireStyledComponents(config);

  config = rewireSVGR(config);

  config.module.rules.push({
    test: /\.(png|jpe?g|gif)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'static/media/[name].[hash:8].[ext]',
    },
  });

  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve('./src'),
  };

  return config;
};
