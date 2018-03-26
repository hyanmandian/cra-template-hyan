'use strict';

require('babel-polyfill');

if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}
