import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';

const LazyHome = lazy(() => import('./containers/Home'));

function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHome />
    </Suspense>
  )
}

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}
