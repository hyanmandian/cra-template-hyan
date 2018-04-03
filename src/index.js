import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { ConnectedRouter } from 'react-router-redux';

import { theme } from './globalStyles';

import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './configureStore';
import Routes from './routes';

const MOUNT_NODE = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <HelmetProvider>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </ConnectedRouter>
      </HelmetProvider>
    </Provider>,
    MOUNT_NODE,
  );
}

render();

registerServiceWorker();
