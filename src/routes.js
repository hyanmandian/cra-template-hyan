import React, { Suspense, lazy } from "react";
import { Router } from "@reach/router";

const LazyHome = lazy(() => import("./containers/Home"));

function Home(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHome {...props} />
    </Suspense>
  );
}

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}
