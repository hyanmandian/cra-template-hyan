import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';
import Routes from './routes';
import createStore from './createStore';
import registerServiceWorker from './registerServiceWorker';
import './globalStyles';

export const { store, dispatch } = createStore();

const MOUNT_NODE = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App>
          <Routes />
        </App>
      </AppContainer>
    </Provider>
  , MOUNT_NODE);
}

registerServiceWorker();

render();

if (module.hot) {
  module.hot.accept('./routes', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}
