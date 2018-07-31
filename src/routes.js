import React from 'react';
import { Router } from '@reach/router';
import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: () => 'Loading...',
});

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}
