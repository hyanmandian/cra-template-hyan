import React from "react";
import { hydrate, render } from "react-dom";

import "./global.scss";
import App from "./containers/App";
import { Server } from "./api/server";
import { ErrorBoundary } from "./components/ErrorBoundary";
import * as serviceWorker from "./service-worker";

const ROOT = document.getElementById("root") as HTMLElement;

if (process.env.NODE_ENV === "development") {
  Server();
}

(ROOT.hasChildNodes() ? hydrate : render)(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  ROOT
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
