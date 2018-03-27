require('babel-polyfill');

if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global); // eslint-disable-line global-require
}
