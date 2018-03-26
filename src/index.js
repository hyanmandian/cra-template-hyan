import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import './globalStyles';

import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './configureStore';
import App from './containers/App';
import NotFound from './containers/NotFound';
import Home from './containers/Home';

const MOUNT_NODE = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
}

render();

registerServiceWorker();
