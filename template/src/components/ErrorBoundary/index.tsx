import React from "react";
import {
  ErrorBoundaryPropsWithFallback,
  ErrorBoundary as ReactErrorBoundary,
} from "react-error-boundary";
import { Optional } from "utility-types";

import { Fallback } from "#/components/Fallback";

export const ErrorBoundary: React.FC<Optional<
  ErrorBoundaryPropsWithFallback,
  "fallback"
>> = (props) => (
  <ReactErrorBoundary
    fallback={<Fallback data-testid="error-boundary-fallback" />}
    {...props}
  />
);
