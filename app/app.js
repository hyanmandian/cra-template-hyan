import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import '!file-loader?name=[name].[ext]!./images/favicon.ico'; // eslint-disable-line import/no-webpack-loader-syntax
import App from 'containers/App';
import { theme } from './globalStyles';
import configureStore, { history } from './configureStore';

const openSansObserver = new FontFaceObserver('Open Sans', {});

openSansObserver.load().then(() => {
  document.body.classList.add('-font-loaded');
}, () => {
  document.body.classList.remove('-font-loaded');
});

const initialState = {};

const store = configureStore(initialState);

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
