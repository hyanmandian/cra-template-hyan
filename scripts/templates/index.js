import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './globalStyles';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import App from './containers/App';

const MOUNT_NODE = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <App>Hello world!</App>
    </Provider>,
    MOUNT_NODE,
  );
}

render();

registerServiceWorker();
