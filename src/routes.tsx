import React, { lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { PAGE } from "./constants";
import { Loader } from "./components/Loader";

const LazyHome = lazy(() => import("./containers/Home"));
const LazyNotFound = lazy(() => import("./containers/NotFound"));

export function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loader show />}>
        <Switch>
          <Route exact path={PAGE.ROOT()} component={LazyHome} />
          <Route path="*" component={LazyNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
