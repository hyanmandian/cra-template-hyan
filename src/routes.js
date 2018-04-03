import React from 'react';
import { Switch, Route } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import NotFound from './containers/NotFound';

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default Routes;
