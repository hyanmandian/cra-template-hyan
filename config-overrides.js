const path = require('path');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');
const rewireImageminPlugin = require('react-app-rewire-imagemin-plugin');
const rewireSVGR = require('react-app-rewire-svgr');

module.exports = (config, env) => {
  if (process.env.NODE_ENV === 'development') {
    config = rewireReactHotLoader(config, env);
  }

  if (process.env.NODE_ENV === 'production') {
    config = rewireImageminPlugin(config, env, {
      gifsicle: {
        interlaced: true,
      },
      mozjpeg: {
        progressive: true,
      },
      optipng: {
        optimizationLevel: 7,
      },
      pngquant: {
        quality: '65-90',
        speed: 4,
      },
    });
  }

  if (process.env.ANALYZE === 'true') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
    });
  }

  config = rewireStyledComponents(config, env);

  config = rewireSVGR(config, env);

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve('./src'),
  };

  return config;
};
