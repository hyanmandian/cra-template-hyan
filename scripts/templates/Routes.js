import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';

const Routes = () => (
  <App>
    <Route exact path="/" component={Home} />
  </App>
);

export default Routes;
