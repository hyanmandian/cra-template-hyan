import React from "react";
import { hot } from "react-hot-loader/root";

import { Routes } from "#/routes";
import { ErrorBoundary } from "#/components/ErrorBoundary";

export function App() {
  return (
    <ErrorBoundary>
      <main>
        <Routes />
      </main>
    </ErrorBoundary>
  );
}

export default hot(App);
